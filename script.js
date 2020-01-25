//varaibles from DOM

const generateEl = document.getElementById("generate");

const resultsEl = document.querySelector('#results');
const upperCaseEl = document.querySelector('#uppercase')
const lowerCaseEl = document.querySelector('#lowercase')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')
const clipboardEl = document.querySelector('#clipboard')

// arreys of string.charcode
  const upper = [65, 90];
  const lower = [97, 122];
  const num = [48, 57];
  const sym = [33,47];
 
// event listener  
generate.addEventListener('click', () => {
    const numsOfCharactersEl = document.querySelector("#numsofcharacters").value;
    let upperCase = upperCaseEl.checked;
    let lowerCase = lowerCaseEl.checked;
    let numbers = numbersEl.checked;
    let symbols = symbolsEl.checked;
    

    // console.log(numsOfCharactersEl, upperCase, lowerCase, numbers, symbols);
    

    const grandSelector =[];
    const password = [];

  if (upperCase === true){
      for (let i = upper[0]; i <= upper[1]; i++){
        grandSelector.push(i);
       
      }
      

  }

  if (lowerCase === true){
    for (let i = lower[0]; i <= lower[1]; i++){
        grandSelector.push(i);
    }
    

}

if (numbers === true){
    for (let i = num[0]; i <= num[1]; i++){
        grandSelector.push(i);
    }
     

}

if (symbols === true){
    for (let i = sym[0]; i <= sym[1]; i++){
        grandSelector.push(i);
    }
    // console.log(grandSelector);
      
    

}
 // for loop for random number generator
for(let i = 0; i < numsOfCharactersEl; i++){
    password.push(String.fromCharCode(grandSelector[Math.floor(Math.random()*grandSelector.length)]));
   
}


resultsEl.textContent = password.join('');


console.log(password);  

});

  //event listerner for clipboard button 
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
