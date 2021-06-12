<?php
$servername = "35.193.229.28"
$username = "sqlserver"
$password = "Rostock@11"
$dbname =  "PowerCheck_2021"

$conn=mysqli_connect($servername,$username,$password,$dbname)
if (!$conn){
  echo "Connect Error" .mysqi_connect_error();
}

$Date=$_POST['Date'];
$Engine=$_POST['Engine'];  
$Aircraft=$_POST['Aircraft'];    
$Torque=$_POST['Torque'];  
$N1_Limit=$_POST['N1_Limit'];  
$N1_Observed=$_POST['N1_Observed'];  
$N1_Result=$_POST['N1_Result'];  
$ITT_Limit=$_POST['ITT_Limit'];  
$ITT_Observed=$_POST['ITT_Observed'];  
$ITT_Result=$_POST['ITT_Result']; 

$sql="INSERT INTO PowerCheck('Date', 'Engine', 'Aircraft','Torque','N1_Limit','N1_Observed', 'N1_Result','ITT_Limit', 'ITT_Observed', 'ITT_Result')VALUES('$Date', '$Engine','$Aircraft','$Torque','$N1_Limit','$N1_Observed','$N1_Result','$ITT_Limit', '$ITT_Observed', '$ITT_Result')" if (mysqli_query($conn,$sql)){
  echo "<h1>One Record Added Successfully!</h1>";
}
else {
  echo "Error"
}
mysqli_close($conn);
?>