<?php



if (isset($_SERVER['HTTP_USER_AGENT'])) {
   $userAgent = $_SERVER['HTTP_USER_AGENT'];
   echo "User-Agent: " . $userAgent;
} else {
   echo "User-Agent header is not set.";
}

?>
