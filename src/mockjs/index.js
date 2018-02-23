

//引入mockjs
import Mock from "mockjs";

const Random = Mock.Random;

//mock产生cartList的数据
const cartList = function () {
    let list = [];
    for (let i = 0; i < 20; i++) {
        let obj = {
            title : Random.csentence(5 , 30),
            img : Random.dataImage("220x220"),
        }
        list.push(obj)
    }

    return {
        list : list
    }
    
}

//Mock.mock( url , post/get , 返回的数据),包扣请求的路径,方式和返回数据
Mock.mock('/cart/list', 'get', cartList)