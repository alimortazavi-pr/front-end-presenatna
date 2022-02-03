import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = {
    state(){
        return{
            login : null,
            user : {}
        }
    },
    getters,
    mutations,
    actions
}

export default store;