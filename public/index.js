function submitForm(event) {
    event.preventDefault(); 
    document.getElementById("loader-overlay").style.display = "flex";
  
    const formData = new FormData(document.getElementById("emailForm")); 
  
    fetch('/send-email', {
      method: 'POST',
      body: formData 
    })
    .then(response => {
      if (response.ok) {
        console.log('Email sent successfully!');
        document.getElementById("loader-overlay").style.display = "none"; 
        document.getElementById("emailForm").reset(); 
       
      } else {
        throw new Error('Failed to send email: ' + response.statusText);
      }
    })
    .catch(error => {
      console.error('Error sending email:', error);
      document.getElementById("loader-overlay").style.display = "none"; 
    });
  }
  
