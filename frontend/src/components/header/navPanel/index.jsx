import "./style.scss";

function NavPanel({ showNavPanel, setShowNavPanel }) {
    return (
        <nav>
            <ul style={showNavPanel ? { display: "flex" } : {}}>
                <li>À propos</li>
                <li>Mes compétences</li>
                <li>Derniers blogs</li>
                <li>Me contacter</li>
            </ul>
        </nav>
    );
}

export default NavPanel;
