import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import '../App.css'
import {SERVER_URL} from '../config/config';
import axios from 'axios';
import { connect } from "react-redux";
import UserActionsTypes from "../redux/user/user.types"
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function LoginForm ({setCurrentUser,history}) {

  const[Error,setError]=React.useState(false);
  const classes = useStyles();
  
  const initialValues = {
    email: 'khaledzaki@home.com',
    password: 'khaled39052159',
    first_name:'as',
    last_name:'sa'
  }


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
    return axios.post('http://10.1.1.46:8000/adminpanel/user/',values)
    .then(({data})=>{
      console.log(data)
    //   setCurrentUser(data.access)
      history.push('/') 
    })

    .catch(err=>{
      setError(true)
      setTimeout(()=>setError(false),2000)
   })
  }

  return (
    <div className='LogContainer'>
    {Error&&<div className={classes.root}><Alert severity="error">Invalid Credentials</Alert></div>}
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
                type='text'
                label='First Name'
                name='first_name'
              />
            <FormikControl
              control='input'
              type='text'
              label='Last Name'
              name='last_name'
            />
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <button type='submit' disabled={!formik.isValid} className='form-btn'>sign Up</button>
          </Form>
         
        )
      }}
    </Formik>
    </div>
  )
}


const dispatchToProps = (dispatch) => ({
setCurrentUser:(payload)=>{
  dispatch({
    type:UserActionsTypes.SET_CURRENT_USER,
    payload
  })
}
});

export default connect(null, dispatchToProps)(LoginForm);
