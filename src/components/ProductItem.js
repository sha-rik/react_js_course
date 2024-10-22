import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';
import { use } from 'chai';

const ProductItem = (props) => {
    
    let [title,settitle]= useState(props.title);

    function clickHandler(){
        settitle("pop corn")
        // console.log("clicked")
    }

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>change name</button>
    </Card>
  );
}

export default ProductItem;