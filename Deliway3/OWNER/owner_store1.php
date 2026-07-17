<?php
session_start();
include "../config/db.php";

$store_lat = $_POST['find_lat'];
echo "궤도 :" .$store_lat;

$store_lng = $_POST['find_ing'];
echo $store_lat;

SELECT *, (6371 * acos(cos(radians(37.504696)) * cos(radians(latitude)) * cos(radians(longitude) - radians(127.041237)) + sin(radians(37.504696))*sin(radians(latitude)))) AS distance 
FROM blding 
HAVING distance <= 0.5 
ORDER BY distance;

SELECT *, (6371*acos(cos(radians(<사용자의 lat>))*cos(radians(<TABLE.lat(대상 lat)>))*cos(radians(<TABLE.lng(대상 lng)>)-radians(사용자의의 lng))+sin(radians(사용자의 lat))*sin(radians(<TABLE.lat(대상 lat)>))) AS distance FROM <TABLE> HAVING distance <= 0.5 ORDER BY distance ;