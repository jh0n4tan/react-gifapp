import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpert = ()=>{

    //const categories = ['Don ramon','La chilindrina','El chavo'];

    const [Category,setCategory]=useState(['Phineas']);
    
    //const addElement = ()=>{setCategory([...Category,'putin'])}; //e; set tiene un callback
    //const addElement = ()=>{setCategory(x => [...x,'putin'])};

    return (
        <>
            <h1>Gift Expert</h1>
            <AddCategory setCategory={ setCategory }/>            
            <h4>Que me ves pendeja</h4>
            <ol>
                {
                    Category.map( x => (
                    
                        <GifGrid 
                        key={ x }
                        category = { x } />
                    
                    ))
                }
            </ol>           
        </>    
    );


}

