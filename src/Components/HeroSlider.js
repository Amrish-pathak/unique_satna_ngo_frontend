// HeroSlider.jsx
import Slider from "react-slick";
import content from '../data/siteContent.json';




export default function HeroSlider() {
    const { name, name1, name2, number1, number2, mail, address, aim } = content.ngoInfo;

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
    };


    const slides = [

        {
            title: `Welcome to ${name1} ${name2}`,
            description: "Empowering communities through digital education, skill training, and service with a mission of inclusive development.",
            image: "./hero-img0.jpg",
        },
        {
            title: "Empowering Rural Youth Through Digital Education",
            description: "Our mission is to equip every child and adult with modern computer skills to thrive in a tech-driven world.",
            image: "./hero-img3.jpg",
        },
        {
            title: "Bridging the Digital Divide in Underserved Areas",
            description: "We bring access to technology and training to villages and towns where it's needed the most.",
            image: "./hero-img1.jpg",
        },
        {
            title: "Creating Opportunities With Skill Development",
            description: "From basic literacy to advanced tech training, we open doors to employment and self-reliance.",
            image: "./hero-img2.jpg",
        },
        {
            title: "Join Hands in Building a Digitally Literate India",
            description: "Support our cause to educate and empower communities across the nation.",
            image: "./hero-img1.jpg",
        },
    ];

    return (
        <section className="relative bg-midnight">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-[400px] md:h-[500px] text-white">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-30"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                            <h2 className="text-3xl sm:text-5xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">{slide.description}</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="#donate"
                                    className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-indigo-100 transition"
                                >
                                    Donate Now
                                </a>
                                <a
                                    href="#about"
                                    className="bg-indigo-500 text-white border border-white px-6 py-3 rounded-md hover:bg-indigo-600 transition"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
