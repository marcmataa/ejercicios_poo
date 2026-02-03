import {
  Pet,
  Rectangle,
  Player,
  Converter,
  Cafeteria,
  Perro,
  Boss,
  Truck,
  Square,
  Wizard,
  NotificationPush,
  Sportswear,
  Microwave,
  DigitalBook,
  FreshFood,
  SacingsAccount
} from "./class.js";
//------------------------Ej1: El objeto Mascota------------------------
const pet = new Pet("Nuk", "perro");
pet.presentarse();

//------------------------EJ2: Calculadora de Rectángulos------------------------
const rectangle = new Rectangle(5, 10);
rectangle.rectangleArea();
//------------------------EJ3: El Personaje de Videojuego------------------------
const player = new Player("Aragon");
player.hitPoints();
//------------------------EJ4: Conversor de Moneda------------------------
const converter = new Converter(0.92);
converter.change();
//------------------------EJ5: La Cafetera------------------------
const cafeteria = new Cafeteria("Expresso", 200);
cafeteria.rellenarAgua();
//------------------------EJ6: El Reino Animal------------------------
const perro = new Perro("Firulais", "Labrador");
perro.animalDataSon();
//------------------------EJ7: Empleados y Jefes------------------------
const boss = new Boss("Marc", 100000, "Informática");
boss.bossInfo();
//------------------------EJ8: Vehiculos de Carga------------------------
const truck = new Truck("Volvo", "FH", 20000);
truck.truckInfo();
//------------------------EJ9: Figuras Geométricas------------------------
const square = new Square("rojo", 5);
square.squareInfo();
//------------------------EJ10: Personajes de RPG------------------------
const wizard = new Wizard("Gandalf", 100, 500);
wizard.wizardInfo();
//------------------------EJ11: Sistema de Notificaciones------------------------
const push = new NotificationPush("¿Hola, como estás?", "Iphone de Marc");
push.notificationInfo();
//------------------------EJ12: Tienda de Ropa------------------------
const sportswear= new Sportswear ("Pantalón", "L", true);
sportswear.clotheInfo();
//------------------------EJ13: Electrodomésticos y Consumo------------------------
const microwave = new Microwave ("Samsung", 800, 600);
microwave.applianceInfo();
//------------------------EJ14:  Biblioteca Escolar------------------------
const digitalBook = new DigitalBook ("Cien años de soledad", "Gabriel García Márquez", "EPUB");
digitalBook.bookInfo();
//------------------------EJ15: Categorías de Alimentos------------------------
const freshFood = new FreshFood("Manzana", 52, "20 de octubre");
freshFood.alimentInfo();
//------------------------EJ16: Sistema Bancario------------------------
const sacingsAccount = new SacingsAccount ("Maria", 1000, 0.10);
sacingsAccount.ingresar(500);
sacingsAccount.applyInterest();
 