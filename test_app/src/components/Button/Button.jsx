import React from 'react';
import './Button.css';

const Button = ({text, type, onPress }) => {
 
  let buttonLabel = '';
  let buttonClassName = 'custom-button';

  switch (type) {
    case 'create':
      buttonLabel = 'Create';
      buttonClassName += ' create-button';
      break;
    case 'edit':
      buttonLabel = 'Edit';
      buttonClassName += ' edit-button';
      break;
    case 'delete':
      buttonLabel = 'Delete';
      buttonClassName += ' delete-button';
      break;
    case 'sign-up':
      buttonLabel = 'Sign Up';
      buttonClassName += ' sign-up-button';
      break;
      case 'text':
      buttonLabel = 'Sign In';
      buttonClassName += ' text-button';
      break;
    default:
      buttonLabel = 'Unknown';
  }

  return (
    <button className={buttonClassName} onClick={() => onPress()}>
      {text ? text : buttonLabel}
    </button>
  );
};

export default Button;