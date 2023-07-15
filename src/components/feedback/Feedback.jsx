import PropTypes from 'prop-types';
import React from 'react';
import { AllButtons } from './feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <AllButtons>
        {options.map(option => (
          <button
            type="button"
            onClick={() => onLeaveFeedback}
            key={option}
            
          >
            {option}
          </button>
        ))}
      </AllButtons>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};

export default FeedbackOptions;
