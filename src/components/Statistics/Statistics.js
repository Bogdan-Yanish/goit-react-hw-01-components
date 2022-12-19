import PropTypes from 'prop-types';
import {
    StatisticsSection,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    StatisticsLabel,
    Percentage,
} from './Statistics.styled';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const Statistics = ({
    title,
    stats
}) => {
    return (
        <StatisticsSection>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}

            <StatisticsList>
                {stats.map(({ id, label, percentage }) => (
                    <StatisticsItem key={id} 
                    style={{backgroundColor:getRandomHexColor()}}
                    >
                        <StatisticsLabel>{label}</StatisticsLabel>
                        <Percentage>{percentage}%</Percentage>
                    </StatisticsItem>
                )
                )}
            </StatisticsList>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired
        })
    ).isRequired,
};