<template>
	<section id="home">

	</section>
</template>

<script>
	export default {
		name: 'home',
		mounted() {
			this.GetData()
		},
		methods: {
			GetData() {
				this.$Progress.start()
				this.$store.state.database.collection('Carousel').get().then(response => {
					response.forEach(doc => {
						console.log(doc.data())
					})
					this.$Progress.finish()
				}).catch((_Error) => {
					alert(_Error)
					this.$Progress.fail()
				})
			}
		}
	}
</script>