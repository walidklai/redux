import React from 'react'
import { Link, Route } from 'react-router-dom'
import Product from './Product'

function Products({ match }) {
    const productsData = [
        {
            id: 1, name: 'NIKE Liteforce Blue Sneakers',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
            availability: true
        },
        {
            id: 2, name: 'U.S. POLO ASSN. Slippers',
            desc: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
            availability: true
        },
        {
            id: 3, name: 'ADIDAS Adispree Running Shoes',
            desc: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
            availability: true
        },
        {
            id: 4, name: 'Lee Cooper Mid Sneakers',
            desc: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
            availability: false
        }
    ]
    let linkList = productsData.map(el =>
        <Link key={el.id} to={`${match.url}/${el.id}`}><div>{el.name}</div></Link>
    )
    return (
        <div className='prod'>
            <div className='products'>
                <h3>Products</h3>
                <ul className='ull'>
                    {linkList}
                </ul>
            </div>
            <Route path={`${match.path}/:id`} render={(props)=><Product productsData={productsData} {...props}/>}/>
            <Route exact path={`${match.path}`} render={()=><div>Please select a product</div>}/>
        </div>
    )
}

export default Products
