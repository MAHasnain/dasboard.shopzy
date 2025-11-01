import { createCategory } from "../../Database/allMethods.js";
const categoryCreationForm = document.querySelector("#categoryCreationForm");
const nameInp = document.querySelector("#name-Inp");

categoryCreationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        const newCategory = await createCategory(
            {
                name: nameInp.value.trim()
            }
        );

        console.log(newCategory);

    } catch (error) {
        console.error(error);
    }

})