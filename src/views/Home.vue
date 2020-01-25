<template>
	<div class="site-section py-0">
		<div class="text-center">
			<img alt="Vue logo" src="../assets/logo.png">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		mounted() {
			//this.GetData()
		},
		methods: {
			GetData() {
				this.$store.state.loading = true
				this.$store.state.database.collection('Carousel').get().then(response => {
					response.forEach(doc => {
						console.log(doc.data())
					})
					this.$store.state.loading = false
				}).catch((_Error) => {
					alert(_Error)
					this.$store.state.loading = false
				})
			}
		}
	}
</script>
