import React, { useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'


const AddContact = () => {

    const { dispatch } = useGlobalReducer()

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addContact(formData)
    }

    const addContact = (info_contact) => {
        fetch('https://playground.4geeks.com/contact/agendas/emily/contacts', {
            method: 'POST',
            body: JSON.stringify(info_contact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'ADD_CONTACT', payload: data })
                setFormData({ name: '', phone: '', email: '', address: '' })
            })
            .catch((error) => console.log(error.message))
    }

    return (
        <div className="container">

            <h3 className='mb-5'>Add Contact</h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="Full-name" className="form-label">Full Name</label>
                    <input type="text" name='name' className="form-control" id="Full-Name" aria-describedby="Full-Name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>


                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <button className="btn w-100 mt-3" style={{ color: "white", backgroundColor: '#634472ff' }}>
                    Save Contact
                </button>
            </form>
        </div>
    )
}

export default AddContact
