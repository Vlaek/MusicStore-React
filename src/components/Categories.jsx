import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: '',
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
            active: false,
        }

        this.setCategory = this.setCategory.bind(this);
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(category => (
                    <div 
                        className={category.name === 'all' ? 'category active' : 'category'} 
                        key={category.key}
                        onClick={(el) => {
                            this.setCategory(el.target)
                            this.props.setSort(category.key)
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