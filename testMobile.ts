import { Mobile } from "./mobile";

let nokia3210 = new Mobile("Nokia3210","3210","Nokia",1,"Blue",false,0,23);
let iphone3G = new Mobile("Iphone3g","Iphone","Apple",32,"Grey",false,1,230);
let samsungGalaxy10 = new Mobile("MiGalaxy10","Galaxy10","Samsung",128,"Black",true,3,550);

//Mostramos por consola todos los atributos de cada obejto.

nokia3210.mostrarAtributos();
iphone3G.mostrarAtributos();
samsungGalaxy10.mostrarAtributos();

nokia3210.setIs5G(true);
nokia3210.setCameraNumber(4);

nokia3210.mostrarAtributos();
iphone3G.mostrarAtributos();
samsungGalaxy10.imprimePatron();

let arrayMobiles:Mobile[] = [nokia3210,iphone3G,samsungGalaxy10];

for (let m1 of arrayMobiles){
    m1.imprimePatron();
    console.log(" ");
    
}