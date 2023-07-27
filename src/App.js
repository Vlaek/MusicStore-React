import React from "react"
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Modal from "./components/Modal";
import dataJSON from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: dataJSON,
            orders: [],
            currentItems: [],
            showModal: false,
            fullItem: {}
        }

        this.state.currentItems = this.state.items;

        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);

        this.chooseCategory = this.chooseCategory.bind(this);

        this.onShowModal = this.onShowModal.bind(this);
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <Header 
                        orders={this.state.orders} 
                        onDelete={this.deleteOrder}
                    />
                    <Categories 
                        chooseCategory={this.chooseCategory} 
                    />
                    <Items 
                        items={this.state.currentItems} 
                        onAdd={this.addToOrder} 
                        onShowModal={this.onShowModal}
                    />
                    { this.state.showModal && <Modal onAdd={this.addToOrder} onShowModal={this.onShowModal} item={this.state.fullItem} /> }
                    
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
        console.log('da', this.state.orders)
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(order => order.id !== id)})
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

    onShowModal(item) {
        this.setState({fullItem: item})
        this.setState({showModal: !this.state.showModal})
    }
}

export default App;
