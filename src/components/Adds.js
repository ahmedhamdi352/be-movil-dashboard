import { Table, Modal, Space, Button,Input  } from 'antd';
import {CheckOutlined , CloseOutlined } from '@ant-design/icons'
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {SERVER_URL} from '../config/config';
import {filter} from 'lodash'
import AddActionType from "../redux/adds/add.types"
import { connect } from 'react-redux'
import { BlobProvider,pdf } from "@react-pdf/renderer";
import {Quixote} from './pdf'
import moment from "moment";
import * as Actions from '../redux/user/user.actions'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Adds=({setCurrentData,addData, history, setRowData})=>{
  const dispatch= useDispatch()

  const counter = useSelector(state => state.user.config);
    const [editRecord,seteditRecord]=useState(false)
    // const [recordData,serRecordData]=useState({})
    const [dataRecord,setDateRecord]=useState({})
    const [visible,setVisble]=useState(false)
    const [Reload,setReload]=useState(true)


    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstname',
          key: 'name',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Last Name',
          dataIndex: 'lastname',
          key: 'name',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Created at',
          dataIndex: 'created_at',
          key: 'name',
          render: text => moment(text).format("l"),
        },
      
        {
          title: 'User PDF',
          dataIndex: 'matching_web',
          key: 'matching_web',
          render: (text,record) =><BlobProvider document={<Quixote data={record} />}>
          {({ blob, url, loading, error }) => {
            console.log(url)
       
          return   (   <a  href={url} target="_balck"  
                   style={{width:'180px',padding: '8px',marginRight:'20px'}}
                   className='btn_print'
                   type='submit'
                   variant="outlined" 
                 //   color="#000000"
                   >
                      <p className='text_print'>PDF</p>
                 </a>
          )
          }}
        </BlobProvider>,
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="large">
                <CheckOutlined onClick={()=>handelEdit(record)} style={{color:'green'}}/>
                <CloseOutlined onClick={()=>handeldelete(record)} style={{color:'red'}}/>
            </Space>
          ),
        },
      ];
const handelEdit = (d)=>{

console.log(d)
}
 const handeldelete=(d)=>{

    console.log(d)
}

const handleOk =()=>{
    console.log(dataRecord.id)
    axios.delete(`${SERVER_URL}/api/add/${dataRecord.id}`)
    .then( (response) =>{
        console.log(response);
        setCurrentData(filter(addData, function(o) { 
            console.log(o)
            return o.id!==response.data.data.id}))
     })
    .catch( (error)=> {
        console.log(error);
    })
     
    setVisble(false)

}
const handleCancel =()=>{
    setVisble(false)
}
const handelNew =()=>{
    history.push('/new-add')
}
const handelSearch = (value)=>{

    return axios.post(`${SERVER_URL}/api/search`,{ matching : value })
    .then(({data})=>{
       
       console.log(data)
       setCurrentData(data)
    })

    .catch(err=>{
     console.log(err)
   })

}

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await axios.get(`${SERVER_URL}api/wizardlist/`)
           console.log(data)
           setCurrentData(data.data)
           
          } catch (err) {
            console.error(err);
          }
        };
        fetchData();
       
    
      },[])

 const { Search } = Input;   
     return (
         <>
         <div style={{
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
             marginBottom:'7px',
         }}>
    
         </div>
       <Table columns={columns} dataSource={addData} />
       <Modal
          title="Confirm Delete"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          
          <p>Are You Sure You Want To Delete This Add</p>
        </Modal>
        
        </>
     )
    
}

const mapStateToProps = ({add}) => ({
    addData :add.AddData
    
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentData:(payload)=>{
      dispatch({
        type:AddActionType.SET_ADD_DATA,
        payload
      })
    },
    setRowData:(payload)=>{
        dispatch({
            type:AddActionType.SET_ROW_DATA,
            payload
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Adds)

