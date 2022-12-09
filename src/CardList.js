import React from 'react';
import Card from './Card';

//otra forma de representar una función
const CardList = ({ Cardsinfo }) =>{

	return(
	<React.StrictMode>
        {
            Cardsinfo.map((user , i)=>{
            return  (
            <Card  key= {i} 
            id={Cardsinfo[i].id} 
            name={Cardsinfo[i].name} 
            extra={Cardsinfo[i].extra}/>
            );
        })
        }
  </React.StrictMode>
		);

}

export default CardList;