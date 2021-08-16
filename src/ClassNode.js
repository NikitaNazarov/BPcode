import React, {Component} from "react";
import "./ClassNode.css";

class ClassNode extends Component {
    state = {
        className: "",
    };

    render() {
        return (
            <div class="class-node">class node</div>
        );
    }
}

export default ClassNode;