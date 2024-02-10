import AboutMe from "../../components/aboutMe";
import ContactForm from "../../components/contactForm";
import Footer from "../../components/footer";
import Header from "../../components/header";
import LastestBlogs from "../../components/latestBlogs";
import MySkills from "../../components/mySkills";
import MyProjects from "../../components/myProjects";
import MyServices from "../../components/myServices";

function Home() {
    return (
        <>
            <Header />
            <AboutMe />
            <MyServices />
            <MyProjects />
            <MySkills />
            <LastestBlogs />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Home;
