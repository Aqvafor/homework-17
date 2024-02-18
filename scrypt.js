
// Задание 1
let pet = {
    name: "Луна",
    type: "Кошка",
    sound: "мяу",
    say: function (word = 'мяу') {
        console.log(`${pet.type} ${pet.name} говорит ${word}`);
    }
}
pet.say();
pet.say("гав");

// Задание 2
let product = {
    "potato": "овощи",
    "carrot": "овощи",
    "banana": "фрукты",
    "orange": "фрукты",
    "apple": "фрукты",
    "strawberry": "ягоды",
    "tomato": "овощи",
    "melon": "фрукты",
    "lemon": "фрукты"
}
function sort_obj(object) {
    let new_obj = {
        "фрукты": 0,
        "овощи": 0,
        "ягоды": 0
    }

    for (let keys in object) {
        if (object[keys] === "фрукты") {
            new_obj.фрукты++;

        } else if (object[keys] === "овощи") {
            new_obj.овощи++;

        } else if (object[keys] === "ягоды") {
            new_obj.ягоды++;
        }
    }
    return new_obj;
}
console.log(sort_obj(product));


// Задание 3
let cars = {
    BMW: {
        color: "red",
        country: "Germany",
        year: 2004
    },
    Toyota: {
        color: "green",
        country: "Japan",
        year: 2014
    },
    Honda: {
        color: "black",
        country: "Japan",
        year: 2009
    },
    Volvo: {
        color: "blue",
        country: "Sweden",
        year: 2016
    },
    Skoda: {
        color: "yellow",
        country: "Czech",
        year: 2010
    },
    Renault: {
        color: "white",
        country: "France",
        year: 2020
    },
    Volkswagen: {
        color: "peach",
        country: "Germany",
        year: 2007
    },
    Ford: {
        color: "pink",
        country: "USA",
        year: 2017
    },
    Peugeot: {
        color: "aqua",
        country: "France",
        year: 2005
    },
    Opel: {
        color: "gold",
        country: "Germany",
        year: 2021
    }
}

let car_array = [];
for (let brand in cars) {
    car_array.push({
        brand: brand,
        color: cars[brand].color,
        country: cars[brand].country,
        year: cars[brand].year
    });
}
let sorted_car = car_array.sort((a, b) => a.year - b.year);
let str = "";

let sorted_car_young = sorted_car.slice(0, 3);
console.log("Три самых молодых автомобиля");
console.log(sorted_car_young);
function print(array){
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            str = `${Object.values(array[i])}\n`;
            console.log(str);
        }
        if (i == 1) {
            str = `${Object.values(array[i])}\n`;
            console.log(str);
        }
        if (i == 2) {
            str = `${Object.values(array[i])}\n`;
            console.log(str);
        }
    }
}
print(sorted_car_young);

console.log('\n');
let sorted_car_old = sorted_car.slice(-3);
console.log("Три самых старых автомобиля");
console.log(sorted_car_old);
print(sorted_car_old);