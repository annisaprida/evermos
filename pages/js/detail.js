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
    methods: {
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
        }
    }
}