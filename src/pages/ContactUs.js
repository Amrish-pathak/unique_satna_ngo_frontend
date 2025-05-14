import ContactUsFrom from "../Components/ContactUsForm"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import MapComponent from "../Components/MapComponent"



const ContactUs = () => {




    return (
        <>
            <div className="Main-Container">
                <Header />
                <section className="First-Section">
                    <ContactUsFrom />
                    <MapComponent/>
                </section>
                <Footer />
            </div>
        </>
    )

}

export default ContactUs