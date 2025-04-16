import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const ListIcon = [
        {
            Icon : faFacebook,
            IconUrl: "https://fontawesome.com/search?q=Troli&o=r&ic=free",
        },
        {
            Icon : faInstagram,
            IconUrl: "https://fontawesome.com/search?q=Troli&o=r&ic=free",
        },
        {
            Icon : faPhone,
            IconUrl:"0877",
        },
        {
            Icon : faTwitter,
            IconUrl: "https://fontawesome.com/search?q=Troli&o=r&ic=free",
        },
        {
            Icon : faLinkedin,
            IconUrl: "https://fontawesome.com/search?q=Troli&o=r&ic=free",
        },
    ];

    return (
        <>
        <div className="bg-neutral-950 text-neutral-300 m-0 pt-1 h-auto w-screen text-center justify-items-center">
            <div className="mt-5 h-auto w-100">
             <h1 className="text-xl font-bold mb-5">Produk apa yang ada disini?</h1>
             <p>Kami menjual produk Handphone second dengan kualitas dan kondisi peforma terbaik, kami juga menyediakan garansi selama 1 tahun.</p>
            </div>
            <div className="mt-5">
                <h1 className="text-2xl font-bold">Kontak Kami</h1>
                <div className="mt-5 flex gap-10 text-2xl">
                    {ListIcon.map((item, index) => (
                        <a href={item.IconUrl}>
                            <FontAwesomeIcon 
                            icon={item.Icon} 
                            key={index}
                            />
                        </a>

                    ))}
                </div>
            </div>
            <div className=" flex  items-center gap-1 py-4 text-xs">
                <FontAwesomeIcon icon={faCopyright}/>
                <p>COPYRIGHT 2023 <i><b>storePhone</b></i></p>
            </div>
        </div>
        </>
    );
};                         

export default Footer;