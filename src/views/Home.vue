<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	//import database from '../firestore'

	export default {
		name: 'home',
		components: {
			HelloWorld
		},
		mounted() {
			this.$store.state.database.collection('Carousel').get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					console.log(doc.data())
				})
			}).catch((_Error) => {
				console.log(_Error)
			})
		}
	}
</script>
