import ShopItem from '../ShopItem/ShopItem';
import './ListView.css';

const ListView = ({ items }) => {
    return (
        <div className="items-list">
            {items.map((product, index) => (
                <ShopItem key={`${product.name}-${product.color}-${index}`} item={product} />
            ))}
        </div>
    );
};

export default ListView;
