import { Component } from "react";
import { Link } from "react-router";

export default class QuizCard extends Component {
    render() {
        return(
            <div className="flex flex-col justify-between items-start rounded-2xl min-h-[250px] shadow-2xl" 
            style={{ padding: '1rem', backgroundColor: `${this.props.bgcolor}` }}>
                <div>
                    <h1 className="text-white text-2xl lg:text-3xl font-bold">
                        {this.props.titolo}
                    </h1>
                </div>
                <div>
                    <p className="text-white break-words">
                        {this.props.descrizione}
                    </p>
                </div>
                <div className="w-full">
                    <Link className="btn-quiz-card" to={`/quiz/${this.props.link}`} tabIndex={0}>
                        Avvia
                    </Link>
                </div>
            </div>
        );
    }
}