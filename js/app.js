const passwordTextEl = document.getElementById("password-text");
const copyBtn = document.getElementById("copy-btn");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase-cb");
const uppercaseEl = document.getElementById("uppercase-cb");
const numbersEl = document.getElementById("numbers-cb");
const symbolsEl = document.getElementById("symbols-cb");
const generateBtn = document.getElementById("generate-btn");

const lowercaseChars = "abcdefghijklmnopqrstuvqxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersChars = "1234567890";
const symbolsChars = "!@#$%^&*()_+-=[]{}";

function generatePassword() {
    const len = lengthEl.value;
    if (len <= 6) {
        console.log(len);
        alert("The length of the password should be 6 or more than 6.");
        return "";
    }
    
    if (!lowercaseEl.checked && !uppercaseEl.checked && !numbersEl.checked && !symbolsEl.checked) {
        alert("Select what all things you want to include.");
        return "";
    }
        
    var passwd = "";
    for (var i = 0; i < len; i++)
        passwd += getPasswordChar();

    var lower = false, upper = false, num = false, symb = false;
    for (var i = 0; i < passwd.length; i++) {
        if (lowercaseChars.includes(passwd[i]))
            lower = true;
        else if (uppercaseChars.includes(passwd[i]))
            upper = true;
        else if (numbersChars.includes(passwd[i]))
            num = true;
        else if (symbolsChars.includes(passwd[i]))
            symb = true;
    }

    if (lower == lowercaseEl.checked && upper == uppercaseEl.checked && num == numbersEl.checked && symb == symbolsEl.checked)
        return passwd;
    else
        return generatePassword();
}

function getPasswordChar() {
    var chars = []
    if (lowercaseEl.checked)
        chars.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
    if (uppercaseEl.checked)
        chars.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
    if (numbersEl.checked)
        chars.push(numbersChars[Math.floor(Math.random() * numbersChars.length)]);
    if (symbolsEl.checked)
        chars.push(symbolsChars[Math.floor(Math.random() * symbolsChars.length)]);
    
    return chars[Math.floor(Math.random() * chars.length)];
}

generateBtn.onclick = () => {
    var passwd = generatePassword();
    passwordTextEl.innerText = passwd;
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordTextEl.innerText);
    alert("Copied the password: " + passwordTextEl.innerText);
});
