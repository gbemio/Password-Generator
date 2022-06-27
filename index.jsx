const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];     

const passwordOneEl = document.getElementById("password1")
const passwordTwoEl = document.getElementById("password2")



function generatePasswords() {
    // const randomPasswordOne = Math.floor(Math.random () * characters.length) 
    // const randomPasswordTwo = Math.floor(Math.random () * characters.length)

    passwordOneEl.textContent = `${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}` 
    passwordTwoEl.textContent = `${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}${characters[ Math.floor(Math.random () * characters.length) ]}`
}   