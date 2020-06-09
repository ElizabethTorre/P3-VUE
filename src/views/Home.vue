<template>
	<DefaultLayout>
		<section slot="content" >
			<b-container class="bv-example-row">
				<b-row>
					<b-col 
						md="4" class="m-1"
						v-for="(event,index) in events"
						:key="index"
						@click.prevent="goToTemas(event)">
							<Menu :tema="event"></Menu>
						</b-col>
				</b-row>
			</b-container>
		</section>
	</DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Menu from '@/components/Menu.vue'
import {db} from '../main';

export default {
	name: 'HomeView',
	components: {
		Menu,
		DefaultLayout
	},
	data() {
		return {
		events:[]
		}
	},
	created() {
		this.getEvents();
	},
	methods: {
		async getEvents() {
			try {
				const snapshot = await db.collection('menu').get();
				const events = [];
				
				snapshot.forEach(doc => {
					events.push({ id: doc.id, ...doc.data() });
					//console.log(events);
				})
				this.events = events;
			} catch (error) {
				console.log(error);
			}
		},
		goToTemas(event) {
			this.$router.push({
				params: {
					areaSelect:event.area,
					event
				},
				name: 'Temas',
			})
		}
	}
}
</script>
