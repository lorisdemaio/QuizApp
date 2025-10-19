import { Component } from "react"

export default class Section extends Component {
    render() {
        return (
            <>
                <section style={{
                    background: this.props.bg || undefined,
                    
                    minHeight: this.props.height || undefined,
                    width: this.props.width || undefined,

                    display: this.props.display || undefined,
                    flexDirection: this.props.flexDirection || undefined,
                    justifyContent: this.props.justifyContent || undefined,
                    alignItems: this.props.alignItems || undefined,
                    gap: this.props.gap || undefined,

                    position: this.props.position || undefined,
                    top: this.props.top || undefined,
                    left: this.props.left || undefined,
                    translate: this.props.translate || undefined,
                    zIndex: this.props.zIndex || undefined,

                    paddingTop: this.props.paddingTop + "px" || undefined,
                    paddingBottom: this.props.paddingBottom + "px" || undefined
                }} className={this.props.SectionClass}>
                    {this.props.children}
                </section>
            </>
        )
    }
}
