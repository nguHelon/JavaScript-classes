// Just want to make a recap on the following topics
// Classes : main topic
// methods
// properties
// this

// This

class car {
    constructor(name, color, topSpeed,) {
        // Properties
        this.name = name;
        this.color = color;
        this.topSpeed = topSpeed;
        this.currentSpeed = 0;
    }

    getCurrentSpeed() {
        return this.currentSpeed;
    }

    zeroToSixty() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.currentSpeed = 60;
                resolve({
                    message: 'Phew that was fast',
                    currentSpeed: this.currentSpeed
                })
            }, 2900)
        })
    }

    drive(speed = 10) {
        // console.log("just drove two miles");
        this.currentSpeed += speed;
        console.log(`driving at ${this.currentSpeed} mph`);
    }

    brake() {
        this.currentSpeed -= 10;
        console.log("slowed the down current speed by 10");
    }

    stop() {
        this.currentSpeed = 0;
        console.log("car was stopped");
    }
}

// ferrari
// const ferrari = new car('ferrari', 'red', 250);
// console.log(ferrari);

// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// console.log(ferrari.currentSpeed);

// ferrari.brake();
// console.log(ferrari.currentSpeed);

// ferrari.stop();
// console.log(ferrari.currentSpeed);

// Porsche
// const porsche = new car('porsche', 'yellow', 250);
// console.log(porsche);

// let nums = [1, 2, 3, 4, 5];
// nums.forEach(_ => porsche.drive(20));

// porsche.drive(40);
// porsche.drive(80);
// console.log(porsche.currentSpeed);


// ferrari.drive();
// ferrari.brake();
// console.log(ferrari.currentSpeed);

// ferrari.zeroToSixty()
//     .then((object) => {
//         console.log(object.message);
//         console.log(object.currentSpeed);
//     })

// Bank class exercise;
class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log("sorry can't withdraw that amount, make sure you have enough money on your account");
        } else {
            this.balance -= amount;
        }
    }
}

let bankAccount = new Bank(10000);
console.log(bankAccount.balance);

bankAccount.deposit(5000);
console.log('new Balance: ', bankAccount.balance);
bankAccount.deposit(100000);
console.log('new Balance: ', bankAccount.balance);

bankAccount.withdraw(500000);
console.log('new Balance', bankAccount.balance);
