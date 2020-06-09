<template>
	<div>
		<b-button variant="primary">{{tema.nombre}}</b-button>
	</div>
</template>
<script>

	export default {
		name: 'Temario',
		props: {
			tema: {
				type: Object,
				required: true
			}
		}
	}
</script>