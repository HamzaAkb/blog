import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles({
  mainText: {
    flexGrow: '1',
    textTransform: 'uppercase',
    marginLeft: '15px',
    fontWeight: 'bold',
  },
  searchDiv: {
    margin: '0px 60px',
    border: '1px solid grey',
    borderRadius: '20px',
  },
  search: {
    marginLeft: '8px',
  },
});

const Appbar = () => {
  const classes = useStyles();

  return (
    <AppBar color='inherit' position='sticky'>
      <Toolbar style={{ marginLeft: '60px' }}>
        <BookIcon fontSize='large' />

        <Typography className={classes.mainText} variant='h4'>
          Hamza
        </Typography>
        <div className={classes.searchDiv}>
          <InputBase className={classes.search} placeholder='Search' />
          <IconButton type='submit'>
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
