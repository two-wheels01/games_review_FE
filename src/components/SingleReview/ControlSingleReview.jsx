import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ControlSingleReviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10%;
  padding-right: 10%;
`;

const ControlReviewButton = styled.button`
  background-color: white;
  margin: 0 20px 0 20px;
  border: solid #acacac 1px;
  padding: 10px 70px;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    color: #d3cdcd;
    border: solid #d3cdcd 1px;
  }
`;

const ControlSingleReview = ({ review_id }) => {
  const history = useHistory();

  return (
    <ControlSingleReviewWrapper>
      <ControlReviewButton
        disabled={!(review_id - 1)}
        onClick={() => {
          history.push(`/review/${review_id > 1 ? review_id - 1 : review_id}`);
        }}
      >
        {`<<< previous`}
      </ControlReviewButton>
      <ControlReviewButton
        onClick={() => {
          history.push(`/reviews`);
        }}
      >
        All Reviews
      </ControlReviewButton>
      <ControlReviewButton
        onClick={() => {
          history.push(`/review/${parseInt(review_id) + 1}`);
        }}
      >
        {`next >>>`}
      </ControlReviewButton>
    </ControlSingleReviewWrapper>
  );
};

export default ControlSingleReview;
