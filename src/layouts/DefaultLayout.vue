<template>
	<div class="default-layout">
		<HeaderPartial></HeaderPartial>
		
		<main class="main-section p-3 text-center">
			<div class="container">
				<slot name="content"></slot>
			</div>
		</main>
		
		<FooterPartial></FooterPartial>
	</div>
</template>
<script>

import HeaderPartial from '@/partials/HeaderPartial'
import FooterPartial from '@/partials/FooterPartial'

export default {
	name: 'DefaultLayout',
	components: {
		HeaderPartial,
		FooterPartial
	}
}
</script>