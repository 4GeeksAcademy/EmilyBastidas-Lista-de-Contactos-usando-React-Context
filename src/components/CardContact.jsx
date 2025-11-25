// CardContact.jsx
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdEdit, MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { Link } from 'react-router-dom';

export const CardContact = ({ contact, onDelete }) => {

    return (
        <div className="card my-2 position-relative bg-light">
            <span className='position-absolute top-50 end-0 translate-middle'>
                <Link to={`/${contact.id}/edit`}>
                    <MdEdit className='text-dark me-2' style={{ fontSize: '1.6rem', cursor: 'pointer' }} />
                </Link>
                <FaTrash
                    style={{ fontSize: '1.6rem', cursor: 'pointer', color: '#634472ff' }}
                    onClick={() => onDelete(contact)}
                />

            </span>
            <div className="card-body d-flex align-items-center">

                <img
                    src="https://picsum.photos/60/60"
                    alt="Profile"
                    className="rounded-circle me-3"
                    style={{ width: '150px', height: '150px' }}
                />
                <div className="flex-grow-1">
                    <p>{contact.name}</p>
                    <p><MdEmail className="me-1 text-dark" />
                        {contact.email}
                    </p>
                    <p><MdLocalPhone className="me-1 text-dark" /> {contact.phone}</p>
                    <p><MdLocationOn className="me-1 text-danger" /> {contact.address}</p>
                </div>

            </div>
        </div>
    )
};
