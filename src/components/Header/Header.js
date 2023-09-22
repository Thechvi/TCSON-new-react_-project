import './Header.css';
export const Header = () => {
	return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__list-item">Item 1</li>
                    <li className="header__list-item">Item 2</li>
                    <li className="header__list-item">Item 3</li>
                </ul>
            </nav>
        </header>
    );
};
