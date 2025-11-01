import { updateCategory, removeCategory, getCategoryById } from "../../Database/allMethods.js";

const categorySection = document.querySelector(".category-section")
document.addEventListener("DOMContentLoaded", async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryId = searchParams.get("id");
    console.log(categoryId);

    const actionButtons = document.querySelector(".action-buttons");
    if (categoryId) {
        const category = await getCategoryById(categoryId);
        console.log(category);
        document.querySelector(".name").textContent = category.name;
        actionButtons.innerHTML = `<button id="editButton"><i class="fa-solid fa-pen"></i></button> <button id="deleteButton"><i class="fa-solid fa-trash"></i></button>`;
    }

    // Edit Button 
    const editButton = document.querySelector("#editButton");
    editButton.addEventListener("click", async (e) => {
        e.preventDefault();

    })

    // Delete Button 
    const deleteButton = document.querySelector("#deleteButton");
    deleteButton.addEventListener("click", async (e) => {
        e.preventDefault()

        const removed = await removeCategory(categoryId);
        console.log(removed);

    })

})