// console.log(supabase);
import { createProduct, getAllCategories } from "../Database/allMethods.js";

// Category dropdown in product creation form
const categoryDropdownSelect = document.querySelector("#category-dropdown");

document.addEventListener("DOMContentLoaded", async () => {
    const categories = await getAllCategories();
    console.log(categories);

})


// Add new product method section

const titleInp = document.querySelector("#title-Inp");
const descriptionInp = document.querySelector("#description-Inp");
const image_urlInp = document.querySelector("#image_url-Inp");
const priceInp = document.querySelector("#price-Inp");
const stockInp = document.querySelector("#stock-Inp");

const productCreationForm = document.querySelector("#productCreationForm");

productCreationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        const newProduct = await createProduct(
            {
                title: titleInp.value,
                description: descriptionInp.value,
                // category: categoryDropdownSelect,
                image_url: "image_url.png",
                price: priceInp.value,
                stock: stockInp.value
            }
        );
        console.log(newProduct);

    } catch (error) {
        console.error(error)
    }

})
