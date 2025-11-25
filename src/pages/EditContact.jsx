import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const EditContact = () => {
    const { store, dispatch } = useGlobalReducer()
    const params = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
        address: ""
    })


    useEffect(() => {
        const contact = store.contacts.find(c => c.id === parseInt(params.id))
        if (contact) setFormData({ ...contact })
    }, [params.id, store.contacts])


    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }


    const handleSubmit = e => {
        e.preventDefault()
        if (!formData.id) {
            alert("No se puede actualizar: id del contacto no encontrado")
            return
        }
        updateContact()
    }

    const updateContact = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/emily/contacts/${formData.id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (!res.ok) throw new Error(`Error: ${res.status}`)
                return res.json()
            })
            .then(data => {

                Swal.fire({
                    text: `Contacto ${data.name} actualizado`,
                    icon: 'success',
                    timer: 1500
                })

                dispatch({ type: 'UPDATE_CONTACT', payload: data })

                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">

            <h3 className='mb-5'>Edit Contact</h3>

            <form onSubmit={handleSubmit}>

                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-control my-2" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-control my-2" />
                <input type="tel" name="telf" value={formData.phone} onChange={handleChange} placeholder="Phone" className="form-control my-2" />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-control my-2" />

                <button type="submit" className="btn w-100 mt-3" style={{ color: "white", backgroundColor: '#634472ff' }}>
                    Update Contact
                </button>

            </form>

        </div>
    )
}

export default EditContact
