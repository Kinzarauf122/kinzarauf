import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Skills() {
    return (
        <>
            <Navbar />
            <main className="container" style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "100vh" }}>
                <section>
                    <h1 className="animate-fade-in">Expertise</h1>
                    <div className="grid">
                        <div className="card animate-fade-in delay-100" style={{ gridColumn: "span 2" }}>
                            <h3>Web Development</h3>
                            <p>Specializing in <strong>Next.js</strong> and modern frontend architecture. I build fast, responsive, and SEO-optimized web experiences.</p>
                        </div>
                        <div className="card animate-fade-in delay-200">
                            <h3>Blogging</h3>
                            <p>Curating compelling narratives that engage and inform audiences in the digital age.</p>
                        </div>
                        <div className="card animate-fade-in delay-300">
                            <h3>Digital Marketing</h3>
                            <p>Data-driven strategies to grow brand presence and maximize audience retention.</p>
                        </div>
                        <div className="card animate-fade-in delay-400" style={{ gridColumn: "span 2" }}>
                            <h3>Artificial Intelligence</h3>
                            <p>Leveraging LLMs and AI tools to automate workflows, generate content, and personalize user experiences.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
