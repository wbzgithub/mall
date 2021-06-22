import {ADD_COUNT ,ADD_TO_CART} from './mutations-types.js'

export default{
	addCart(context , payload){
		let oldProduct = context.state.cartList.find( item => item.iid === payload.iid)
		
		if(oldProduct){
			// oldProduct.count += 1
			context.commit(ADD_COUNT,oldProduct)
		}else{
			payload.count = 1
			context.commit(ADD_TO_CART,payload)
		}
	}
}