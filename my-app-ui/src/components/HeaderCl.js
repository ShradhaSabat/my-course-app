import React from "react";
import logo, {ReactComponent as Logo} from '../svg/academic-cap.svg';
import LogoAcademic from "./Logo-Academic";
import ThemedBackground from "./ThemedBackground";

/*How to make a Class component equivalent of a function component*/
export default class HeaderCl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {countdown: props.countdown}; //initial state // state is local to this component,
        // not accessible to any other component
        // A component may choose to pass its state down as props to its child components
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        /*Every time setState method is called, React knows that state of component has changed and
        * calls render() again to update the UI which is why date is also rendered again along with countdown */

        if (this.state.countdown == 0)
            this.state.countdown = 0; //this will NOT re-render component again
        else
            this.setState((state, props) => ({ //this will render the component again
                countdown: state.countdown - props.decrement
            }))
    }

    render() {
        return (<ThemedBackground color="orange">
            <h1 className="text-center">Learning made easy
                <img src="academic-cap.svg"/> {/*accessing img from public folder*/}
                <img src={logo}/>
                <Logo/>
                <LogoAcademic/>
            </h1>
            <h6 className="text-center">By {this.props.name}</h6>  {/*Props are read only.
                                                                            All React components must act like pure
                                                                            functions with respect to their props
                                                                            and never attempt to change their inputs*/}
            <p className="text-end">{new Date().toLocaleString()}</p>
            <p className="text-end">{this.state.countdown}</p>
        </ThemedBackground>);
    }
}