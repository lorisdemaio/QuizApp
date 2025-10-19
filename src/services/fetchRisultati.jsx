import { useState, useEffect } from 'react';
import { useUserData } from '../hook/userData';
import ResultCard from '../components/resultCard';

export default function FetchRisultati() {
    const { userData } = useUserData();
    const [risultati, setRisultati] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/risultati/${userData.id}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
        .then(res => res.json())
        .then(data => setRisultati(data))
        .catch(err => {
            return <div>errore: {err.mex}</div>
        });
    }, []);

    return(
        <>
            {
                risultati.length > 0 ?
                (
                    risultati.map((item) => (
                        <ResultCard
                            key={item.id}
                            titolo = {item.quiz}
                            punteggio = {item.risultato}
                        />
                    ))
                ) :
                (
                    <span className='text-xl'>
                        Non ci sono risultati al momento.
                    </span>
                )
            }
        </>
    );
}