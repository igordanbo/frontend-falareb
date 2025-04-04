import AlertDanger from "../../components/AlertDanger";
import AlertSuccess from "../../components/AlertSuccess";
import GridCommunities from "../../components/GridCommunities";
import ModalSuccess from "../../components/ModalSuccess";

const Communities = () => {

    return (
        <>
        <ModalSuccess/>
          <AlertDanger>
            Este é um aviso de erro.
          </AlertDanger>
      
          <AlertSuccess>
            Este é um aviso de sucesso.
          </AlertSuccess>
          <GridCommunities/>
        </>
    );
}
 
export default Communities;