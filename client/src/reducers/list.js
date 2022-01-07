import {SET_USER,REMOVE_USER,UPDATE_USER,UPDATE_STATUS,GET_USER,GET_USERByID} from '../types'
const initialState=[];

export default function(state=initialState,action){
const {type,payload}=action 
  switch(type){
   case GET_USERByID:
       console.log(payload)
      return state.filter(p=>{return p._id===payload?p:null})
   case GET_USER:
       return payload
   case SET_USER:
       return [...state,action.payload]
   case REMOVE_USER:
       return state.filter(user=>user.id!==payload)
   case UPDATE_USER:

       return state.map(p=>{
           if(p._id===payload._id){
              p.name=payload.name;
              p.type=payload.type;
              p.description=payload.description;
           }
           return p
       })
    case UPDATE_STATUS:   
    return state.map(p=>{
           if(p._id===payload._id){
            p.isactive=payload.isactive
           }
           return p
       })       
   default :
      return state      
  }
}