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
            let allCategories = await getAllCategories();
            // console.log(allCategories);
            allCategories.length === 0
                ?
                categories_section.innerHTML = `<p>No categories.</p>`
                :
            allCategories = allCategories.slice(0, 4)
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
            let allProducts = await getAllProducts();
            // console.log(allProducts);
            allProducts.length === 0
                ?
                products_section.innerHTML = `<p>No products.</p>`
                :
            allProducts = allProducts.slice(0, 4)
            allProducts.map(product => {
                products_section.innerHTML += `
            <div class="product-card flex" id="product" data-id="${product.id}" data-cat_id="${product.category_id}"> 
                 <img class="product-image" src="${product.image_url}" width=80px alt="">
                    <div class="product-info">
                        <p class="product-name">${product.title}</p>
                        <p class="product-title">Rs. ${product.price}</p>
                    </div>
                 <div class="product-stock">
                     <p><span>stock </span>${product.stock}</p>
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
            let allOrders = await getAllOrders();
            // console.log(allOrders);
            allOrders.length === 0
                ?
                orders_section.innerHTML = `<p>No upcoming orders.</p>`
                :
                allOrders = allOrders.slice(0, 4)
            allOrders.map(order => {
                orders_section.innerHTML += `
            <div class="order" data-order_id="${order.id}"></div>`
            })
            orders_section.addEventListener("click", () => {
                window.location.href = `../HTML/order_pages/allOrders.html`
            })

            // Get All users
            let allUsers = await getAllUsers();
            // console.log(allUsers);
            allUsers.length === 0
                ?
                users_section.innerHTML = `<p>No user.</p>`
                :
            allUsers = allUsers.slice(0, 4)
            allUsers.map(user => {
                users_section.innerHTML += `
            <div class="user-data " data-id="${user.id}"><i class="fa-solid fa-circle-user"></i>
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