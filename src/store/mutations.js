import {ADD_COUNT ,ADD_TO_CART} from './mutations-types.js'
export default{
	[ADD_COUNT](state,payload){
		payload.count += 1
	},
	[ADD_TO_CART](state,payload){
		state.cartList.push(payload)
	}
}