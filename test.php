<?php
$url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
$response = file_get_contents($url);
    //curl
    //file_get_contents
if($response === false) {
    die('Datanya gak ada!!!');
}
$data = json_decode($response, true);
print($data);

?>

<!-- 'https://api.coindesk.com/v1/bpi/currentprice.json' -->