import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsername } from '../../features/auth/authUserSlice'

const PlaceOrderTable = ({orderList}) => {

    const username=useSelector(selectUsername)


    let items=orderList.items.map((item,index)=>(
        <tr key={index}>
            <td>{item.product.id}</td>
            <td>{item.product.title}</td>
            <td>{item.quantity}</td>
            <td>{item.product.unit_price}</td>
                
        </tr>
    ))




  return (
      <div>
          <div className="mt-4 ms-1 form-control">
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th></th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>

                      <tr>
                      <td>Order ID</td>
                      <td>{orderList.id}</td>
                  </tr>
                  <tr>
                      <td>Customer ID</td>
                      <td>{orderList.customer}</td>
                  </tr>
                  <tr>
                      <td>Customer ID</td>
                      <td>{orderList.customer}</td>
                  </tr>
                  <tr>
                      <td>Username</td>
                      <td>{username}</td>
                  </tr>
                     
                      
                  </tbody>
              </table>
          </div>
          <div className="mt-4 ms-1 form-control">
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th>PRODUCT ID</th>
                          <th>PRODUCT</th>
                          <th>QUANTITY</th>
                          <th>UNIT PRICE</th>
                      </tr>
                  </thead>
                  <tbody>
                      {items}
                      <tr>
                          <td>Please download invoice</td>
                          <td></td>
                          <td></td>
                          <td>
                              <MDBBtn rounded outline onClick={
                                ()=>{
                                    window.scrollTo({
                                      top: 100,
                                      left: 100,
                                      behavior: "smooth",
                                    });
                                    setTimeout(()=>{window.print();},1000)
                                    
                                }
                              } >
                                  Print
                              </MDBBtn>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default PlaceOrderTable