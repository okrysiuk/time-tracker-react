import React from "react";
import styled from "styled-components";

const Err = styled.h5`
  color: #dc3545;
  text-transform: uppercase;
`;

const ErrorNotification = () => {
  return (
    <>
      <Err>App error...</Err>
    </>
  );
};

export default ErrorNotification;