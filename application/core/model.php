<?php
class Model{
	private $db;
	private $classname;
	function __construct(){
		$this->db= new Database();
		$this->classname = get_class($this);
	}
	// lay tat ca noi dung tu csdl test
	public function getSinhvien(){
		$table =	strtolower($this->classname);
		$sql = "SELECT * FROM `$table` ";
		$this->db->setQuery($sql);
		$result = $this->db->loadAllRows();
		return $result;
	}
	// Them noi dung vao csdl test
	public function addSinhvien($thongtin =array()){
		$table =	strtolower($this->classname);
		$sql = "INSERT INTO `$table` (mssv,ho,ten,gioitinh,sdt,email) VALUES(?,?,?,?,?,?)";
		$this->db->setQuery($sql);
		$result = $this->db->execute($thongtin);
		return true;
	}
	// xoa sinh vien 
	public function deleteSinhvien($mssv,$id = 0){
		$table =strtolower($this->classname);
		if($id){
			$sql = "DELETE FROM `$table` where id = '$mssv'";
			$this->db->setQuery($sql);
			$result = $this->db->execute();
			return true;	
		}else{
			// xoa 2 bang
			// ly do rang buoc
			$sql_diemsinhvien = "DELETE FROM  `diemsinhvien` where mssv = '$mssv'";
			$this->db->setQuery($sql_diemsinhvien);
			$result_diemsinhvien = $this->db->execute();
			if($result_diemsinhvien){
				$sql = "DELETE FROM `$table` where mssv = '$mssv'";	
				$this->db->setQuery($sql);
				$result = $this->db->execute();
				return true;	
			}
			
		}
		

		
	}
	// kiem tra ton tai sinh vien
	public function checkSinhvientontai($mssv,$id = 0){
		$table =strtolower($this->classname);
		if($id){
			$sql = "SELECT * FROM `$table` where id = '$mssv'";
		}else{
			$sql = "SELECT * FROM `$table` where mssv = '$mssv'";	
		}
		
		$this->db->setQuery($sql);
		$result = $this->db->loadRow();
		return $result;
	}

	// sua sinh vien
	public function editSinhvien($thongtin = array()){
		$table =strtolower($this->classname);
		$sql = "UPDATE `$table` SET ho='$thongtin[1]',ten='$thongtin[2]',gioitinh='$thongtin[3]',sdt='$thongtin[4]',email='$thongtin[5]' WHERE mssv = '$thongtin[0]'";
		$this->db->setQuery($sql);
		$result = $this->db->execute();
		return $result;
	}
	// lay du lieu mon day va ma mon
	public function getMon(){
		$table =strtolower($this->classname);
		$sql = "SELECT id,tenmon FROM `$table` ";
		$this->db->setQuery($sql);
		$result = $this->db->loadAllRows();
		return $result;
	}
	// them diem cho sinh vien
	public function postDiemsinhvien($thongtin = array()){
		$table =	strtolower($this->classname);
		// kiem tra mssv va ten mon co ton tai hay chua
		$check = "SELECT id from `$table` where mssv = ? and tenmon = ?";
		$this->db->setQuery($check);
		$query_check =$this->db->loadRecord(array($thongtin[0],$thongtin[2]));

		if($query_check == null){
			$sql = "INSERT INTO `$table` (mssv,diem,tenmon,diemchu) VALUES(?,?,?,?)";
			$this->db->setQuery($sql);
			$result = $this->db->execute($thongtin);
			return true;	
		}else{
			return true;
		}
		
	}
	// lay du lieu thong tin sinh vien va diem sinhvien 
	public function getthongtindiemsinhvien($tenKhoangoai = null){
		$table =	strtolower($this->classname);
		$sql = "SELECT * FROM `$table`,`$tenKhoangoai` where `$table`.mssv = `$tenKhoangoai`.mssv ";
		$this->db->setQuery($sql);
		$result = $this->db->loadAllRows();
		return $result;
	}
	// ham su diem sinh vien 
	// 1 bien dau vao la mang du lieu
	public function editdiemSinhvien($thongtin =array()){
		$table =	strtolower($this->classname);
		$sql = "UPDATE `$table` SET diem='$thongtin[1]', diemchu = '$thongtin[2]' WHERE mssv = '$thongtin[0]' and tenmon = '$thongtin[3]' ";
		$this->db->setQuery($sql);
		$result = $this->db->execute();
		return $result;
	}
	// ham nhan du lieu them vao csdl 
	// sua giao vien 
	// 1 bien dau vao la 1 mang  du lieu
	public function editGiaovien($thongtin = array()){
		$table =strtolower($this->classname);
		$sql = "UPDATE `$table` SET hoten='$thongtin[1]',diachi='$thongtin[2]',sdt='$thongtin[3]',email='$thongtin[4]' WHERE msgv = '$thongtin[0]'";
		$this->db->setQuery($sql);
		$result = $this->db->execute();
		return $result;
	}
	// nhan du lieu login
	public function login($username, $password){
		// Lay ten bang trong csdl
		$table = strtolower($this->classname);
		$sql_check = "SELECT username FROM `$table` where username = ? and password = ? ";
		$this->db->setQuery($sql_check);
		$check =$this->db->loadRecord(array($username,$password));
		if($check != null){
			$_SESSION['admin'] = 1;
			header("Location: http://qlsv.esy.es/?c=trangchu&a=dashboard");
		}else{
			header("Location: http://qlsv.esy.es/");
		}
	}
	// Them mon vao csdl
	public function themMon($tenmon){
		// Lay ten bang trong csdl
		$table = strtolower($this->classname);
		// lay thong tin giao vien ra 
		// sau do gan thong tin giao vien vao csdl 
		$sql_thongtingiaovien = "SELECT msgv,hoten,diachi,email,sdt,avatar from `$table`";
		$this->db->setQuery($sql_thongtingiaovien);
		$query_thongtingiaovien = $this->db->loadRow();
		// thong tin cua giao vien duoc lay ra 
		// se duoc insert vao voi mon khac
		$msgv =$query_thongtingiaovien->msgv;
		$hoten = $query_thongtingiaovien->hoten;
		$diachi =$query_thongtingiaovien->diachi;
		$email =$query_thongtingiaovien->email;
		$sdt = $query_thongtingiaovien->sdt;
		$avatar = $query_thongtingiaovien->avatar;
		// insert 
		$sql = "INSERT INTO `$table` (msgv,hoten,diachi,email,sdt,tenmon,avatar) VALUES(?,?,?,?,?,?,?)";
		$this->db->setQuery($sql);
		$result = $this->db->execute(array($msgv,$hoten,$diachi,$email,$sdt,$tenmon,$avatar));
		return true;
	}
	// ham xoa mon
	public function xoaMon($idMon){
		// Lay ten bang trong csdl
		$table = strtolower($this->classname);
		
		// xoa tat ca sinh vien co id mon tuong tu
		// lay tat ca thong tin ra ngoai
		$sql_ten_mon=  "SELECT tenmon FROM `$table` where id = '$idMon'";
		$this->db->setQuery($sql_ten_mon);
		$query_tenmon = $this->db->loadRow();
		$tenmon = $query_tenmon->tenmon;
		$sql_xoatatcasinhvientrungtenmon = "DELETE FROM `diemsinhvien` where tenmon = '".$tenmon."' ";
		$this->db->setQuery($sql_xoatatcasinhvientrungtenmon);
		$result_xoatatcasinhvientrungtenmon = $this->db->execute();
		if($result_xoatatcasinhvientrungtenmon){
			// xoa mon hoc
			$sql = "DELETE FROM `$table` where id = '$idMon'";
			$this->db->setQuery($sql);
			$result = $this->db->execute();	
		}
		return true;
	}
}	
?>