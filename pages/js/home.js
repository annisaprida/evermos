import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'home',
    created() {
        this.getProductList()
    },
    computed: {
        ...mapGetters('product', [ 'productList' ]),
    },
    methods: {
        ...mapActions({
            getProductList: 'product/getProductList'
        }),
        toggleModal(bool) {
            this.isVisibleModal = bool
        },
        showToast(type) {
            this.isVisibleToast = true
            setTimeout(() => {
                this.isVisibleToast = false
            }, 3000)
            this.isWishlistToast = type === 'wishlist'
        },
        toggleBottomSheet(bool) {
            this.isVisibleBottomSheet = bool
        }
    }
}