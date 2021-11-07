import React, { Fragment } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ListPay from './paymentList';

const Payment = (prop)=>{
    const myCard = prop.list
    // console.log('day la prop list',prop.list.length)
    // console.log(myCard)
    let total = 0
    for(let item of myCard){
        total +=(item.amount*parseFloat(item.price))
    }
    return(
        <Fragment>
        <div className='payment'>
            <div className='myCart'>
            <h1 style={{'fontSize':'22px', 'fontWeight':'600', 'display':'flex', 'justifyContent':'center','alignItems':'center', 'color':'rgb(228 19 23)'}}><FaShoppingCart style={{'fontSize':'22px'}}/>
            <p style={{'marginLeft':'8px', 'fontSize': '20px', 'fontFamily':'Poppins', 'fontWeight': '600'}}>Your card ({myCard.length})</p></h1>
            <button className='btn'>DINE IN</button>
            </div>
            <div className='payList'>
             {myCard.map(item =>{
                 return <ListPay key={item.id} itemCard={item} deleteItem={prop.delete} increase={prop.increase} decrease={prop.decrease}/>
             })}
            </div>
            <div className='total'>
            <div id='paymentInfo'>
            <h3>Total:</h3>
            <label>
            <h2>Kr {total.toFixed(2)}<span style={{fontSize: '70%', display:'inline'}}>$</span></h2>
            <span>[Incl tax 10% = Kr {(total*0.1).toFixed(2)}]</span>
            </label>
            </div>
            <div id='paymentBtn'>
            <button><h1>PAYMENT</h1></button>
            </div> 
            </div>
        </div>
       
       </Fragment>
    )
}



export default Payment