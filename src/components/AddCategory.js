import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory})=>{

    const[input,setInput] = useState('');//si no hay valor por defecto es undefined

    const handleInput =(e)=>{setInput(e.target.value)}
    //el preventDefault evita la recarga de la pagina
    const handleSubmit = (e) => {
        e.preventDefault();
        input.trim().length>2 && (setCategory(x => [ input,...x, ]));
        input.trim().length>2 && setInput('');  
        
    };

    //const cajaTexto = document.getElementById('pendeja').value;

    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                id="pendeja"
                type="text"
                value={ input }
                onChange={handleInput}
            />
        </form>  
    );
};

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}