const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// dom selectors 
const generateBtnEl = document.querySelector("#generate")
const password1El = document.querySelector("#pass1")
const password2El = document.querySelector("#pass2")



generateBtnEl.addEventListener("click", () => { 
    let pass1 = []
    let pass2 = []
    const length = 16
    for (let i=0; i < length; i++) { 
        let randomNumber = Math.floor(Math.random() * characters.length)
        pass1.push(characters[randomNumber])
    }
    password1El.textContent = pass1
    for (let i=0; i < length; i++) { 
        let randomNumber = Math.floor(Math.random() * characters.length)
        pass2.push(characters[randomNumber])
    }
    password2El.textContent = pass2
})
