// run command - tsc script.ts
// or if we dont want to run again and again - tsc --watch

// we just have to tell the types

let a: string
let b: number
let arr: Number[] // what type of data will the array hold inside

arr = [1, 2, 3]

a = 'this is string'
b = 123

// if we give the value in same line we dont have to tell the type
let string = 'Thi is String'

// for  tuples
let tupple: [boolean, string, number] = [true, 'string', 12] //we have to tell what type of data will be in the array


// never type

// function runInf() : never{
//     while(true){
//         console.log('Inf');

//     }
// }

// runInf()
// console.log('something'); //this code will not run

// because after calling the func with never type it doesnt exec any code below it nor the func


// we have to tell what the func is returning when i call it

function abcd(): number {
    return 12
}

abcd()

// if the func is not returning anythingwe can simply write the type void
function nothing(): void {
    console.log('i return nothing');

}
nothing()

// enums in ts => for grouping values
enum Direction {
    top = 'TOP',
    left = 'LEFT',
    right = 'RIGHT',
    bottom = 'BOTTOM'
}

// we can access the values like
console.log(Direction.top);
//---------------------------------------------------------------------

// infer means => guess on your own

// a variable can be any data type or null
let myName: string | null
myName = null
myName = 'Ahanaf'

// we can create our own type
type City = {
    city_name: string,
    isCapital: boolean
}

type Country = {
    country_name: string,
    population: number
}

// now i want to create a type which includes both of the above
type CityInCountry = City & Country

let country: CityInCountry = {
    city_name: 'Dhaka',
    isCapital: true,
    country_name: 'Bangladesh',
    population: 12000000
}

//-------------------------------------------------------

//to create ts config => tsc --init
// we can specify where our ts will compile in tsconfig => outdir 
// just write tsc in terminal and press enter to create the compied file in the outdir loc

//--------------------------------------------------------
// Primitive type aliases => creates only 1 data type

type Shongkha = Number
let my_number: Shongkha = 12

// Object type aliases

type Human = {
    name: string,
    age: Number
}

const Ahanaf: Human = {
    name: 'Ahanaf',
    age: 12
}

// union
type age = number | string

let my_age: age = 'string'
my_age = 24
//---------------------------

// Interfaces
// type and interface is not same
// type simple defines the type
// we can think of interface as look a like

interface User {
    name: string,
    age: number,
    email: string
}

function createUser(user: User) {
    user.name.toUpperCase()
}

// type boyosh = number
// type boyosh = string  // this is not possible because same type cant be 2 data type

// but in interface
interface Man {
    name: string
}

interface Man {
    age: number
}
// no error because they get merged

// using type
// type myType = {
//     name:string,
//     password: string

// }

// // but

// type myType ={
//     age:number
// }

// function myFunc(user : myType){
//     user.name.charAt(0)
// }

//this will not work because type doesnt get merged

interface Food {
    name: string,
    price: number
}

interface SweetFood extends Food {
    sweet_level: string
}
// here extends means whatever Food have SweetFood also have it

function myFood(item: SweetFood) {
    item.name.charAt(1)
    item.sweet_level
}

//------------------------------------------------------------------

// Classes

type Data = string | null
class Pendrive {
    company = 'Hp'
    price = 1200
    data: Data = null

    setData(data: Data) {
        console.log(`Setting data ${data}`);
        this.data = data

    }

    getData() {
        console.log(`getiing data ${this.data}`);

    }
}

let pd1 = new Pendrive() // creating new instance pd1 of class Pendrive
pd1.setData('RDR2 Pc')
pd1.getData()

let pd2 = new Pendrive()
pd2.getData() // will show null because we havent set any data on this instance
pd2.setData('Valorant Pc trash')
pd2.getData()

// classes can also extend

class Food {
    name = 'Burger'
    total: number = 120
    eat() {
        console.log('eating huehue');

    }
}

class Spicy extends Food {
    add_extra = 40
    add_spicy() {
        this.total = this.total + this.add_extra
        console.log('Total Price', this.total);

    }
}

let hum1 = new Spicy()
console.log(hum1.name);
hum1.eat()
hum1.add_spicy()

//------------

// Constructor => it is the first method

class Laptop {
    public name: string
    public price : number

    constructor(name: string , price : number) {
        this.name = name
        this.price = price
    }

    print_laptop() {
        console.log(`Laptop name : ${this.name} and Price is ${this.price}`);
    }
}

const Laptop1 = new Laptop('Hp' , 20000)
Laptop1.print_laptop()

const Laptop2 = new Laptop('Dell' , 30000)
Laptop2.print_laptop()

// we can also declare access modifiers public or private inside constructor

class Animal {
    constructor(public name : string, public type : string) {
        this.name = name
        this.type = type
    }
    print(){
        console.log(`${this.name} is a ${this.type}`);
        
    }
}

let animal_1 = new Animal('Cat' , "Pet")
animal_1.print()



//-------------------------------
// if we keep the variable inside calss public which is by default public then we can change it later

animal_1.name = 'Dog'
animal_1.print()

// but if we make it private then we cant change it later

// but if we make it private then we cant change it

class Earphone {
    constructor(private name : string){
        this.name = name
    }
    print(){
        console.log(`Earhphone name ${this.name}`);
        
    }
}

let ear1 = new Earphone('Airpods')
ear1.print()
// ear1.name = 'Buds'  // we cant do this because it is private

// Protected means if a variable is protected then if a class extends then we can access that var
// in the extended class

class User {
    protected balance = 1200
}

class Admin extends User {
    isAdmin = true
    getBalance(){
        console.log(this.balance); // here we can access User class balance but if it were private we cant
        
    }
}

// also we cant change the protected var in the instance like private var
// we can aslo make methods protected
class Abcd{
    protected balance = 1200
    protected getBalance(number : number){
        this.balance = this.balance
    }
}

//----------------------------
// readonly means we can only read the variable not set it
class my_ReadOnly {
    constructor(public readonly name: string){
        this.name = name
    }
    print(){
        console.log(`This is ${this.name}`);
        
    }
    
    // setName(name : string){
    //     this.name = name
    // }  // we cant do this because it is readonly we cant set a new name to the var
}

let my_read = new my_ReadOnly('Read')
my_read.print()

//------------------------
// Getters and Setters
// Getters means we get the values from class setter means we set the values

class CreateUser{
    constructor(public username : string){
        this.username = username
    }

    get name(){
        return this.username
    }

    set newName(value :string){
        this.username = value
    }
}

// so we can access the get set func as class var

let user1 = new CreateUser('Ahanaf')
user1.name // here we are getting the name from get method by accessing like a value from class
// basically itwill work like a property of an object
console.log('Get :',user1.name);
// we can also set like a we set any object key value
user1.newName = 'Hasim'
console.log('Setting new User:',user1.name);

//--------------------------------
// Function
// in typeScript we just have to tell what the func return type is

function myFunc() : void{
    console.log('Not Returning anything so Void');
    
}
// although TS automatically infers what it it returning we call it implicit return but it is a good practice explicit return type
function newFunc(){
    return 'this is string and I know it'
}


//Arrow
const myArrow = ():number =>{
    return 12
}

// optional field

function newFunc2(name:string , age:number , gender?:string){
    console.log('gender is optional');
    
}
newFunc2('Ahanaf' , 24) // we didnt give gender because it is optional
// just put '?' and it will become optional

//default parameter

function newFunc3(name:string = 'Hasim'){
    console.log(`${name} is default name if no name is given`);
    
}
newFunc3()

// Rest parameter

//if we want to pass an array
function newFunc4(name:string[]){
    console.log(name);
    
}
newFunc4(['Ahanaf' , 'Sakib' , 'Hasim'])

// if we want to pass multiple name
function newFunc5(...name:string[]){ //rest operator must be an array type
    console.log('spreading all the names: ',name);
    
}
newFunc5('Ahanaf' , 'Sakib' , 'Hasim') // not passing array

//-----------------------------
//Type Assertion

function ChangeParagraph(para:HTMLParagraphElement){
    para.innerHTML='Changed the paragraph'
}

// Literals

let xyz : 'Ahanaf' //here xyz is "Ahanaf" and nothing else

xyz = 'Ahanaf'
// xyz = 'Any name' // wil not work

let number_1 : 12
// number_1 = 2 // will not work

let multiple : 'Ahanaf' | 1337

multiple = "Ahanaf"
multiple = 1337

// multiple = "hasim" // will not work
// multiple = 12 //will not work


