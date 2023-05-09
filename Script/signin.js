document.querySelector("form").addEventListener("submit", loginadmin);
        
        
async function loginadmin(){ 

  event.preventDefault();
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (!email || !password) {
      alert("Please fill the form");
      return;
    }

    const response = await fetch("https://newm.onrender.com/users");
    const users = await response.json();
    const getuser = users.find(getuser => getuser.email === email);
   
    console.log(getuser);
    if (!getuser || getuser.password != password) {
      alert("login failed");
      return;
    }
    alert("login successful");
    window.location.href = "./Addblog.html";
  
  
   
  }