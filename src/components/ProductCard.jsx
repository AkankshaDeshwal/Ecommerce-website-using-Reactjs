import { Star } from 'lucide-react';
import Sample from '../assets/sample.avif'
import Button from './Button';
import RatingPill from './RatingPill';
import PriceDetails from './PriceDetails';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import UpdateQuantityButton from './UpdateQuantityButton';

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {cartItems, addToCart} = useCart()
    const exists = cartItems.find(item => item.id === product.id)
    const qty = (exists? exists.quantity: 0)
    
    return ( 
        <div className="flex flex-col rounded-md shadow-sm bg-surface">
            <div className='border-b border-muted/30'>
                <img className="w-full rounded-md" src={product.images} alt={product.title} />
            </div>

            <div className='p-4 flex flex-col gap-2 items-start'>
                <div className='flex justify-between items-start w-full'>
                <div className='text-left'>
                    <h1 className='text-lg font-bold'>{(product.title.length<18)?product.title: `${product.title.slice(0, 18)}...`}</h1>
                    <h2 className='text-[10px]'>{product.brand}</h2>
                </div>

                <RatingPill rating={product.rating} />
            </div>

            <PriceDetails price={product.price} discountPercentage={product.discountPercentage} />

            <div className='flex gap-4 mt-2'>
                <Button btnText="View Details" addStyles='text-sm' btnHandler={() => navigate(`/products/${product.id}`)}/>
                {
                    qty?<UpdateQuantityButton productId={product.id} qty={qty}/> : <Button btnText="Add to Cart" addStyles='text-sm' btnHandler={() => addToCart(product.id)}/>
                }
                    

            </div>
            </div>
        </div>
     );
}
 
export default ProductCard;