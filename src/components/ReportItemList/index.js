import './ReportItemList.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';

const ReportItemList = () => {

    return (
        <div className="report-item-list">
            <div>
                <AttachmentIcon className="icon-list"/>
                <span className="report-name">Nome extra longo de relatório do sistema fala rebouças</span>   
            </div>
            <div>
                <button className="Btn">
                <DownloadIcon className="svgIcon" />
                </button>
            </div>
        </div>
    )

}

export default ReportItemList