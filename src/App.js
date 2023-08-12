import React, { useState } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ModalOrder from "./components/ModalOrder"
import Modal from "./components/Modal"
import { OrdersContext } from './context/context'

function App() {
    const [orders, setOrders] = useState([]);
    const [ordersHistory, setOrdersHistory] = useState([]);
    const [showModalOrder, setShowModalOrder] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [fullItem, setFullItem] = useState({});
    const [likes, setLikes] = useState([]);

    const onShowModal = (item) => {
        setFullItem(item);
        setShowModal(!showModal);
    }

    const onShowModalOrder = () => {
        setShowModalOrder(!showModalOrder);
    }

    const makeOrder = (order, price) => {
        let today = new Date();
        const newOrder = {id: ordersHistory.length + 1, order: order, price: price, date: today.toLocaleString()};
        setOrdersHistory(prevOrders => [...prevOrders, newOrder]);
        console.log(ordersHistory)
    }

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

    const deleteOrder = (id) => {
        setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    }

    const clearOrder = () => {
        setOrders([])
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

    const likeItem = (item) => {
        let isInArray = false;
        likes.forEach(like => {
            if (like.id === item.id)
                isInArray = true
                setLikes(likes.filter(like => like.id !== item.id))
        })
        if (!isInArray)
            setLikes([...likes, item])
    }

    return (
        <OrdersContext.Provider value={{
            likes,
            orders,
            ordersHistory,
            addToOrder,
            likeItem,
            onShowModal,
        }}>
            <Router>
                <div className="wrapper">
                    <Header
                        orders={orders}
                        onShowModalOrder={onShowModalOrder}
                    />
                    <AppRouter/>
                    { showModalOrder && 
                        <ModalOrder
                            orders={orders}
                            onMakeOrder={makeOrder}
                            onClear={clearOrder}
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
                    <Footer />
                </div>
            </Router>
        </OrdersContext.Provider>
    )
}

export default App