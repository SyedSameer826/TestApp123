import React from 'react'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {setUser,updateUser} from '../../actions/list'
import PropTypes from 'prop-types'
import {useLocation,useNavigate} from 'react-router'
const Form = ({setUser,updateUser}) => {
const history=useNavigate();    
var [id,SetId]=useState('');
var [name,SetName]=useState('');
var [type,SetType]=useState('');
var [description,SetDescription]=useState('');
var {state}=useLocation();
  async function formSubmit(e){
   var obj={};
   obj.name=e.target.name.value;
   obj.type=e.target.type.value;
   obj.description=e.target.description.value;
   obj.isactive=true;
   console.log(obj);
   if(id==''){
       setUser(obj);
   }else{
     obj._id=id
    updateUser(obj);
   }
   history('/');
  }
  var style ={
      width:'30%',
      margin:'10px 0px 0px 0px'      
  }
  var style1 ={
    width:'31%',
    margin:'10px 0px 0px 0px'      
}
var style2 ={
    width:'26%',
    height:'50px',
    margin:'10px 0px 0px 0px'      
}
useEffect(async()=>{
    console.log(state.name);
    if(state!==null){
        SetId(state._id);
        SetName(state.name);
        SetType(state.type);
        SetDescription(state.description);
        //console.log(id)
        // document.getElementById("name").value=state.name;
        // document.getElementById("type").value=state.type;
        // document.getElementById("description").value=state.description;
    }
},[])

    return (
    <div className="App">
        <h1>Register</h1>
        <form onSubmit={e=>{
            e.preventDefault();
            formSubmit(e);
        }}>
          <label htmlFor='name' >Name :</label>
          <input style={style} name='name' value={name} onChange={e=>SetName(e.target.value)} type="text" placeholder="Name"/>
          <br />
          {/* <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Email"/> */}
          <label htmlFor='type' >Type :</label>
          <select style={style1} name='type' value={type} onChange={e=>SetType(e.target.value)}>
          <option value="">Select</option>
          <option value='registered'>Registered</option>
          <option value='unregistered'>Unregistered</option>
          </select>
          <br />
          <label htmlFor='description' >Description :</label>
          <textarea style={style2} value={description} onChange={e=>SetDescription(e.target.value)} name='description' placeholder='Enter the description'/>
          <br />
          <input  type='submit' value='Register' />
        </form>
    </div>
    )
}
Form.propTypes={
    setUser:PropTypes.func.isRequired,
    getUserById:PropTypes.func.isRequired,
    updateUser:PropTypes.func.isRequired,
}
export default connect(null,{setUser,updateUser})(Form);