export default{
    login({commit},payload){
        commit("login",payload);
    },
    notLogin({commit}){
        commit("notLogin");
    },
    logOut({commit}){
        commit("logOut");
    }
}