import React, { useState } from "react";
import styled from 'styled-components'

const Styles = styled.div`
body.active-modal {
    overflow-y: hidden;
}

.btn-modal {
    padding: 14px 32px;
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: #fff;
    border-radius: 24px 4px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    z-index: 7000;

  }
  
  .btn:hover {
    box-shadow: rgb(0 0 0 / 15%) 0px 8px 24px;
  }

.modal, .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 7000;

}

.overlay {
    background: rgba(49,49,49,0.8);
    z-index: 7000;

}
.modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
    z-index: 7000;
}

.close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 9px 20px;
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: #fff;
    border-radius: 24px 4px;
    font-size: .8rem;
    font-weight: 600;
    cursor: pointer;
    z-index: 7000;

}

.modal__form{
    margin-top: 30px;
}

.modal__form input{
    width: 100%;
    margin-bottom: 15px;
}


.modal .form-container>label{
    display:flex;
    align-items:center;
    margin-top:10px;
}

.modal .form-container input {
    padding: .7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 50px;
}

.modal .form-container input[type='checkbox'] {
    margin-right: .5rem;
}

.modal__input-email{
    width: 100%;
    margin-bottom: 15px;
}

@media screen and (max-width: 759px) {
    .modal-container{
        width: 100%;
        margin-top: 10px;
    }

}

@media screen and (max-width: 940px) {
    .modal-content{
        top: 55%;
    }

}
`

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };


    return (
        <Styles>
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
        </Styles>
    );
}
