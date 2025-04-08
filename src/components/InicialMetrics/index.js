import './InicialMetrics.css';
import Card from './Card';

const InicialMetrics = () => {

    return (
        <div className="container-inicial-metrics">
            <Card 
                titleCard="Solicitações"
                valueCard="5467"
                percentCard="12%"    
            />
            <Card 
                titleCard="Concluídas"
                valueCard="2145"
                percentCard="43%" 
            />
            <Card 
                titleCard="Agendadas"
                valueCard="948"
                percentCard="22%" 
            />
            <Card 
                titleCard="Em aberto"
                valueCard="2309"
                percentCard="59%" 
            />
        </div>
    )

}

export default InicialMetrics;