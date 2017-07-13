<?php if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Trangchu extends controller{
	function __construct(){
		session_regenerate_id();
	}
		// GET API via method index
	protected function HeaderAngular(){
			// chap nhan json tu angularjs

	}
	// chuyen huong khi f5 

	public function render(){
		echo "Chuyen";
		header("Location: /php-angularjs");
	}
	public function index(){
		if(isset($_SESSION['admin'])){
			if($_SESSION['admin'] == 1){
				header("Location: /php-angularjs?c=trangchu&a=dashboard");
			}else{
				$this->view("index");
			}
		}else{
				// goi den csdl tren model
			$this->view("index");
		}
		
	}
	// ham show drashboard khi da~ dang nhap
	public function dashboard(){
		if(isset($_SESSION['admin'])){
			if($_SESSION['admin'] == 1){
				$this->view("dashboard");
			}
			else{
				header("Location: /php-angularjs");
			}
		}else{
			header("Location: /php-angularjs");
		}
	}
	// nhan du lieu tu angularjs
	// them thong tin vao cho 1 sv moi
	// kiem tra dung la phuong thuc post
	public function postsinhvien(){
		// check post
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			echo json_encode(array('status' => false));
			exit;
		}
		// du lieu api tu angularjs
		// mssv cua sinh vien
		// ho sv
		// ten sv
		// sdt sv
		// email sv
		// gioitinh sv
		$ho = $_POST["ho"];
		$ten = $_POST["ten"];
		$sdt = $_POST["sdt"];
		$email = $_POST["email"];
		$gioitinh = $_POST["gioitinh"];
		$mssv = $_POST["mssv"];

		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtinsinhvien.php");
		$thongtinsinhvien = new thongtinsinhvien();
		$result = $thongtinsinhvien->addSinhvien(array($mssv,$ho,$ten,$gioitinh,$sdt,$email));
		if($result){
			echo json_encode(array('msg' => "Thêm thành công"));
		}
	}
	public function getsinhvien(){
		// check post
		if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
			echo json_encode(array('status' => false));
			exit;
		}
		// goi den csdl tren model
		// check angularjs dieu huong php 
		
		include (PATH_SYSTEM."/model/thongtinsinhvien.php");
		$thongtinsinhvien = new thongtinsinhvien();
		$result = $thongtinsinhvien->getSinhvien();
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('msg' => "Khong co"));
		}
		
	}
	// kiem tra sinh vien co ton tai hay khong
	public function checksinhvien(){
		// check post
		if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
			echo json_encode(array('status' => false));
			exit;
		}
		// mssv cua sinh vien
		$mssv =  $_GET['mssv'];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtinsinhvien.php");
		$thongtinsinhvien = new thongtinsinhvien();
		$result = $thongtinsinhvien->checkSinhvientontai($mssv);
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('status' => false));
		}
	}
	// xoa sinh vien trong danh sach 
	// thog qua du lieu api gui tu angularjs
	// khoa chinh mssv
	public function deletesinhvien(){
		if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
			echo json_encode(array('status' => false));
			exit;
		}
		// mssv cua sinh vien
		$mssv = $_GET["mssv"];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtinsinhvien.php");
		$thongtinsinhvien = new thongtinsinhvien();
		$result = $thongtinsinhvien->deleteSinhvien($mssv,0);
		if($result){
			echo json_encode(array('msg' => "Xoá sinh viên"));
		}
	}
	// sua sinh vien trong danh sach 
	// thog qua du lieu api gui tu angularjs
	// khoa chinh mssv
	public function editsinhvien(){
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			echo json_encode(array('status' => false));
			exit;
		}
		// mssv cua sinh vien
		// ho sv
		// ten sv
		// sdt sv
		// email sv
		// gioitinh sv
		$mssv = $_GET["mssv"];
		$ho = $_POST["ho"];
		$ten = $_POST["ten"];
		$sdt = $_POST["sdt"];
		$email = $_POST["email"];
		$gioitinh = $_POST["gioitinh"];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtinsinhvien.php");
		$thongtinsinhvien = new thongtinsinhvien();
		$result = $thongtinsinhvien->editSinhvien(array($mssv,$ho,$ten,$gioitinh,$sdt,$email));
		if($result){
			echo json_encode(array('msg' => "Sửa sinh viên thành công"));
		}
	}
	// ham lay mon hoc gui den angulajrs
	// giao thuc get
	public function getMon(){
		if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
			echo json_encode(array('status' => false));
			exit;
		}
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtingiaovien.php");
		$thongtingiaovien = new thongtingiaovien();
		$result  = $thongtingiaovien->getMon();
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('msg' => "Khong co"));
		}
	}
	// ham them diem cho sinh vien
	// giao thuc post
	public function postdiemsinhvien(){
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			echo json_encode(array('status' => false));
			exit;
		}
		// mssv cua sinh vien
		// diem cua sv
		// ten mon 
		$mssv = $_POST["mssv"];
		$diem = $_POST["diem"];
		$tenmon = $_POST["tenmon"];
		$diemchu = $_POST["diemchu"];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/diemsinhvien.php");
		$diemsinhvien = new diemsinhvien();
		$result = $diemsinhvien->postDiemsinhvien(array($mssv,$diem,$tenmon,$diemchu));
		if($result){
			echo json_encode(array('msg' => "Thêm điểm sinh viên thành công"));
		}
	}
	// ham lay thong tin sinh vien , diem , mon hoc cua sinh vien
	// giao thuc get
	public function getthongtindiemsinhvien(){
		if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
			echo json_encode(array('status' => false));
			exit;
		}
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/diemsinhvien.php");
		$diemsinhvien = new diemsinhvien();
		//ten khoa ngoai
		$tenKhoangoai = $diemsinhvien->foreign_key();
		$result = $diemsinhvien->getthongtindiemsinhvien($tenKhoangoai);
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('msg' => "Khong co"));
		}
	}
	// ham xoa thong tin cua 1 sinh vien va diem so
	// giao thuc delete
	public function deletethongtindiemsinhvien(){
		// check delete
		if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
			echo json_encode(array('status' => false));
			exit;
		}
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/diemsinhvien.php");
		$diemsinhvien = new diemsinhvien();
		$mssv = $_GET['id'];
		$result = $diemsinhvien->deleteSinhvien($mssv,1);
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('msg' => "Khong co"));
		}
	}
	public function checkdiemsinhvien(){
		// check get
		if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
			echo json_encode(array('status' => false));
			exit;
		}
		// mssv cua sinh vien
		$mssv =  $_GET['id'];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/diemsinhvien.php");
		$diemsinhvien = new diemsinhvien();
		$result = $diemsinhvien->checkSinhvientontai($mssv,1);
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('status' => false));
		}
	}
	public function editdiemsinhvien(){
		// check post
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			echo json_encode(array('status' => false));
			exit;
		}
		$mssv = $_GET['mssv'];
		$diem = $_POST['diem'];
		$diemchu = $_POST['diemchu'];
		$tenmon = $_POST['tenmon'];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/diemsinhvien.php");
		$diemsinhvien = new diemsinhvien();
		$result = $diemsinhvien->editdiemSinhvien(array($mssv,$diem,$diemchu,$tenmon));
		if($result){
			echo json_encode(array('msg' => "Sửa điểm sinh viên thành công"));
		}
	}
	// ham lay thong tin giao vien day
	public function getgiaovien(){
		// check get
		if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
			echo json_encode(array('status' => false));
			exit;
		}
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtingiaovien.php");
		$thongtingiaovien = new thongtingiaovien();
		// su dung lai ham getSinhvien
		$result = $thongtingiaovien->getSinhvien();
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('msg' => "Khong co"));
		}
	}
	// ham lay du lieu api giao vien de sua
	public function editGiaovien(){
		// check post
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			echo json_encode(array('status' => false));
			exit;
		}
		$mssv = $_POST['msgv'];
		$hoten = $_POST['hoten'];
		$diachi = isset($_POST['diachi']) ? $_POST['diachi'] : "";
		$sdt = isset($_POST['sdt']) ? $_POST['sdt'] : "";
		$email = $_POST['email'];
		
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtingiaovien.php");
		$thongtingiaovien = new thongtingiaovien();
		$result = $thongtingiaovien->editGiaovien(array($mssv,$hoten,$diachi,$sdt,$email));
		if($result){
			echo json_encode(array('msg' => "Sửa Thông tin giáo viên thành công"));
		}
	}
	// ham them mon
	public function themMon(){
		// nhan du lieu tu server
		// check post
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			echo json_encode(array('status' => false));
			exit;
		}
		$themMon = $_POST['tenmon'];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtingiaovien.php");
		$thongtingiaovien = new thongtingiaovien();
		$result =$thongtingiaovien->themMon($themMon);
		if($result){
			echo json_encode(array('msg' => "Thêm môn thành công"));
		}
	}
	// ham xoa mon
	public function xoaMon(){
		// nhan du lieu tu server
		// check delete
		if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
			echo json_encode(array('status' => false));
			exit;
		}
		$id = $_GET["id"];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/thongtingiaovien.php");
		$thongtingiaovien = new thongtingiaovien();
		$result =$thongtingiaovien->xoaMon($id);
		if($result){
			echo json_encode($result);
		}else{
			echo json_encode(array('msg' => "Khong co"));
		}
	}
	// ham login 
	public function login(){
		// nhan du lieu tu server
		// check post
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			echo json_encode(array('status' => false));
			exit;
		}
		$username = $_POST['username'];
		$password = $_POST['password'];
		// goi den csdl tren model
		include (PATH_SYSTEM."/model/user.php");
		$user = new user();
		$result = $user->login($username,md5($password));
	}

}
?>