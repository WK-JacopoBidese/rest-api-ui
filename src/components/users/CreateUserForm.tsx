import "./CreateUserForm.css";

export default function CreateUserForm() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const newUser = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value
        };

        const response = await fetch("http://localhost:3001/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        const data = await response.json();
        console.log(data);

        if (response.status === 201){
            alert("Contatto creato con successo!");
        }
        else{
            alert("Errore durante la creazione del contatto.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
            <input type="submit" value="Registra utente" />
        </form>
    );
}