import React, { useEffect } from 'react'
import Swal from "sweetalert2"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {

    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        getContacts()
    }, [])

    const getContacts = () => {
        fetch('https://playground.4geeks.com/contact/agendas/emily')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'SET_CONTACT', payload: data.contacts })
            })
            .catch((error) => console.log(error.message))
    }

    const handleDelete = (contact) => {
        Swal.fire({
            text: `Deseas eliminar al contacto ${contact.name}?`,
            showCancelButton: true,
            confirmButtonColor: "#e11616",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteContact(contact.id)
            }
        });
    }

const deleteContact = (id) => {
    fetch(`https://playground.4geeks.com/contact/contacts/${id}`, {
        method: 'DELETE',
    })
    .then((response) => {
        if (response.status === 404) {
            dispatch({ type: 'DELETE_CONTACT', payload: id })
            Swal.fire("Eliminado!", "", "success");
        }
    })
    .catch((error) => console.log(error.message))
}

    return (
        <div className="container">
            <h1>Contact List</h1>

            {
                store.contacts?.map((contact) => (
                    <div key={contact.id} className='card my-2 position-relative'>
                        <span className='position-absolute top-50 end-0 translate-middle'>
                            <FaTrash
                                className='text-danger'
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleDelete(contact)}
                            />
                        </span>
                        <div className="card-body">
                            <p>Name: {contact.name}</p>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                            <p>Address: {contact.address}</p>
                            <Link to={`${contact.id}/edit`}>Edit</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
