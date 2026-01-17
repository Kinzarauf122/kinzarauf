"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus("error");
        }
    };

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
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div>
                                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", padding: "1rem", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px" }}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", padding: "1rem", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px" }}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    style={{ width: "100%", padding: "1rem", background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px" }}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn"
                                disabled={status === "loading"}
                                style={{ width: "100%", marginTop: "1rem", opacity: status === "loading" ? 0.7 : 1 }}
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>
                            {status === "success" && (
                                <p style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>Failed to send message. Please try again.</p>
                            )}
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
