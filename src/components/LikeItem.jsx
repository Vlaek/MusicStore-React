import React, {useState, useRef} from 'react'
import { CSSTransition } from 'react-transition-group';
import { IoCart, IoHeart } from 'react-icons/io5';

const LikeItem = (props) => {
    const [show, setShow] = useState(true);
    const myRef = useRef(null);

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.closest('.profile-items__item').style.boxShadow = '0 4px 3px gray'
    }

    function dragLeaveHandler(e) {
        e.target.closest('.profile-items__item').style.boxShadow = 'none'
    }

    function dragStartHandler(index) {
        props.setDraggableItem(index)
    }

    function dragEndHandler(e) {
        e.target.closest('.profile-items__item').style.boxShadow = 'none'
    }

    function dropHandler(e, index) {
        e.preventDefault()
        e.target.closest('.profile-items__item').style.boxShadow = 'none'
        if (e.target.closest('.profile-items__item')) {
            const draggedItem = props.likes[props.draggableItem]
            const remainingItems = props.likes.filter((item, i) => i !== props.draggableItem);
            const updatedItems = [
                ...remainingItems.slice(0, index),
                draggedItem,
                ...remainingItems.slice(index)
            ]
            props.setLikes(updatedItems)
        }
            
    }

    return (
        <CSSTransition 
            in={show} 
            timeout={300}
            classNames='alert'
            nodeRef={myRef}
        >
        <div 
            className='profile-items__item' 
            ref={myRef} 
            draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragStart={(e) => dragStartHandler(props.index)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, props.index)}
        >
            <div className="profile-items__img">
                <img 
                    src={require(`../../public/img/${props.like.img}`)} 
                    alt="img" 
                    onClick={() => props.onShowModal(props.like)}
                />
            </div>
            <div className="profile-items__content">
                <h2 
                    className="profile-items__title"
                    onClick={() => props.onShowModal(props.like)}
                >{props.like.title}</h2>
                <p className="profile-items__author">{props.like.author}</p>
                <div className="profile-items__price">
                    <p>${props.like.price}</p>
                    <div className="profile-items__btn-list">
                        <IoHeart
                            className={`profile-items__btn-like ${props.like && 'active'}`}
                            onClick={() => {
                                setShow(false)
                                setTimeout(() => {
                                    props.onLike(props.like)
                                }, 310);
                            }}
                        />
                        <IoCart 
                            className='profile-items__btn-cart'
                            onClick={() => props.onAddToOrder(props.like)}
                        />
                    </div>
                </div>
            </div>
        </div>
        </CSSTransition>
    )
}

export default LikeItem