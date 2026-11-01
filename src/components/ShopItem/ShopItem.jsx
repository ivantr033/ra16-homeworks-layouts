const ShopItem = ({ item }) => {
    const { name, price, color, img } = item;

    return (
        <div className="shop-item">
            <div className="item-image-wrapper">
                <img src={img} alt={`${name} ${color}`} className="item-image" />
            </div>
            <h2 className="item-title">{name}</h2>
            <span className="item-color">{color}</span>
            <span className="item-price">${price}</span>
            <button className="add-to-cart-btn">Add to cart</button>
        </div>
    );
};

export default ShopItem;
