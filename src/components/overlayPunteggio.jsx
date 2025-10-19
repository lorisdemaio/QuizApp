import { Link } from 'react-router';
import result_img from '../assets/result.png';

export default function overlayPunteggio({ punteggio, state, handler }) {
    return(
        <>
            <div className={`bg-white ${state ? 'fixed' : 'hidden'} top-0 left-0 h-screen w-full flex flex-col justify-center items-center gap-4 z-[10]`}>
                <div>
                    <img
                        src={result_img}
                        alt="punteggio"
                        draggable="false"
                        className="size-[100px]"
                    />
                </div>
                
                <h1 className="text-5xl font-bold">
                    Punteggio
                </h1>
                
                <span className="text-4xl text-blue-950 font-semibold">
                    {punteggio}
                </span>
                
                <Link to="/" className="btn" onClick={handler} style={{ marginTop: "1.5rem" }}>
                    Torna alla home
                </Link>
            </div>
        </>
    );
}