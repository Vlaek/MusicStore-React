import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.length ?
                    <div className='item-list'>
                        {this.props.items.map(item => (
                            <Item 
                                key={item.id} 
                                item={item} 
                                like={this.props.likes.includes(item)}
                                onAdd={this.props.onAdd}
                                onLike={this.props.onLike}
                                onShowModal={this.props.onShowModal}
                            />
                        ))}
                    </div>
                : 
                    <div className='item-list_empty'>
                        <p className='item-list_empty__title'>К сожалению, таких товаров не найдено :(</p>
                        <p className='item-list_empty__subtitle'>Попробуйте поиск по другому параметру</p>
                    </div>
                }
            </main>
        )
    }
}

export default Items