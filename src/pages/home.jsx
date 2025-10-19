import Section from "../components/section";
import FetchQuiz from "../services/fetchQuiz";
import hero_img from '../assets/hero_img.png';

export default function Home() {
    return (
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
                <div id="hero-container">
                    <div>
                        <img
                            src={hero_img}
                            alt="hero-img"
                            draggable="false"
                            className="size-[66px]"
                        />
                    </div>
                    <h2 className="text-black text-xl font-semibold">
                        Scegli un quiz da fare
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ marginTop: "2rem" }}>
                    <FetchQuiz />
                </div>
            </Section>
        </>
    );
}