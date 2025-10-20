import { getAllCategories, getCategoryById, createCategory, updateCategory, removeCategory } from "./categories.database.js";
import { getAllProducts, getProductById, createProduct, updateProduct, removeProduct } from "./products.database.js";
import { createNewUser, signInUser, getLoggedInUser, getUserSession, signOutUser } from "./auth.database.js";
import { getAllUsers, createANewUser, updateAUser, deleteAUser } from "./users.database.js";
import { getAllOrders, editOrder, deleteOrder } from "./orders.database.js";

export {
    getAllCategories, getCategoryById, createCategory, updateCategory, removeCategory, getAllProducts, getProductById, createProduct, updateProduct, removeProduct, createNewUser, signInUser, getLoggedInUser, getUserSession, signOutUser, getAllUsers, createANewUser, updateAUser, deleteAUser, getAllOrders, editOrder, deleteOrder
};