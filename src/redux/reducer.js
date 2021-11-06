const is = [];
const reducer = (state=is,action)=> {

        switch(action.type) {
            case "ADD_CONTACT":
            state=[...state,action.payload];
            

            default: return state   
                
        }
}

export default reducer


