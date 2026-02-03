//------------------------Ej1: El objeto Mascota------------------------
export class Pet {
  constructor(animalName, animalType) {
    this.name = animalName;
    this.type = animalType;
  }

  presentarse() {
    console.log(`Hola, soy un ${this.type} y me llamo ${this.name}.`);
  }
}
//------------------------EJ2: Calculadora de Rectángulos------------------------

export class Rectangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  rectangleArea() {
    console.log(
      `La area de un rectangulo ${this.base} * ${this.height} = ${this.base * this.height}`,
    );
  }
}
//------------------------EJ3: El Personaje de Videojuego------------------------
export class Player {
  constructor(playerName) {
    this.name = playerName;
  }
  healthy = 100;
  damage = 20;
  hitPoints() {
    console.log(
      `${this.name} tenia ${this.healthy} puntos de vida, pero le han hecho ${this.damage} de daño, ahora le quedan ${this.healthy - this.damage} puntos de vida.`,
    );
  }
}
//------------------------EJ4: Conversor de Moneda------------------------
export class Converter {
  constructor(taxChange) {
    this.tax = taxChange;
  }
  dollar = 100;
  change() {
    console.log(`${this.dollar}$ són ${this.dollar * this.tax}€.`);
  }
}
//------------------------EJ5: La Cafetera------------------------
export class Cafeteria {
  constructor(tipoCafe, cantidadAgua) {
    this.tipo = tipoCafe;
    this.cantidad = cantidadAgua;
  }
  añadirAgua = 300;
  rellenarAgua() {
    console.log(
      `La cafetera ${this.tipo} con ${this.cantidad}ml ahora tiene ${this.cantidad + this.añadirAgua}ml.`,
    );
  }
}
//------------------------EJ6: El Reino Animal------------------------
export class Animal {
  constructor(name) {
    this.name = name;
  }
}
export class Perro extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  animalDataSon() {
    console.log(`El perro se llama ${this.name} y es un ${this.breed}.`);
  }
}
//------------------------EJ7: Empleados y Jefes------------------------
export class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
export class Boss extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  bossInfo() {
    console.log(
      `Nombre: ${this.name} | Salario: ${this.salary} | Departamento: ${this.department}`,
    );
  }
}
//------------------------EJ8: Vehiculos de Carga------------------------
export class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
export class Truck extends Vehicle {
  constructor(brand, model, loadCapacity) {
    super(brand, model);
    this.capacity = loadCapacity;
  }
  truckInfo() {
    console.log(
      `Marca: ${this.brand} | Modelo : ${this.model} | Capacidad: ${this.capacity}kg`,
    );
  }
}
//------------------------EJ9: Figuras Geométricas------------------------
export class Figure {
  constructor(color) {
    this.color = color;
  }
}
export class Square extends Figure {
  constructor(color, side) {
    super(color);
    this.side = side;
  }
  squareInfo() {
    console.log(
      `El cuadrado es de color ${this.color}, su lado mide ${this.side} y su area es de ${this.side ** 2}`,
    );
  }
}
//------------------------EJ10: Personajes de RPG------------------------
export class Character {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}
export class Wizard extends Character {
  constructor(name, level, magicPoints) {
    super(name, level);
    this.points = magicPoints;
  }
  wizardInfo() {
    console.log(
      `Nombre: ${this.name} | Nivel: ${this.level} | Puntos de Magia: ${this.points}`,
    );
  }
}
//------------------------EJ11: Sistema de Notificaciones------------------------
export class Notification {
  constructor(message) {
    this.message = message;
  }
}
export class NotificationPush extends Notification {
  constructor(message, device) {
    super(message);
    this.device = device;
  }
  notificationInfo() {
    console.log(`Enviando: ${this.message} al dispositivo: ${this.device}.`);
  }
}
//------------------------EJ12: Tienda de Ropa------------------------
export class ClothesProducts {
  constructor(type, size) {
    this.type = type;
    this.size = size;
  }
}
export class Sportswear extends ClothesProducts {
  constructor(type, size, breathable) {
    super(type, size);
    this.breathable = breathable;
  }
  clotheInfo(){
    console.log(`Prenda: ${this.type} | Talla: ${this.size} | Transpirable: ${this.breathable}`)
  }
}
//------------------------EJ13: Electrodomésticos y Consumo------------------------
export class Appliance {
    constructor(brand, power){
        this.brand=brand;
        this.power=power;
    }
}
export class Microwave extends Appliance {
    constructor (brand, power, timeMax){
        super(brand, power);
        this.timeMax= timeMax
    }
    applianceInfo (){
        console.log(`Marca: ${this.brand} | Potencia ${this.power}W | Tiempo Máximo: ${this.timeMax}s`);
    }
}
//------------------------EJ14: Biblioteca Escolar------------------------
export class Book {
    constructor (title, author){
        this.title=title;
        this.author=author;
    }
}
export class DigitalBook extends Book {
    constructor(title,author,format){
        super(title,author);
        this.format=format;
    }
    bookInfo(){
        console.log(`Libro: ${this.title} | Autor: ${this.author} | Formato: ${this.format}`);
    }
}
//------------------------EJ15: Categorías de Alimentos------------------------
export class Aliment {
    constructor(name, calories){
        this.name=name;
        this.calories=calories;
    }
}
export class FreshFood extends Aliment {
    constructor(name, calories, caducity){
        super(name,calories);
        this.caducity= caducity;
    }
    alimentInfo(){
        console.log(`Nombre: ${this.name} | Calorias: ${this.calories} | Caducidad: ${this.caducity}`);
    }
}
//------------------------EJ16: Sistema Bancario------------------------
export class Account {
    constructor(titularName, balance){
        this.titularName=titularName;
        this.balance=balance;
    }
    ingresar(cantidad) {
        this.balance += cantidad; 
        console.log(`${this.titularName} ha ingresado ${cantidad}€. Saldo actual: ${this.balance}€`);
    }
    retirar(cantidad) {
        this.balance -= cantidad;
        console.log(`${this.titularName} ha retirado ${cantidad}€. Saldo actual: ${this.balance}€`);
    }
}
export class SacingsAccount extends Account {
    constructor(titularName, balance, tax){
        super(titularName, balance);
        this.tax=tax;
    }
    applyInterest() {
        const extra = this.balance * this.tax;
        this.balance += extra;
        console.log(`Interés del ${this.tax * 100}% aplicado. Nuevo saldo final: ${this.balance}€`);
       console.log(`El saldo final de ${this.titularName} es: ${this.balance}€`);
    }
}