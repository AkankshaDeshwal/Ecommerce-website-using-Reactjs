import {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard.jsx';
import {fetchProducts} from '../api/DummyJson.js'

const Home = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filteredList, setFilteredList] = useState([])
    const [sortBy, setSortBy] = useState()

    const loadProducts = async () => {
        try {
            const data = await fetchProducts()
        setProducts(data.products)
        } catch(err)
        {
            console.error(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const calculateSellingPrice = (price, disc) => {
        return (price*(100-disc)/100).toFixed(2)
    }
    const sortProducts = () => {
        let filtered = [...products]

        filtered.sort((a,b) => {
            let a_sp = calculateSellingPrice(a.price, a.discountPercentage)
            let b_sp = calculateSellingPrice(b.price, b.discountPercentage)

            switch(sortBy) {
            case 'price_inc':
                return a_sp - b_sp 
            case 'price_dec':
                return b_sp - a_sp
            case 'rating':
                return b.rating - a.rating 
            default:
                return a.id - b.id
        }
        })

        setFilteredList(filtered)
    }

    useEffect(() => {
        sortProducts()
    }, [sortBy, products])

    return ( 
        <div className="flex flex-col gap-6 justify-center py-8">
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Welcome To Shop Up!</h1>
                <h2>First-class shopping experience</h2>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-lg'>Shop</h1>

                <div className=' w-full flex justify-between items-center '>
                    <select name='sortBy' id='sort' onChange={(e) => setSortBy(e.target.value)}>
                        <option value="" >Sort by:</option>
                        <option value='price_inc' >Price(low to high)</option>
                        <option value='price_dec' >Price(high to low)</option>
                        <option value='rating' >Rating(high to low)</option>
                    </select>

                    <input type="text" placeholder='Search products...' className='px-6 py-2 rounded-sm bg-surface focus:outline focus:outline-muted' />
                </div>
                
                {isLoading? <div>Loading...</div> : <div className='w-full grid grid-cols-3 gap-12'>{filteredList.map(product => <ProductCard key={product.id} product={product} />)}</div>}
            </div>
        </div>
     );
}
 
export default Home;