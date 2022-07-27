import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { addToCart } from './cartApiCalls'

const AddToCartBtn = ({id,quantity=1}) => {

    const addToCartHandler = () => {

        // id=product_id
        addToCart(id, quantity)

    }

  return (
      <>
          <MDBBtn rounded outline className="me-4 mt-1 "
              onClick={addToCartHandler}
          >
              Add to cart
          </MDBBtn>
      </>
  )
}

export default AddToCartBtn