// start buton User
const button = document.getElementById("click_user");
const User = document.getElementById('form_user');


button.addEventListener('click', () => {
    if (User.style.opacity == 0   )
    {
        User.style.opacity = 1;
        User.style.top = "0";
        
        
    }
    else 
    {
      
        User.style.opacity = 0;
        User.style.top="-400px"
        }
   
   
   
   
})
// start admin
const button_admin = document.getElementById("click_admin");
const admin=document.getElementById("form_admin")
button_admin.addEventListener('click', () => {
    if (admin.style.opacity == 0  )
    {
        admin.style.opacity = 1;
        admin.style.top = "0";
        
        
    }
    else 
    {
      
        admin.style.opacity = 0;
        admin.style.top = "-1000px";
        
        }
   
   
   
   
})





