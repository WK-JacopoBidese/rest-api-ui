import { User } from "../../routes/users/Contatti";
import "./UserList.css";
import {FiEye, FiTrash2} from "react-icons/fi";

interface UserListProps {
    users: User[] | undefined,
    deleteUser: Function
}

export default function UserList(props: UserListProps) {
    if (props.users && props.users.length <= 0) {
        return (
            <p>
                "Nessun utente trovato"
            </p>
        );
    }

    return (
        <ul>
            {props.users?.map(
                user => <li key={user.id}>
                    <span>{user.username}</span>
                    <span className="actions">
                        <a href={`/contatti/${user.id}`} className="action-view"><FiEye />Visualizza</a>
                        <button onClick={() => props.deleteUser(user.id)} className="action-delete"><FiTrash2 /></button>
                    </span>
                </li>
            )}
        </ul>
    );
}