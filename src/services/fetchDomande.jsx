import { useState, useEffect } from 'react';

export default function FetchDomande(quiz_id) {

    const [domande, setDomande] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {

        if(!quiz_id)
        {
            setDomande([]);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(`${import.meta.env.VITE_API_URL}/domande/${quiz_id}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })
        .then(res => res.json())
        .then(data => setDomande(data))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, [quiz_id]);

    return { domande, loading, error };
}