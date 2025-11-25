import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { useParams } from 'react-router-dom'

const EditContact = () => {

    const { store } = useGlobalReducer()
    const params = useParams()

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })

    useEffect(() => {
        const contact = store.contacts.find(
            (c) => c.id === parseInt(params.id)
        )
        if (contact) setFormData(contact)
    }, [params.id, store.contacts])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateContact(formData)
    }

    const updateContact = (info_contact) => {
        fetch(`https://playground.4geeks.com/contact/agendas/emily/contacts/${info_contact.id}`, {
            method: 'PUT',
            body: JSON.stringify(info_contact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                Swal.fire({
                    text: `Contacto ${data.name} actualizado`,
                    icon: "success",
                    timer: 1500
                })
            })
            .catch((error) => console.log(error.message))
    }

    return (
        <div className="container">
            <h1>Edit Contact</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                <input type="text" name="address" value={formData.address} onChange={handleChange} />

                <button className="btn btn-warning w-100 mt-3">
                    Update Contact
                </button>
            </form>
        </div>
    )
}

export default EditContact
