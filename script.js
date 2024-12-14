//   Завдання
//   Визначити середню ціну за квадратний метр (price per m²) для кожного типу нерухомості (apartment та house) 
// в кожній локації (west, east, north, south, center).
  
//   Знайти найдорожчу нерухомість у кожній локації.
  
//   Розрахувати загальну площу всіх об'єктів у кожній локації.
  
//   Знайти найкращу пропозицію за ціною за квадратний метр для кожного типу нерухомості 
// (тобто, об'єкт з найменшою ціною за квадратний метр).
//   Написати функції для кожного підзавдання.
//   Використовувати сучасний JavaScript (ES6+).
//   Забезпечити легке масштабування коду для додавання нових типів нерухомості чи локацій.
//   Очікуваний результат
//   Для наведеного масиву очікується, наприклад:

// Найдорожча нерухомість:

// {
//   center: { id: 4, type: "house", price: 400000, area: 200, location: "center" },
//   west: { id: 2, type: "house", price: 250000, area: 120, location: "west" },
//   east: { id: 3, type: "apartment", price: 80000, area: 30, location: "east" },
//   north: { id: 5, type: "apartment", price: 150000, area: 50, location: "north" },
//   south: { id: 6, type: "house", price: 300000, area: 150, location: "south" },
// }

// Найкраща пропозиція:

// javascript
// {
//   apartment: { id: 3, type: "apartment", price: 80000, area: 30, location: "east" },
//   house: { id: 2, type: "house", price: 250000, area: 120, location: "west" },
// }

const properties = [
    { id: 1, type: "apartment", price: 120000, area: 45, location: "center" },
    { id: 2, type: "house", price: 250000, area: 120, location: "west" },
    { id: 3, type: "apartment", price: 80000, area: 30, location: "east" },
    { id: 4, type: "house", price: 400000, area: 200, location: "center" },
    { id: 5, type: "apartment", price: 150000, area: 50, location: "north" },
    { id: 6, type: "house", price: 300000, area: 150, location: "south" },
];

//   Середня ціна за квадратний метр:

// {
//     center: { apartment: 3000, house: 2000 },
//     west: { house: 2083.33 },
//     east: { apartment: 2666.67 },
//     north: { apartment: 3000 },
//     south: { house: 2000 },
// }

const findAreaPriceByType = function (arr) {
    let res = {
        center: {},
        west: {},
        east: {},
        north: {},
        south: {},
    };

    for (let i = 0; i < Object.keys(res).length; i++) {
        let currentApartments = arr.filter((el) => el.type === 'apartment' && el.location === Object.keys(res)[i]);
        let currentHouses = arr.filter((el) => el.type === 'house' && el.location === Object.keys(res)[i]);
        let initialValue = 0;
        let apartmentsAreaPrice = currentApartments.reduce((acc, el) => acc + (el.price / el.area), initialValue) / currentApartments.length;
        initialValue = 0;
        let housesAreaPrice = currentHouses.reduce((acc, el) => acc + (el.price / el.area), initialValue) / currentHouses.length;
        if (!Number.isNaN(apartmentsAreaPrice)) {
            res[Object.keys(res)[i]]["apartment"] = apartmentsAreaPrice;
        }
        if (!Number.isNaN(housesAreaPrice)) {
            res[Object.keys(res)[i]]["house"] = housesAreaPrice;
        }
    }

    return res;
}

console.log(findAreaPriceByType(properties));
