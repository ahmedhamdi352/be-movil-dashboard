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
    email: '',
    password: ''
  }


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
    return axios.post(`${SERVER_URL}/api/v1/login/`,values)
    .then(({data})=>{
      setCurrentUser(data.success.user_id)
      history.push('/home') 
      localStorage.setItem('tk', data.success.token);
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
              // control='chakraInput'
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
            <button type='submit' disabled={!formik.isValid} className='form-btn'>Login</button>
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
