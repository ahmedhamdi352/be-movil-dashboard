import { Table, Modal, Space, Row, message } from 'antd';
import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons'
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {SERVER_URL} from '../config/config';
import {filter} from 'lodash'
import AddActionType from "../redux/adds/add.types"
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import '../App.css'
import {isEmpty} from 'lodash'



const EditAction=({setRowData,RowData,history})=>{

  const[Error,setError]=React.useState(false);
  const [uploadimage,setUploadImage]=useState('')
  let initialValues={}

  if(!isEmpty(RowData)){
     initialValues = {
        name: RowData.name,
        matching_web: RowData.matching_web,
        redirect_link: RowData.redirect_link,
        // image:'',
    
      }
  }
  else {

      initialValues = {
       name: '',
       matching_web: '',
       redirect_link:'',
    //    image:'',
    
     }
  }
  

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    matching_web: Yup.string().required('Required'),
    redirect_link: Yup.string().required('Required'),
    // image: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
    const requestData= new FormData();
    requestData.append('image',uploadimage,uploadimage.name)
    requestData.append('name', values.name);
    requestData.append('matching_web', values.matching_web);
    requestData.append('redirect_link', values.redirect_link);

    // requestData.append(...values)
    for (var [key, value] of requestData.entries()) { 
        console.log(key, value);
       }
    // console.log(uploadimage,uploadimage.name)
    // values.image={...uploadimage}
    

    return axios.post(`${SERVER_URL}/api/add/${RowData.id}`,requestData)
    .then(({data})=>{
        message.success('Add Updated')
        history.push('/')
    })

    .catch(err=>{
     console.log(err)
   })
  }
const fileHandler =(event)=>{
    console.log(event.target.files[0])
    setUploadImage(event.target.files[0])

}
    
     return (
         <>
         <p style={{
          textAlign:'center',
          fontSize:'25px',
          fontWeight:'bold',
          color:'#ffff',
          backgroundColor:'#001529'
         }}>Edit Adds</p>
         <label>Image</label>
        <input type="file" id="image" onChange={fileHandler} name='image' />

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
                label='name'
                name='name'
              />
              <FormikControl
                control='input'
                type='text'
                label='Matching WebSite'
                name='matching_web'
              />
              <FormikControl
                control='input'
                type='text'
                label='Redirect Link'
                name='redirect_link'
              />
              {/* <FormikControl
                control='input'
                type='file'
                label='Image'
                name='image'
              /> */}
              
              <button type='submit' disabled={!formik.isValid} className='form-btn'>Update</button>
            </Form>
             )
            }}
        </Formik>
        </>
     )
    
}

const mapStateToProps = ({add}) => ({
    RowData :add.RowData
    
})

const mapDispatchToProps = (dispatch) => ({
    setRowData:(payload)=>{
      dispatch({
        type:AddActionType.SET_ROW_DATA,
        payload
      })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAction)

