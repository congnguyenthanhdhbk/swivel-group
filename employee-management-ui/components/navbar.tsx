import React from 'react';
import { compose } from 'recompose';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light" style={{backgroundColor: '#7f29d6'}}>
            <p className="ms-3" style={{color: 'white'}}><b>Employee manager</b></p>
        </nav>
    )
}
export default compose()(Navbar)