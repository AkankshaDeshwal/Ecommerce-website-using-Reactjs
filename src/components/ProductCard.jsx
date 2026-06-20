import { Star } from 'lucide-react';
import Sample from '../assets/sample.avif'
import Button from './Button';

const ProductCard = () => {
    return ( 
        <div className="flex flex-col rounded-md shadow-sm w-1/4  bg-surface">
            <div className='border-b border-muted/30'>
                <img className="w-full h-1/2 rounded-md" src={Sample} alt="product image" />
            </div>

            <div className='p-4 flex flex-col gap-2 items-start'>
                <div className='flex justify-between items-start w-full'>
                <div className='text-left'>
                    <h1 className='text-xl font-bold'>Product Name</h1>
                    <h2 className='text-[10px]'>Brand Name</h2>
                </div>

                <div className=' flex gap-1 py-1 px-2 rounded-xl bg-success justify-center items-center text-[12px] mt-1'>
                    <Star size={10}/> 4.3+
                </div>
            </div>

            <div className='flex justify-start items-end gap-2'>
                <div>
                    <h1 className='text-lg font-bold'>INR 9999/-</h1>
                </div>
                <div>
                    <h2 className='text-xs line-through mb-0.5'>Rs.31999/-</h2>
                </div>
            </div>

            <div>
                <Button btnText="Add to Cart" />
            </div>
            </div>
        </div>
     );
}
 
export default ProductCard;