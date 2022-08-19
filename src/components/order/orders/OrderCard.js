import React from 'react'
import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardTitle, MDBBtn, MDBIcon, MDBTypography } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const OrderCard = ({ order }) => {


  const navigate = useNavigate()

  const onClickView = () => {
    navigate('/user/order-detail', { state: order })
  }

  const orderId = order.id
  const isShipped = order?.is_shipped;
  const isDeliverd = order?.is_delivered
  const paymentStatus = order?.payment[0]?.payment_status
  const isCancelled = order?.is_cancelled;


  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'tween' }}
      whileHover={{ scale: 1.05 }}
    className="col-sm-12 col-md-4 col-xl-3 mt-2">
      <MDBCard>
        <MDBCardHeader>
          <MDBCardTitle>{orderId}</MDBCardTitle>
        </MDBCardHeader>

        <MDBCardBody>
          <table className="table table-sm table-striped">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <p>Shipped</p>
                </td>
                <td>
                  <div>
                    {isShipped ? (
                      <MDBIcon
                        fas
                        icon="check-circle"
                        color="primary"
                        size="lg"
                      />
                    ) : (
                      <MDBIcon fas icon="times" color="danger" size="lg" />
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Deliverd</p>
                </td>
                <td>
                  <p>
                    {isDeliverd ? (
                      <MDBIcon
                        fas
                        icon="check-circle"
                        color="primary"
                        size="lg"
                      />
                    ) : (
                      <MDBIcon fas icon="times" color="danger" size="lg" />
                    )}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Payment</p>
                </td>
                <td>
                  <p>
                    {paymentStatus === "C" ? (
                      <MDBIcon
                        fas
                        icon="check-circle"
                        color="primary"
                        size="lg"
                      />
                    ) : (
                      <MDBIcon fas icon="times" color="danger" size="lg" />
                    )}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            {isCancelled && (
              <MDBTypography className='text-dark' note noteColor="danger">
                This order is cancelled
              </MDBTypography>
            )}
          </div>
        </MDBCardBody>

        <MDBCardFooter className="text-end">
          <MDBBtn outline rounded onClick={onClickView}>
            View
          </MDBBtn>
        </MDBCardFooter>
      </MDBCard>
    </motion.div>
  );
}

export default OrderCard