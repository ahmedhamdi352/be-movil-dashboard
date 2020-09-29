import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Card from './card';
import axios from 'axios';
import {SERVER_URL} from '../config/config';
import {isEmpty} from 'lodash'

const Plan = ({config}) => {
    const [plans,setPlans]=useState({})

    useEffect(() => {
        const fetchPlans = async () => {
          try {
            const data = await axios.post(`${SERVER_URL}/api/v1/plans`,
            {
               stripe_key:config.stripe_key
            })
        //    console.log(data.data.data)
           setPlans(data.data.data)
           
          } catch (err) {
            console.error('Vailed to get plans');
          }
        };
        fetchPlans();
    
      },[])

     const renderPlans = (plans) =>{
         console.log(plans)
         return plans.map((d,v)=>{
              return (
                  <Card data={d}/>
              )
          })
      }
    return (
        <div>
          test
       </div>
    )
}

const mapStateToProps = ({user}) => ({
    config :user.config
    
})

const mapDispatchToProps = (dispatch) => ({

    
})

export default connect(mapStateToProps, mapDispatchToProps)(Plan)
