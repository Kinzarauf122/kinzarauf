import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        {/* Hero Section */}
        {/* Hero Section */}
        <section style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap-reverse", // Stacks image on top on mobile, text on bottom
          gap: "2rem"
        }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <p className="animate-fade-in" style={{ fontSize: "1.2rem", color: "#666", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
              Portfolio of
            </p>
            <h1 className="animate-fade-in delay-100">
              Kinza Rauf
            </h1>
            <h2 className="animate-fade-in delay-200" style={{ fontSize: "2.5rem", color: "#ccc", margin: "1rem 0", border: 'none', fontWeight: 600 }}>
              Future Media Tech Strategist
            </h2>
            <p className="animate-fade-in delay-300" style={{ maxWidth: "600px", fontSize: "1.2rem", color: "#888", marginBottom: "3rem" }}>
              Refining the intersection of <strong>Mass Communication</strong> and <strong>Artificial Intelligence</strong>.
              Building the next generation of digital narratives.
            </p>
            <div className="animate-fade-in delay-400">
              <Link href="/about" className="btn">Explore My World</Link>
            </div>
          </div>

          <div className="animate-fade-in delay-200" style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* Glow effect behind image */}
            <div style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)",
              filter: "blur(40px)",
              zIndex: -1
            }} />
            <Image
              src="/hero-avatar.png"
              alt="Kinza Rauf Avatar"
              width={400}
              height={400}
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 0 40px rgba(255,255,255,0.05)",
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
