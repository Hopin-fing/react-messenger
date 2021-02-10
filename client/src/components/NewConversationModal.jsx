import React, {Fragment, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useContacts} from "../context/ContactsProvider";
import {useConversations} from "../context/ConversationsProvider";

function NewConversationModal({closeModal}) {
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const {contacts} = useContacts()
    const { createConversation} = useConversations()

    const handleSubmit = (e) => {
        e.preventDefault()


        createConversation(selectedContactIds)
        closeModal()
    }
    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds( prevSelectedContactIds => {
            if(prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            }else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    return (
        <Fragment>
            <Modal.Header closeButton>
                Create Conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controllId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">
                        Create
                    </Button>
                </Form>
            </Modal.Body>
        </Fragment>
    );
}

export default NewConversationModal;