import { FiArrowLeft } from "react-icons/fi";
import '../../shared/css/PageLayout.css';
import CreateUserForm from "../../components/users/CreateUserForm";

export default function CreaContatto() {
    return (
      <div>
        <div className='page-title'>
          <h1>Aggiungi nuovo contatto</h1>
          <a href="/contatti"><FiArrowLeft />Torna indietro</a>
        </div>
        <CreateUserForm />
      </div>
    );
  }