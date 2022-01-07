import {React,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {Redirect,Navigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getUser,updateStatus} from '../../actions/list' 
const List = ({users,getUser,updateStatus,}) => {
    const history=useNavigate();
    useEffect(function(){
    getUser();
    },[])
    var updateStatusfunc=(data)=>{
      console.log(data);
      updateStatus(data);
    }
    var editUserfunc=(data)=>{
        console.log(history);
        localStorage.setItem('_id',data._id);
        //history.push('/form');
        history('/form',{state:data});
      }
    var list=users !==null && users.length > 0 && users.map(user=>{
        return <div key={user._id} className=''>
         <h3>Name :{user.name}</h3>
         <h3>Description :</h3>
         <p>{user.description}</p>
         <h3>Type :</h3>
         <p>{user.type==='registered'?'Registered':'UnRegistered'}</p>
         <h3>Status :</h3>
         <p>{user.isactive===true?'Active':'InActive'}</p>
         <button onClick={(e)=>{e.preventDefault();editUserfunc(user)}}>Edit</button><button onClick={(e)=>{e.preventDefault();updateStatusfunc(user)}}>Change Status</button>
        </div>
     })
    return list
 }
List.propTypes={
users:PropTypes.array.isRequired,
getUser:PropTypes.func.isRequired,
updateStatus:PropTypes.func.isRequired,
editUser:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
    users:state.list
})
export default connect(mapStateToProps,{getUser,updateStatus})(List)