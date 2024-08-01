import Link from "next/link"

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const socials = [
   
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        path: "www.linkedin.com/in/riad-ahmed-anonto-7338301b0"
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        path: "https://www.github.com/Anonto050"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        path: "https://www.facebook.com/profile.php?id=100009159524284&mibextid=ZbWKwL"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        path: "https://www.instagram.com/riad_ahmed_anonto/"
    },

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