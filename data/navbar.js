import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

export const navbarData = {
    logo: "ITG",
    links: [
        {
            name: "Why Choose Us",
            path: "/why-choose-us",
        },
        {
            name: "Our Services",
            path: "#our-services",
        },
        {
            name: "Industrices",
            path: "/industries",
        },
        {
            name: "Tools & Tips",
            path: "/tools-and-tips",
        },
        {   
            name: "Contact Us",
            path: "/contact-us",
        },
        {
            name: "Members",
            path: "/members"
        }
    ],
    icons: [
            {
                icon: <FaFacebookF />,
                path: 'https://www.facebook.com'
            },
            {
                icon: <IoLogoTwitter />,
                path: 'https://www.twitter.com'
            },
            {
                icon: <FaInstagram />,
                path: 'https://www.instagram.com'
            },
    ],
    icon: <CiMenuFries />,
    close: <MdClose />

}