import { Table, Modal, Space, Button,Input  } from 'antd';
import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons'
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {SERVER_URL} from '../config/config';
import {filter} from 'lodash'
import AddActionType from "../redux/adds/add.types"
import { connect } from 'react-redux'

const Adds=({setCurrentData,addData, history, setRowData})=>{
    const [editRecord,seteditRecord]=useState(false)
    // const [recordData,serRecordData]=useState({})
    const [dataRecord,setDateRecord]=useState({})
    const [visible,setVisble]=useState(false)

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
      
        {
          title: 'User PDF',
          dataIndex: 'matching_web',
          key: 'matching_web',
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
                <EditTwoTone onClick={()=>handelEdit(record)}/>
                <DeleteTwoTone onClick={()=>handeldelete(record)}/>
            </Space>
          ),
        },
      ];
const handelEdit = (d)=>{

history.push('/edit')
setRowData(d);
    // setDateRecord(d)
    // seteditRecord(true)
}
 const handeldelete=(d)=>{
    setVisble(true)
    setDateRecord(d)
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
            const data = await axios.get(`${SERVER_URL}/api/adds/`)
           console.log(data.data)
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

