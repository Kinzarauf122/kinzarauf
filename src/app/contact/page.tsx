import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="container" style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
                <section style={{ textAlign: "center" }}>

                    {/* Centered Small Avatar */}
                    <div className="animate-fade-in" style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                        <div style={{ position: "relative", width: "120px", height: "120px" }}>
                            <div style={{
                                position: "absolute",
                                inset: "-5px",
                                background: "radial-gradient(circle, #fff, transparent)",
                                filter: "blur(15px)",
                                opacity: 0.3,
                                zIndex: -1,
                                borderRadius: "50%"
                            }} />
                            <Image
                                src="/hero-avatar.png"
                                alt="Kinza Rauf"
                                width={120}
                                height={120}
                                style={{
                                    borderRadius: "50%",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    border: "2px solid rgba(255,255,255,0.2)"
                                }}
                            />
                        </div>
                    </div>

                    <h1 className="animate-fade-in" style={{ fontSize: "4rem", marginBottom: "2rem" }}>Let's Build Together</h1>
                    <p className="animate-fade-in delay-100" style={{ marginBottom: "3rem", fontSize: "1.5rem", color: "#aaa" }}>
                        Ready to start a project? I'm currently open to new opportunities.
                    </p>

                    <div className="card animate-fade-in delay-200" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
                        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>Name</label>
                                <input type="text" style={{ width: "100%", padding: "1rem", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px" }} placeholder="Your Name" />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>Email</label>
                                <input type="email" style={{ width: "100%", padding: "1rem", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px" }} placeholder="your@email.com" />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>Message</label>
                                <textarea rows={5} style={{ width: "100%", padding: "1rem", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px" }} placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn" style={{ width: "100%", marginTop: "1rem" }}>Send Message</button>
                        </form>
                    </div>

                    <div className="animate-fade-in delay-300" style={{ marginTop: "4rem" }}>
                        <p style={{ color: "#666" }}>or email me directly at</p>
                        <a href="mailto:kinza@example.com" style={{ fontSize: "1.5rem", color: "#fff", textDecoration: "underline" }}>kinza@example.com</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
