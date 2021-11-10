export const state = () => ({
    productList: [],
    selectedProduct: {}
})

export const getters = {
    productList(state) {
        return state.productList
    },
    selectedProduct (state) {
        return state.selectedProduct
    }
}
export const mutations = {
    setProductList(state, value) {
        state.productList = value
    },
    setSelectedProduct(state, value) {
        state.selectedProduct = value
    }
}

export const actions = {
    async getProductList({ commit }) {
        const productList = await this.$axios.$get('https://my-json-server.typicode.com/annisaprida/evermos/products')
        commit('setProductList', productList)
    },
    async getSelectedProduct({ commit }, {data}) {
        const selectedProduct = await this.$axios.$get('https://my-json-server.typicode.com/annisaprida/evermos/products/'+data)
        commit('setSelectedProduct', selectedProduct)
    }
}