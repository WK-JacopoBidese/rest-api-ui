import { useEffect, useState } from "react";
import UserList from "../../components/users/UserList";
import '../../shared/css/PageLayout.css';
import { FiPlus, FiArrowLeft } from "react-icons/fi";

export interface User {
    id?: number,
    username: string,
    email: string
}

interface UserResponse {
    totalUsers: number,
    users: User[]
}

export default function Contatti() {
    const [users, setUsers] = useState<UserResponse | null>(null);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("http://localhost:3001/v1/users");
            const data = await request.json();
            setUsers(data);
        }
        fetchData();
    }, []);

    async function handleDelete(id: number) {
        const canProceed = window.confirm("Sei sicuro di voler procedere?");

        if (!canProceed) return;

        const response = await fetch("http://localhost:3001/v1/users/" + id, {
            method: "DELETE"
        });

        if (response.status === 204) {
            console.log("Utente cancellato.");

            if (!users) return;

            const allUsers = users?.users.filter(user => user.id !== id);
            const newUsers = { totalUsers: allUsers?.length, users: allUsers };
            setUsers(newUsers);
        }
        else {
            console.log("Errore durante la cancellazione dell'utente.");
        }
    }

    return (
        <section>
            <div className="page-title">
                <h1>Elenco contatti {users ? `(${users.totalUsers})` : ""}</h1>
                <div className="page-links">
                    <a href="/contatti/crea"><FiPlus />Nuovo</a>
                    <a href="/"><FiArrowLeft />Torna indietro</a>
                </div>
            </div>
            <UserList users={users?.users} deleteUser={handleDelete} />
        </section>
    );
}