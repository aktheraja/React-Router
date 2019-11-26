import React,{useState,useEffect}from 'react';
import './App.css';
// import {Link} from "react-router-dom";

function Item({match}) {
    useEffect(()=> {
        fetchItems();
        console.log(match)
    },[] )
    const [items,setItems]=useState([]);
    const fetchItems =async()=>{
        const data=await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item =await data.json();
        // console.log(items.data);
        console.log(item);
        // setItems(items.data);
    }
    return (
        <div >
            <h1>Item</h1>
        </div>
    );
}

export default Item;