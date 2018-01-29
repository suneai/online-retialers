
//价格处理
let currency = function (price , sign ,type , num) {
    let isSign = sign?sign : '¥';
    let isNum = num?num : 2;
    let isType = type?type : 2;
    switch (isType) {
        case 1:
            //$1,000,300的形式
            let isPrice = priceFilter(price);
            return isSign + isPrice  ;
            break;
        case 2:
            //¥10003.00的形式
            return isSign + (price*1).toFixed(isNum)  ;
            break;
    
        default:
            break;
    }
}


function priceFilter(n) {

    if (!n) return 0;

    // 小数
    let pattern = /^[+-]?[1-9]?[0-9]*\.[0-9]*$/;
    if (pattern.test(n)) {
        n = n + '';
        const integer = n.split('.')[0];
        const decimals = ('.' + n.split('.')[1]);
        let len = integer.length;
        if (len <= 3) return integer + decimals;
        let r = len % 3;
        return r > 0 ? integer.slice(0, r) + "," + integer.slice(r, len).match(/\d{3}/g).join(",") + decimals : '' + integer.slice(r, len).match(/\d{3}/g).join(",") + decimals;
    }
    // 整数
    let b = parseInt(n).toString();
    let len = b.length;
    if (len <= 3) return '' + b;
    let r = len % 3;
    return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : '' + b.slice(r, len).match(/\d{3}/g).join(",");

}

export default currency;