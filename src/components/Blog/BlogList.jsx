import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const dummyBlogs = [
    {
        id: 1,
        slug: 'quantum-computing-threat-to-encryption',
        title: 'Is Quantum Computing a Ticking Time Bomb for Encryption?',
        excerpt: 'RSA and ECC have secured the internet for decades. Quantum computers threaten to break both — here is what that actually means and how soon it could happen.',
        coverImage: 'assets/images/blog/quantum-encryption.png',
        author: 'Goklyn Team',
        date: '2026-06-20',
        tags: ['Quantum Computing', 'Cybersecurity'],
    },
    {
        id: 2,
        slug: 'post-quantum-cryptography-explained',
        title: 'Post-Quantum Cryptography: Preparing for the Next Era of Security',
        excerpt: 'NIST has finalized new cryptographic standards built to resist quantum attacks. Here is what post-quantum cryptography is and why enterprises should start migrating now.',
        coverImage: 'assets/images/blog/post-quantum-crypto.png',
        author: 'Goklyn Team',
        date: '2026-06-08',
        tags: ['Quantum Computing', 'Cryptography'],
    },
    {
        id: 3,
        slug: 'zero-trust-architecture-2026',
        title: 'Zero Trust Architecture: Why "Never Trust, Always Verify" Wins in 2026',
        excerpt: 'Perimeter-based security is obsolete. We break down how Zero Trust models are helping organizations defend against modern, identity-based attacks.',
        coverImage: 'assets/images/blog/zero-trust.png',
        author: 'Goklyn Team',
        date: '2026-05-22',
        tags: ['Cybersecurity', 'Enterprise Security'],
    },
    {
        id: 4,
        slug: 'quantum-key-distribution-explained',
        title: 'Quantum Key Distribution: Unbreakable Encryption Using Physics',
        excerpt: 'Quantum Key Distribution uses the laws of quantum mechanics to detect eavesdroppers instantly. Here is how QKD works and where it is already being deployed.',
        coverImage: 'assets/images/blog/qkd.png',
        author: 'Goklyn Team',
        date: '2026-04-30',
        tags: ['Quantum Computing', 'Cybersecurity'],
    },
    {
        id: 5,
        slug: 'ai-powered-cyberattacks-defense',
        title: 'AI-Powered Cyberattacks Are Here — Is Your Defense Ready?',
        excerpt: 'Attackers are now using AI to automate phishing, malware generation, and reconnaissance. Here is how security teams are fighting back with AI of their own.',
        coverImage: 'assets/images/blog/ai-cyberattacks.png',
        author: 'Goklyn Team',
        date: '2026-04-12',
        tags: ['Cybersecurity', 'AI'],
    },
];

const BlogList = () => {
    const [blogs, setBlogs] = useState(dummyBlogs);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        // Uncomment once backend route is ready:
        // setLoading(true);
        // fetch('/api/blogs')
        //   .then((res) => res.json())
        //   .then((data) => setBlogs(data))
        //   .catch((err) => console.error('Failed to load blogs:', err))
        //   .finally(() => setLoading(false));
    }, []);

    return (
        <section className="blog-section">
            <style>{`
        .blog-section {
          padding: 100px 0;
          background: #0a0a12;
        }

        .blog-section .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .blog-section .section-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .blog-section .section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
}

.blog-section .section-title .highlight {
  background: linear-gradient(100deg, #00f0ff 0%, #7b2fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

        .blog-section .section-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 10px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 50px;
        }

        .blog-card {
          display: block;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 240, 255, 0.15);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 240, 255, 0.5);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.15);
        }

        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .blog-card:hover .blog-card-image img {
          transform: scale(1.08);
        }

        .blog-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent 60%);
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .blog-card-overlay {
          opacity: 1;
        }

        .read-more {
          color: #00f0ff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 14px;
        }

        .blog-card-content {
          padding: 24px;
        }

        .blog-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .blog-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 20px;
          color: #00f0ff;
          background: rgba(123, 47, 255, 0.12);
          border: 1px solid rgba(123, 47, 255, 0.3);
        }

        .blog-card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .blog-card-excerpt {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .blog-card-meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
          font-family: 'Poppins', sans-serif;
        }

        .blog-card-meta i {
          color: #00f0ff;
          margin-right: 6px;
        }

        .blog-loading, .blog-empty {
          text-align: center;
          padding: 60px 0;
          color: rgba(255, 255, 255, 0.5);
          font-size: 28px;
        }

        .blog-empty p {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          margin-top: 16px;
        }
      `}</style>

            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">
                        Our <span className="highlight">Blog</span>
                    </h2>
                    <p className="section-subtitle">
                        Insights, updates, and stories from the Goklyn team
                    </p>
                </div>

                {loading ? (
                    <div className="blog-loading">
                        <i className="fas fa-spinner fa-spin"></i>
                    </div>
                ) : (
                    <div className="blog-grid">
                        {blogs.map((blog, index) => (
                            <Link
                                to={`/blog/${blog.slug}`}
                                className="blog-card"
                                key={blog.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="blog-card-image">
                                    <img src={blog.coverImage} alt={blog.title} loading="lazy" />
                                    <div className="blog-card-overlay">
                                        <span className="read-more">
                                            Read Article <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="blog-card-content">
                                    <div className="blog-tags">
                                        {blog.tags.map((tag) => (
                                            <span className="blog-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>

                                    <h3 className="blog-card-title">{blog.title}</h3>
                                    <p className="blog-card-excerpt">{blog.excerpt}</p>

                                    <div className="blog-card-meta">
                                        <span>
                                            <i className="fas fa-user"></i> {blog.author}
                                        </span>
                                        <span>
                                            <i className="fas fa-calendar-alt"></i>{' '}
                                            {new Date(blog.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {!loading && blogs.length === 0 && (
                    <div className="blog-empty" data-aos="fade-up">
                        <i className="fas fa-pen-nib"></i>
                        <p>No blog posts yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogList;