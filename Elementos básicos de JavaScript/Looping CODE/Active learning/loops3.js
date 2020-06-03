let i = 500;
let para = document.createElement('p');

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }

      return true;
    }

do {
  if (isPrime(i) === true) {
    para.textContent += `${i}, `
  }
  i--;
} while (i >= 2);
    // Add your code here

    // Don't edit the code below here!
para.textContent = para.textContent.slice(0,para.textContent.length -2) + '.';
let section = document.querySelector('section');
section.appendChild(para);