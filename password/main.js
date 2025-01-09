        let pass=document.querySelector(".pass")
        let message=document.querySelector(".message")
        let str=document.querySelector(".strength")
        pass.addEventListener("input",()=>{
            if(pass.value.length>0){
                message.style.display="block"           
            }
            else{
                message.style.display="none"
            }
            if(pass.value.length<4){
                message.innerHTML="password is weak"
                message.style.color="red"
                pass.style.borderColor="red"
            }
            else if(pass.value.length>=4 && pass.value.length <8){
                message.innerHTML="password is medium"
                pass.style.borderColor="yellow"
                message.style.color="yellow"
            }
            else if(pass.value.length>=8){
                message.innerHTML="password is strong"
                pass.style.borderColor="green"
                message.style.color="green"
            }
        })