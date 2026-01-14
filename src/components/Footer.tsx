export default function Footer() {
    return (
        <footer style={{
            textAlign: "center",
            padding: "2rem 0",
            color: "rgba(255,255,255,0.4)",
            borderTop: "1px solid var(--card-border)",
            marginTop: "auto"
        }}>
            <div className="container">
                <p>© {new Date().getFullYear()} Kinza Rauf. All rights reserved.</p>
                <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
                    Built with Next.js & Artificial Intelligence
                </div>
            </div>
        </footer>
    );
}
