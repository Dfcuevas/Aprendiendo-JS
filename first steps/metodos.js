// -------------
// CAMBIANDO A MAYUSCULAS Y MINUSCULAS

let radData = 'My NaMe Is MuD';

console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// --------------------------
// Actualizando partes de una cadena

browserType = 'Mozilla';

console.log(browserType.replace('Moz', 'Van'));
// replace(); nos permite actualizar partes de una cadena, este metodo recibe dos parametros, el primero es la parte que queremos actualizar y el segundo es por lo que lo queremos actualizar. este metodo es como js casesensitive, lo que nos hace estar pendientes de mayusculas y minusculas.

browserType = browserType.replace('Moz', 'Van');
console.log(browserType);

