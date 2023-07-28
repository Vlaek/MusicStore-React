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
                sort: "",
                query: ""
            }
        }

        this.state.currentItems = this.state.items;

        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);

        this.chooseCategory = this.chooseCategory.bind(this);

        this.onShowModal = this.onShowModal.bind(this);
        this.onShowModalOrder = this.onShowModalOrder.bind(this);

        this.handleSortChange = this.handleSortChange.bind(this);
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
                        chooseCategory={this.chooseCategory} 
                        setSort={this.handleSortChange}
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

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(item => item.category === category)
        })
    }

    handleQueryChange(event) {
        if (!event.target.value)
            event.target.value = ""
        const newFilter = { ...this.state.filter, query: event.target.value };
        this.setState({ filter: newFilter });
    }

    handleSortChange(category) {
        const newFilter = { ...this.state.filter, sort: category };
        this.setState({ filter: newFilter });
    }

    setFilterItems() {
        const { items, filter } = this.state;
        if (!filter.query && !filter.sort) {
            return items;
        }
        const filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(filter.query.toLowerCase()) || 
            item.author.toLowerCase().includes(filter.query.toLowerCase()))
        if (!filter.sort) {
            return filteredItems;
        } else {
            return filteredItems.filter(item => item.category === filter.sort)
        }
    }
}

export default App;
