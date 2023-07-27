import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(item => (
                    <Item 
                        item={item} 
                        key={item.id} 
                        onAdd={this.props.onAdd}
                        onShowModal={this.props.onShowModal}
                    />
                ))}
            </main>
        )
    }
}

export default Items