// import uuid from 'uuid';
import {SET_USER,REMOVE_USER,UPDATE_USER,UPDATE_STATUS,GET_USER,GET_USERByID} from '../types';
import axios from 'axios';
export const getUser=()=>async dispatch=>{
    try {
        const res = await axios.get('/app/users/');
        dispatch({
          type: GET_USER,
          payload: res.data
        });
      } catch (err) {
        console.log(err);
      }
  }
export const setUser=formData=>async dispatch=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      try {
        const res = await axios.post('/app/users/add-user', formData, config);
        dispatch({
            type:SET_USER,
            payload:res.data
        })
      } catch (err) {
        console.log(err);
      }
  
}
export const updateStatus=formData=>async dispatch=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      try {
        const res = await axios.post('/app/users/updatestatus', formData, config);
        console.log(res);
        dispatch({
            type:UPDATE_STATUS,
            payload:res.data
        })
      } catch (err) {
        console.log(err);
      }
  
}
export const getUserById=formData=>async dispatch=>{
      try {
        dispatch({
            type:GET_USERByID,
            payload:formData,
        })
      } catch (err) {
        console.log(err);
      }
  
}
export const updateUser=formData=>async dispatch=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      try {
        const res = await axios.post('/app/users/updateuser', formData, config);
        console.log(res);
        dispatch({
            type:UPDATE_USER,
            payload:res.data
        })
      } catch (err) {
        console.log(err);
      }
  
}