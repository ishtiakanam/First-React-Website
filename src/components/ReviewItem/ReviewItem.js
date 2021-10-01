import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quentity,img,key} = props.product;
    const {handleRemove} = props;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className='product-name'>{name}</h4>
            <p>Price: {price}</p>
            <p>Quentity: {quentity}</p>
            <button onClick={() => handleRemove(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;