import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

// en este ejercicio el inputValue guarda el ultimo valor que escribimos, esto hace que se vea en el input y en el h2
const [inputValue, setInputValue] = useState();

// el handleInputChange es un evento que hace que esta funcion cambie el ultimo valor que escribimos
const handleInputChange = (e) =>{
    setInputValue(e.target.value);

    
}

const handleSubmit = (e) =>{
    // este metodo hace que la pagina no se recargue por completo
        e.preventDefault();
        // esto hace que no envie valor vacio o repetidos
        if (inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }
        
    }
    return (
        /* aqui podemos dejar solo el form ya que solo estamos retornando un solo elemento
        el form agrupa todos los elementos por ente solo esta retornando un nelemento  */
        <form onSubmit={ handleSubmit }> 
            <h2> { inputValue }</h2>
            <input type="text"
                   value={inputValue}
                   onChange={ handleInputChange}
            
            />
        </form>
    )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired,
}
