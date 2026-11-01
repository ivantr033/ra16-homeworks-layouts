import ShopCard from '../ShopCard/ShopCard';
import './CardsView.css';

const CardsView = ({ cards }) => {
    return (
        <div className="cards-grid">
            {cards.map((product, index) => (
                <ShopCard key={`${product.name}-${product.color}-${index}`} card={product} />
            ))}
        </div>
    );
};

export default CardsView;
