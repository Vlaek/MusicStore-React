import React, { Component } from 'react'

export class Categories extends Component {
    render() {
        return (
            <div className='categories'>
                {this.props.categories.map((category, index) => (
                    <div 
                        className={index === 0 ? 'category active' : 'category'} 
                        key={category.key}
                        onClick={(el) => {
                            this.props.setCategory(category.key)

                            const categories = el.target.parentNode;
                            const categoryItems = categories.querySelectorAll('.category.active');
                            categoryItems.forEach((item) => item.classList.remove('active'));

                            el.target.classList.add('active');
                        }}
                    >{category.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories