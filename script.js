// 

document.addEventListener("DOMContentLoaded", function () {
    // Purchase Now button
    const purchaseBtn = document.querySelector(".hero .btn-primary");
    if (purchaseBtn) {
      purchaseBtn.addEventListener("click", function (e) {
        e.preventDefault();
        alert(" Thank you for your interest! Purchasing is coming soon.");
      });
    }
  
    // Sign In button
    const signInBtn = document.querySelector(".btn-link");
    if (signInBtn) {
      signInBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const email = prompt(" Enter your email to sign in:");
        if (email && email.includes("@")) {
          alert(` Welcome back, ${email}!`);
        } else {
          alert("Please enter a valid email address.");
        }
      });
    }
  
    // Sign Up button
    const signUpBtn = document.querySelector(".auth-buttons .btn-primary");
    if (signUpBtn) {
      signUpBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const name = prompt(" Enter your name to sign up:");
        const email = prompt(" Enter your email address:");
        if (name && email && email.includes("@")) {
          alert(`Thanks for signing up, ${name}!`);
        } else {
          alert("Please enter a valid name and email.");
        }
      });
    }
  });
  