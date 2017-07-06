<template>
	<div class="row no-gutters row-bg profile">
		<div class="col col-primary">
			<div class="profile__image" style="background-image:url(/images/emilsgulbis.jpg)"></div>
		</div>
		<div class="col profile__content" v-mousemove>
			<div class="title">Emils<div class="text-primary point-to-left">Gulbis</div></div>
			<h1 class="text-default">Front-end developer - Latvia</h1>
			<p class="text-muted">I'm Emils Gulbis and I love to develop<br/>beautiful UI's.<br/>24 year old code ninja from <router-link to="/contact" class="link--styled">Liepaja, Latvia</router-link></p>
		</div>
	</div>
</template>
<script>

export default {

}
</script>
