 // todos los hooks empiezan con usea, bien sea useState, useFetch etc
 // los use son solo funciones
 
 import  {useEffect, useState} from 'react';
 import {getGifs} from '../helpers/getGifs'

 export const useFetchGifs = (category) => {
     const [state, setState] = useState({
        data: [],
        loading: true

       

     });

     useEffect(()=>{
       
      getGifs( category)
       .then( imgs =>{

         setTimeout( () => {
            setState({
                data: imgs,
            loading: false
            })
         }, 3000 );

       } )

     }, [category] )

     

 


     // aqui estoy retornando un objeto del argumento state de arriba, este state puede tener cualquier otro nombre
      return state;
    }