import React from "react";
import '../App.css';


class Dashboard extends React.Component {
    state = {
        now: new Date()
    };
    tick = () => {
        this.setState({ now: new Date() })
    };
    componentDidMount() {
        setInterval(() => this.tick(), 1000)
    };

    render() {
        return <div className="dashboard__container">
            <h1>{this.state.now.toLocaleTimeString()}</h1>
        </div>
    };
};

export default Dashboard