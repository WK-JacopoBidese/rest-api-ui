import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "./Contatti";
import '../../shared/css/PageLayout.css';
import { FiArrowLeft } from "react-icons/fi";

export default function Contatto() {
    const { idContatto } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("http://localhost:3001/v1/users/" + idContatto);
            const data = await request.json();
            setUser(data);
        }
        fetchData();
    }, [idContatto]);

    return (
        <section>
            {user && (
                <div>
                    <div className="page-title">
                        <h1>{user.username}</h1>
                        <a href="/contatti"><FiArrowLeft />Torna indietro</a>
                    </div>
                    <p>Indirizzo mail: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                </div>
            )}
        </section>
    );
}