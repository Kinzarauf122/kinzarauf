import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="container" style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
                <section>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "3rem", flexWrap: "wrap" }}>

                        {/* Image Column */}
                        <div className="animate-fade-in" style={{ flex: "0 0 300px", position: "relative" }}>
                            <div style={{
                                position: "absolute",
                                inset: "-10px",
                                background: "linear-gradient(45deg, #333, #000)",
                                filter: "blur(20px)",
                                zIndex: -1,
                                borderRadius: "20px"
                            }} />
                            <Image
                                src="/hero-avatar.png"
                                alt="Kinza Rauf"
                                width={300}
                                height={400}
                                style={{
                                    borderRadius: "20px",
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    border: "1px solid rgba(255,255,255,0.1)"
                                }}
                            />
                        </div>

                        {/* Text Column */}
                        <div style={{ flex: "1" }}>
                            <h1 className="animate-fade-in" style={{ marginBottom: "2rem" }}>About Me</h1>
                            <div className="card animate-fade-in delay-100">
                                <p style={{ fontSize: "1.25rem", color: "#ddd" }}>
                                    I am a visionary student at the <strong>University of Sargodha</strong>, currently in my 6th semester of <strong>Mass Communication and Media Studies</strong>.
                                </p>
                                <br />
                                <p style={{ fontSize: "1.1rem", color: "#aaa" }}>
                                    My journey is not just about reporting the news; it's about <em>creating</em> the platforms that deliver it.
                                    By mastering <strong>Web Development</strong> and <strong>Digital Marketing</strong>, and powering them with <strong>AI</strong>,
                                    I am crafting a unique niche for myself in the digital ecosystem.
                                </p>
                                <br />
                                <p style={{ fontSize: "1.1rem", color: "#aaa" }}>
                                    I believe in the power of storytelling combined with the precision of technology. Whether it's writing a compelling blog post
                                    or coding a responsive website, my goal is always to communicate ideas effectively and aesthetically.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
