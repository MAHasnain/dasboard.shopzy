// console.log(supabase);
import { createCategory } from "../Database/allMethods.js";

const categoryCreationForm = document.querySelector("#categoryCreationForm");
const titleInp = document.querySelector("#title-Inp");

categoryCreationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        const newCategory = await createCategory(
            {
                title: titleInp.value
            }
        );

        console.log(newCategory);

    } catch (error) {
        console.error(error);
    }

})