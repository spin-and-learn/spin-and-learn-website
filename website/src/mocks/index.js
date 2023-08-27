import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, } from 'react-icons/fa'
import { SendOutlined } from '@ant-design/icons';
import { psx1, psx29, psx390, psx65 } from '../constants/images';



export const programs = [
    {
        title: "Beginner Table Tennis",
        description: "Engage in stimulating activities that fostercritical thinking, collaboration, and a love for problem-solving.",
        listIconColor: "#F1C510",
        listOptions: [
            "16 table tennis sessions",
            "Parent involvement events",
            "Character - building",
            "Tournaments",
            "Leagues"
        ]
    },
    {
        title: "Intermediate Table Tennis",
        description: "Engage in stimulating activities that fostercritical thinking, collaboration, and a love for problem-solving.",
        listIconColor: "#E4092E",
        listOptions: [
            "16 table tennis sessions",
            "Parent involvement events",
            "Character - building",
            "Tournaments",
            "Leagues"
        ]
    },
    {
        title: "Advanced Table Tennis",
        description: "Engage in stimulating activities that fostercritical thinking, collaboration, and a love for problem-solving.",
        listIconColor: "#0972CE",
        listOptions: [
            "16 table tennis sessions",
            "Parent involvement events",
            "Character - building",
            "Tournaments",
            "Leagues"
        ]
    }
]


export const footerSocialMedia = [
    {
        link: "https://www.instagram.com/spinandlearn",
        icon: <FaInstagram style={{ fontSize: 35, background: "#0972CE", padding: 8, borderRadius: 10, color: "white" }} />,
        title: "@spinandlearn"
    },
    {
        link: "https://www.facebook.com/spinandlearn1",
        icon: <FaFacebook style={{ fontSize: 35, background: "#0972CE", padding: 8, borderRadius: 10, color: "white" }} />,
        title: "@spinandlearn"
    },
    {
        link: "https://twitter.com/spinandlearn",
        icon: <FaTwitter style={{ fontSize: 35, background: "#0972CE", padding: 8, borderRadius: 10, color: "white" }} />,
        title: "@spinandlearn"
    },
    {
        link: "https://www.linkedin.com/company/spinandlearn",
        icon: <FaLinkedin style={{ fontSize: 35, background: "#0972CE", padding: 8, borderRadius: 10, color: "white" }} />,
        title: "@spinandlearn"
    },
    {
        link: "https://www.youtube.com/@spinandlearn",
        icon: <FaYoutube style={{ fontSize: 35, background: "#0972CE", padding: 8, borderRadius: 10, color: "white" }} />,
        title: "@spinandlearn"
    }
]


export const emailsDropdownLists = [
    {
        label: (
            <span style={{ display: "flex", alignItems: "center", color: 'red' }}>
                <SendOutlined style={{ fontSize: 14 }} />
                <span className="ms-2" >open in Gmail</span>
            </span>
        ),
        key: 'gmail'
    },
    {
        label: (
            <span style={{ display: "flex", alignItems: "center", color: '#0972CE' }}>
                <SendOutlined style={{ fontSize: 14 }} />
                <span className="ms-2" >open in Outlook</span>
            </span>
        ),
        key: 'outlook'
    },
    {
        label: (
            <span style={{ display: "flex", alignItems: "center", color: '#666AF6' }}>
                <SendOutlined style={{ fontSize: 14 }} />
                <span className="ms-2" >open in Yahoo</span>
            </span>
        ),
        key: 'yahoo'
    },
    {
        label: (
            <span style={{ display: "flex", alignItems: "center", color: 'gray' }}>
                <SendOutlined style={{ fontSize: 14 }} />
                <span className="ms-2" >Copy Email</span>
            </span>
        ),
        key: 'copy'
    },

]


export const schools = [
    {
        logo: psx1,
        names: [
            "P.S. X1",
            "Courtlandt School"
        ]
    },
    {
        logo: psx29,
        names: [
            "P.S. 29",
            "The Melrose School"
        ]
    },
    {
        logo: psx390,
        names: [
            "390",
            "Middle School"
        ]
    },
    {
        logo: psx65,
        names: [
            "P.S. 65",
            "The Bronx"
        ]
    }
]