import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	const user = ref<User>({
		id: 0,
		name: '',
		surname: '',
		email: '',
		photo_path: '',
		status: '',
		about: '',
	});
	const cookie = useCookie('access_token').value;

	const getUserInfo = async () => {
		try {
			const { data: response, error } = await useFetch<User>('/user', {
				baseURL: import.meta.env.VITE_APP_API_URL,
				method: 'get',
				credentials: 'include',
			});

			user.value = response.value;
		} catch (e) {
			console.log(e);
		}
	};

	return { user, cookie, getUserInfo };
});