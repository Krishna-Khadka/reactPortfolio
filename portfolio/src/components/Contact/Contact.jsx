import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <>
            <div style={{ width: "50%", margin: "0 auto", paddingBottom: "100px" }}>
                <div className="text-center">
                    <h1 className="text-4xl font-black">Contact Me</h1>
                </div>
                <div className="grid grid-cols-3 gap-3 px-10">
                    <ContactCard
                        contactIcon={<FontAwesomeIcon className=' text-blue-700' style={{ fontSize: "35px" }} icon={faEnvelope} />}
                        contactName="Email"
                        contactDesc="Lets get in touch !!"
                    />
                    <ContactCard
                        contactIcon={<FontAwesomeIcon className=' text-blue-700' style={{ fontSize: "35px" }} icon={faLinkedin} />}
                        contactName="LinkedIn"
                        contactDesc="Lets connect !!"
                    />
                    <ContactCard
                        contactIcon={<FontAwesomeIcon className=' text-blue-700' style={{ fontSize: "35px" }} icon={faGithub} />}
                        contactName="Github"
                        contactDesc="Checkout my Repos !!"
                    />
                    <ContactCard
                        contactIcon={<FontAwesomeIcon className=' text-blue-700' style={{ fontSize: "35px" }} icon={faInstagram} />}
                        contactName="Instagram"
                        contactDesc="Checkout my Posts !!"
                    />
                </div>
            </div>
        </>
    )
}

// style={{width: "50px", height: "50px", lineHeight: "50px", textAlign: "center", backgroundColor: "red", borderRadius: "50%"}}

const ContactCard = (props) => {
    return (
        <>
            <div className='overflow-hidden rounded shadow-md p-5'>
                <div className="flex flex-wrap justify-start items-center p-5 rounded-sm bg-white">
                    {props.contactIcon}
                    <h5 className='font-bold pl-6'>{props.contactName}</h5>
                </div>
                <p className='pt-2' style={{ fontSize: "0.9rem" }}>{props.contactDesc} </p>
            </div>
        </>
    )
}

export default Contact