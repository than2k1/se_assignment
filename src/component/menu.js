import React, { Fragment } from 'react';
import Dish from './dish';
import { RiArrowLeftSFill, RiArrowRightSFill} from 'react-icons/ri';

const Menu = (prop)=>{
    const arr = prop.dataList.data
    const changeAct = prop.dataList.change
    const addPay =  prop.dataList.addList
    
    return(
        <Fragment>
        <div className='menu'>
            <RiArrowLeftSFill style={{fontSize: '30px', padding:'0'}} className='arrow'/>
        {arr.map(item =>{
            return <div  key={item.id} className='kindMenu' onClick={changeAct.bind(this, item.id)} style={{'background': item.active? 'rgb(47 56 84)': 'white'}}>
                <div className='menuImg'>
                    <img src={item.src} alt='kind' width='70px' height='68px' style={{borderRadius: '50%'}}></img>
                </div>
                <div className='kindName' style={{'color': item.active? 'white': 'black'}}>
                {item.kind}
                </div>
                </div>
        })}
            <RiArrowRightSFill style={{fontSize: '30px', padding:'0'}} className='arrow'/>
        </div>
        <div className='dish'>
            {arr.map(item =>{
                if(item.active === true)
                return <Dish key={item.id} arrList={item.dish} addToPay={addPay} />
                else
                return false
            })}
        </div>
        </Fragment>
        
    )


    }

export default Menu