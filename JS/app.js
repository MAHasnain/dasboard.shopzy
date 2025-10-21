import { getUserSession, getAllProducts, getAllOrders, getAllCategories, getAllUsers } from "../Database/allMethods.js";

const categories = document.querySelector(".categories");
const products = document.querySelector(".products");
const orders = document.querySelector(".orders");
const users = document.querySelector(".users");

document.addEventListener("DOMContentLoaded", async () => {

    try {

        // Get session to localStorage
        // const userSession = await getUserSession();
        // console.log(userSession);
        
        // if (userSession) {

            // Get All categories
            const allCategories = await getAllCategories();
            console.log(allCategories);
            allCategories.map(category => {
                categories.innerHTML = `
                <div class="category" data-id="${category.id}">
                            <p class="category-name">${category.name}</p>
                        </div>`
            })
            

            // Get All products
            const allProducts = await getAllProducts();
            console.log(allProducts);

            // Get All orders
            const allOrders = await getAllOrders();
            console.log(allOrders);

            // Get All users
            const allUsers = await getAllUsers();
            console.log(allUsers);

        // } else {

        //     `../HTML/auth/login.html`;
        // }

    } catch (error) {
        console.error(error);
    }

})