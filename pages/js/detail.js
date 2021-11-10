export default{
    name: 'detail',
    data(){
        return {
            isVisibleModal: false,
            isVisibleToast: false,
            isVisibleBottomSheet: false
        }
    },
    methods: {
        toggleModal(bool){
            this.isVisibleModal = bool
        },
        showToast(){
            this.isVisibleToast = true
            setTimeout(()=>{
                this.isVisibleToast = false
            }, 3000)
        },
        toggleBottomSheet(bool){
            this.isVisibleBottomSheet = bool
        }

    }
}