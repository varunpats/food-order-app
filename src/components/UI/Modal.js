import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const modalPortal = document.getElementById('overlay');

const Modal = props => {
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalPortal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortal)}
    </Fragment>)
}

export default Modal;