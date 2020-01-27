<template>
	<ContentWrapper id="home">
		<section class="container">
			<h1>這是首頁</h1>
			<p>歡迎光臨</p>
		</section>
	</ContentWrapper>
</template>

<script>
	export default {
		name: 'Home',
		mounted() {
			this.GetData()
		},
		methods: {
			GetData() {
				// this.$store.dispatch("LoadingStart", this.$root)
				// this.$store.state.database.collection('Carousel').get().then(response => {
				// 	response.forEach(doc => {
				// 		console.log(doc.data())
				// 	})
				// 	this.$store.dispatch("LoadingEnd", this.$root)
				// }).catch((_Error) => {
				// 	alert(_Error)
				// 	this.$store.dispatch("LoadingFail", this.$root)
				// 	this.$router.push('/error')
				// })
			}
		}
	}
</script>