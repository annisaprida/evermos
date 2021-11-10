export default{
    name: 'BottomSheet',
    methods: {
        onClose(e) {
            this.$emit('onClose')
        }
    }
}