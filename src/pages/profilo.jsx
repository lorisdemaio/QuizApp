import Section from '../components/section';
import FetchRisultati from '../services/fetchRisultati';
import { useUserData } from "../hook/userData";

export default function profilo() {

    const { userData } = useUserData();

    const handleDeleteAccount = (e) => {
        e.preventDefault();

        let conferma = window.confirm("Sei sicuro di voler eliminare il tuo account? Questa azione è irreversibile.");
        if(!conferma) return;

        fetch(`${import.meta.env.VITE_API_URL}/elimina-account/${userData.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            alert(data.mex);
            localStorage.clear();
            window.location.reload();
        })
        .catch(err => {
            alert("Errore: " + err);
        });
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return(
        <>
            <Section
                height="100dvh"
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap="1rem"
            >
                <div className='flex flex-col justify-start items-start gap-4 w-full'>
                    <h1 className='text-2xl md:text-4xl lg:text-4xl font-semibold'>
                        Ciao, <span className='text-blue-900'>{userData.username}</span>
                    </h1>
                    
                    <div className='w-full' style={{ marginTop: "2rem" }}>
                        <h2 className='text-xl md:text-2xl font-semibold' style={{ marginBottom: "0.5rem" }}>
                            I tuoi risultati:
                        </h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full'>
                            <FetchRisultati />
                        </div>
                    </div>
                    
                    <div className='w-full' style={{ marginTop: "2rem" }}>
                        <h2 className='text-xl md:text-2xl font-semibold text-red-500' style={{ marginBottom: "1rem" }}>
                            Danger Zone:
                        </h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-max'>
                            <button className='btn-danger' onClick={handleLogout}>
                                Logout
                            </button>

                            <button className='btn-danger' onClick={handleDeleteAccount}>
                                Elimina account
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}