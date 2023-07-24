document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
  
      // Replace this alert with your actual form submission logic to handle the data
      alert('Form submitted!\n' +
            'Name: ' + formValues.name + '\n' +
            'Email: ' + formValues.email + '\n' +
            'Message: ' + formValues.message);
  
      // Clear the form fields after submission
      contactForm.reset();
    });
  });
  