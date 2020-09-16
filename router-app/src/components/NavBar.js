import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/category'><li>Category</li></Link>
          <Link to='/products'><li>Products</li></Link>
          <Link to='/admin'><li>Admin area</li></Link>
        </ul>
    )
}

export default NavBar
