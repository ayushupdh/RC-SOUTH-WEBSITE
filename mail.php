<?php

if (isset($_POST['submit'])) {
$name = $_POST['name'];

$subject = "Mail from Turing: aupadhya";
$mailFrom = $_POST['email'];
$message = $_POST['textarea'];

$mailTo = "";
$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers); 
echo "
<script type='text/javascript'>
        alert('Question has been submitted!');
        window.open('contact.html' , '_top');
        
    </script>";

}
?>