import React from "react"
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Modal from "./components/Modal";
import dataJSON from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "./components/UI/Input";
import ModalOrder from "./components/ModalOrder";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: dataJSON,
            orders: [],
            currentItems: [],
            showModal: false,
            showModalOrder: false,
            fullItem: {},
            filter: {
                genre: "",
                sort: "new",
                query: ""
            },
            genres: [
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
            ],
            sorts: [
                {
                    key: 'new',
                    name: 'Сначала новые'
                },
                {
                    key: 'old',
                    name: 'Сначала старые'
                },
            ]
        }

        this.state.currentItems = this.state.items;

        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);

        this.onShowModal = this.onShowModal.bind(this);
        this.onShowModalOrder = this.onShowModalOrder.bind(this);

        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }
    render() {
        const filteredTasks = this.setFilterItems();

        return (
            <div className="wrapper">
                <div className="container">
                    <Header 
                        orders={this.state.orders} 
                        onDelete={this.deleteOrder}
                        onShowModalOrder={this.onShowModalOrder}
                    />
                    <Categories
                        categories={this.state.sorts}
                        setCategory={this.handleSortChange}
                    />
                    <Categories
                        categories={this.state.genres}
                        setCategory={this.handleGenreChange}
                    />
                    <Input 
                        placeholder={"Найти"}
                        setFilter={this.handleQueryChange}
                    />
                    <Items 
                        items={filteredTasks} 
                        onAdd={this.addToOrder} 
                        onShowModal={this.onShowModal}
                    />
                    { this.state.showModalOrder && 
                        <ModalOrder
                            orders={this.state.orders} 
                            onDelete={this.deleteOrder}
                            onShowModalOrder={this.onShowModalOrder}
                            onShowModal={this.onShowModal}
                        /> 
                    }
                    { this.state.showModal && 
                        <Modal 
                            onAdd={this.addToOrder} 
                            onShowModal={this.onShowModal} 
                            item={this.state.fullItem} 
                            showModalOrder={this.state.showModalOrder}
                        /> 
                    }
                </div>
                <Footer />
            </div>

        );
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(order => {
            if (order.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({ orders: [...this.state.orders, item] })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(order => order.id !== id)})
    }

    onShowModal(item) {
        this.setState({fullItem: item})
        this.setState({showModal: !this.state.showModal})
    }

    onShowModalOrder() {
        this.setState({showModalOrder: !this.state.showModalOrder})
    }

    handleQueryChange(event) {
        if (!event.target.value)
            event.target.value = ""
        const newFilter = { ...this.state.filter, query: event.target.value };
        this.setState({ filter: newFilter });
    }

    handleGenreChange(genre) {
        const newFilter = { ...this.state.filter, genre: genre };
        this.setState({ filter: newFilter });
    }

    handleSortChange(sort) {
        const newSort = { ...this.state.filter, sort: sort };
        this.setState({ filter: newSort });
    }

    setFilterItems() {
        const { items, filter } = this.state;
        if (!filter.query && !filter.genre && !filter.sort) {
            return items;
        }
        
        let filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(filter.query.toLowerCase()) || 
            item.author.toLowerCase().includes(filter.query.toLowerCase()))

        if (filter.genre) {
            filteredItems = [...filteredItems].filter(item => item.genre === filter.genre)
        }

        if (!filter.sort) {
            return filteredItems
        }
        
        filteredItems.sort((a, b) => {
            const [aDay, aMonth, aYear] = a.date.split('.');
            const [bDay, bMonth, bYear] = b.date.split('.');
            if (filter.sort === 'new') {
                return new Date(`${bMonth}/${bDay}/${bYear}`) - new Date(`${aMonth}/${aDay}/${aYear}`)
            } else {
                return new Date(`${aMonth}/${aDay}/${aYear}`) - new Date(`${bMonth}/${bDay}/${bYear}`)
            }
        })
        
        return filteredItems;
    }
}

export default App;
