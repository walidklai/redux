import React from 'react'

function Product(props) {
    var product=props.productsData.find(el=>el.id==props.match.params.id)
    console.log(props)
    var productDetail
    if(product)
    productDetail=<div className='product'>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <hr/>
        <h4>{product.availability? 'Available':'Out of stock'}</h4>
    </div>
    else
    productDetail=<div>Item not found...</div>
    return (
        <div>
            {productDetail}
        </div>
    )
}

export default Product
