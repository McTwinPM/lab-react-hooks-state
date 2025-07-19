import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button
        disabled={!product.inStock}
        onClick={() => addToCart(product)} 
        className={styles.addToCartButton}
        data-testid={`product-${product.id}`}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>

      {/* <button data-testid={'product-' + product.id}>Add to Cart</button> */}
    </div>
  )
}

export default ProductCard
