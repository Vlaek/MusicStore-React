import React, {useState, useEffect, useContext} from "react"
import { OrdersContext } from '../context/context';
import Categories from "../components/Categories";
import Items from "../components/Items";
import Input from "../components/UI/Input";
import CarouselBox from "../components/CarouselBox";
import DataService from '../API/DataService';
import { useItems } from '../hooks/useItems';
import { useFetching } from '../hooks/useFetching';
import Loader from "../components/UI/Loader/Loader";

const Index = () => {
    const [items, setItems] = useState([]);
    const {likes, orders, addToOrder, likeItem, onShowModal} = useContext(OrdersContext);
    
    const [filter, setFilter] = useState({
        genre: "",
        sort: "new",
        query: ""
    });

    const [fetchItems, isItemsLoading, itemsError] = useFetching(async () => {
        const response = await DataService.getAll()
        setItems(response.data)
    })

    useEffect(() => {
        fetchItems(1, -1)
        window.scrollTo(0, 0);
    }, [])

    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query, filter.genre);

    const genres = [
        {
            key: '',
            name: 'Все'
        },
        {
            key: 'alternative rock',
            name: 'Alternative rock'
        },
        {
            key: 'indie rock',
            name: 'Indie rock'
        },
        {
            key: 'hard rock',
            name: 'Hard rock'
        },
        {
            key: 'industrial metal',
            name: 'Industrial metal'
        },
        {
            key: 'alternative rap',
            name: 'Alternative rap'
        },
        {
            key: 'hip hop',
            name: 'Hip Hop'
        },
    ];

    const sorts = [
        {
            key: 'new',
            name: 'Сначала новые'
        },
        {
            key: 'old',
            name: 'Сначала старые'
        },
    ];

    const handleQueryChange = (event) => {
        if (!event.target.value)
            event.target.value = ""
        const newFilter = { ...filter, query: event.target.value };
        setFilter(newFilter);
    }

    const handleGenreChange = (genre) => {
        const newFilter = { ...filter, genre: genre };
        setFilter(newFilter);
    }

    const handleSortChange = (sort) => {
        const newSort = { ...filter, sort: sort };
        setFilter(newSort);
    }

    return (
        <div>
            <CarouselBox/>
            <div className="container">
                <Categories
                    categories={sorts}
                    setCategory={handleSortChange}
                />
                <Categories
                    categories={genres}
                    setCategory={handleGenreChange}
                />
                <Input 
                    placeholder={"Найти"}
                    setFilter={handleQueryChange}
                />
                {itemsError 
                    ?
                    <div className='item-list_empty'>
                        <p className="item-list_empty__title">Произошла ошибка:</p>
                        <p className="item-list_empty__error">{itemsError}</p>
                    </div>
                    :
                    <div>
                        <Items 
                            items={sortedAndSearchedItems} 
                            orders={orders}
                            likes={likes}
                            onAdd={addToOrder} 
                            onLike={likeItem}
                            onShowModal={onShowModal}
                        />
                        {isItemsLoading &&
                            <div className='item-list_empty'>
                                <Loader/>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Index