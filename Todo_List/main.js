const text=document.getElementById("text")
            const add=document.getElementById("add")
            const listitem=document.querySelector(".li-items")
            add.addEventListener("click",()=>{
                if(text.value===""){
                    alert("you must write something")
                }
                else{
                    let li=document.createElement("li")
                    li.innerHTML=text.value
                    listitem.appendChild(li)
                    let span=document.createElement("span")
                    span.innerHTML="\u00d7"
                    li.appendChild(span);
                    
                }
                text.value=""
                saveData()
                listitem.addEventListener("click",(e)=>{
                    if(e.target.tagName==="SPAN"){
                        e.target.parentElement.remove()
                        saveData()
                    }
                    else if(e.target.tagName==="li"){
                        e.target.classList.add("done")
                        saveData()
                    }
                },false)
            })
            function saveData(){
                localStorage.setItem("data",listitem.innerHTML)
            }
            function showTask(){
                listitem.innerHTML=localStorage.getItem("data")
            }
            showTask()