import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };


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
                                <input type="email" name='email' placeholder='Enter your email' className="modal__input-email" />
                                <button className="btn">Sign Up</button>
                            </div>
                            <div className="form-container">
                                <label><input type="checkbox" /> <p>Yes, I agree to receive emails from Crypto.</p></label>
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
