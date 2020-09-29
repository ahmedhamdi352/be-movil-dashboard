import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import {SERVER_URL} from '../config/config';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({data}) {
  const classes = useStyles();

  const initialValues = {
    valid_msg: '',
    unvalid_msg: ''
  }


  const validationSchema = Yup.object({
    valid_msg: Yup.string().required('Required'),
    unvalid_msg: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
   
  }
 

  return (
    <Card className={classes.root}>
    <CardHeader
        subheader={data.nickname?"Name:"+data.nickname:null}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
         
          <Form className='form'>
            <FormikControl
              control='input'
              // control='chakraInput'
              type='text'
              label='Valied Message'
              name='valid_msg'
            />
            <FormikControl
              control='input'
              type='text'
              label='Unvalid Message'
              name='unvalid_msg'
            />
            <button type='submit' disabled={!formik.isValid} className='form-btn'>save</button>
          </Form>
        )
      }}
    </Formik>
         
        </Typography>
      </CardContent>

    </Card>
  );
}
