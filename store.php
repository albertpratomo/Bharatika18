<?php include "header.php"; ?>
	<style type="text/css">
		body{
			background-color: #efe9d8;
		}
		.divstore h1{
			margin-top: 10px;
			font-size:24px;
			margin-bottom: 0;
		}
		.divstore h5 {
		    margin-top: 0;
		    font-weight: bold;
		}
		@media (max-width: 768px){
			.divstore {
			    margin-right: 5%;
			    margin-left: 5%;
			}
		}
	</style>
</head>

<body id="fh5co-page">
		
	<?php include "nav.php"; ?>
	<div class="container m-t2 p-b divstore">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3 text-center">
				<img src="images/store/our-store.png" class="img-responsive center-block">
			</div>
		</div>
		<div class="row m-t p-t p-b">
			<div class="car-store">
				<div class="item">
					<img src="images/store/t-1.png" class="img-responsive center-block">
					<h1>T-Shirt 1</h1>
					<h5>IDR 85.000</h5>
					<a href="t-1.php" class="btn" target="_blank">Learn More</a>
				</div>
				<div class="item">
					<img src="images/store/t-2.png" class="img-responsive center-block">
					<h1>T-Shirt 2</h1>
					<h5>IDR 85.000</h5>
					<a href="t-2.php" class="btn" target="_blank">Learn More</a>
				</div>
				<div class="item">
					<img src="images/store/t-3.png" class="img-responsive center-block">
					<h1>T-Shirt 3</h1>
					<h5>IDR 85.000</h5>
					<a href="t-3.php" class="btn" target="_blank">Learn More</a>
				</div>
				<div class="item">
					<img src="images/store/t-4.png" class="img-responsive center-block">
					<h1>T-Shirt 4</h1>
					<h5>IDR 85.000</h5>
					<a href="t-4.php" class="btn" target="_blank">Learn More</a>
				</div>
			</div>
		</div>
	</div>
	<?php include "footer.php"; ?>
</body>
</html>