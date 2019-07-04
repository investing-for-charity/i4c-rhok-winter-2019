import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.el = document.createElement('div');

    }
    componentDidMount() {
        modalRoot.appendChild(this.el);

    }
    render() { 
        return ReactDOM.createPortal(
            this.props.children,
this.el        );
    }
}
 
export default Modal;
