import React, {Component} from "react";
import "./NamespaceNode.css";

class NamespaceNode extends Component {
    render() {
        return (
            <div class="namespace-node">
                <div class="namespace-node-header">
                    <div class="cen">
                        <span class="keyword-namespace">namespace</span> <input type="text" class="namespace-name"></input>
                    </div>
                    <div class="code">
                        <div class="code-line">
                            <div class="line-num">1</div>
                            <div class="line-content">
                                <span>public void NewClass</span>
                            </div>
                        </div>
                        <div class="code-line">
                            <div class="line-num">1</div>
                            <div class="line-content">
                                <span>public void NewClass</span>
                            </div>
                        </div>
                        <div class="code-line">
                            <div class="line-num">1</div>
                            <div class="line-content">
                                <span>public void NewClass</span>
                            </div>
                        </div>
                        <div class="code-line">
                            <div class="line-num">1</div>
                            <div class="line-content">
                                <span>public void NewClass</span>
                            </div>
                        </div>
                        <div class="code-line">
                            <div class="line-num">1</div>
                            <div class="line-content">
                                <span>public void NewClass sdf sdf sdf sdf sdfsd fsdfsdfsdfds sdf sdfsdf dsfsdfsdfdsf fsd fdsf sdfdsfs</span>
                            </div>
                        </div>
                        <div class="code-line">
                            <div class="line-num">1</div>
                            <div class="line-content">
                                <span>public void NewClass</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NamespaceNode;