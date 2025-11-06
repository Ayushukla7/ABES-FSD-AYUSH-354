function validateForm() {
  const form = document.forms["regForm"];

  const name = form.elements["name"].value.trim();
  const password = form.elements["password"].value; 
  const email = form.elements["email"].value.trim();
  const phone = form.elements["phone"].value.trim();

  // Patterns
  const namePattern = /^[A-Za-z]{6,}$/;          
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;             

  
  if (!namePattern.test(name)) {
    alert("Name must contain only alphabets and be at least 6 characters long.");
    form.elements["name"].focus();
    return false;
  }

  
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    form.elements["password"].focus();
    return false;
  }

  
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    form.elements["email"].focus();
    return false;
  }

 
  if (!phonePattern.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    form.elements["phone"].focus();
    return false;
  }

  alert("Registration successful!");
  return true; // allow submit
}
