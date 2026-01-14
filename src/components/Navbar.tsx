"use client";
import Link from 'next/link';


export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1000px',
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '1rem 2rem',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>KINZA .</Link>
                </div>
                <ul style={{
                    display: 'flex',
                    gap: '2rem',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}>
                    {['About', 'Skills', 'Education', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link href={`/${item.toLowerCase()}`} className="nav-link" style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: '#cccccc',
                                transition: 'color 0.3s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
