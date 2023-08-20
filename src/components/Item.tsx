import React, { FC } from "react";
import { IoCart, IoHeart } from "react-icons/io5";
import { IAlbum, IAdd, ILike, IShowModal } from "./../types/types";

interface ItemProps {
    key: number;
    item: IAlbum;
    like: boolean;
    order: boolean;
    onAdd: IAdd;
    onLike: ILike;
    onShowModal: IShowModal;
}

const Item: FC<ItemProps> = (props) => {
    return (
        <div className="item">
            <img
                className="item__img"
                src={require(`../../public/img/${props.item.img}`)}
                alt="img"
                onClick={() => props.onShowModal(props.item)}
            />
            <h2
                className="item__title"
                onClick={() => props.onShowModal(props.item)}
                title={props.item.title}
            >
                {props.item.title}
            </h2>
            <p className="item__author">{props.item.author}</p>
            <div className="item__price">
                <p>
                    {Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                    }).format(props.item.price)}
                </p>
                <div className="item__btn-list">
                    <IoHeart
                        className={`item__btn-like ${props.like && "active"}`}
                        onClick={() => props.onLike(props.item)}
                    />
                    <IoCart
                        className={`item__btn-cart ${props.order && "active"}`}
                        onClick={() => props.onAdd(props.item)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Item;
