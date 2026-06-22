const BASE_URL = "https://dummyjson.com/products"

export const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}?limit=0`)

    if (!res.ok) {
        throw new Error('Failed to fetch cyprtos')
    }

    return res.json()
}

export const fetchProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`)

    if (!res.ok) {
        throw new Error('Failed to this product')
    }

    return res.json()
}