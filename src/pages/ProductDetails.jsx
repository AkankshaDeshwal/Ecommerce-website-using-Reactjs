import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../api/DummyJson";
import Button from "../components/Button";
import RatingPill from "../components/RatingPill";
import PriceDetails from "../components/PriceDetails";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const {addToCart} = useCart();

    const loadProducts = async () => {
        try {
            const data = await fetchProductById(id)
        setProduct(data)
        
        } catch (err){
            console.error(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadProducts();
    }, [id])

    if (isLoading) {
        return (
            <div>Loading Product...</div>
        )
    }

    if (!product) {
        return (
            <div className="flex flex-col gap-4 items-center">
                <h1>Product not found</h1>
                <Link to='/'><Button btnText="Go Back" /></Link>
            </div>
        )
    }
 
    return ( 
        <div className="w-full bg-surface p-8 ">
            <div className="flex justify-between items-center gap-4 bg-background pr-4 shadow">
            
                <img src={product.images[0]} alt={product.title} className="rounded-md w-1/2 bg-surface"/>
                <div className="flex flex-col w-full p-4 items-start gap-4">
                    {/* Heading & rating */}
                    <div className="flex gap-4 items-start">
                        {/* Heading */}
                        <div>
                            <h1 className='text-2xl font-bold'>{product.title}</h1>
                    <h2 className='text-sm'>Brand: {product.brand}</h2>
                        </div>
                        {/* Rating */}
                        <RatingPill rating={product.rating} />
                    </div>

                    {/* Price details */}
                    <PriceDetails price={product.price} discountPercentage={product.discountPercentage} displayLoc="product page" />

                    {/* Product description */}
                    <p className="text-sm font-secondary text-muted">{product.description}</p>
                    
                    {/* Add to cart */}
                    <Button btnText="Add to Cart" btnHandler={() => addToCart(product.id)} />
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;