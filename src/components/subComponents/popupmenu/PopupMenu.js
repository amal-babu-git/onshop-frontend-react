import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';

const PopupMenu = ({ title, btnText = 'Popup', body, btnOutline = true, btnColor = 'primary' }) => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn outline={btnOutline} onClick={toggleShow} color={btnColor}>
        {btnText}
      </MDBBtn>
      <MDBModal className='text-center p-1 m-1' show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{title}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {/* Body */}

              {body}
            </MDBModalBody>

            {/* <MDBModalFooter>
              <MDBBtn  color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Done</MDBBtn>
            </MDBModalFooter> */}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default PopupMenu;