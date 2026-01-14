import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Education() {
    return (
        <>
            <Navbar />
            <main className="container" style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
                <section>
                    <h1 className="animate-fade-in">Education</h1>
                    <div className="card animate-fade-in delay-100">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>BS Mass Communication</h3>
                                <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>University of Sargodha</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ color: '#888', fontSize: '1.2rem' }}>2023 — Present</p>
                                <p style={{ color: '#fff', fontSize: '1.2rem' }}>6th Semester</p>
                            </div>
                        </div>
                        <hr style={{ margin: "2rem 0", borderColor: "#333" }} />
                        <div>
                            <h4 style={{ color: "#ccc", marginBottom: "0.5rem" }}>Key Coursework</h4>
                            <ul style={{ listStyle: "inside", color: "#888", lineHeight: "1.8" }}>
                                <li>Media Production & Digital Storytelling</li>
                                <li>Communication Theories & Research Methods</li>
                                <li>Public Relations & Advertising</li>
                                <li>Digital Media Ethics</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
