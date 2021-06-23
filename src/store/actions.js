import {ADD_COUNT ,ADD_TO_CART} from './mutations-types.js'

export default{
	addCart(context , payload){
		return new Promise((resolve, reject) => {
			let oldProduct = context.state.cartList.find( item => item.iid === payload.iid)
			if(oldProduct){
				// oldProduct.count += 1
				context.commit(ADD_COUNT,oldProduct)
				resolve('该商品数量加一')
			}else{
				payload.count = 1
				context.commit(ADD_TO_CART,payload)
				resolve('添加商品至购物车成功')
			}
		})
	}
}