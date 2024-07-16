import { Link, NavLink } from "react-router-dom";

function NavigationBar () {
    return (
        <nav className="clearfix">
            {/* <Link to='/add-customer'>Add Customer</Link>
            <Link to='customers'>Customers</Link> */}
            <NavLink to='/characters' activeClassName='active'>Marvel Characters</NavLink>
            <NavLink to='/characterdetails' activeClassName='active'>Character Details</NavLink>
            <NavLink to='/comic' activeClassName='active'>Comic </NavLink>
        </nav>
    )
}

export default NavigationBar