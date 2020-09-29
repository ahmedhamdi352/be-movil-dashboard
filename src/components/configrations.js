import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import './configration.css'
import {SERVER_URL} from '../config/config';
import axios from 'axios';
import UserActionsTypes from "../redux/user/user.types"
import Alert from '@material-ui/lab/Alert';

const Configrations=({SetConfig})=> {
const [success,setSuccess]=React.useState(false)
const initialValues = {
    auth_key: '',
    stripe_key: ''
}
const validationSchema = Yup.object({
    auth_key: Yup.string().required('Required'),
    stripe_key: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
    return axios.post(`${SERVER_URL}/api/v1/admin/Configuration/`,values)
    .then(({data})=>{
     console.log(data)
     setSuccess(true)
     setTimeout(()=>setSuccess(false),2000)
     SetConfig(values)
    })

    .catch(err=>{
     console.log(err)
   })
  
  }
    return (
    <div className='form-container'>
        {success&&<Alert severity="success">This is a success alert — check it out!</Alert>}

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
                  label='Auth0 Key'
                  name='auth_key'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='stripe key'
                  name='stripe_key'
                />
                <button type='submit' disabled={!formik.isValid} className='form-btn'>Save</button>
              </Form>
            )
          }}
        </Formik>
    </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    SetConfig:(payload)=>{
      dispatch({
        type:UserActionsTypes.SET_CONFIG,
        payload
      })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Configrations)
