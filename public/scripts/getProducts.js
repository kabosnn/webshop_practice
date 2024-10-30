const ALL = 'https://fakestoreapi.com/products'

export async function getProducts() {
    const response = await fetch(ALL)
    const products = await response.json()
    
    return products
}

