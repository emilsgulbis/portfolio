<template>
	<div>
		<h1 class="title">Portfolio</h1>
		<div class="row no-gutters portfolio">
			<div class="col-md-6 col-lg-6 col-xl-4 col-xxl-6" v-for="item in items">
				<div class="portfolio__item" :style="{'background-image' : 'url('+item.thumbnail+')'}">
					<div class="item__content">
						<p class="item__title">
							<a :href="item.url" target="_blank">
								<i class="fa fa-link"></i>
								<span>{{item.title}}</span>
							</a>
						</p>
						<div class="clearfix"></div>
						<p class="item__desc">{{item.task}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import portfolioData from '../data/portfolio.json';
export default {
	data(){
		return {
			portfolioItems : portfolioData
		}
	},
	computed: {
		items(){
			return _.orderBy(this.portfolioItems, ['date', ], ['desc']);
		}
	}
}
</script>
