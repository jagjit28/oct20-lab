import React, { useState, useEffect } from "react";
import "./shoppingList_style.css";
import axiosInstance from '../axios/Axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ShoppingList() {
    //GET DATA
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
    const fetchData = async () => {
    try {
        axiosInstance
            .get("getList")
            .then((res) => {
            setData(res.data);
            })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    //POST DATA
    const initialFormData = Object.freeze({
		item: '',
		
	});
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
                ...formData,
                [e.target.name]: e.target.value.trim(),
            });
    };
    const handelSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
          axiosInstance
            .post("addItem", {
              item: formData.item,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data === "Input is required") {
                
              }
              if (res.data === "Item Already Exist. Please Try Again") {
                
              }
            window.location.reload();
            });
      };
    return (
      <>
        <div class="heading">
            Shopping List
        </div>
        <div class="shoppingList">
            <ul>
            {data.map(item => (
                <li>{item.item}</li>
            ))}
            </ul>
        </div>
        <div class="heading">
            Add Shopping List
        </div>
        <div class="addShoppingList">
        <form className="add-item-form" onSubmit={handelSubmit}>
                  <input
                    type="text"
                    placeholder="Item Name"
                    id="item"
                    name="item"
                    onChange={handleChange}
                  />
                <button className="submit">Add Item</button>
                
              </form>
        </div>
      </>
    );
}
