import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
} from 'mdb-react-ui-kit';

export default function FilterByPrice() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
      <>
        <MDBBtn outline onClick={toggleShow} className="m-1">
          Filter By Price
        </MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Filter Products</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                {/* Body */}

                <form className="m-1">
                  <MDBInput
                    className="mt-1"
                    label="Price is greater than"
                    id="typeNumber"
                    type="number"
                  />
                  <MDBInput
                    className="mt-2"
                    label="Price is less than"
                    id="typeNumber"
                    type="number"
                  />
                </form>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
}
