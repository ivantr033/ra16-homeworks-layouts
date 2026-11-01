const ShopCard = ({ card }) => {
    const { name, price, color, img } = card;

    return (
        <div className="shop-card">
            <header className="card-header">
                <h2 className="product-title">{name}</h2>
                <span className="product-color">{color}</span>
            </header>

            <div className="card-image-wrapper">
                <img src={img} alt={`${name} ${color}`} className="product-image" />
            </div>

            <footer className="card-footer">
                <span className="product-price">${price}</span>
                <button className="add-to-cart-btn">Add to cart</button>
            </footer>
        </div>
    );
};

export default ShopCard;
