import styles from './SideNav.module.css';
import { useEffect, useState } from 'react';


export default function SideNav() {

    const [activeSection, setActiveSection] = useState<string>('orv');

    const sections = ['orv', 'about', 'work', 'connect']; 

    useEffect(() => {
        const sectionElements = sections
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
        
        const observer = new IntersectionObserver((entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }),
        {
            threshold: 0.6
        });

        sectionElements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    });

    return (
        <div className={`${styles.side_nav}`}>
            {sections.map((section) => (
                <div
                    key={section}
                    className={`${styles.side_dot}
                        rounded-full ${
                            activeSection === section
                            ? 'bg-[#fcbe11] w-10 h-4'
                            : 'bg-[#808080] w-2 h-4'
                        }
                    `}
                />
            ))}
        </div>
    )
}