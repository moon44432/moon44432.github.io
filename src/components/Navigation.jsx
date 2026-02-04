import React from 'react';
import { Sun, Moon, Globe, User, Briefcase, GraduationCap, Award, BookOpen, ScrollText, Code } from 'lucide-react';

const Navigation = ({ theme, toggleTheme, lang, toggleLang, activeSection }) => {
    const navItems = [
        { id: 'profile', label: { en: 'Profile', ko: '프로필' }, icon: <User size={20} /> },
        { id: 'education', label: { en: 'Education', ko: '교육' }, icon: <GraduationCap size={20} /> },
        { id: 'experience', label: { en: 'Experience', ko: '경력' }, icon: <Briefcase size={20} /> },
        { id: 'projects', label: { en: 'Activities', ko: '활동' }, icon: <ScrollText size={20} /> },
        { id: 'awards', label: { en: 'Awards & Honors', ko: '수상 및 실적' }, icon: <Award size={20} /> },
        { id: 'publications', label: { en: 'Publications', ko: '연구' }, icon: <BookOpen size={20} /> },
        { id: 'skills', label: { en: 'Skills', ko: '기술 스택' }, icon: <Code size={20} /> },
    ];

    const navListRef = React.useRef(null);

    React.useEffect(() => {
        if (navListRef.current) {
            const activeItem = navListRef.current.querySelector('.active');
            if (activeItem) {
                activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeSection]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="nav-container glass">
                <ul className="nav-list" ref={navListRef}>
                    {navItems.map((item) => (
                        <li key={item.id} className="nav-item">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                title={item.label[lang] || item.label.en}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label[lang] || item.label.en}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="nav-controls">
                    <button onClick={toggleLang} className="control-btn" title="Toggle Language">
                        <Globe size={20} />
                        <span className="control-label">{lang === 'en' ? 'KO' : 'EN'}</span>
                    </button>
                    <button onClick={toggleTheme} className="control-btn" title="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </nav>

        </>
    );
};

export default Navigation;
