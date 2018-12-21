const defaultState = {
    MovieList:[],
    WillList:[],
    bannerList:[]
}

export default (state=defaultState,action)=>{
   console.log(action.type)
     switch(action.type){
        case "GET_DATA_FULFILLED":
        let ListState = JSON.parse(JSON.stringify(state));
        ListState.MovieList = action.payload;
//      console.log(action.payload)
        return ListState;
        
        case "GET_DATA1_FULFILLED":
        let WillState=JSON.parse(JSON.stringify(state));
        WillState.WillList=action.payload;
        //console.log(action.payload)
        return  WillState
        case "GET_DATA2_FULFILLED":
        let bannerState=JSON.parse(JSON.stringify(state));
        bannerState.bannerList=action.payload;
        console.log(action.payload)
        return bannerState
    }
    return state;
}