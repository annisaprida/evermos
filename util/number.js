export function toCurrencyFormat (amount) {
    return amount? 'Rp' + amount.toLocaleString("id-ID") : 0
}