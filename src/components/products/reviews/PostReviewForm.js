import React, { useState } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardBody,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { selectCustomerInfo } from "../../../features/auth/authUserSlice";
import axiosInstance from "../../../features/auth/axios";
import { STORE_PRODUCTS_API } from "../../../apis";
import { toast } from "react-toastify";
import { fetchReviewsHandler } from "../../../features/reviews/reviewSlice";

const PostReviewForm = ({ productId }) => {
  const dispatch = useDispatch();

  const customerInfo = useSelector(selectCustomerInfo);
  const username = customerInfo?.username;
  const [description, setDescription] = useState("");

  const onChangeReviewDescription = (e) => setDescription(e.target.value);

  const onPostReviewHandler = async () => {
    await axiosInstance
      .post(`${STORE_PRODUCTS_API}${productId}/reviews/`, {
        name: username,
        description: description,
      })
      .then((response) => {
        dispatch(fetchReviewsHandler({productId}))
        toast.success("Review posted successfully", {
          hideProgressBar: true,
          autoClose: 1000,
        });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Can't post review! Plase login", {
          hideProgressBar: true,
          autoClose: 1000,
        });

        
      });
  };

  const onSubmitReviewPost = (e) => {
    e.preventDefault();
    onPostReviewHandler();
  };

  return (
    <div>
      <MDBCard>
        <MDBCardHeader>
          <MDBCardTitle>Add New Review</MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody className="text-end">
          <form onSubmit={onSubmitReviewPost}>
            <MDBTextArea
              label="Enter Review"
              id="textAreaExample"
              rows={4}
              value={description}
              onChange={onChangeReviewDescription}
              required
            />

            <MDBBtn type="submit" className="mt-1 me-1">
              Post
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default PostReviewForm;
