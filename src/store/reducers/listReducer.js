const defaultState = {
    dataList:[]
}

export default(state=defaultState,action)=>{
    // console.log(action.type)
    switch(action.type){
        case "GET_ASYNC_ACTION_FULFILLED" :
        let dataState = JSON.parse(JSON.stringify(state));
        // console.log(action.payload.data.shopList)
        dataState.dataList = action.payload.data.shopList;
        // console.log(dataState);

        return dataState
    }
    return state
}