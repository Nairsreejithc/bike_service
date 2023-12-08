import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function card(props) {

  let dispatch=useDispatchCart();
  let data = useCart();
  const priceRef=useRef();

  let options=props.options;
  let priceOptions=Object.keys(options);
  const [price,setPrice]=useState(1);

  const [quantity,setQuantity]=useState("");
  // let itemName=props.itemName;
  
  const handleAddToCart = async() => {
    await dispatch({type:"ADD",id:props.itemName._id,price:finalPrice,quantity:quantity})
    console.log(data)
  }
  let finalPrice=quantity*parseInt(options[price])
  useEffect(()=>{
    setPrice(priceRef.current.value)
    
  },[])

  return (
    <div>
      <div className="col-12 col-md-6 col-lg-3" style={{"width": "18rem","maxHeight":"360px"}}>
  <img src={props.itemName.img} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.itemName.name}</h5>
    <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setQuantity(e.target.value)}>
    <option value="125cc">125 cc</option>
    <option value="125to180cc">125 cc to 180 cc</option>
    <option value="moreThan180cc">More than 180 cc</option>
    <option value="scooters">Scooters</option>
    <option value="royalEnfield">Royal Enfield</option>
</select>


        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>setPrice(e.target.value)}>
            {priceOptions.map((data)=>{
              return<option key={data} value={data}>{data}</option>
            })}
        </select>

        <div className='d-line h-100 fs-5'>{finalPrice}/-</div>
    
  <button className={'btn btn-success justify-content-center'}onClick={handleAddToCart}>Add to cart</button>
  </div>
</div>
  <hr/>
</div>
  )
}
