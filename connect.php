<?php
	$server   = "localhost";
	$database = "bharatik_dfest";
	$username = "bharatikafestpet";
	$password = "%E^[,N3bp?)2";

	$con = new mysqli($server, $username, $password, $database);
	// Check connection
	if ($con->connect_error) {
	    die("Connection failed: " . $con->connect_error);
	} 
?>