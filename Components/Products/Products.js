import React ,{useState}from 'react'
// import UserProfile from '../UserProfile/UserProfile'
import {BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Products() {
  const [numberOfItemsInTheCart,setNumberOfItemsInTheCart]=useState(0)
  const AddToCart=()=>{
    setNumberOfItemsInTheCart(numberOfItemsInTheCart+1)
  }
  console.log("number of items",numberOfItemsInTheCart)
  return (
    <div>
      <div className='itemsCart d-flex align-items-center'>
        <Link className='links mx-3' to='cart' style={{ fontSize: '1rem' }}>
          <BsFillCartFill />
        </Link>
        <p className='alert alert-info' role='alert'>
          {numberOfItemsInTheCart}
        </p>
      </div>
    <div className='row row-cols-1 row-cols-md-2 text-center'>
      <div className='card mx-4' style={{width:"15rem",height:'26rem'}}>
        <div className='text-center bg-light mt-2'>
          <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/a/a/v/galaxy-a34-5g-sm-a346ezkeins-samsung-original-imagnpz4h7xg6pgg.jpeg?q=70' 
          alt='not found' width='100rem' className='bg-light p-2'/>
        </div>
        <div className='card-body mt-3'>
          <h5 className='card-title'>SAMSUNG Galaxy A34</h5>
          <h6 className='card-subtitle'>Features</h6>
          <p className='card-text text-muted'>
            8 GB RAM | 256 GB ROM | Expandable Upto 1 TB
            48 MP + 8MP + 5MP | 13MP Front Camera
          </p>
          <h6>Price: ₹32,999</h6>
          <button className='btn btn-primary' onClick={AddToCart}>Add to cart</button>
        </div>
      </div>
      <div className='card mx-3' style={{width:"15rem",height:"26rem"}}>
        <div className='text-center bg-light mt-2'>
          <img src='https://m.media-amazon.com/images/I/81koa5VFokL._SX679_.jpg' alt='not found'
          width='150rem' className='bg-light p-2' />
        </div>
        <div className='card-body mt-3'>
          <h5 className='card-title'>HP Laptop 15s, 12th Gen</h5>
          <h6 className='card-subtitle'>Features</h6>
          <p className='card-text text-muted'>
          Stylish & Portable Thin and Light Laptop
          15.6 inch Full HD
          </p>
          <h6>Price: ₹54,999</h6>
          <button className='btn btn-primary' onClick={AddToCart}>Add to cart</button>
        </div>
      </div>
      <div className='card mx-3' style={{width:"15rem",height:"26rem"}}>
        <div className='text-center bg-light mt-2'>
          <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/a/a/v/galaxy-a34-5g-sm-a346ezkeins-samsung-original-imagnpz4h7xg6pgg.jpeg?q=70' 
          alt='not found' width='100rem' className='bg-light p-2'/>
        </div>
        <div className='card-body mt-3'>
          <h5 className='card-title'>SAMSUNG Galaxy A34 5G</h5>
          <h6 className='card-subtitle'>Features</h6>
          <p className='card-text text-muted'>
            8 GB RAM | 256 GB ROM | Expandable Upto 1 TB
            48 MP + 8MP + 5MP | 13MP Front Camera
          </p>
          <h6>Price: ₹32,999</h6>
          <button className='btn btn-primary' onClick={AddToCart}>Add to cart</button>
        </div>
      </div>
      <div className='card mx-3' style={{width:"15rem",height:"26rem"}}>
        <div className='text-center bg-light mt-2'>
          <img src='https://m.media-amazon.com/images/I/81koa5VFokL._SX679_.jpg' alt='not found'
          width='150rem' className='bg-light p-2' />
        </div>
        <div className='card-body mt-3'>
          <h5 className='card-title'>HP Laptop 15s</h5>
          <h6 className='card-subtitle'>Features</h6>
          <p className='card-text text-muted'>
          Stylish & Portable Thin and Light Laptop
          15.6 inch Full HD 12th Gen
          </p>
          <h6>Price: ₹54,999</h6>
          <button className='btn btn-primary' onClick={AddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Products
