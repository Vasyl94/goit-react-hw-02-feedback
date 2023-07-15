import PropTypes from 'prop-types';
import { Notify } from './notification.styled';

import React from 'react';

const Notification = ({ message }) => {
  return <Notify>{message}</Notify>;
};

export default Notification;

Notification.propTypes = {
   message: PropTypes.string.isRequired,
};
