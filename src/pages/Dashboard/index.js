import InicialMetrics from '../../components/InicialMetrics';
import PieCharts from '../../components/PieCharts';
import BarCharts from '../../components/BarsOverview';
import ModalDanger from '../../components/ModalDanger';

const Dashboard = () => {
    return (
      <>  
        <InicialMetrics />
        <PieCharts />
        <BarCharts />   
      </>
    );
}
 
export default Dashboard;