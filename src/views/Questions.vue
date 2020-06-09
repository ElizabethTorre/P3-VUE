<template>
	<DefaultLayout>
		<section slot="content" >
			<b-container class="bv-example-row">
				<b-row>
					<b-col 
						md="4" class="m-1"
						v-for="(question,index) in arrQuestions"
						:key="index"
						
						>
							<Questionary :preg="question"></Questionary>
						</b-col>
				</b-row>
			</b-container>
		</section>
	</DefaultLayout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout' // eslint-disable-line no-unused-vars
import Questionary from '@/components/Questionary.vue'
import {db} from '../main';


export default {
	name: 'QuestionsView',
	components: {
		DefaultLayout,
		Questionary
	},
	data() {
		//var vm = this;
		return {
			arrQuestions: [],
			chosenArea: this.$route.params.areaSelect,
			chosenTema: this.$route.params.temaSelect
		}
	},
	created() {
		this.getQuestions();
	},
	methods: {
		async getQuestions() {
			try {
				const snapshot = await db.collection('menu').where('area','==', this.chosenArea).get();
				const events = [];
				
				snapshot.forEach(doc => {
					events.push({ id: doc.id, ...doc.data() });
				})
				this.arrQuestions = events[0].temas.filter(obj => 
				obj.nombre === this.chosenTema)[0].preguntas;
				//console.log(this.arrQuestions);
			} catch (error) {
				console.log(error);
			}
		}
		//goToQuestions(opc) {
		//	this.$router.push({
		//		params: {
		//			areaSelect:opc.nombre,
		//			event
		//		},
		//		name: 'Questions',
		//	})
		//}
	}
}
</script>