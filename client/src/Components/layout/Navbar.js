import React from 'react'
import {Link} from 'react-router-dom'
 const Navbar = () => {
     var style={
        listStyleType: 'none',
        float:'right',
        margin:"0px 0px 0px 0px"
     }
     var style1={
        textDecoration:'none'
     }
    return (
        <div>
            <h1>Task App</h1>
            <ul style={style}>
                <li style={style1}> <Link to='/form'>Form</Link></li>
                <li style={style1}><Link to='/'>List</Link></li>
            </ul>
        </div>
    )
}
export default Navbar