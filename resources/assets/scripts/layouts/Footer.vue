<template>
  <footer>
  	<dl>
  		<dt>Email</dt>
  		<dd><a :href="mailto">{{email}}</a></dd>
  	</dl>
  	<dl>
  		<dt>Phone</dt>
  		<dd><a :href="tel">{{phone}}</a></dd>
  	</dl>
  	<dl class="mb-0">
  		<dt>Find me on</dt>
  		<dd class="mb-0">
  			<ul class="nav nav-social">
  				<li class="nav-item">
  					<a class="nav-link" href="https://www.facebook.com/emiils" target="_blank">
  						<i class="fa fa-facebook"></i>
  					</a>
  				</li>
  				<li class="nav-item">
  					<a class="nav-link" href="https://www.linkedin.com/in/emilsgulbis/" target="_blank">
  						<i class="fa fa-linkedin"></i>
  					</a>
  				</li>
  				<li class="nav-item">
  					<a class="nav-link" href="https://twitter.com/yozhis" target="_blank">
  						<i class="fa fa-twitter"></i>
  					</a>
  				</li>
  				<li class="nav-item">
  					<a class="nav-link" href="https://github.com/emilsgulbis" target="_blank">
  						<i class="fa fa-github"></i>
  					</a>
  				</li>
  			</ul>
  		</dd>
  	</dl>
  </footer>
</template>

<script>
export default {
	data(){
		return {
			email: 'emils.gulbis@gmail.com',
			phone: '+371 20 30 30 56',
			social : {
				facebook : '',
				twitter: '',
				github: ''
			}
		}
	},
	computed: {
		mailto(){
			return 'mailto:' + this.email;
		},
		tel(){
			return 'tel:' + this.phone.replace(/ /g, '')
		}
	}
}
</script>
