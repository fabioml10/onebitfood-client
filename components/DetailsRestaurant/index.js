import React from 'react'
import Details from './Details'
import CategoryProducts from './CategoryProducts'
// SSR
// import { Alert } from 'react-bootstrap'

export default function DetailsRestaurant (props) {
  // SSR
  // if (props.isError) {
  //   return <Alert variant='custom-red'>Erro ao carregar</Alert>
  // }

  return (
    <>
      <Details {...props.restaurant} />
      {props.restaurant.product_categories.map((productCategory, i) =>
        <CategoryProducts restaurant={props.restaurant} {...productCategory} key={i} />
      )}
    </>
  )
}
