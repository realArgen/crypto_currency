import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Sign Up
            </button>


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <p class="modal__description">
                            Log in
                        </p>

                        <form action="https://getform.io/f/458bc1bd-10f4-43ee-960d-1295b3543fdf" method="POST">
                            <div className="form-container">
                                <input type="email" name='email' placeholder='Enter your email' />
                                <button className="btn">Sign Up</button>
                            </div>
                            <div className="form-container">
                                <input type="checkbox" /> <p>Yes, I agree to receive emails from Crypto.</p>
                            </div>
                        </form>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
