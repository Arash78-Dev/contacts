const is = []
const reducer = (state=is,action)=> {

        switch(action.type) {
            case "ADD_CONTACT":
            state=[...state,action.payload];
            return state

            case "DEL_CONTACT":
            state=state.filter((item,id)=>id!==action.payload);
            return state


            case "EDIT_CONTACT":
            console.log(state[0].id);
            console.log(action.payload.id);
            let updatestate=state.map((item)=>{
                if (item.id===action.payload.id) {
                    return action.payload
                }
                else {
                    return item
                }
            })
            console.log(updatestate);

            state=updatestate;
            return state


            

            default: return state   
                
        }
}

export default reducer


