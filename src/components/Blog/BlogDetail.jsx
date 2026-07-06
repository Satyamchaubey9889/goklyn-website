import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogContentMap = {
    'quantum-computing-threat-to-encryption': {
        title: 'Is Quantum Computing a Ticking Time Bomb for Encryption?',
        coverImage: '/images/blog/quantum-encryption.jpg',
        author: 'Goklyn Team',
        date: '2026-06-20',
        tags: ['Quantum Computing', 'Cybersecurity'],
        content: `Modern encryption is built on math problems that are extremely hard for classical computers to solve. RSA relies on the difficulty of factoring huge numbers. Elliptic Curve Cryptography (ECC) relies on a similarly hard problem in curve math. Both have quietly protected online banking, messaging apps, and government communications for over 30 years.

Quantum computers threaten to change that. In 1994, mathematician Peter Shor showed that a sufficiently powerful quantum computer could factor large numbers exponentially faster than any classical machine, using an algorithm now known as Shor's Algorithm. If run at scale, it would make RSA and ECC trivial to break.

The good news: today's quantum computers are nowhere near powerful enough to run Shor's Algorithm against real-world encryption keys. Current systems have hundreds of noisy qubits; breaking RSA-2048 is estimated to require millions of stable, error-corrected qubits.

The concerning part is a strategy some attackers are already using, known as "harvest now, decrypt later." Sensitive encrypted data is being intercepted and stored today, with the expectation that it can be decrypted once quantum computers mature. For data that needs to stay confidential for 10, 20, or 30 years, that clock is already ticking.

This is why organizations like NIST have pushed forward with post-quantum cryptography standards well before quantum computers become a practical threat. Migrating cryptographic systems across an enterprise takes years, not months, so the transition needs to start long before the danger is fully realized.

For businesses building anything security-sensitive today, the takeaway isn't panic, it's planning. Understanding which of your systems rely on RSA or ECC, and building a roadmap toward quantum-resistant alternatives, is quickly becoming a standard part of responsible security architecture.`,
    },

    'post-quantum-cryptography-explained': {
        title: 'Post-Quantum Cryptography: Preparing for the Next Era of Security',
        coverImage: '/images/blog/post-quantum-crypto.jpg',
        author: 'Goklyn Team',
        date: '2026-06-08',
        tags: ['Quantum Computing', 'Cryptography'],
        content: `Post-quantum cryptography (PQC) refers to cryptographic algorithms designed to be secure against attacks from both classical and quantum computers. Unlike quantum key distribution, which relies on quantum physics itself, PQC runs on the classical hardware we already use, it just relies on math problems that quantum computers aren't good at solving.

After a multi-year evaluation process, NIST finalized its first set of post-quantum cryptography standards, built around lattice-based and hash-based mathematical problems. These problems remain hard even for a quantum computer running Shor's or Grover's algorithms, making them strong long-term replacements for RSA and ECC.

Three algorithm families are at the center of this shift. Lattice-based cryptography, which underpins algorithms like CRYSTALS-Kyber for key exchange and CRYSTALS-Dilithium for digital signatures, is currently the most widely adopted approach due to its balance of speed and small key sizes. Hash-based signatures, such as SPHINCS+, offer very strong security guarantees because they rely only on the properties of secure hash functions. Code-based cryptography, one of the oldest post-quantum approaches, is prized for its long track record of resisting attacks.

For most organizations, adoption won't mean ripping out existing systems overnight. The recommended path is "crypto agility": designing systems so cryptographic algorithms can be swapped out without a full rebuild, and running classical and post-quantum algorithms side-by-side during the transition.

Cloud providers and browser vendors have already begun rolling out hybrid post-quantum key exchange in TLS. If you're building or maintaining infrastructure today, the practical first step is an inventory: knowing exactly where cryptography is used across your stack is the foundation for any future migration.`,
    },

    'zero-trust-architecture-2026': {
        title: 'Zero Trust Architecture: Why "Never Trust, Always Verify" Wins in 2026',
        coverImage: '/images/blog/zero-trust.jpg',
        author: 'Goklyn Team',
        date: '2026-05-22',
        tags: ['Cybersecurity', 'Enterprise Security'],
        content: `Traditional network security worked like a castle: build a strong perimeter, and trust everything inside it. That model made sense when employees worked from a single office network. It makes far less sense now, with remote work, cloud infrastructure, and third-party integrations dissolving the idea of a fixed perimeter.

Zero Trust Architecture (ZTA) flips the model. Instead of assuming anything inside the network is safe, it operates on one core principle: never trust, always verify. Every request for access, whether from an employee, a device, or a service, is authenticated, authorized, and continuously validated, regardless of where it originates.

A few pillars make this work in practice. Identity verification treats identity as the new perimeter, using strong multi-factor authentication and continuous session validation rather than one-time logins. Least-privilege access ensures users and systems only get the minimum permissions needed to do their job, shrinking the damage a single compromised account can cause. Micro-segmentation breaks networks into small, isolated zones, so an attacker who breaches one segment can't move freely to others. Continuous monitoring evaluates behavior in real time, flagging anomalies instead of relying solely on perimeter firewalls.

The payoff is significant. In a landscape where stolen credentials and insider threats are among the leading causes of breaches, Zero Trust reduces the blast radius of any single compromised account or device.

For teams starting this journey, the transition doesn't need to happen all at once. Most organizations begin with identity and access management, then expand into segmentation and monitoring as maturity grows.`,
    },

    'quantum-key-distribution-explained': {
        title: 'Quantum Key Distribution: Unbreakable Encryption Using Physics',
        coverImage: '/images/blog/qkd.jpg',
        author: 'Goklyn Team',
        date: '2026-04-30',
        tags: ['Quantum Computing', 'Cybersecurity'],
        content: `Most encryption today relies on mathematical complexity, problems that are simply too hard for a computer to solve quickly. Quantum Key Distribution (QKD) takes a fundamentally different approach: it relies on the laws of physics, not math, to guarantee security.

QKD uses the quantum properties of particles, typically photons, to transmit encryption keys between two parties. The key insight comes from a rule in quantum mechanics: observing a quantum system disturbs it. If an eavesdropper tries to intercept the photons carrying the key, the act of measurement changes their state, introducing detectable errors.

This means QKD doesn't just make eavesdropping difficult, it makes it detectable. If the error rate spikes above an expected threshold, both parties know the channel has been compromised and can discard the key before it's ever used.

The most well-known protocol, BB84, was developed in 1984 and remains the foundation for many QKD systems in use today. It works by encoding key bits onto photons using different polarization states, with the sender and receiver later comparing a subset of their measurements to check for interference.

QKD is already moving beyond research labs. Government agencies, financial institutions, and telecom providers in several countries have piloted metropolitan-scale QKD networks, often layered with existing fiber-optic infrastructure.

That said, QKD isn't a replacement for all encryption, it requires specialized hardware, has distance limitations without trusted relay nodes, and only secures key exchange, not the encryption of data itself. In practice, it's most likely to be used alongside post-quantum algorithms rather than instead of them.`,
    },

    'ai-powered-cyberattacks-defense': {
        title: 'AI-Powered Cyberattacks Are Here — Is Your Defense Ready?',
        coverImage: '/images/blog/ai-cyberattacks.jpg',
        author: 'Goklyn Team',
        date: '2026-04-12',
        tags: ['Cybersecurity', 'AI'],
        content: `Artificial intelligence has become a double-edged sword in cybersecurity. The same capabilities that help defenders detect threats faster are now being used by attackers to make their campaigns faster, cheaper, and harder to detect.

On the offensive side, AI is lowering the barrier to entry for convincing attacks. Phishing emails, once easy to spot due to awkward phrasing, can now be generated in fluent, personalized language at scale. Deepfake audio and video are being used in social engineering attacks, including cases impersonating executives to authorize fraudulent wire transfers. Malware developers are experimenting with AI to generate polymorphic code that changes its signature to evade detection tools.

Defenders are responding in kind. Security teams increasingly rely on AI-driven tools for behavioral anomaly detection, which learns what "normal" activity looks like for a user or system and flags subtle deviations that static rules would miss. Automated threat hunting uses machine learning models to sift through massive volumes of log data to surface patterns human analysts would take far longer to find. Faster incident response uses AI to triage alerts and reduce the time between detection and containment.

The net effect is an arms race rather than a one-sided advantage. Organizations that treat AI purely as a productivity tool while ignoring its role in the threat landscape are exposing themselves to attacks that evolve faster than traditional defenses can adapt.

The practical response isn't to fear AI, but to invest in it deliberately: pairing AI-assisted detection with strong fundamentals, least-privilege access, employee training on AI-generated phishing, and rapid patching, so that AI becomes an advantage for defenders, not just attackers.`,
    },
};

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        setLoading(true);
        setTimeout(() => {
            setBlog(blogContentMap[slug] || null);
            setLoading(false);
        }, 300);
    }, [slug]);

    const internalStyles = `
    .blog-detail-section {
      padding: 100px 0;
      background: #0a0a12;
      min-height: 80vh;
    }

    .blog-detail-section .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #00f0ff;
      text-decoration: none;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      margin-bottom: 32px;
    }

    .blog-tags {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }

    .blog-tag {
      font-family: 'Montserrat', sans-serif;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 4px 10px;
      border-radius: 20px;
      color: #7b2fff;
      background: rgba(123, 47, 255, 0.12);
      border: 1px solid rgba(123, 47, 255, 0.3);
    }

    .blog-detail-title {
      font-family: 'Poppins', sans-serif;
      font-size: 36px;
      font-weight: 700;
      color: #fff;
      margin: 16px 0;
      line-height: 1.3;
    }

    .blog-card-meta {
      display: flex;
      gap: 24px;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.45);
      font-family: 'Poppins', sans-serif;
    }

    .blog-card-meta i {
      color: #00f0ff;
      margin-right: 6px;
    }

    .blog-detail-image {
      margin: 32px 0;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(0, 240, 255, 0.15);
    }

    .blog-detail-image img {
      width: 100%;
      display: block;
    }

    .blog-detail-content {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      line-height: 1.9;
      color: rgba(255, 255, 255, 0.8);
      white-space: pre-line;
    }

    .blog-detail-loading, .blog-detail-empty {
      text-align: center;
      padding: 100px 24px;
      color: rgba(255, 255, 255, 0.5);
    }

    .blog-detail-loading i {
      font-size: 28px;
    }

    .blog-detail-empty p {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      margin-bottom: 20px;
    }
  `;

    if (loading) {
        return (
            <div className="blog-detail-loading">
                <style>{internalStyles}</style>
                <i className="fas fa-spinner fa-spin"></i>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="blog-detail-empty">
                <style>{internalStyles}</style>
                <p>Blog post not found.</p>
                <Link to="/blog" className="back-link">
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <section className="blog-detail-section">
            <style>{internalStyles}</style>

            <div className="container">
                <Link to="/blog" className="back-link" data-aos="fade-right">
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </Link>

                <div className="blog-detail-header" data-aos="fade-up">
                    <div className="blog-tags">
                        {blog.tags.map((tag) => (
                            <span className="blog-tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <h1 className="blog-detail-title">{blog.title}</h1>
                    <div className="blog-card-meta">
                        <span><i className="fas fa-user"></i> {blog.author}</span>
                        <span>
                            <i className="fas fa-calendar-alt"></i>{' '}
                            {new Date(blog.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                    </div>
                </div>

                <div className="blog-detail-image" data-aos="fade-up">
                    <img src={blog.coverImage} alt={blog.title} />
                </div>

                <div className="blog-detail-content" data-aos="fade-up">
                    {blog.content}
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;