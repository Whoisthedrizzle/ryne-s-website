import * as React from 'react'
import Layout from '../components/layout'
import {FaLinkedin, FaFacebook} from 'react-icons/fa'

const ConnectPage = () => {
    return (
        <main>
            <Layout pageTitle="Connect With Me">
            <a target="blank" href="https://www.linkedin.com/in/ryneiacono/" >
                <FaLinkedin size="40px" color="#2867b2">
                </FaLinkedin>
            </a>
            <a target="blank" href="https://www.facebook.com/ryne.iacono">
                <FaFacebook size="40px" color="#4267B2"></FaFacebook>
             </a>
            </Layout>
        </main>
    )
}

export default ConnectPage