import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <span className='input-group-text'>
          <i className={icon}></i>
        </span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        onChange={onChange}
        value={value}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
