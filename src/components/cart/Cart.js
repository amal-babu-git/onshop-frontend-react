import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FAILED, LOADING, SUCCESS } from '../../apis'
import { fetchCartItems, getCartFetchError, getCartFetchStatus, selectCart, selectCartId, setCartFetchStatus } from '../../features/cart/cartSlice'
import { createCart } from './cartApiCalls'

function Cart() {


  const dispatch = useDispatch()


  const cartFetchStatus = useSelector(getCartFetchStatus)
  const cartFetchError = useSelector(getCartFetchError)
  const cartId = useSelector(selectCartId)
  const cart = useSelector(selectCart)

  let content = <p>empty</p>

  useEffect(() => {

    if (cartId) {

      dispatch(fetchCartItems({ cartId }))


    } else {

      createCart()

    }

  }, [])

  useEffect(() => {

    switch (cartFetchStatus) {

      case LOADING:
        console.log('loadding..')
        content = <p>Loading..</p>
        break;
      case SUCCESS:
        console.log('success', cart.items)
        toast.info('Fetching....',{autoClose:100})


        content = <div>{cart.items[0]}</div>

        break;
      case FAILED:
        console.log('failed', cartFetchError)

        content = <p>{cartFetchError}</p>

        break;

    }


    return () => {
      console.log('clean')
      dispatch(setCartFetchStatus())
    }

  }, [cartFetchStatus])





  return (
    <div>
      {content}
    </div>
  )
}

export default Cart