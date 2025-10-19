import { useParams } from "react-router";
import { useState } from "react";
import Section from "../components/section";
import OverlayPunteggio from "../components/overlayPunteggio";
import FetchDomande from "../services/fetchDomande";
import { useUserData } from "../hook/userData";

export default function Quiz() {

    const { id } = useParams();
    const { domande, error, loading } = FetchDomande(id);
    const [numeroDomanda, setNumeroDomanda] = useState(0);
    const [punteggio, setPunteggio] = useState(0);
    const [overlay, setOverlay] = useState(false);
    const { userData } = useUserData();

    if (loading) return <div>caricamento domande...</div>;
    if (error) return <div>errore: {error.message}</div>;

    function ControllaDomanda(domanda, risposta) {
        if(domanda === risposta) setPunteggio(prev => prev + 1);

        if(numeroDomanda === domande.length - 1) {
            fetch(`${import.meta.env.VITE_API_URL}/add-risultato`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quiz: id, punteggio: punteggio + 1, id_utente: userData.id })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => {
                return <div>errore: {err.mex}</div>
            });
            
            setOverlay(true);
        }
        else setNumeroDomanda(prev => prev + 1);
    }

    const CloseOverlay = () => {
        setOverlay(!overlay);
    }

    return(
        <>
            <Section
                height = "100dvh"
                width = "100%"
                display = "flex"
                flexDirection = "column"
                justifyContent = "center"
                alignItems = "center"
                gap = "1rem"
            >   
                <div className="flex flex-col md:items-center gap-4 w-full">
                    <h1 className="text-2xl md:text-3xl">
                        Domanda {numeroDomanda + 1}/{domande.length}
                    </h1>
                    <h2 className="text-xl font-bold">
                        {domande[numeroDomanda]?.domanda}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 w-full"
                style={{ marginTop: "1rem" }}>
                    <button className="quiz-btn" onClick={() => ControllaDomanda("A", domande[numeroDomanda]?.opzione_corretta)}>
                        {"A) " + domande[numeroDomanda]?.opzione_a}
                    </button>
                    
                    <button className="quiz-btn" onClick={() => ControllaDomanda("B", domande[numeroDomanda]?.opzione_corretta)}>
                        {"B) " + domande[numeroDomanda]?.opzione_b}
                    </button>
                    
                    <button className="quiz-btn" onClick={() => ControllaDomanda("C", domande[numeroDomanda]?.opzione_corretta)}>
                        {"C) " + domande[numeroDomanda]?.opzione_c}
                    </button>
                    
                    <button className="quiz-btn" onClick={() => ControllaDomanda("D", domande[numeroDomanda]?.opzione_corretta)}>
                        {"D) " + domande[numeroDomanda]?.opzione_d}
                    </button>
                </div>

                <OverlayPunteggio punteggio = {punteggio} state = {overlay} handler = {CloseOverlay} />
            </Section>
        </>
    );
}