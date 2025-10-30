import { getUserSession, getAllProducts, getAllOrders, getAllCategories, getAllUsers } from "../Database/allMethods.js";

const categories_section = document.querySelector(".categories");
const products_section = document.querySelector(".products");
const orders_section = document.querySelector(".orders");
const users_section = document.querySelector(".users");

document.addEventListener("DOMContentLoaded", async () => {

    try {

        // Get session to localStorage
        const userSession = await getUserSession();
        console.log(userSession);

        if (userSession.session) {

            // Get All categories
            const allCategories = await getAllCategories();
            // console.log(allCategories);
            allCategories.map(category => {
                categories_section.innerHTML += `
                <div class="category" data-id="${category.id}">
                        <p class="category-name">${category.name}</p>
                    </div>`
            })
            categories_section.addEventListener("click", () => {
                window.location.href = `../HTML/category_pages/allcategories.html`
            })

            // Get All products
            const allProducts = await getAllProducts();
            // console.log(allProducts);
            allProducts.map(product => {
                products_section.innerHTML += `
            <div class="product" id="product_card" data-id="${product.id}" data-cat_id="${product.category_id}">
                 <div class="product-card" >
                     <img src="${product.image_url}" width=200px alt="">
                     <div class="product-price">
                         <h4>Rs. ${product.price}</h4>
                     </div>
                     <div class="product-name">
                         <p>${product.title}</p>
                     </div>
                     <div class="product-description">
                         <p>${product.description}</p>
                     </div>
                     <button id="cart_btn">Add to Cart</button>
                 </div>
             </div>`
            })

            // const productCards = document.querySelectorAll("#product_card");
            // productCards.forEach(productCard => {
            //     productCard.addEventListener("click", (e) => {
            //         e.preventDefault();
            //         productCard.getAttribute()
            //     })
            // })
            products_section.addEventListener("click", () => {
                window.location.href = `../HTML/product_pages/productDet.html`;
            })

            // Get All orders
            const allOrders = await getAllOrders();
            // console.log(allOrders);
            allOrders.map(order => {
                orders_section.innerHTML += `
            <div class="order" data-order_id="${order.id}"></div>`
            })
            orders_section.addEventListener("click", () => {
                window.location.href = `../HTML/order_pages/allOrders.html`
            })

            // Get All users
            const allUsers = await getAllUsers();
            // console.log(allUsers);
            allUsers.map(user => {
                users_section.innerHTML += `
            <div data-id="${user.id}">
                <p class="name">${user.user_metadata.first_name}</p>
                <p class="email">${user.email}</p>
            </div>`
            })
            users_section.addEventListener("click", () => {
                window.location.href = `../HTML/user_pages/allUsers.html`;
            })

        } else {

            window.location.href = `../HTML/auth/login.html`;
        }

    } catch (error) {
        console.error(error);
    }

})