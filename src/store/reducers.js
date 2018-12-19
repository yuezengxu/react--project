const defaultState={
	name:"",
	age:"",
	sign:"",
	todoList:[],
	list:[],
	ModifyIndex:-1,
	ModifyItem:{
		name:"",
		age:'',
		sign:""
	}
}
export default (state=defaultState,action)=>{
	switch(action.type){
		
		case "CHANGE_ACTION":
		let changeState=JSON.parse(JSON.stringify(state))
		
		switch(action.idx){
			case 1:
			changeState.name=action.value;
			break;
			case 2:
			changeState.age=action.value;
			break;
			case 3:
			changeState.sign=action.value;
			break;
			
		}
		return changeState
		case "ADD_ACTION":
		let changeAdd=JSON.parse(JSON.stringify(state));
		let obj={}
		obj.name=changeAdd.name
		obj.age=changeAdd.age
		obj.sign=changeAdd.sign
		changeAdd.todoList.push(obj)
		changeAdd.name=''
		changeAdd.age=""
		changeAdd.sign=""
		return changeAdd
		
		case "MODIFY_ACTION":
		let ModifyState=JSON.parse(JSON.stringify(state));
		 ModifyState.ModifyIndex=action.idx
		//console.log(ModifyState.todoList)
		ModifyState.ModifyIndex=action.idx
		ModifyState.ModifyItem.name=ModifyState.todoList[action.idx].name
		ModifyState.ModifyItem.age=ModifyState.todoList[action.idx].age
		ModifyState.ModifyItem.sign=ModifyState.todoList[action.idx].sign
		return ModifyState
		
		case "MODIFY_ITEM":
		let Modifychange=JSON.parse(JSON.stringify(state));
			
		switch(action.idx){
			case 1:
			Modifychange.ModifyItem.name=action.title;
			break;
			case 2:
			Modifychange.ModifyItem.age=action.title;
			break;
			case 3:
			Modifychange.ModifyItem.sign=action.title;
			break;
			
		}
		return Modifychange
		case "MODIFY_OK":
		let Okmodify=JSON.parse(JSON.stringify(state));
		let arr=Okmodify.todoList
		//console.log(Okmodify.ModifyIndex)
		arr.splice(Okmodify.ModifyIndex,1,Okmodify.ModifyItem)
		return Okmodify
		
		case "DEL_ACTION":
		let DelItem=JSON.parse(JSON.stringify(state));
		DelItem.todoList.splice(action.idx1,1)
		return DelItem
		
		
		
		case "GET_DATA_FULFILLED":
		console.log(action.payload.movieList)
		let GetItem=JSON.parse(JSON.stringify(state));
		GetItem.list=action.payload.movieList
		return GetItem
	}
	return state
}
