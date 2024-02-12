import AboutMe from "../../components/aboutMe";
import ContactForm from "../../components/contactForm";
import LastestBlogs from "../../components/latestBlogs";
import MySkills from "../../components/mySkills";
import MyProjects from "../../components/myProjects";
import MyServices from "../../components/myServices";

function Home() {
    return (
        <>
            <AboutMe />
            <MyServices />
            <MyProjects />
            <MySkills />
            <LastestBlogs />
            <ContactForm />
        </>
    );
}

export default Home;
