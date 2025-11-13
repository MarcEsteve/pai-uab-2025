let a = 25; //Scope global
function laMevaFun(b) {
  let c = a + b; //c es Scope només a la funció
  console.log(d);   //Accedeix a la variable global d
  return c;
}
let d = 44; //Scope global

console.log(laMevaFun(d)); //Crida a la funció i mostra  a + b = 25 + 44 = 69

console.log(a); //Accedeix a la variable global a = 25
console.log(b); //Error, b no està definida en aquest àmbit
console.log(c); //Error, c no està definida en aquest àmbit
console.log(d); //Accedeix a la variable global d = 44
