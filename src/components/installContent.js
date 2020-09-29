import { Table, } from 'antd';
import React,{ useEffect} from 'react'
import axios from 'axios';
import {SERVER_URL} from '../config/config';
import AddActionType from "../redux/adds/add.types"
import { connect } from 'react-redux'

const InstallContent=({setCurrentData,addData,})=>{


    const columns = [
        {
          title: 'No Of Installations',
          dataIndex: 'install_number',
          key: 'name',
          render: text => <a>{text}</a>,
        },
      
       
      ];


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await axios.get(`${SERVER_URL}/api/install/`)
           console.log(data.data.data)
           setCurrentData(data.data.data)
           
          } catch (err) {
            console.error(err);
          }
        };
        fetchData();
    
      },[])
    
     return (
         <>
          
       <Table columns={columns} dataSource={addData} />
        
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

export default connect(mapStateToProps, mapDispatchToProps)(InstallContent)

