import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = {
    state(){
        return{
            loading : false,
            cart : 0,
        }
    },
    getters,
    mutations,
    actions
}

export default store;