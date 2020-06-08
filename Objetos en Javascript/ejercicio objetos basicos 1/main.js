

let banda = {
  name: 'Avalanch',
  nationality: 'España',
  genero: 'Heavy Metal',
  members: 6,
  formed: 1993,
  split: false,
  albums: [
    {
      name: 'El angel caido',
      released: 2001
    },
    {
      name: 'El ladrón de sueños',
      released: '2010'
    },
    {
      name: 'El secreto',
      released: 2019
    }
  ]
}

let bandInfo = `${banda.name} nació en ${banda.nationality} en el año ${banda.formed} la cual sigue activa actualmente, su genero musical es el ${banda.genero} y uno de sus primero albunes fue ${banda.albums[0].name} lanzado en el año ${banda.albums[0].released}`
    // Add your code here


    // Don't edit the code below here!

    const section = document.querySelector('section');
    let para1 = document.createElement('p');
    para1.textContent = bandInfo;
    section.appendChild(para1);