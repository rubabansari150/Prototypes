// Practice Assignment 1

// Constuctor Function
var account1 = new BankAccount("Ali", 1000);
var account2 = new BankAccount("Zeshan", 500)


function BankAccount (accountHolder, balance){
    this.accountHolder = accountHolder;
    this.balance = balance;
}

// Adding method to prototype
BankAccount.prototype.deposit = function (amount){
    this.balance += amount;
    console.log(this.accountHolder + " deposit " + amount + ". New balance: " + this.balance);
};

BankAccount.prototype.withdraw = function(amount){
    if(amount > this.balance) {
        console.log("Insufesent balannce!")
    } else {
        this.balance -= amount;
        console.log(this.accountHolder + " withdraw " + amount + ". New balance:" + this.balance);
    }
};

account1.deposit(200);
account2.withdraw(300);



// Practice Assignment 2

// Constuctor Function
var mart1 = new Fruit("Mango", 200, [8, 9]);
var mart2 = new Fruit("Orange", 300, [8, 9]);
var mart3 = new Fruit("Strawberry", 500, [8, 9]);

function Fruit(name, price, discountMonths){
    this.name = name;
    this.price = price;
    this.discountMonths = discountMonths;
}

// Adding method to prototype
Fruit.prototype.foodMart = function(fruitediscount){
    var bestPrice = this.price;
    // var persentage = 30;
    var currentDate = new Date();
    var month = currentDate.getMonth();

    for(var i = 0; i < this.discountMonths.length; i++){
        if(this.discountMonths[i] === month) {
            bestPrice = this.price *  fruitediscount;
            break;
        }
    }

    return bestPrice;
}

console.log("Sep mangoes price discount Rs:", mart1.foodMart(0.80));
console.log("Sep Oranges price discount Rs:", mart2.foodMart(0.50));
console.log("Sep Strawberry price discount Rs:", mart3.foodMart(0.40));



// Practice Example 1
var person1 = new Person ("Ali", 24);
var person2 = new Person ("Ahmad", 30);
var person3 = new Person ("Hashim", 28);
var person4 = new Person ("Kamran", 37);
var person5 = new Person ("Rizwan", 40);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.salary = "Ali's salary is: " + 32000;
console.log(person1.salary);

Person.prototype.greet = function () {
   console.log("Hello, my name is " + this.name + " and i am " + this.age + " years old.");
}
person1.greet();
person2.greet();
person3.greet();
person4.greet();
person5.greet();


//Practice Example 2
var cat = new Animal ("Cat", 5);
var dog = new Animal ("Dog", 7);

function Animal(type, age){
    this.type = type;
    this.age = age;
}

Animal.prototype.speak = function () {
    console.log(this.type + " is making a noice and he is " + this.age + " years old.");
}

dog.speak();
cat.speak();



