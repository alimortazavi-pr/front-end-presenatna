export default{
    login(state,payload){
        state.login = true;
        state.user = {...payload.user,token : payload.token}
    },
    notLogin(state){
        state.login = false;
        state.user = {};
    },
    logOut(state){
        state.login = false;
        state.user = {};
    }
}
