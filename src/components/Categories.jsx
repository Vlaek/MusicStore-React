import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'all'
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
            ],
            active: false,
        }

        this.setCategory = this.setCategory.bind(this);
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(category => (
                    <div 
                        className='category' 
                        key={category.key}
                        onClick={(el) => {
                            this.props.chooseCategory(category.key)
                            this.setCategory(el.target)
                        }}
                    >{category.name}</div>
                ))}
            </div>
        )
    }

    setCategory(category) {
        const categories = document.querySelectorAll('.category.active');
        categories.forEach((category) => category.classList.remove('active'));
        category.classList.add('active');
    }
}

export default Categories