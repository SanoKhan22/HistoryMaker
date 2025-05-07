<?php
// filepath: c:\Users\Eu Sano\Desktop\Programming\Web Dev\WebCoursera1\WebCoursera\send-email.php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["full-name"]));
    $email = strip_tags(trim($_POST["email"]));
    $company = strip_tags(trim($_POST["company"]));
    $message = strip_tags(trim($_POST["message"]));

    // Validate form data (add more validation as needed)
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all required fields.";
        exit;
    }

    // Set the recipient email address.
    $recipient = "eusanokhan@gmail.com";

    // Set the email subject.
    $subject = "Contact Form Submission from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Company: $company\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}