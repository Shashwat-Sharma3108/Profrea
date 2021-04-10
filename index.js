    const imgDiv = document.querySelector('.profile-pic-div');
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const uploadBtn = document.querySelector('#uploadBtn');

    imgDiv.addEventListener('mouseenter', function(){
        uploadBtn.style.display = "block";
    });

    imgDiv.addEventListener('mouseleave', function(){
        uploadBtn.style.display = "none";
    });

    file.addEventListener('change', function(){
        const choosedFile = this.files[0];
        if (choosedFile) {
            const reader = new FileReader();

            reader.addEventListener('load', function(){
                img.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(choosedFile);
        }
    });


    function checkEmail(email){
        var atSymbol = email.indexOf("@");
        if(atSymbol<1) return false;

        var dot=email.lastIndexOf(".");
        if(dot<=atSymbol+3) return false;
        if(dot===email.length-1) return false;
        return true;
    }

    function validate(){
        fields = $('.form-control');
        for(let i in fields) {
             if(fields[i].value ==  "") {
                fields[i].style.border="1px solid red";
                $(fields[i]).siblings('small')[0].innerText="Field can not be blank";
                return false;
            }else if(fields[i].type=="email"){
                if(!checkEmail(fields[i].value)){
                    fields[i].style.border="1px solid red";
                    $(fields[i]).siblings('small')[0].innerText="Not a valid Email Address";
                }
            }else if(fields[i].type=="number"){
                if(fields[i].value.length<10 || fields[i].value.length>11){
                    fields[i].style.border="1px solid red";
                    $(fields[i]).siblings('small')[0].innerText="Not a valid Phone Number";
                }
            } 
        }
    return true;     
    }

    function preview(){
        if(validate()){ 
            let mapping =$('.form-control');
            let keys=$('span');

            for(let i in keys){
              for(j in mapping){
                  if(
                      !(isNaN(i) || isNaN(j))
                    ){
                    if($(mapping[j]).data('map')==$(keys[i]).data('map')){
                        keys[i].innerText=mapping[j].value;
                    }
                }   
            }  
        }
        
        document.getElementsByClassName("profile-pic-div")[0].style.display="none";
        document.getElementsByClassName("form-section")[0].style.display="none";
        document.getElementsByTagName("footer")[0].style.display="none";   
        document.getElementsByClassName("preview")[0].style.display="block"; 
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(160deg,  #E4E9FD , #A683E3 ";    
        }    
    }

        function back(){
            document.getElementsByClassName("profile-pic-div")[0].style.display="";
            document.getElementsByClassName("form-section")[0].style.display="";
            document.getElementsByTagName("footer")[0].style.display="";   
            document.getElementsByClassName("preview")[0].style.display="none";
            document.getElementsByTagName("body")[0].style.backgroundImage="";
    }

   function bg(){
        let fields = $('.form-control');
        for(let i in fields){
            if(isNaN(i)) {
                continue;
            }
            //console.log(fields[i]);
            fields[i].style.border="";
            $(fields[i]).siblings('small')[0].innerText="";
        }        
   } 
    