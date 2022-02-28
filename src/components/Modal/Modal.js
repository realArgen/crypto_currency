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
                        <form action="" class="modal__form">
                            <label for="">
                                <input type="text" class="modal__form-input" placeholder="Your name" />
                            </label>
                            <label for="">
                                <input type="tel" class="modal__form-input" placeholder="Your phone number" />
                            </label>
                            <label for="">
                                <input type="email" class="modal__form-input" placeholder="Your E-mail" />
                            </label>
                            <button class="modal__form-btn btn">
                                Login
                            </button>
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
