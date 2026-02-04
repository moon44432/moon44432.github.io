import React, { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
import Navigation from './components/Navigation';
import Section from './components/Section';
import { Mail, Github, Linkedin, MapPin, GraduationCap, Briefcase, ScrollText, BookOpen, User, Globe, FileText, Calendar } from 'lucide-react';

// Custom Google Scholar Icon
const ScholarIcon = ({ size = 16, color = "currentColor" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
);

function App() {
    const [theme, setTheme] = useState('light');
    const [lang, setLang] = useState('en');
    const [activeSection, setActiveSection] = useState('profile');

    // Toggle theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Toggle language
    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'ko' : 'en');
    };

    // Helper for internationalization
    const t = (obj) => {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[lang] || obj.en || '';
    };

    // Helper to render description as string or list
    const renderDescription = (desc) => {
        const content = t(desc);
        if (!content) return null;

        if (Array.isArray(content)) {
            return (
                <ul className="description-list">
                    {content.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            );
        }
        return <p className="description">{content}</p>;
    };

    // Handle active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['profile', 'education', 'experience', 'projects', 'awards', 'publications', 'skills'];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections.reverse()) {
                const element = document.getElementById(sectionId);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app-wrapper">
            <Navigation
                theme={theme}
                toggleTheme={toggleTheme}
                lang={lang}
                toggleLang={toggleLang}
                activeSection={activeSection}
            />

            <main className="container fade-in">
                {/* Profile Section */}
                <section id="profile" className="profile-header">
                    <div className="profile-top">
                        <div className="profile-placeholder glass">
                            <User size={70} color="var(--text-secondary)" />
                        </div>
                        <div className="profile-info">
                            <h1 className="name">{t(cvData.profile.name)}</h1>
                            <p className="title">{t(cvData.profile.title)}</p>

                            <div className="contact-list">
                                <span className="contact-item"><MapPin size={16} /> {t(cvData.profile.location)}</span>
                                <a href={`mailto:${cvData.profile.email}`} className="contact-item"><Mail size={16} /> {cvData.profile.email}</a>
                            </div>

                            <div className="social-links">
                                <a href={cvData.profile.github} target="_blank" rel="noopener noreferrer" className="badge glass">
                                    <Github size={14} /> GitHub
                                </a>
                                <a href={cvData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="badge glass">
                                    <Linkedin size={14} /> LinkedIn
                                </a>
                                <a href={cvData.profile.scholar} target="_blank" rel="noopener noreferrer" className="badge glass">
                                    <ScholarIcon size={14} /> Scholar
                                </a>
                                <a href={cvData.profile.cv} target="_blank" rel="noopener noreferrer" className="badge glass">
                                    <FileText size={14} /> CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="intro">{t(cvData.profile.intro)}</p>
                </section>

                {/* Education Section */}
                <Section id="education" title={lang === 'en' ? 'Education' : '교육'}>
                    {cvData.education.map((edu, index) => (
                        <div key={index} className="rounded-item">
                            <div className="item-header">
                                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                    <div className="item-logo">
                                        {edu.logo ? <img src={edu.logo} alt={t(edu.institution)} /> : <GraduationCap size={28} color="var(--text-secondary)" />}
                                    </div>
                                    <div>
                                        <h3 className="item-main-title">{t(edu.institution)}</h3>
                                        <p className="item-sub-title" style={{ fontWeight: 500 }}>{t(edu.degree)}</p>
                                    </div>
                                </div>
                                <div className="item-meta">
                                    <span className="period">{edu.period}</span>
                                    {edu.location && <span className="location-info"><MapPin size={13} /> {t(edu.location)}</span>}
                                </div>
                            </div>
                            {renderDescription(edu.details)}
                        </div>
                    ))}
                </Section>

                {/* Experience Section */}
                <Section id="experience" title={lang === 'en' ? 'Experience' : '경력'}>
                    {cvData.experience.map((exp, index) => (
                        <div key={index} className="rounded-item">
                            <div className="item-header">
                                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                    <div className="item-logo">
                                        {exp.logo ? <img src={exp.logo} alt={t(exp.company)} /> : <Briefcase size={28} color="var(--text-secondary)" />}
                                    </div>
                                    <div>
                                        <h3 className="item-main-title">{t(exp.company)}</h3>
                                        <p className="item-sub-title" style={{ fontWeight: 500 }}>{t(exp.position)}</p>
                                    </div>
                                </div>
                                <div className="item-meta">
                                    <span className="period">{exp.period}</span>
                                    {exp.location && <span className="location-info"><MapPin size={13} /> {t(exp.location)}</span>}
                                </div>
                            </div>
                            {renderDescription(exp.description)}
                        </div>
                    ))}
                </Section>

                {/* Activities/Projects Section */}
                <Section id="projects" title={lang === 'en' ? 'Activities' : '활동'}>
                    {cvData.activities.map((act, index) => (
                        <div key={index} className="rounded-item">
                            <div className="item-header">
                                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                    <div className="item-logo">
                                        {act.logo ? <img src={act.logo} alt={t(act.organization)} /> : <ScrollText size={28} color="var(--text-secondary)" />}
                                    </div>
                                    <div>
                                        <h3 className="item-main-title">{t(act.organization)}</h3>
                                        <p className="item-sub-title" style={{ fontWeight: 500 }}>{t(act.role)}</p>
                                    </div>
                                </div>
                                <div className="item-meta">
                                    <span className="period">{act.period}</span>
                                    {act.location && <span className="location-info"><MapPin size={13} /> {t(act.location)}</span>}
                                </div>
                            </div>
                            {renderDescription(act.description)}
                        </div>
                    ))}
                </Section>

                {/* Awards Section */}
                <Section id="awards" title={lang === 'en' ? 'Awards & Honors' : '수상 및 실적'}>
                    <div className="awards-list">
                        {cvData.awards.map((award, index) => (
                            <div key={index} className="award-item">
                                <span className="award-date">{award.period}</span>
                                <div className="award-content">
                                    <div className="award-header">
                                        <h3 className="award-title">{t(award.title)}</h3>
                                        <span className="award-result">{t(award.result)}</span>
                                    </div>
                                    <p className="description">{t(award.description)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Publications Section - Links inline with venue */}
                <Section id="publications" title={lang === 'en' ? 'Publications' : '연구'}>
                    {cvData.publications.map((pub, index) => (
                        <div key={index} className="pub-item">
                            {pub.image && (
                                <div className="pub-thumbnail">
                                    <img src={pub.image} alt={pub.title} />
                                </div>
                            )}
                            <h3 className="pub-title">{pub.title}</h3>
                            <p className="pub-authors">{pub.authors}</p>
                            <div className="pub-venue-line">
                                <span className="pub-venue"><Globe size={14} /> {pub.venue}</span>
                                <span className="pub-year"><Calendar size={14} /> {pub.year}</span>
                                <div className="pub-links">
                                    {pub.paperUrl && (
                                        <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className="pub-btn">
                                            <FileText size={14} /> Paper
                                        </a>
                                    )}
                                    {pub.githubUrl && (
                                        <a href={pub.githubUrl} target="_blank" rel="noopener noreferrer" className="pub-btn">
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Section>

                {/* Skills Section - Larger category titles */}
                <Section id="skills" title={lang === 'en' ? 'Skills' : '기술 스택'}>
                    <div className="skills-list">
                        {/* Languages */}
                        <div>
                            <h4 className="skills-category-title">{lang === 'en' ? 'Languages' : '언어'}</h4>
                            <div className="rounded-item">
                                {cvData.skills.languages.map((skill, index) => (
                                    <div key={index} style={{ marginBottom: index === cvData.skills.languages.length - 1 ? 0 : '1.5rem' }}>
                                        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{t(skill.name)}</p>
                                        {renderDescription(skill.level)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div style={{ marginTop: '2rem' }}>
                            <h4 className="skills-category-title">{lang === 'en' ? 'Technical' : '기술'}</h4>
                            <div className="rounded-item">
                                {cvData.skills.technical.map((skill, index) => (
                                    <div key={index} style={{ marginBottom: index === cvData.skills.technical.length - 1 ? 0 : '1.5rem' }}>
                                        <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{t(skill.name)}</p>
                                        {renderDescription(skill.level)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            </main>

            <footer className="footer">
                <p>© 2026 {t(cvData.profile.name)}. Built with React & Vite.</p>
            </footer>
        </div>
    );
}

export default App;
