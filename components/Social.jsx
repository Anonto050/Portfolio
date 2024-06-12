import Link from "next/link"

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa"

const socials = [
   
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/riadahmedanonto"
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        path: "https://www.github.com/riadahmedanonto"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        path: "https://www.facebook.com/riadahmedanonto"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        path: "https://www.instagram.com/riadahmedanonto"
    },
    {
        name: "Youtube",
        icon: <FaYoutube />,
        path: "https://www.youtube.com/riadahmedanonto"
    }
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}

        </div>
    )
}

export default Social