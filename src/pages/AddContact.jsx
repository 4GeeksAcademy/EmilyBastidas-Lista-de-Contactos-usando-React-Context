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
            <h1>Add Contact</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name"
                    value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email"
                    value={formData.email} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone"
                    value={formData.phone} onChange={handleChange} />
                <input type="text" name="address" placeholder="Address"
                    value={formData.address} onChange={handleChange} />

                <button className="btn btn-primary w-100 mt-3">
                    Save Contact
                </button>
            </form>
        </div>
    )
}

export default AddContact
