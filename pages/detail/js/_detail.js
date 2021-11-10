import { mapActions, mapGetters } from 'vuex'
import { toCurrencyFormat } from '@/util/number'

export default{
    name: 'detail',
    data(){
        return {
            isVisibleModal: false,
            isVisibleToast: false,
            isVisibleBottomSheet: false,
            isWishlistToast: false
        }
    },
    created(){
        this.getProductById()
    },
    computed: {
        ...mapGetters('product', [ 'selectedProduct' ]),
    },
    methods: {
        ...mapActions({
            getSelectedProduct: 'product/getSelectedProduct'
        }),
        getProductById(){
            this.getSelectedProduct({data:this.$route.params.detail})
        },
        toggleModal(bool){
            this.isVisibleModal = bool
        },
        showToast(type){
            this.isVisibleToast = true
            setTimeout(()=>{
                this.isVisibleToast = false
            }, 3000)
            this.isWishlistToast = type === 'wishlist'
        },
        toggleBottomSheet(bool){
            this.isVisibleBottomSheet = bool
        },
        toCurrencyFormat(amount){
            return toCurrencyFormat(amount)
        }
    }
}