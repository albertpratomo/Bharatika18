<?php include "header.php"; ?>
	<style type="text/css">
		body{
			background-color: #efe9d8;
		}
		.divnom h1{
			font-size:24px;
			margin-bottom: 10px;
		}
		.divnom .text-center a h1{
			color: #e55b85;
		}
		.divnom .text-center a.active h1{
			color: #0a8dad;
		}
		.divnom h5 {
		    margin-top: 0;
		    margin-bottom: 0;
		}
		.divnom h3 {
		    margin-top: 10px;
		    margin-bottom: 10px;
		    font-size: 18px;
		}
		@media (max-width: 768px){
			.divnom {
			    margin-right: 5%;
			    margin-left: 5%;
			}
			.mb-center {
			    text-align: center;
			}
		}
	</style>
</head>


<body id="fh5co-page">

	<?php include "connect.php"; ?>	
	<?php include "nav.php"; ?>
	<?php 
		if(!isset($_GET['p']) || $_GET['p']>4 || $_GET['p']<1){
			$_GET['p']=1;
		}
	?>
	<div class="container m-t2 p-b divnom">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3 text-center">
				<img src="images/nominees/judul.png" class="img-responsive center-block">
			</div>
		</div>
		<div class="row text-center m-t">
			<div class="col-xs-3 col-sm-2 col-sm-offset-2">
				<a href="nominees.php"><h1>Tirta</h1></a>
			</div>
			<div class="col-xs-3 col-sm-2">
				<a href="nominees.php?p=2"><h1>Agni</h1></a>
			</div>
			<div class="col-xs-3 col-sm-2">
				<a href="nominees.php?p=3"><h1>Bayu</h1></a>
			</div>
			<div class="col-xs-3 col-sm-2">
				<a href="nominees.php?p=4"><h1>Buana</h1></a>
			</div>
		</div>
		<div class="row p-b">
			<?php 
				$q = "SELECT * FROM 18_lomba WHERE idKat = ". $_GET['p'];
				$result = $con->query($q);

				if ($result->num_rows > 0) {
				    while($row = $result->fetch_assoc()) {
				    	$i = $row["id"];
				    	echo "<h1 class='m-t2 mb-center'>".$row["nama"]."</h1>";
				    	echo '<div class="car-nom">';

						$q = "SELECT * FROM 18_karya WHERE idLomba = ". $i." ORDER BY idLomba";
						$res = $con->query($q);				    	
						while($rowj = $res->fetch_assoc()) {
							echo '<div class="item">';
							echo '<a href="nominee.php?p='.$rowj["id"].'">';
							echo '<img src="images/nominees/'.$i.'/'.$rowj["id"].'.png" class="img-responsive center-block">';
							echo '<h3><b>'.$rowj["judul"].'</h3></b>';
							echo '<h5>'.$rowj["id"];
							echo '<h5>'.$rowj["peserta1"];
							if ($rowj["peserta2"]!=''){echo ' & '.$rowj["peserta2"];}
							echo '</h5>';
							echo '</a></div>';					
						}
						echo '</div>';
				    }
				} else {
				    echo "No results";
				}
				$con->close();
			?>
		</div>
	</div>
	<?php include "footer.php"; ?>
	<script type="text/javascript">
		$( document ).ready(function() {
			var p = <?php echo $_GET['p'] ?>;
			$(".text-center.m-t .col-xs-3:nth-child("+p+") a").addClass("active");   
		});
	</script>
</body>
</html>