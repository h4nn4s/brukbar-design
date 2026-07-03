import styles from "./Header.module.css";

function Header() {
    return (
        <header className= {styles.header}>
            <h1>Brukbar Design</h1>

            <nav>
                <a href="#">Om oss</a>
            </nav>
        </header>
    );
}

export default Header;
