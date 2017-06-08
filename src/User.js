import React,{Component} from 'react'

export default class User extends Component{
	render(){
		 const { user,deleteUser,index } = this.props
	   	  return (
		      <div>
		        <div>用户名: {user.username}</div>
		        <div>年龄: {user.age}</div>
		        <div>性别: {user.gender}</div>
		        <button onClick={()=>deleteUser(index)}>删除</button>
		      </div>
	      )
	}
}