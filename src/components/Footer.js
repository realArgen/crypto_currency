import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const Styles = styled.div`
.footer  {
    background-color: var(--background);
    padding: 5rem 0;
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
}

.footer .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    padding: 1rem;
}

.footer .col {
    display: flex;
    flex-direction: column;
}

.footer .bar {
    width: 30px;
    border-bottom: 4px solid var(--primary);
    margin: 1rem 0;
}

.footer a {
    font-size: 1rem;
}

.footer .icon {
    color: #303030;
    margin-right: 4px;
}

.footer h5 {
    margin-top: 2rem;
}

@media screen and (max-width: 940px) {
    .footer .container {
        grid-template-columns: repeat(2,1fr);
    }
}
`

const Footer = () => {
    return (

        <Styles>

            <div className='footer'>
                <div className='container'>
                    <div className='col'>
                        <h5>Support</h5>
                        <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                    </div>
                    <div className='col'>
                        <h5>Developers</h5>
                        <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>

                    </div>
                    <div className='col'>
                        <h5>Company</h5>
                        <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                    </div>
                    <div className='col'>
                        <h5>Social</h5>
                        <span className='bar'> </span>
                        <a href='/'><FaFacebook className='icon' /></a>
                        <a href='/'><FaTwitter className='icon' /></a>
                        <a href='/'><FaLinkedin className='icon' /></a>
                        <a href='/'><FaGithub className='icon' /></a>
                    </div>
                </div>

            </div>
        </Styles>
    )
}

export default Footer
