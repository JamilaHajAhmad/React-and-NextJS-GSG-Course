// Task 4
interface Product {
    name: string;
    price: number;
}

function calculateTotalPrice(products: Product[]): number {
    let totalPrice = 0;
    for (const product of products) {
        totalPrice += product.price;
    }
    return totalPrice;
}

const products: Product[] = [
    { name: "Shirt", price: 25 },
    { name: "Pants", price: 40 },
    { name: "Jacket", price: 75 }
]

console.log("Total price of all products:", calculateTotalPrice(products));

// Task 5
function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

const email = "test@example.com";

if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}

/*
    Instructions to run the code:
        1. Install TypeScript: Make sure you have Node.js installed. Then, install TypeScript globally using npm:
        npm install -g typescript
        To verify the installation , check the TypeScript version:
        tsc --version
        
        2. Use the TypeScript file in the assignment directory
        tsc assignment/product.ts
        This will generate a JavaScript file named "product.js" in the same directory.
        
        3. Run the compiled JavaScript file using Node.js:
        node assignment/product.js
*/