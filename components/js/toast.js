export default{
    name: 'BottomSheet',
    props: {
        isVisible: {
          type: Boolean,
          default: false
        }
      },
    data(){
        return {
            isVisibleToast: false
        }
    },
    methods: {
        showToast(){
            this.isVisibleToast =  true
            setTimeout(() => {
                this.isVisibleToast =  false
            }, 3000)
        },
        onClose(e) {
            this.$emit('onClose')
        }
    }
}