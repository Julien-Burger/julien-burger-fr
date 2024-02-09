import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import Header from "../../components/header";
import LastestBlogs from "../../components/latestBlogs";
import MySkills from "../../components/mySkills";

function Home() {
    return (
        <>
            <Header />
            <MySkills />
            <LastestBlogs />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Home;
