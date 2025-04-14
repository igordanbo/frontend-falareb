import './Card.css';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Card = ({titleCard, percentCard, valueCard}) => {
    return (
        <div className="card">
            <div className="title">
                <span><DataUsageIcon /></span>
                <p className="title-text">
                    {titleCard}
                </p>
                <p className="percent">
                <TrendingUpIcon /> {percentCard}
                </p>
            </div>
            <div className="data">
                <p>
                    {valueCard}
                </p>
                
                <div className="range">
                    <div className="fill">
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Card;