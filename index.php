<?php
	session_start();
	//XAC THUC JSON TRUYEN DEN ANGUALJR VA NHAN TU ANGULAJS

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Headers: X-Requested-With');
	header("Access-Control-Allow-Methods : GET, POST, OPTIONS, PUT, DELETE");
	//CHONG hijacking
	header('X-Frame-Options: DENY');
	require_once("bootstrap.php");
	$boostrap = new Bootstrap;
	$boostrap->Init();
?>