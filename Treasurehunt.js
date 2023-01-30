var keys = Math.floor(Math.random() * 9)
var sadFace = Math.floor(Math.random() * 9)
if(keys === sadFace) {
   sadFace = Math.floor(Math.random() * 9)
}
const treasurehunt = (location) => {
       if(location === keys) {
      document.getElementById(location).innerHTML = "🔑"
      alert("Congrats! You found your keys!")
   }
   else if(location === sadFace) {
      document.getElementById(location).innerHTML = "😥"
      alert("Your keys are forever gone.")
   }    
   else {
      document.getElementById(location).innerHTML = "🔍"
   }   
}

   