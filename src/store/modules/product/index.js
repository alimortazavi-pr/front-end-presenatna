import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = {
    state(){
        return{
            box : {},
            card : {},
            gifts : [],
            giftBoxes : [],
            message : '',
            price : 0,
        }
    },
    getters,
    mutations,
    actions
}

export default store;