export const state = () => ({
    productList: []
})

export const getters = {
    productList(state) {
        return state.productList
    }
}
export const mutations = {
    setProductList(state, value) {
        state.productList = value
    }
}

export const actions = {
    async getProductList({ commit }) {
        const productList = await this.$axios.$get('https://my-json-server.typicode.com/annisaprida/evermos/products')
        commit('setProductList', productList)
    }
}