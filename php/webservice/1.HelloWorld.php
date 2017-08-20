
<?php
// to test, use this sample url http://localhost/ws/1.webservice_HelloWorld.php?user=2
if(isset($_GET['user']) && intval($_GET['user'])) {
	$format ='json';
	$user_id = intval($_GET['user']); //no default
	$posts = array("dfgh","4544",$user_id );
	header('Content-type: application/json');
	echo json_encode(array('posts'=>$posts));
}
?>
