import React, { Fragment } from 'react';
import {FaHome} from 'react-icons/fa'
import Menu from './menu';

const Home = (prop)=>{
    return(
        <Fragment>
        <div className='home'>
            <div className='back'>
            <div className='homeIcon'>
            <FaHome style={{'fontSize': '25px', 'color': 'white'}}></FaHome>
            </div>
            <h1 style={{'marginLeft': '15px', color:'rgb(47 56 84)', fontSize: '20px'}}>Back to home</h1>
            </div>
            <Menu dataList={prop} />
        </div>
        
        </Fragment>

    );
}

export default Home