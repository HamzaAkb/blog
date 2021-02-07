import { React, useEffect, useState } from 'react';
import {
  makeStyles,
  Container,
  ButtonGroup,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import db from '../firebase.config';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  addButton: {
    marginTop: '25px',
    marginBottom: '25px',
  },
});

const Admin = () => {
  const classes = useStyles();

  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = db.collection('article');
    const data = await response.get();
    let arr = [];
    data.docs.forEach((item) => {
      arr.push(item.data());
    });
    setCards(arr);
  };

  return (
    <Container width='lg'>
      <Link
        to={{
          pathname: '/admin/add',
        }}
      >
        <Button
          className={classes.addButton}
          variant='contained'
          color='primary'
          fullWidth={true}
          size='large'
        >
          Write New Article
        </Button>
      </Link>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Cards.map((card) => (
              <TableRow key={card.title}>
                <TableCell component='th' scope='row'>
                  {card.title}
                </TableCell>
                <TableCell>{card.description}</TableCell>
                <TableCell>{card.date}</TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button variant='contained' color='primary'>
                      Edit
                    </Button>
                    <Button variant='contained' color='secondary'>
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Admin;
