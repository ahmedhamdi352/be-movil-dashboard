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
import logo1 from '../assest/images/Group5216@2x.png'
import logo2 from '../assest/images/Group5032@2x.png'


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
    password: 'khaled39052159'
  }


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
    // return axios.post(`${SERVER_URL}api/token/`,values)
    // .then(({data})=>{
    //   console.log(data)
    //   history.push('/home') 
    //   localStorage.setItem('tk', data.access);
    // })
    
    // .catch(err=>{
    //   setError(true)
    //   setTimeout(()=>setError(false),2000)
    // })
    localStorage.setItem('tk', 'dsd')
    history.push('/home')
    setCurrentUser({"user":"ahmed"})
  }

  return (
    <div className='loginRoot'>
      <div className='imgcontiner'>
        <img src={logo1} style={{marginRight:'10px',maxWidth:'20%'}}/>
        <img src={logo2} style={{marginLeft:'10px',maxWidth:'60%'}}/>
      </div>

   
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
    {/* <p onClick={()=>history.push('signup')}>sign Up</p> */}
    </div>
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
