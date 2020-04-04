import React, { useEffect } from "react";
import { clearErrors } from "../../actions/errorActions";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearErrors());
  });

  return (
    <div>
      <h1 className='display-4'>Page Not Found</h1>
      <p className='lead text-danger'>Sorry, the page does not exist.</p>
    </div>
  );
};
