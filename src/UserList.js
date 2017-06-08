import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import User from './User'
class UserList extends Component{
	constructor(){
		super();
		this.state = {
			username :'',
			age:'',
			gender:''
		}
	}
	render(){
		const {username,age,gender} = this.state;
		const {addUser,deleteUser,users} = this.props;
		return(
			<div>
        		{/* 输入用户信息，点击“新增”按钮可以增加用户 */}
		        <div>
		          <div>Username: <input type='text' value={username} onChange={e=>this.setState({username:e.target.value})} /></div>
		          <div>Age: <input type='number' value={age} onChange={e=>this.setState({age:e.target.value})} /></div>
		          <div>Gender:
		            <label>Male: <input type='radio' onChange={e=>this.setState({gender:e.target.value})} name='gender' value='male' /></label>
		            <label>Female: <input type='radio' onChange={e=>this.setState({gender:e.target.value})} name='gender' value='female' /></label>
		          </div>
		          <button onClick={()=>addUser(this.state)}>增加</button>
		        </div>
	        {/* 显示用户列表 */}
	        <div>
	        	{
	        		users.map((user,index)=>
	        			<User user={user} deleteUser={deleteUser} index={index} key={index}/>
	        		)
	        	}
	        </div>
	      </div>
		);
	}
}
//需要注入的props
const mapStateToProps = (state)=>{
	return {
		users:state
	}
}
//需要注入的函数
const mapDispatchToProps = (dispatch) =>{
	return {
		addUser:(user)=>{
			dispatch({
				type:'ADD_USER',
				user
			})
		},
		deleteUser:(index)=>{
			dispatch({
				type:'DELETE_USER',
				index:index
			})
		}
	}
}

//通过connect高阶组件，将需要的值或者函数作为props传入
UserList = connect(mapStateToProps,mapDispatchToProps)(UserList);
export default  UserList;