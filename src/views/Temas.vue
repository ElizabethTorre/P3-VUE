<template>
	<DefaultLayout>
		<section slot="content" >
			<b-container class="bv-example-row">
				<b-row>
					<b-col 
						md="4" class="m-1"
						v-for="(opc,index) in arrTemas"
						:key="index"
						@click.prevent="goToQuestions(opc)"
						>
							<Temario :tema="opc"></Temario>
						</b-col>
				</b-row>
			</b-container>
		</section>
	</DefaultLayout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout' // eslint-disable-line no-unused-vars
import Temario from '@/components/Temario.vue'
import {db} from '../main';

export default {
	name: 'TemasView',
	components: {
		DefaultLayout,
		Temario
	},
	data() {
		//var vm = this;
		return {
			arrTemas: [],
			chosenArea: this.$route.params.areaSelect
		}
	},
	created() {
		this.getTemas();
	},
	methods: {
		async getTemas() {
			try {
				const snapshot = await db.collection('menu').where('area','==', this.chosenArea).get();
				const events = [];
				
				snapshot.forEach(doc => {
					events.push({ id: doc.id, ...doc.data() });
					
				})
				this.arrTemas = events[0].temas;
				//console.log(this.arrTemas);
			} catch (error) {
				console.log(error);
			}
		},
		goToQuestions(opc) {
			this.$router.push({
				params: {
					areaSelect: this.chosenArea,
					temaSelect: opc.nombre
					
				},
				name: 'Questions',
			})
		}
	},
}
</script>