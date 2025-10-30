import { createCategory, getAllCategories } from "../Database/allMethods.js";
// console.log(supabase);

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const categories = await getAllCategories();
        console.log(categories);
        
    } catch (error) {
        console.error(error)
    }
})


const categoryCreationForm = document.querySelector("#categoryCreationForm");
const nameInp = document.querySelector("#name-Inp");

categoryCreationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        const newCategory = await createCategory(
            {
                name: nameInp.value
            }
        );

        console.log(newCategory);

    } catch (error) {
        console.error(error);
    }

})