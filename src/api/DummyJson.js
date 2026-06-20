const BASE_URL = "https://dummyjson.com/products"

export const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}?limit=0`)

    if (!res.ok) {
        throw new Error('Failed to fetch cyprtos')
    }

    return res.json()
}