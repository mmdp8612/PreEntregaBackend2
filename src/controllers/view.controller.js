import ProductMongo from "../dao/ProductMongo.js";
import CartMongo from "../dao/CartMongo.js";

const productMongo = new ProductMongo();
const cartMongo = new CartMongo();

const products = async (req, res) => {
    try{
        const { limit=8, page=1, order='ASC', search } = req.query;
        const products = await productMongo.getProducts({
            limit,
            page,
            order
        }, search);
        
        console.log(products);

        const { totalPages, hasPrevPage, hasNextPage, prevPage, nextPage } = products;

        return res.render("products", {
            products: products.docs,
            paginate: {
                totalPages,
                hasPrevPage,
                hasNextPage,
                prevPage,
                nextPage
            }
        })
    }catch(error){
        
    }
}

const productsById = async (req, res) => {
    try {
        const { pid } = req.params;
        const product = await productMongo.getProductById(pid);
        res.render("product", product);
    } catch (error) {
        
    }
}

const cartProducts = async (req, res) => {
    try {
        const { cid } = req.params;
        const cartProducts = await cartMongo.getProductsCart(cid);
        res.render("cart", {cartProducts});
    } catch (error) {
        res.render("cart", {cartProducts: null});
    }
}

const realTimeProducts = (req, res) => {
    res.render("realtimeproducts");
}

const chat = (req, res) => {
    res.render("chat");
}

export {
    products,
    productsById,
    realTimeProducts,
    chat,
    cartProducts
};