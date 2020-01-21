//varaibles from DOM

const generateEl = document.getElementById("generate");

const resultsEl = document.querySelector('#results');
const upperCaseEl = document.querySelector('#uppercase')
const lowerCaseEl = document.querySelector('#lowercase')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')
const clipboardEl = document.querySelector('#clipboard')

const UNIupper = [65, 90];
const UNIlower = [97, 122];
const UNInum = [48, 57];
const UNIsym = [33,47];

generate.addEventListener('click', () => {
    const numsOfCharactersEl = document.querySelector("#numsofcharacters").value;
    let upperCase = upperCaseEl.checked;
    let lowerCase = lowerCaseEl.checked;
    let numbers = numbersEl.checked;
    let symbols = symbolsEl.checked;
    

    console.log(numsOfCharactersEl, upperCase, lowerCase, numbers, symbols);
    

    const grandSelector =[];
    const password = [];

  if (upperCase === true){
      for (let i = UNIupper[0]; i <= UNIupper[1]; i++){
        grandSelector.push(i);
       
      }
      

  }

  if (lowerCase === true){
    for (let i = UNIlower[0]; i <= UNIlower[1]; i++){
        grandSelector.push(i);
    }
    

}

if (numbers === true){
    for (let i = UNInum[0]; i <= UNInum[1]; i++){
        grandSelector.push(i);
    }
     

}

if (symbols === true){
    for (let i = UNIsym[0]; i <= UNIsym[1]; i++){
        grandSelector.push(i);
    }
      
      
    

}

for(let i = 0; i < numsOfCharactersEl; i++){
    password.push(String.fromCharCode(grandSelector[Math.floor(Math.random()*grandSelector.length)]));
   
}


resultsEl.textContent = password.join('');


console.log(password);  

});


clipboardEl.addEventListener('click', () =>{
    const textArea = document.createElement('textarea');
    const password = resultsEl.innerText;

    if (password === 0){
        return;
    }

    textArea.value =password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    textArea.remove();
    alert('Password Copied');

    console.log(textArea);
});
