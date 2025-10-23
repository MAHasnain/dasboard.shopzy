// console.log(supabase);
import { createProduct, getAllCategories } from "../Database/allMethods.js";
import { uploadAnImage } from "./cloudinary.js";

// Category dropdown in product creation form
const categoryDropdownSelect = document.querySelector("#category-dropdown");

document.addEventListener("DOMContentLoaded", async () => {

    const categories = await getAllCategories();
    // console.log(categories);
    categories.map(category => {
        categoryDropdownSelect.innerHTML += `<option value="${category.id}">${category.name}</option>`;
        // console.log(categoryDropdownSelect.value);
    })
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

        // Cloudinary image upload section

        // const uploaded = async () => {
        //     const imgObj = await uploadAnImage();
        //     return imgObj;
        // }
        const img = await uploadAnImage(image_urlInp)
        // console.log(img);

        const newProduct = await createProduct(
            {
                title: titleInp.value,
                description: descriptionInp.value,
                category_id: categoryDropdownSelect.value,
                image_url: img.secure_url,
                price: priceInp.value,
                stock: stockInp.value
            }
        );
        console.log(newProduct);


    } catch (error) {
        console.error(error)
    }

})
