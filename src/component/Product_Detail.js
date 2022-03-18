import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct,detailReducer } from '../redux/Action';

const Product_Detail = () => {
  const productDetail = useSelector(state => state.detailReducer);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log('id:', id);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((Err) => { console.log('error:', Err); })
    console.log('responseDetail:', response);
    dispatch(detailReducer(response.data))

  }
  useEffect(() => {
    if (id && id !== '') fetchProductDetail()
    return (
      dispatch(removeProduct())
    )

  }, [id])
  return (
    <div>
      {Object.keys(productDetail).length === 0 ? (<div>loading....</div>)
        :
        (<div >
          <div>
            <img src={productDetail.image} alt={productDetail.title} />
            <h3>{productDetail.title}</h3>
            <span> ${productDetail.price}</span>
            <p>{productDetail.description}</p>
          </div>
        </div>)}
    </div>
  )
}

export default Product_Detail