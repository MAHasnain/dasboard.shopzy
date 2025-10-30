// console.log(supabase);

import { getAllOrders } from "../Database/allMethods.js";

document.addEventListener("DOMContentLoaded", async () => {
    const orders = await getAllOrders()
    console.log(orders);
})