import React from 'react'
import {Link, Route} from 'react-router-dom'

function Category({match}) {
    return (
        <div>
            <ul>
                <Link to={`${match.url}/shoes`}><li>Shoes</li></Link>
                <Link to={`${match.url}/boots`}><li>Boots</li></Link>
                <Link to={`${match.url}/footwear`}><li>Footwear</li></Link>
            </ul>
            <Route path={`${match.path}/:name`} render={({match})=>
                <div>
                    <h4>{match.params.name}</h4>
                </div>
            }/>
        </div>
    )
}

export default Category