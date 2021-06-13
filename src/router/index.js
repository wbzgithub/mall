import { createRouter, createWebHistory } from 'vue-router'
 
 const Home = () => import('../views/home/Home')
 const Cart = () => import('../views/cart/Cart.vue')
 const Category = () => import ('../views/category/Category.vue')
 const Profile = () => import ('../views/profile/Profile')
 const Detail = () => import ('../views/detail/Detail')
 
const routes= [
	{
		path:'',
		redirect: '/home'
	},
	{
		path: '/home', 
		component: Home
	},
	{
		path: '/category', 
		component: Category
	},
	{
		path: '/cart', 
		component: Cart
	},
	{
		path: '/profile', 
		component: Profile
	},
	{
		path: '/detail/:iid', 
		component: Detail
	},
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router