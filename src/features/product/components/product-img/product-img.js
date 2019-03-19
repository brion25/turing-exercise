import React from 'react'

const ProductImg = ({product, className = ''}) => {
  const { image: image_1, image_2 } = product

  const image = image_1 || image_2

  return (
    <img src={`https://backendapi.turing.com/images/products/${image}`} alt={product.name} className={className} />
  )
}

export default ProductImg
