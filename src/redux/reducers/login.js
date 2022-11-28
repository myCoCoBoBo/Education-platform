const initState={role:'',nickname:''};
export function loginReducer(perState=initState,action){
    const {type,payload}=action;
    if(type=="add"){
        return payload
    }
    return perState
} 
