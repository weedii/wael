function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (params.name && params.email && params.subject && params.message) {
    try {
      emailjs.send("service_r7ciuf2", "template_nudtvhp", params);
      alert("Email Sent!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    }
  } else {
    alert("Missing Fields");
  }
}
