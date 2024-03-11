import React, { useState } from 'react';
import axios from 'axios';

const NewNote = () => {
    const [userId, setUserId] = useState('');
    const [note, setNote] = useState('');

    // Add a new note
    const addNewNote = async () => {
        const formData = new FormData();
        formData.append('id', userId);
        formData.append('note', note);

        try {
            await axios.post('http://hyeumine.com/newnote.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            // Optionally, you can fetch all notes again to update the list
            alert('New Note Successfully added');
            setNote('');
            setUserId('');
        } catch (error) {
            console.error('Error adding new note:', error);
        }
    };

    return (
        <div className='register' style={{display:'grid', justifyContent:'center', margin:'0', width:'auto', marginTop:'50px'}}>
        <div style={{height: '120px', width:'250px', display:'grid', justifyContent:'center',padding:'20px', border:'2px solid black'}}> 
            <h2 style={{margin:'0'}}>Add New Note</h2>
            <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} style={{marginBottom:'5px'}}/>
            <input type="text" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} style={{marginBottom:'5px'}}/>
            <button onClick={addNewNote}>Add Note</button>
        </div>
        </div>
    );
};

export default NewNote;