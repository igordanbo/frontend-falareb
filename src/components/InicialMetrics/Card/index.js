import './Card.css';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Card = ({titleCard, percentCard, valueCard}) => {
    return (
        <div class="card">
            <div class="title">
                <span><DataUsageIcon /></span>
                <p class="title-text">
                    {titleCard}
                </p>
                <p class="percent">
                <TrendingUpIcon /> {percentCard}
                </p>
            </div>
            <div class="data">
                <p>
                    {valueCard}
                </p>
                
                <div class="range">
                    <div class="fill">
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Card;