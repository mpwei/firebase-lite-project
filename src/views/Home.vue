<template>
	<section id="home">

	</section>
</template>

<script>
	export default {
		name: 'Home',
		mounted() {
			this.GetData()
		},
		methods: {
			GetData() {
				this.$store.dispatch("LoadingStart", this.$root)
				this.$store.state.database.collection('Carousel').get().then(response => {
					response.forEach(doc => {
						console.log(doc.data())
					})
					this.$store.dispatch("LoadingEnd", this.$root)
				}).catch((_Error) => {
					alert(_Error)
					this.$store.dispatch("LoadingFail", this.$root)
				})
			}
		}
	}
</script>