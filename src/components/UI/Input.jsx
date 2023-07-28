import React from 'react';
import { IoCloseSharp } from 'react-icons/io5'

const Input = React.forwardRef((props, ref) => {
    return (
        <div className='search'>
            <input 
                className='search__input' 
                placeholder='Найти'
                ref={ref} 
                onChange={(e) => props.setFilter(e)}
            />
            <IoCloseSharp 
                className='search__btn-close' 
                onClick={(e) => {
                    document.querySelector('.search__input').value = "";
                    props.setFilter(e)
                }}
            />
        </div>
    );
});

export default Input;