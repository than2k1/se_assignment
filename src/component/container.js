import React, { Fragment, useEffect, useState } from 'react';
import Home from '../component/header';
import Payment from '../component/payment';
import { data } from './data';

const Container = ()=>{
    const [state, setState] = useState(
        [...data]
        )

        const [payList, setPay] = useState([])


        useEffect(()=>{
            const get = ()=>{
                // console.log('getting')
            const pay = localStorage.getItem('list')
            // console.log(JSON.parse(pay))
            if(pay)
            setPay(JSON.parse(pay))
            }
            get()
        },[])

        useEffect(()=>{
            const save = () =>{
                // console.log('saving')
                localStorage.setItem('list',JSON.stringify(payList))
            }
            save()
        },[payList])

        const changeActive =(id)=>{
            const newArr = state.map(item =>{
                if(item.id !== id)
                item.active = false
                else
                item.active= true
    
                return item
            })
    
            setState(newArr)
        }
        
        const addPay = async (data, amount)=>{
            data.amount = amount
            let include=false
           const arr = payList.map(item => {
               if(item.id === data.id && item.amount === data.amount){
               include=true
               }
               return item
           })
           await setPay(arr)
        //    console.log(payList)
           if(!include){
            const arrNew = [...payList, data]
            setPay(arrNew)}   
            else
            return 
        }

        const increaseAmount = async (id)=>{
            const arrNew = payList.map(item =>{
                if(item.id===id){
                item.amount+=1}

                return item

            })
            await setPay(arrNew)
        }

        const decreaseAmount =  async (id)=>{
            const arrNew = payList.map(item =>{
                if(item.id===id && item.amount>1){
                item.amount-=1}

                return item

            })
            await setPay(arrNew)
        }

        const deletePay = async (id)=>{
            const arrNew = payList.filter(item =>{
                if(item.id !== id)
                return item
                else
                return false
                
            })
            await setPay(arrNew)
            
        }
    return (
        <Fragment>
        <Home data={state} change = {changeActive} addList={addPay}/>
        <Payment  list={payList} delete={deletePay} increase={increaseAmount} decrease={decreaseAmount} />
        </Fragment>
    )
}

export default Container