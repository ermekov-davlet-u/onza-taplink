import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqItems } from './faqData';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <>
            <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #0f172a;
          background:
            radial-gradient(circle at 10% 10%, rgba(126,211,33,0.16), transparent 20%),
            radial-gradient(circle at 90% 10%, rgba(11,77,136,0.14), transparent 24%),
            radial-gradient(circle at 50% 100%, rgba(0,182,255,0.10), transparent 24%),
            linear-gradient(180deg, #f8fbff 0%, #eef5fb 55%, #e8f0f7 100%);
          background-attachment: fixed;
        }
        a { text-decoration: none; }

        .faq-page { min-height: 100vh; }
        .faq-container {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          padding: 28px 14px 40px;
        }
        .faq-hero {
          border-radius: 30px;
          padding: 22px 20px 26px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(255,255,255,0.74);
          box-shadow: 0 24px 80px rgba(10,46,84,0.12), inset 0 1px 0 rgba(255,255,255,0.7);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .faq-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }
        .faq-back {
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #0b4d88;
          background: rgba(11,77,136,0.08);
          transition: background .25s ease, transform .25s ease;
        }
        .faq-back:hover { background: rgba(11,77,136,0.14); transform: translateX(-3px); }
        .faq-title {
          margin: 0;
          font-size: clamp(22px, 4vw, 32px);
          line-height: 1.1;
          letter-spacing: -.6px;
          font-weight: 900;
        }

        .faq-list { display: grid; gap: 10px; }

        .faq-item {
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(244,250,255,0.90));
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 12px 32px rgba(11,77,136,0.08);
          overflow: hidden;
          transition: box-shadow .3s ease;
        }
        .faq-item.open { box-shadow: 0 18px 44px rgba(11,77,136,0.14); }

        .faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: none;
          border: 0;
          font: inherit;
          text-align: left;
          color: #0f172a;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 800;
          cursor: pointer;
        }
        .faq-q:focus-visible { outline: 2px solid #0b4d88; outline-offset: -2px; border-radius: 20px; }
        .faq-q span:first-child { flex: 1; min-width: 0; }

        .faq-chevron {
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 1;
          color: #0b4d88;
          background: rgba(11,77,136,0.08);
          transition: transform .3s ease, background .3s ease, color .3s ease;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(45deg);
          background: #0b4d88;
          color: #fff;
        }

        .faq-a-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .3s ease;
        }
        .faq-item.open .faq-a-wrap { grid-template-rows: 1fr; }
        .faq-a-wrap > div { overflow: hidden; }
        .faq-a {
          margin: 0;
          padding: 0 16px 18px;
          color: #3f4f60;
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-line;
          overflow-wrap: anywhere;
        }

        @media (max-width: 768px) {
          .faq-container { padding: 0; }
          .faq-hero { border-radius: 24px; padding: 16px 12px 18px; }
          .faq-q { padding: 14px 12px; font-size: 14px; }
          .faq-a { padding: 0 12px 16px; font-size: 13px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-a-wrap, .faq-chevron, .faq-back, .faq-item { transition: none; }
        }
      `}</style>

            <div className="faq-page">
                <div className="faq-container">
                    <section className="faq-hero">
                        <div className="faq-top">
                            <Link to="/" className="faq-back" aria-label="Назад">←</Link>
                            <h1 className="faq-title">Вопросы и ответы</h1>
                        </div>

                        <div className="faq-list">
                            {faqItems.map((item, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                                        <button
                                            className="faq-q"
                                            onClick={() => toggle(i)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-a-${i}`}
                                        >
                                            <span>{item.question.trim()}</span>
                                            <span className="faq-chevron" aria-hidden="true">+</span>
                                        </button>
                                        <div className="faq-a-wrap" id={`faq-a-${i}`} role="region">
                                            <div>
                                                <p className="faq-a">{item.answer.trim()}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}