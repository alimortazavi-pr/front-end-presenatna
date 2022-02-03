export default{
    loading({commit},payload){
        commit("loading",payload);
    },
    cart({commit},payload){
        commit("cart",payload);
    },
}