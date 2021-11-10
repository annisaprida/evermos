export default{
    name: 'Modal',
    methods: {
        onClose(e) {
            this.$emit('onClose')
        }
    }
}