<script>

// Компоненты
import AppSidebar from './components/AppSidebar.vue';
import UserPage from './views/UserPage.vue';
import FriendsPage from './views/FriendsPage.vue';
import {RouterView} from 'vue-router';
import router from './router';

// Главная страница
export default {
	components: {
    AppSidebar,
    UserPage,
    FriendsPage,
    RouterView,
    router
}
};


</script>

<template>
	<div class="app">
		<!-- Шапка -->
		<!-- <app-header></app-header> -->

		<div class="container py-3">
			<div class="row row-cols-1">
				<div class="col-md-3">
					<!-- Левая колонка -->
					<app-sidebar></app-sidebar>
				</div>
				<div class="col-md-9">
					<!-- Правая колонка -->
					<!-- <user-page></user-page> -->
					<router-view></router-view>
				</div>
			</div>
			
		</div>
	</div>
</template>

<style>
body {
	background-color: #EDEEF0;
}
</style>
