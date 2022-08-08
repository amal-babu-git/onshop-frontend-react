import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FAILED, LOADING, SUCCESS } from "../../../apis";
import {
  fetchReviewsHandler,
  getReviewsFetchError,
  getReviewsFetchStatus,
  selectReviews,
} from "../../../features/reviews/reviewSlice";
import ReviewCard from "./ReviewCard";
import { toast } from "react-toastify";
import PostReviewForm from "./PostReviewForm";

const ReviewsList = ({ productId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewsHandler({ productId }));
  }, []);

  const reviews = useSelector(selectReviews);
  const reviewsFetchStatus = useSelector(getReviewsFetchStatus);
  const reviewsFetchError = useSelector(getReviewsFetchError);
  let content = "";

  if (reviewsFetchStatus === LOADING) {
    content = (
      <div className="text-center">
        <p className="spinner-border text-center text-primary mt-4" />
      </div>
    );
  } else if (reviewsFetchStatus === SUCCESS) {
    content = reviews.map((review, index) => (
      <ReviewCard
        key={index}
        username={review.name}
        description={review.description}
        date={review.date}
      />
    ));
  } else if (reviewsFetchStatus === FAILED) {
    toast.error("Something went wrong! cant fetch reviews..");
    console.log(reviewsFetchError);
  }

  return (
    <div className="mt-4  container-fluid">
      <div className="row col-xl-12">
        <p className="text-center fs-5 fw-bolder badge-primary">Reviews</p>
      </div>
      <div className="row">
        <PostReviewForm productId={productId} />
      </div>
      <div className="row justify-content-around"> {content}</div>
    </div>
  );
};

export default ReviewsList;

      