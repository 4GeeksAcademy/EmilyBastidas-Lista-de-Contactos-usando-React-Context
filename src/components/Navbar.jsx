import React from 'react'
import { TbHomeFilled } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-5">
			<Link to="/">
				<TbHomeFilled className="ms-5" style={{ fontSize: '2rem', color: '#634472ff' }} />
			</Link>

			<h4 className="mt-2" style={{ fontSize: '1.8rem', color: '#abafb0ff' }}>Contact List</h4>

			<div className="ml-auto">
				<Link to="/add-contact">
					<button className="btn"><FaUserPlus style={{ fontSize: '2rem', color: '#634472ff' }} /></button>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar