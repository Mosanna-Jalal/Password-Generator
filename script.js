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
       
        
     
        
         
            if(checkBox1.checked){
                text+=  string.charAt(RandomNumber-3);
              text+=  string.charAt(RandomNumber).toUpperCase();
            
            }
            
            if(checkBox3.checked){
                text+=  string.charAt(RandomNumber);
                text+=  specialCharacters.charAt(RandomNumber);
            
            }     
            if(checkBox2.checked){
                text+=  string.charAt(RandomNumber);
              text+=  numerics.charAt(RandomNumber);
            } 
            
            else{
                text+=  string.charAt(RandomNumber);
                
            }
            
          
            
            document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#password").innerText;
  await navigator.clipboard.writeText(text);
}
        
        
document.getElementById("clipboardCopy").style.display = "block";
document.getElementById("clipboardCopy").style.margin = "auto";


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



