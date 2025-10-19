import { useState, useEffect } from 'react';
import QuizCard from '../components/quizCard';

export default function FetchQuiz() {

    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/quiz`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
        .then(res => res.json())
        .then(data => setQuiz(data))
        .catch(err => {
            return <div>errore: {err.mex}</div>
        });
    }, []);

    return(
        <>
            {
                quiz.length > 0 ?
                (
                    quiz.map((item) => (
                        <QuizCard
                            key={item.id}
                            bgcolor = {item.tema}
                            titolo = {item.titolo}
                            descrizione = {item.descrizione}
                            link = {item.id}
                        />
                    ))
                ) :
                (
                    <span>caricamento...</span>
                )
            }
        </>
    );
}