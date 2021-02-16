document.addEventListener("DOMContentLoaded", function() {
  let template = document.querySelector("#mitemplate");
  let html = template.innerHTML;
  let data = {
    nombre: "Juan",
    edad: 45,
    mensaje: "Hola a todos soy argentino",
    link: "http://google.com"
  };
  const regx = /({{)\w+(}})/g;
  const arr = [...html.matchAll(regx)];

  arr.forEach(e => {
    let key = e[0].substr(2, e[0].length - 4);
    if (data.hasOwnProperty(key)) html = html.replace(e[0], data[key]);
    else console.log(`Error la clave [${key}] no existe en el objeto`);
  });
  template.innerHTML = html;
});
