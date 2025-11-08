import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

export const heroData = {
    img: "url('/heroimg.jpg')",
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
    ]
}