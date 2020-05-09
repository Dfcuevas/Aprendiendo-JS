const cats = [
  'Paca',
  'Paco',
  'Muñeca',
  'Lulu',
  'Manchitas'
];

let info = 'My cats are called ';

const para = document.querySelector('.e1');

for (let i=0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}

para.textContent = info;

/* Saliendo de bucles con break */

const contacts = [
 'Chris:2232322',
 'Sarah:3453456', 
 'Bill:7654322', 
 'Mary:9998769', 
 'Dianne:9384975'
];

const para2 = document.querySelector('.e2');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let searchName = input.value.toLowerCase();
  console.log(searchName);
  input.value = '';
  input.focus();

  for(i=0; i < contacts.length; i++) {
    console.log(contacts[i]);
    let splitContact = contacts[i].split(':');
    if(splitContact[0].toLowerCase() === searchName) {
      para2.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else {
      para2.textContent = 'Contact not found.';
    }
  }
});


/* WHILE AND DO... WHILE LOOPS */

/* 
initializer 
while (exit condition) {
  //code run 

  final expression
}
*/

let c = 0; 
let info3 = 'My cats are called ';


while (c < cats.length) {
  if (c === cats.length - 1) {
    info3 += ' and ' + cats[c] + '.';
  } else {
    info3 += cats[c] + ', '; 
  }
  c++;
}

const paracats = document.querySelector('.e3');

paracats.textContent = info3;