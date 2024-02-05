<script setup lang="ts">
const getUserInfo = async () => {
	try {
		const response = await $fetch('/user', {
			baseURL: import.meta.env.VITE_APP_API_URL,
			method: 'get',
			credentials: 'include',
		});

		console.log(response);
	} catch (e) {
		console.log(e);
	}
};
</script>

<template>
    index page!!
</template>

<style scoped>

</style>