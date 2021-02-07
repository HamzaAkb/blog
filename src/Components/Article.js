import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';

const Article = (props) => {
  const onClickHandler = () => {
    console.log(props);
  };

  return (
    <Container maxWidth='md'>
      {console.log(props)}
      <Typography variant='h2'></Typography>
      <Button onClick={onClickHandler}>Submit</Button>
    </Container>
  );
};

export default Article;
