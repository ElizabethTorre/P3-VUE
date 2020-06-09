<template>
	<div>
		<b-button variant="primary">{{preg.pregunta1}}</b-button>
	</div>
</template>
<script>

	export default {
		name: 'Questionary',
		props: {
			preg: {
				type: Object,
				required: true
			}
		}
	}
</script>