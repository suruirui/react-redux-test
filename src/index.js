import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import UserList from './UserList'
import './index.css'

const userReducer = (state=[],action) =>{
	switch(action.type){
		case 'ADD_USER':
			return [...state,action.user]
		case 'DELETE_USER':
			return [...state.slice(0,action.index),...state.slice(action.index+1)]
		case 'UPDATE_USER':
			return [...state.map((user,index)=>{
				if(index === action.index){
					return {...user,...action.user}
				}else{
					return user;
				}
			})]
		default:
			return state;
	}
	
}
const store = createStore(userReducer);

class Index extends Component{
	render(){
		return(
			<div>
				<UserList />
			</div>
		)
	}
}

ReactDom.render(<Provider store={store}>
		<Index />
	</Provider>,document.getElementById('root'));