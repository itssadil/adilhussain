<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
  $name = isset($_POST["name"]) ? $_POST["name"] : null;
  $email = isset($_POST["email"]) ? $_POST["email"] : null;
  $subject = isset($_POST["subject"]) ? $_POST["subject"] : null;
  $message = isset($_POST["message"]) ? $_POST["message"] : null;
  
  // Additional validation or data sanitization can be performed here
  
  $to = "adilhussain.dev@gmail.com";
  $body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";
  $headers = "From: $email";
  
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you! Your message has been sent.";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>
