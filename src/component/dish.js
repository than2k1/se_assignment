import React, { Fragment, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import DetailItem from './ItemInfo';

const Dish = (prop) =>{
    const list = prop.arrList
    const add = prop.addToPay
    const [ID,setID] = useState(0)


    
       
    return(
        list.map(dish =>{
            return (
            <Fragment key={dish.id} >
            <div className='dishItem'>
            <div className='dishImg' onClick={setID.bind(this, dish.id)} >
                <img src={dish.src} alt='food' height='100%' width='70%'></img>
            </div>
            <div className='dishName'>
            <h3  onClick={setID.bind(this, dish.id)}>{dish.title}</h3>
            <div className='dishPrice'>
            <h2>{dish.price}<span className='curr'> $</span></h2>
            <button  className='btn' onClick={add.bind(this,dish,1)}>
            <FaShoppingCart style={{color: 'white'}}/>
            </button>
            {(ID===dish.id)?<DetailItem  info={dish} off={setID} addCard={add}/>: null}
            </div>
            </div>
            </div> 
            
            </Fragment>
            )
        })
    )
}

export default Dish