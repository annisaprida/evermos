import { toCurrencyFormat } from '@/util/number'

export default {
    name: 'ProductItemList',
    props: {
        productList: {
            type: Array,
            default: []
        }
    },
    methods: {
        goToDetailPage(productId) {
            this.$router.push(`/detail/${productId}`)
        },
        toCurrencyFormat(amount){
            return toCurrencyFormat(amount)
        }
    }
}
