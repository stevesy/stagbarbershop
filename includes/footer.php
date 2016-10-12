			</main>

			<footer id="footer">
				<ul class="reduced" id="social-media">
					<li><a id="facebook" href="https://www.facebook.com/stagbarbershop" target="_blank">Facebook</a></li>
					<li><a id="twitter" href="https://twitter.com/stagbarbershop" target="_blank">Twitter</a></li>
				</ul>
				<p class="copyright"><small>&copy; <?php echo date('Y'); ?> <?php echo $client; ?>&trade; &bull; 3064 South Delaware Avenue Milwaukee WI &bull; 414.489.STAG</small></p>
			</footer>
		</div>
		<script src="/scripts/jquery.flexslider.min.js<?php echo $version ?>"></script>
		<?php if(isset($footerScript)) echo $footerScript."\n"; ?>
		<script src="/scripts/global.js<?php echo $version ?>"></script>
	</body>
</html>