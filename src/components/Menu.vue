<template>
	<div>
		<b-button variant="primary">{{tema.area}}</b-button>
	</div>
</template>
<script>

	export default {
		name: 'Menu',
		props: {
			tema: {
				type: Object,
				required: true
			},
		}
	}
</script>
