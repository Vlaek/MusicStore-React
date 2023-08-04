import React, {useState, useEffect} from "react"
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Modal from "./components/Modal";
import Input from "./components/UI/Input";
import ModalOrder from "./components/ModalOrder";
import CarouselBox from "./components/CarouselBox";
import DataService from './API/DataService';
import { useItems } from './hooks/useItems';
import { useFetching } from './hooks/useFetching';
import Loader from "./components/UI/Loader/Loader";

function App() {
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [likes, setLikes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalOrder, setShowModalOrder] = useState(false);
    const [fullItem, setFullItem] = useState({});
    const [filter, setFilter] = useState({
        genre: "",
        sort: "new",
        query: ""
    });

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

    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query, filter.genre);
    
    const [fetchItems, isItemsLoading, itemsError] = useFetching(async () => {
        const response = await DataService.getAll();
        setItems(response.data);
    })

    useEffect(() => {
        fetchItems()
    }, [])

    const addToOrder = (item) => {
        setOrders(prevOrders => {
            const index = prevOrders.findIndex(order => order.id === item.id);
            if (index >= 0) {
                const newOrders = [...prevOrders];
                newOrders[index].count += 1;
                return newOrders;
            } else {
                return [...prevOrders, {...item, count: 1}];
            }
        });
    }

    const removeFromOrder = (item) => {
        setOrders(prevOrders => {
            const index = prevOrders.findIndex(order => order.id === item.id);
            if (index >= 0 && prevOrders[index].count > 1) {
                const newOrders = [...prevOrders];
                newOrders[index].count -= 1;
                return newOrders;
            } else if (index >= 0 && prevOrders[index].count === 1) {
                const newOrders = [...prevOrders];
                newOrders.splice(index, 1);
                return newOrders;
            } else {
                return prevOrders;
            }
        });
    }

    const deleteOrder = (id) => {
        setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    }

    const onShowModal = (item) => {
        setFullItem(item);
        setShowModal(!showModal);
    }

    const onShowModalOrder = () => {
        setShowModalOrder(!showModalOrder);
    }

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

    const likeItem = (item) => {
        let isInArray = false;
        likes.forEach(like => {
            if (like === item.id)
                isInArray = true
                setLikes(likes.filter(like => like !== item.id))
        })
        if (!isInArray)
            setLikes([...likes, item.id])
    }

    return (
        <div className="wrapper">
            <Header
                orders={orders}
                onShowModalOrder={onShowModalOrder}
            />
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
                    isItemsLoading
                        ?
                        <div className='item-list_empty'>
                            <Loader/>
                        </div>
                        : 
                        <Items 
                            items={sortedAndSearchedItems} 
                            likes={likes}
                            onAdd={addToOrder} 
                            onLike={likeItem}
                            onShowModal={onShowModal}
                        />
                }
                { showModalOrder && 
                    <ModalOrder
                        orders={orders}
                        onDelete={deleteOrder}
                        onShowModalOrder={onShowModalOrder}
                        onShowModal={onShowModal}
                        onAdd={addToOrder}
                        onRemove={removeFromOrder}
                    /> 
                }
                { showModal && 
                    <Modal 
                        item={fullItem} 
                        likes={likes}
                        onAdd={addToOrder} 
                        onLike={likeItem}
                        onShowModal={onShowModal} 
                        showModalOrder={showModalOrder}
                    /> 
                }
            </div>
            <Footer />
        </div>
    );
}

export default App