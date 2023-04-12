// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = GetSelectJobs();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('selectJob', JSON.stringify(shoppingCart)); 
}

const removeFromDb = id => {
    const shoppingCart = GetSelectJobs();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('selectJob', JSON.stringify(shoppingCart));
    }
}

const GetSelectJobs = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('selectJob');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('selectJob');
}

export {
    addToDb,
    removeFromDb,
    GetSelectJobs,
    deleteShoppingCart
}