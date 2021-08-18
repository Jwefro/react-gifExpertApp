import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
 import {GifGridItem} from './GifGridItem'

export const GifGrid = ({category}) => {



    const {data:images,loading}= useFetchGifs( category );

    console.log();


    /* const [images, setImages] = useState([])
    

// el useaEffect hace que solo se ejecute una vez el getgifs
// ya que sin esto se ejecutara infinitamente la funcion cada que se haga un cambio
    useEffect( () => {

        getGifs(category)
            .then( setImages)
        //las [] sirven para que capture una sola vez la funcion y no se ejectute infinitamente
    }, [category])

 */
     
    return (
        <>
        <h2 className='animate__shakeX'>{category}</h2>
        <div class="card-grid">

             { loading && 'Cargando...'}

               {
               
              
               
               
               /* 
               
                ESTO ES UN EJERCICIO QUE NO RESILVI BIEN, OJO APRENDER O MEMORIZAR
               
               {
        // este ejercicio no logre hacerlo, aprender bien el uso de esta funcion
        // estamos llamando del usestate el imagen y mapeamos con el map, colocamos un argumento img

            //        images.map(img =>  (
        // como estamos en una lista dentro del <li></li> el key en este caso es {img.id} ya que no mapeamos
        // si fueramos mapeado pasamos comoa rgumentos los valores del useState
                    <li key={img.id} >{img.title} </li>
         //           ))
                }
 */            
 


                // ESTA SERIE OTRA FORMA MEJOR DE HACER EL EJERCICIO DE ARRIBA

             images.map(imgs =>(
                <GifGridItem key={imgs.id} 
                // operador exprect del img
                {...imgs} />

            ))



               }
            
            
            
        </div>
        </>
    )
}
