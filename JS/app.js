import { getUserSession, getAllProducts, getAllOrders, getAllCategories, getAllUsers } from "../Database/allMethods.js";

const categories_section = document.querySelector(".categories");
const products_section = document.querySelector(".products");
const orders_section = document.querySelector(".orders");
const users_section = document.querySelector(".users");

const catgSeeMoreLink = document.querySelector(".catgr_s-m_link");
const prdcSeeMoreLink = document.querySelector(".prdc_s-m_link");
const ordrSeeMoreLink = document.querySelector(".ordr_s-m_link");
const usersSeeMoreLink = document.querySelector(".users_s-m_link");

document.addEventListener("DOMContentLoaded", async () => {

    try {

        // Get session to localStorage
        const userSession = await getUserSession();
        console.log(userSession);

        if (userSession.session) {

            // Get All categories
            let allCategories = await getAllCategories();
            // console.log(allCategories);
            
            if (allCategories.length === 0) {
                categories_section.innerHTML = `<p>No categories.</p>`
            } else if (allCategories.length <= 4) {
                allCategories.map(category => {
                    categories_section.innerHTML += `
                <div class="category" data-id="${category.id}">
                        <p class="category-name">${category.name}</p>
                    </div>`
                })
            } else {
                allCategories = allCategories.slice(0, 4)
                allCategories.map(category => {
                    categories_section.innerHTML += `
                <div class="category" data-id="${category.id}">
                <p class="category-name">${category.name}</p>
                </div>`
                });
                catgSeeMoreLink.innerHTML = `<a href="./HTML/category_pages/allcategories.html">see more...</a>`;
            }

            categories_section.addEventListener("click", () => {
                window.location.href = `../HTML/category_pages/allcategories.html`
            })

            // Get All products
            let allProducts = await getAllProducts();
            // console.log(allProducts);
            if (allProducts.length === 0) {
                products_section.innerHTML = `<p>No products.</p>`
            } else if (allProducts.length <= 4) {
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
            } else {
                products_section.innerHTML = ``;
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
                    </div>`})
                prdcSeeMoreLink.innerHTML = `<a href="./HTML/product_pages/allProducts.html">see more...</a>`;
            }

            products_section.addEventListener("click", () => {
                window.location.href = `../HTML/product_pages/productDet.html`;
            })

            // Get All orders
            let allOrders = await getAllOrders();
            // console.log(allOrders);
            if (allOrders.length === 0) {
                orders_section.innerHTML = `<p>No upcoming orders.</p>`
            } else if (allOrders.length <= 4) {
                allOrders.map(order => {
                    orders_section.innerHTML += `
            <div class="order" data-order_id="${order.id}"><p>${order.product_name}</p></div>`
                })
            } else {
                allOrders = allOrders.slice(0, 4)
                allOrders.map(order => {
                    orders_section.innerHTML += `
            <div class="order" data-order_id="${order.id}"><p>${order.product_name}</p></div>`
                })
                ordrSeeMoreLink.innerHTML = `<a href="./HTML/order_pages/allOrders.html">see more...</a>`
            }
            orders_section.addEventListener("click", () => {
                window.location.href = `../HTML/order_pages/allOrders.html`
            })

            // Get All users
            let allUsers = await getAllUsers();
            // console.log(allUsers);
            if (allUsers.length === 0) {
                users_section.innerHTML = `<p>No user.</p>`
            } else if (allUsers.length <= 4) {
                allUsers.map(user => {
                    users_section.innerHTML += `
            <div class="user-data " data-id="${user.id}"><i class="fa-solid fa-circle-user"></i>
                <p class="name">${user.user_metadata.first_name}</p>
                <p class="email">${user.email}</p>
            </div>`
                })
            } else {
                allUsers = allUsers.slice(0, 4);
                allUsers.map(user => {
                    users_section.innerHTML += `
                    <div class="user-data " data-id="${user.id}"><i class="fa-solid fa-circle-user"></i>
                    <p class="name">${user.user_metadata.first_name}</p>
                    <p class="email">${user.email}</p>
                    </div>`
                });
                usersSeeMoreLink.innerHTML = `<a href="./HTML/user_pages/allUsers.html">see more...</a>`;
            }

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