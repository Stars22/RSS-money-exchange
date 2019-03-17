module.exports = function makeExchange(currency) {
    const exchange = {};
    function exchangeCalc(coinValue, coinName){
        if(Math.floor(currency / coinValue) > 0) {
            exchange[coinName] = Math.floor(currency / coinValue);
            currency -= exchange[coinName] * coinValue; 
        }
    }
    coinVals= {H: 50, Q: 25, D: 10, N: 5, P: 1}
    if( currency <= 0) {
        return exchange;
    }
    if( currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    for (let coinName in coinVals) {
        exchangeCalc(coinVals[coinName], coinName)
    }
    return exchange;
}
