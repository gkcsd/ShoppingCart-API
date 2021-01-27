import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "INSERT_YOUR_API_KEY";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localurl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({ addInCart }) => {

    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     });
    // }

    const fetchPhotos = async () => {
        const { data } = await Axios.get(localurl);
    };

    const { photos } = data;
    
    useEffect(() => {
        fetchPhotos();
    }, [])
 
    return (
        //TODO:
    );
};