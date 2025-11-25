import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 link-offset-2 link-underline link-underline-opacity-0">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/add-contact">
					<button className="btn btn-success">Add New Contact</button>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar