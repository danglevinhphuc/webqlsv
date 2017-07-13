<script type="text/javascript">
		function loader(){
			var time = 1;
			var id = setInterval(time1, 1);
			function time1(){
				if(time >= 300){
					clearInterval(id);
					$('.loader').hide();
				}else{
					time++;
				}
			}
		}
	</script>
<div >  <app-root class='loader' onload="loader()">
	<div class="cssload-loader">
			<div class="cssload-inner cssload-one"></div>
			<div class="cssload-inner cssload-two"></div>
			<div class="cssload-inner cssload-three"></div>
		</div>
</app-root>
	<script type="text/javascript" src="/php-angularjs/lir/js/inline.bundle.js"></script><script type="text/javascript" src="/php-angularjs/lir/js/polyfills.bundle.js"></script><script type="text/javascript" src="/php-angularjs/lir/js/styles.bundle.js"></script><script type="text/javascript" src="/php-angularjs/lir/js/vendor.bundle.js"></script><script type="text/javascript" src="/php-angularjs/lir/js/main.bundle.js"></script></body></div>