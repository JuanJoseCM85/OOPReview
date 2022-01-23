export class Mobile
{
    //Propiedades de la Clase Mobile.
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    //Constructor
    constructor(nombre:string,modelo:string,marca:string,tamanoTarjet:number,color:string,es5G:boolean,numeroCamaras:number,precio:number)
    {
        this.name = nombre;
        this.model = modelo;
        this.trademark = marca;
        this.sdSize = tamanoTarjet;
        this.color = color;
        this.is5G = es5G;
        this.cameraNumber = numeroCamaras;
        this.price = precio;
    }

    //Getters y Setters de la clase
    public getName():string
    {
        return this.name;
    }

    public setName(nombre:string):void
    {
        this.name = nombre;
    }

    public getModel():string
    {
        return this.model;
    }

    public setModel(modelo:string):void
    {
        this.model = modelo;
    }

    public getTradeMark():string
    {
        return this.trademark;
    }

    public setTradeMark(marca:string):void
    {
        this.trademark = marca;
    }

    public getSdSize():number
    {
        return this.sdSize;
    }

    public setSdSize(n:number):void
    {
        this.sdSize = n;
    }

    public getColor():string
    {
        return this.color;
    }

    public setColor(color:string):void
    {
        this.color = color;
    }

    public getIs5g():boolean
    {
        return this.is5G;
    }

    public setIs5G(es5g:boolean):void
    {
        this.is5G = es5g;
    }

    public getCameraNumber():number
    {
        return this.cameraNumber;
    }

    public setCameraNumber(camaras:number):void
    {
        this.cameraNumber = camaras;
    }

    public getPrice():number
    {
        return this.price;
    }

    public imprimePatron():void
    {
        console.log("The characteristics of th mobile "+ this.name + " are:");
        console.log("Name: "+ this.name);
        console.log("Model: " + this.model);
        console.log("Trademark: " + this.trademark);
        console.log("SD Size (GB): " + this.sdSize);
        console.log("Color: " + this.color);
        console.log("Is 5G?:" + this.is5G);
        console.log("Number of Cameras: " + this.cameraNumber);
        
        
    }


    public mostrarAtributos():void
    {
        console.log("Nombre - " + this.name);
        console.log("Modelo - " + this.model);
        console.log("Marca - " + this.trademark);
        console.log("Tamaño Tarjeta - " + this.sdSize);
        console.log("Color - " + this.color);
        console.log("Tiene 5g - " + this.is5G);
        console.log("Numero camaras - " + this.cameraNumber);
        console.log("Precio - " + this.price);
        console.log(" ");
        
    }

}