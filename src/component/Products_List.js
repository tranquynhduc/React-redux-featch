import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setProduct } from '../redux/Action';
import './product.css';
import {useNavigate} from 'react-router-dom';

const Products_List = () => {
    const products = useSelector(state => state.productReducer.products)
/*     console.log('products:',products); */

    const dispatch = useDispatch();
    const navigate =useNavigate();

    const fetchProducts = async () => {
        const response = await axios.
            get('https://fakestoreapi.com/products')
            .catch((Err) => { console.log('ERROR:', Err); })
/*         console.log('response:', response); */

        dispatch(setProduct(response.data))
/*         console.log('response.data:', response.data); */
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const handleClick =(id)=>{
        navigate(`/product/${id}`)
    }

    return (

        <div className="products">
            {
                products.map(product =>
                    <div className='product' key={product.id} onClick={()=>handleClick(product.id)} >
                        <img src={product.image} alt="" className="product__image" />
                        <h3 className="product__title">{product.title}</h3>
                        <span className="product__price">${product.price}</span>
                        <span className="product__category">{product.category}</span>
                    </div> )} 
        </div>
   
    )
}

export default Products_List