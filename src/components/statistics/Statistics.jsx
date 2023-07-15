import PropTypes from 'prop-types';
import { StatisticsList, StatisticsWord,Wrapper } from './statistics.styled';
import React from 'react';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrapper>
      <StatisticsList>
        <li>
          <StatisticsWord>Good: {good}</StatisticsWord>
        </li>
        <li>
          <StatisticsWord>Neutral: {neutral}</StatisticsWord>
        </li>
        <li>
          <StatisticsWord>Bad: {bad} </StatisticsWord>
        </li>
        <li>
          <StatisticsWord>Total: {total}</StatisticsWord>
        </li>
        <li>
          <StatisticsWord>Positive feedback:{positivePercentage}%</StatisticsWord>
        </li>
      </StatisticsList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
