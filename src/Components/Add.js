import React, { useState, useEffect } from 'react';
import { Button, Container, Input, TextField } from '@material-ui/core';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import db from '../firebase.config';
import firebase from '@firebase/app';
import '@firebase/storage';
import { Link } from 'react-router-dom';

const Add = ({}) => {
  const [contents, setContents] = useState('<p>Hello! State</p>');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    // this shows the last value of gridData setted by the other useEffect
    const storage = firebase.storage();

    if (image != null) {
      const uploadTask = storage
        .ref(`images/${image.name}`)
        .put(image)
        .then((snapshot) => {
          return snapshot.ref.getDownloadURL(); // Will return a promise with the download link
        })

        .then((downloadURL) => {
          console.log(
            `Successfully uploaded file and got download link - ${downloadURL}`
          );
          setUrl(downloadURL);
        })

        .catch((error) => {
          // Use to signal error if something goes wrong.
          console.log(`Failed to upload file and get link - ${error}`);
        });
    }
  }, [image]);

  const submitHandler = (event) => {
    const today = new Date();
    const timeReq = Math.round(contents / 200);
    const data = db.collection('article');
    data.add({
      title: title,
      content: contents,
      image: url,
      timReq: timeReq === 0 ? 1 : timeReq,
      date:
        today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear(),
    });
  };

  const fileSelectedHandler = async (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Container style={{ marginTop: '25px' }} width='md'>
      <TextField
        style={{ marginBottom: '25px' }}
        id='outlined-basic'
        label='Title'
        variant='outlined'
        value={title}
        fullWidth={true}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <div style={{ marginBottom: '25px' }}>
        <label
          style={{
            fontSize: '20px',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            marginRight: '10px',
          }}
          for='file-upload'
        >
          Set Featured Image
        </label>
        <input type='file' onChange={fileSelectedHandler} />
      </div>
      <SunEditor />
      <Link
        to={{
          pathname: '/admin',
        }}
      >
        <Button
          style={{ marginTop: '25px' }}
          variant='contained'
          color='primary'
          fullWidth={true}
          size='large'
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Link>
    </Container>
  );
};

export default Add;
