import React from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function CustomInput({
  value, handleChange, touched, errors, type, label, id, submitCount,
}) {
  return (
    <FloatingLabel className="m-3" controlId={id} label={`${label}*`}>
      <Form.Control
        type={type}
        placeholder={`${label}*`}
        onChange={handleChange}
        value={value[id]}
        isValid={touched[id] && !errors[id]}
        isInvalid={!!errors[id] && submitCount > 0}
      />
      <Form.Control.Feedback type="invalid">
        {errors[id]}
      </Form.Control.Feedback>

      <Form.Control.Feedback>
        Perfeito!
      </Form.Control.Feedback>
    </FloatingLabel>
  );
}

CustomInput.propTypes = {
  value: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  submitCount: PropTypes.number.isRequired,
};

export default CustomInput;
