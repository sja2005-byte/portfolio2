<?php

$store_idx = $_POST['store_idx'];
$user_idx = $_POST['user_idx'];

$sql = "select * from store_like where user_idx= '$user_idx' and store_idx = '$store_idx'";
$result = mysqli_fetch_array($con, $sql);
$row_num = mysqli_num_rows($result);

if($row_num > 0){

    $sql1 = "delete from store_like where user_idx = '$user_idx' and store_idx= '../'";

    echo "♡";
} else {
 $sql1 = "insert into store_like";
echo "♥";
}

?>