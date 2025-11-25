import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CardContact } from '../components/CardContact';

const Home = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = () => {
        fetch('https://playground.4geeks.com/contact/agendas/emily')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'SET_CONTACT', payload: data.contacts });
            })
            .catch((error) => console.log(error.message));
    };

    const handleDelete = (contact) => {
        Swal.fire({
            text: `Do you want to delete this contact? ${contact.name}?`,
            showCancelButton: true,
            confirmButtonColor: "#cd3f3fff",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteContact(contact.id);
            }
        });
    };

    const deleteContact = (id) => {
        fetch(`https://playground.4geeks.com/contact/agendas/emily/contacts/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.status === 204) {
                    dispatch({ type: 'DELETE_CONTACT', payload: id });
                    Swal.fire("Eliminado!", "", "success");
                }
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="container">

            {store.contacts?.map((contact) => (
                <CardContact
                    key={contact.id}
                    contact={contact}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default Home;
