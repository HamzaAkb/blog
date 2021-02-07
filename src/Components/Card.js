/* eslint-disable jsx-a11y/alt-text */
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  linkStyle: { textDecoration: 'inherit', color: 'inherit' },
});

const Cardx = (props) => {
  const classes = useStyles();

  return (
    <Card style={{ marginTop: '25px' }}>
      <Grid container>
        <Grid item xs={9}>
          <Link
            to={{
              pathname: '/article',
              data: 'hello world',
              state: {
                content: 'Hello! World',
              },
            }}
            className={classes.linkStyle}
          >
            <CardActionArea>
              <CardContent style={{ paddingBottom: '10px' }}>
                <Typography
                  style={{ fontWeight: 'bold' }}
                  component='h5'
                  variant='h5'
                >
                  {/* {Cards.length > 0 ? Cards[0].title : ''} */}
                  {props.content.title}
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  {props.content.description}
                </Typography>
                <Typography
                  style={{ display: 'inline' }}
                  variant='subtitle1'
                  color='textPrimary'
                >
                  {props.content.date}
                </Typography>
                <Typography
                  style={{
                    display: 'inline',
                    marginLeft: '25px',
                  }}
                  variant='subtitle1'
                  color='textPrimary'
                >
                  5 Min Read
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <img style={{ width: '100%' }} src={props.content.image} />
        </Grid>
      </Grid>
    </Card>
  );
};
export default Cardx;
