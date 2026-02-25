let start=document.querySelector(".begin")
        let stop=document.querySelector(".no")
        let reset=document.querySelector(".first")
        let hr=min=sec=ms=0;
        let starttimer;

        start.addEventListener('click',()=>{
            starttimer=setInterval(()=>{
                ms++;
                if(ms==100){
                    sec++;
                    ms=0;
                }
                if(sec==60){
                    min++;
                    sec=0;
                }
                if(min==60){
                    hr++;
                    min=0;
                }
                updatedisplay()
            },10)
        })
        stop.addEventListener('click',()=>{
            clearInterval(starttimer);
        })
        reset.addEventListener('click',()=>{
            updatedisplay();
            hr=min=sec=ms=0;
            clearInterval(starttimer)
        })
        function updatedisplay(){
        ahr=hr<10?'0'+hr:hr
        amin=min<10?"0"+min:min
        asec=sec<10?'0'+sec:sec
        ams=ms<10?'0'+ms:ms
            document.querySelector(".hr").innerText=ahr;           
            document.querySelector(".min").innerText=amin
            document.querySelector(".sec").innerText=asec;
            document.querySelector(".ms").innerText=ams;
        }
        