import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyNotes = () => {
  const [userNotes, setUserNotes] = useState([]);
  const [userId, setUserId] = useState('');


  // Fetch notes by a specific user
  const fetchUserNotes = async () => {
      try {
          const response = await axios.get(`http://hyeumine.com/mynotes.php?id=${userId}`);
          // Assuming the JSON structure you provided, you might need to adjust how you set the notes
          setUserNotes(response.data.notes);
      } catch (error) {
          console.error('Error fetching user notes:', error);
      }
  };

  return (
    <div className='register' style={{display:'grid', justifyContent:'center', margin:'0', width:'auto', marginTop:'50px'}}>
      <div style={{height: '100px', width:'250px', display:'grid', justifyContent:'center',padding:'20px', border:'2px solid black'}}> 
            <h2 style={{margin:'0'}}>User Notes</h2>
            <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} style={{marginBottom:'5px'}}/>
            <button onClick={fetchUserNotes}>Fetch User Notes</button>
        </div>
        {userNotes.map((note, index) => (
                // Use index as a key if note objects don't have a unique id
                <div style={{width:'100%', height:'15px', border:'1px solid grey', marginTop:'5px', fontSize:'10px', display:'flex', justifyContent:'space-between', padding:'5px'}}>
                <div key={index} >{note[0]}</div>
                <div key={index} >{note[1]}</div>
                </div> // Assuming each note is an array with the note text as the first element
            ))}
      </div>
  );
};

export default MyNotes;