
function getEmail(){
    
    const user_email=document.querySelector("input");
    console.log(user_email.value);
    const forg_pass=document.querySelector(".change");
    const remove=document.querySelectorAll(".delete");
    const ent_pass=document.querySelector("strong");
    const sign_in=document.querySelector(".sub");
    const aux_link=document.querySelector(".sec-link");
    
    aux_link.remove();
    remove.forEach((item)=>
        item.remove()
    )
    
    sign_in.innerText="Sign in";
    forg_pass.innerText="Forgot my password";
    ent_pass.innerText="Enter password";
    
    user_email.placeholder="Password";
    user_email.type="password";
    const email=document.querySelector(".error");
    const arrow=document.querySelector(".parent-arrow");
    arrow.style="display:visible;";
    email.style="display:visible";
    email.innerText=user_email.value;
    email.style="font-size:0.9rem";
    sign_in.innerHTML="<a href='http://youtu.be/dQw4w9WgXcQ' style='color:white'>Sign in</a>";
    user_email.value="";
    
}

function erase(){
    const cookie_ban=document.querySelector(".cookie-ban");
    cookie_ban.style="display:none";
}