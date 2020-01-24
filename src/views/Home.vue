<template>
	<div class="home text-center">
		<img alt="Vue logo" src="../assets/logo.png">

	</div>
</template>

<script>
	export default {
		name: 'home',
		mounted() {
			this.$store.state.loading = true
			this.$store.state.database.collection('Carousel').get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					console.log(doc.data())
				})
				this.$store.state.loading = false
			}).catch((_Error) => {
				console.log(_Error)
				this.$store.state.loading = false
			})
		}
	}
</script>
