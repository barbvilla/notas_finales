//HTML
var html1 = document.getElementById('html1');
var html2 = document.getElementById('html2');
var html3 = document.getElementById('html3');
var htmlp = document.getElementById('htmlp');

var nota1html = +prompt("Ingrese la nota 1 de HTML")
var nota2html = +prompt("Ingrese la nota 2 de HTML")
var nota3html = +prompt("Ingrese la nota 3 de HTML")

var promhtml = (nota1html+nota2html+nota3html)/3

html1.innerHTML = nota1html
html2.innerHTML = nota2html
html3.innerHTML = nota3html
htmlp.innerHTML = promhtml

//CSS
var css1 = document.getElementById('css1');
var css2 = document.getElementById('css2');
var css3 = document.getElementById('css3');
var cssp = document.getElementById('cssp');

var nota1css = +prompt("Ingrese la nota 1 de CSS")
var nota2css = +prompt("Ingrese la nota 2 de CSS")
var nota3css = +prompt("Ingrese la nota 3 de CSS")

var promcss = (nota1css+nota2css+nota3css)/3

css1.innerHTML = nota1css
css2.innerHTML = nota2css
css3.innerHTML = nota3css
cssp.innerHTML = promcss

//JavaScript
var js1 = document.getElementById('js1');
var js2 = document.getElementById('js2');
var js3 = document.getElementById('js3');
var jsp = document.getElementById('jsp');

var nota1js = +prompt("Ingrese la nota 1 de JavaScript")
var nota2js = +prompt("Ingrese la nota 2 de JavaScript")
var nota3js = +prompt("Ingrese la nota 3 de JavaScript")

var promjs = (nota1js+nota2js+nota3js)/3

js1.innerHTML = nota1js
js2.innerHTML = nota2js
js3.innerHTML = nota3js
jsp.innerHTML = promjs


