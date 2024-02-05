import { useUserStore } from '~/stores/userStore';


export default defineNuxtRouteMiddleware(async (to, from) => {
	const cookie = useUserStore().cookie

	if (cookie && to.path === '/login') {
		return navigateTo('/profile')
	} else if (!cookie && to.path === '/profile') {
		return navigateTo('/login')
	}
});