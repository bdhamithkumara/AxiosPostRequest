import React from 'react';
import Axios from 'axios';

const Payment = () => {

    const handleClick = (product) => {
        Axios.post("http://localhost:5000/payment",{
            name : "product 1",
            desc : "good product",
            price : 30
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
     

  return (
    <div>
        <h1>click me to send data</h1>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Payment