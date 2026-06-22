import { Star } from "lucide-react";

const RatingPill = ({rating}) => {
    return ( 
        <div className=' flex gap-1 py-1 px-2 rounded-xl bg-success justify-center items-center text-[12px] mt-1'>
                    <Star size={10}/> {rating}
                </div>
     );
}
 
export default RatingPill;