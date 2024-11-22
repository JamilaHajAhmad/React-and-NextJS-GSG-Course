function calculateTotalPrice(products) {
    var totalPrice = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        totalPrice += product.price;
    }
    return totalPrice;
}
var products = [
    { name: "Shirt", price: 25 },
    { name: "Pants", price: 40 },
    { name: "Jacket", price: 75 }
];
console.log("Total price of all products:", calculateTotalPrice(products));
// Task 5
function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
var email = "test@example.com";
if (validateEmail(email)) {
    console.log("Email is valid");
}
else {
    console.log("Email is invalid");
}
