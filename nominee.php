<?php 
if(!isset($_GET['p']) || $_GET['p']<11000 || $_GET['p']>43000){
	header('Location: http://bharatikafest.petra.ac.id/nominees.php');
	die();
}
include "header.php"; ?>
	<style type="text/css">
		h1{
			font-size: 24px;
		}
		body{
			background-color: #efe9d8;
		}
		b{
			font-weight: 1000;
		}
		@media (min-width: 991px){
			.item img {
			    max-width: 80%;
			}
		}
		@media (max-width: 768px){
			.m-tm {
			    margin-top: 5vh;
			}
		}
		.m-t0{
			margin-top:0;
		}
	</style>
</head>

<body id="fh5co-page">

	<?php include "connect.php"; ?>			
	<?php include "nav.php"; ?>
	<?php 

		$l = substr($_GET['p'],0,1);
		$imgt;
		if ($l=='1') {$imgt='tirta';}
		else if ($l=='2') {$imgt='agni';}
		else if ($l=='3') {$imgt='bayu';}
		else if ($l=='4') {$imgt='buana';}
	?>
	<div class="container m-t2">
		<div class="row">
			<div class="col-xs-offset-3 col-xs-6 col-sm-2 col-sm-offset-5">
				<?php  
				echo '<img src="images/events/'.$imgt.'_teks.png" class="img-responsive center-block">'
				?>
			</div>
		</div>		
	</div>
	
	<div class="container m-t p-t p-b e-exh">
		<div class="row">

			<?php 
				$q = "SELECT * FROM 18_karya WHERE id = ". $_GET['p'];
				$result = $con->query($q);
				if ($result) {
					$result = $result->fetch_assoc();
				}
			?>
			<div class="col-sm-6">
				<?php 
					$img1 = '<img src="images/nominees/'.$result['idLomba'].'/'.$result['id'].'.png" class="img-responsive center-block">';
					if ($result['img']==2) {
						$img2 = '<img src="images/nominees/'.$result['idLomba'].'/'.$result['id'].'-2.png" class="img-responsive center-block">';

						echo '<div class="car-sdet">';
						echo '<div class="item">';
						echo $img1;
						echo '</div>';
						echo '<div class="item">';
						echo $img2;
						echo '</div>';
						echo '</div>';
					}else{
						echo $img1;
					}
				?>
			</div>
			<div class="col-sm-6 m-tm">
				<h1 style="margin-bottom: 0;"><?php echo $result['judul'] ?></h1>
				<h5 class="m-t0"><?php echo $result['id'] ?></h5>

				<div class="col-xs-6">
				<?php 
					echo "<h5><b>".$result['peserta1']."</b><br>";	
					echo $result['sekolah1']."</h5>";
				?>
				</div>
				<div class="col-xs-6">
				<?php 
					if ($result['peserta2']!='') {
						echo "<h5><b>".$result['peserta2']."</b><br>";	
						echo $result['sekolah2']."</h5>";
					}
				?>
				</div>				
				<div class="col-xs-12">
					<h5 style="text-align: justify;"><?php echo $result['deskripsi'] ?></h5>
				</div>
			</div>
		</div>
	</div>
	<?php include "footer.php"; ?>
</body>
</html>