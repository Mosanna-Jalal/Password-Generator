let string = "abcdefghijklmnopqrstuvwxyz";
let specialCharacters= "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
let numerics= "01234567897584875788383210";

let checkBox1 = document.getElementById("myCheck1");
let checkBox2 = document.getElementById("myCheck2");
let checkBox3 = document.getElementById("myCheck3");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function doTask() {
    clearAll();
    
    const x = document.querySelector("#pgLength").value;

    let text="";


    for (let i = 0; i < x; i++) {

        

        let RandomNumber = getRandomInt(26);
       
        
        
       console.log(checkBox1.checked ,  checkBox2.checked , checkBox3.checked) ;
       
         
        //  console.log("if"+RandomNumber);
        //  console.log("i="+i);
         
        //  text=  string.charAt(RandomNumber).toUpperCase();
        
         
            if(checkBox1.checked){
                console.log(RandomNumber);
              text+=  string.charAt(RandomNumber).toUpperCase();
            //   console.log(text);
            //   let paragraph = document.getElementById("password").innerHTML;
            //   let textAdd = document.createElement("span");
            //   textAdd.innerHTML=text;
            // document.getElementById("password").appendChild(textAdd);
            }
            
            if(checkBox3.checked){
                text+=  specialCharacters.charAt(RandomNumber);
            //   console.log(specialCharacters.charAt(RandomNumber));
            //   let paragraph = document.getElementById("password").innerHTML;
            //   let textAdd = document.createElement("span");
            //   textAdd.innerHTML=text;
            // document.getElementById("password").appendChild(textAdd);
            }     
            if(checkBox2.checked){
              text+=  numerics.charAt(RandomNumber);
            //   console.log(text);
            //   let paragraph = document.getElementById("password").innerHTML;
            //   let textAdd = document.createElement("span");
            //   textAdd.innerHTML=text;
            // document.getElementById("password").appendChild(textAdd);
            } 
            
            else{
                text+=  string.charAt(RandomNumber);
                
            }
            
          
            
            
        
        
    


    }

    let textAdd = document.createElement("span");
    text=text.substr(0, x);
    textAdd.innerHTML=text;
    document.getElementById("password").appendChild(textAdd);
}


document.querySelector(".clearAll").addEventListener("click", clearAll)
function clearAll() {
    
    document.getElementById("password").innerHTML = " ";

}



