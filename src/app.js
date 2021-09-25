//lib dizininin altındaki service.js import ediyoruz.
import getData from  './lib/service.js'
//1. parametre için 
console.log(await getData(1));
