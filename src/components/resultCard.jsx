import { Component } from "react";

export default class ResultCard extends Component {
    render() {
        return(
            <div className="flex flex-col justify-around items-start rounded-2xl min-h-[200px] shadow-2xl
             bg-gradient-to-br from-blue-950 to-blue-900 w-full" 
            style={{ padding: '1rem' }}>
                <div>
                    <h1 className="text-white text-2xl lg:text-3xl font-bold">
                        {this.props.titolo}
                    </h1>
                </div>
                <div className="bg-white/30 backdrop-blur-lg rounded-full" style={{ paddingBlock: "0.3rem", paddingInline: "2rem" }}>
                    <p className="text-white break-words font-bold">
                        {this.props.punteggio} punti
                    </p>
                </div>
            </div>
        );
    }
}