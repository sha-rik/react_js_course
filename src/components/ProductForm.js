import "./ProductForm.css";
import { useState,useEffect } from 'react';

function ProductForm(props) {
    let [newtitle,settitle]= useState("")
    let [newdate,setdate]= useState("")

    // useEffect(() => {
    //     console.log("Updated title:", newtitle);
    //   }, [newtitle]);
    
    // useEffect (()=>{
    //     console.log("Updated date:", newdate);
    // },[newdate]);



    function titleChangeHandler(event){
        settitle(event.target.value)
        
    }

    function dateChangeHandler(event){
        setdate(event.target.value)
        
    }

    function submitHandler(event){
        event.preventDefault();
        let product={
            title:newtitle,
            date:newdate
        };
        
        console.log(product);
        props.onSaveProduct(product);
    }


    return (
        <form onSubmit={submitHandler}>
            
            <div className="new_preoduct_title">
                <label>Product Title</label>
                <input type="text" value={newtitle} onChange={titleChangeHandler}></input>
            </div>

            <div className="new-product_date">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2029-01-01" value={newdate} onChange={dateChangeHandler}></input>
            </div>

            <div className="new-product_button">
                <button type="submit">Add Product</button>
            </div>

        </form>

    );
}
export default ProductForm;