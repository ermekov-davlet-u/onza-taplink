import { Link } from 'react-router-dom';

export default function Home() {
    const links = [
        {
            title: 'iPhone',
            subtitle: 'Ссылка на приложение',
            href: 'https://apps.apple.com/us/app/onza/id6758510619',
            icon: '🍎',
            badge: 'App Store',
        },
        {
            title: 'Onza.kg',
            subtitle: 'Официальный сайт компании',
            href: 'https://onza.kg/',
            icon: '🌐',
            badge: 'Web',
        },
        {
            title: 'Android',
            subtitle: 'Ссылка на приложение',
            href: 'https://play.google.com/store/apps/details?id=com.ermekov_davlet.onza',
            icon: '🤖',
            badge: 'Google Play',
        },
        // {
        //   title: 'Видеоуроки',
        //   subtitle: 'Инструкции, обзоры и полезные видео',
        //   href: 'https://youtube.com/@onzakyrgyzstan?si=GVW24CsSssqtoDbL',
        //   icon: '🎬',
        //   badge: 'Guide',
        // },
        {
            title: 'Запись на доставку',
            subtitle: 'Доставка посылки по Бишкеку',
            href: 'https://wa.me/996227080009',
            icon: '🚚',
            badge: 'Top',
            // featured: true,
        },
        {
            title: 'Купи вместо меня',
            subtitle: 'Поможем оформить и выкупить товар',
            href: 'https://wa.me/996227080008',
            icon: '🛍️',
            badge: 'Service',
        },
        {
            title: 'Вопросы и ответы',
            subtitle: 'Частые вопросы клиентов',
            href: '/faq',
            internal: true,
            icon: '❓',
            badge: 'FAQ',
        },
        {
            title: 'WhatsApp',
            subtitle: 'Горячая линия и быстрая связь',
            href: 'https://wa.me/996227080008',
            icon: '💬',
            badge: 'Chat',
        },
    ];

    return (
        <>
            <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #0f172a;
          background:
            radial-gradient(circle at 10% 10%, rgba(126,211,33,0.16), transparent 20%),
            radial-gradient(circle at 90% 10%, rgba(11,77,136,0.14), transparent 24%),
            radial-gradient(circle at 50% 100%, rgba(0,182,255,0.10), transparent 24%),
            linear-gradient(180deg, #f8fbff 0%, #eef5fb 55%, #e8f0f7 100%);
        }
        a { text-decoration: none; }

        .page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .bg-glow,
        .bg-glow-2,
        .bg-glow-3,
        .ring,
        .ring-2 {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
        }

        .bg-glow {
          width: 420px;
          height: 420px;
          left: -120px;
          top: -40px;
          background: radial-gradient(circle, rgba(126,211,33,0.28) 0%, rgba(126,211,33,0.08) 40%, transparent 70%);
          filter: blur(24px);
          animation: float 9s ease-in-out infinite;
        }

        .bg-glow-2 {
          width: 460px;
          height: 460px;
          right: -140px;
          top: 120px;
          background: radial-gradient(circle, rgba(11,77,136,0.20) 0%, rgba(11,77,136,0.05) 42%, transparent 72%);
          filter: blur(22px);
          animation: float 11s ease-in-out infinite;
          animation-delay: -3s;
        }

        .bg-glow-3 {
          width: 360px;
          height: 360px;
          left: 50%;
          bottom: -120px;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(0,182,255,0.18) 0%, rgba(0,182,255,0.05) 42%, transparent 72%);
          filter: blur(22px);
          animation: float 12s ease-in-out infinite;
          animation-delay: -5s;
        }

        .ring {
          width: 680px;
          height: 680px;
          border: 1px solid rgba(255,255,255,0.35);
          top: -300px;
          right: -240px;
          opacity: .55;
        }

        .ring-2 {
          width: 540px;
          height: 540px;
          border: 1px solid rgba(11,77,136,0.08);
          bottom: -220px;
          left: -120px;
          opacity: .8;
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: .14;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
        }

        .container {
          position: relative;
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          padding: 28px 14px 40px;
        }

        .hero {
          position: relative;
          border-radius: 30px;
          padding: 22px 20px 26px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(255,255,255,0.74);
          box-shadow:
            0 24px 80px rgba(10,46,84,0.12),
            inset 0 1px 0 rgba(255,255,255,0.7);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -90px;
          left: -50px;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.18) 45%, transparent 72%);
          pointer-events: none;
        }

        .logo-box {
          margin-top: 6px;
          display: flex;
          justify-content: center;
          animation: fadeUp .85s ease both;
          animation-delay: .08s;
        }

        .logo-placeholder {
          width: 160px;
          height: 60px;
          border-radius: 24px;
          border: 1.5px dashed rgba(11,77,136,0.24);
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(239,247,255,0.86));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.8),
            0 18px 50px rgba(11,77,136,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 14px;
          position: relative;
          overflow: hidden;
        }

        .logo-placeholder img {
          width: 100%;
          object-fit: contain;
          position: relative;
          z-index: 2;
        }

        .logo-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.8) 45%, transparent 100%);
          transform: translateX(-100%);
          animation: shine 4.2s linear infinite;
        }

        .title {
          margin: 18px 0 0;
          text-align: center;
          font-size: clamp(24px, 4vw, 40px);
          line-height: 1.05;
          letter-spacing: -1px;
          font-weight: 900;
          color: #0f172a;
          animation: fadeUp .9s ease both;
          animation-delay: .15s;
        }

        .stats {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .stat {
          border-radius: 18px;
          padding: 14px 10px;
          text-align: center;
          background: rgba(255,255,255,0.70);
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow: 0 16px 38px rgba(11,77,136,0.08);
          animation: fadeUp .8s ease both;
        }

        .stat strong {
          display: block;
          font-size: clamp(20px, 2.6vw, 28px);
          line-height: 1;
          color: #0b4d88;
          font-weight: 900;
        }

        .stat span {
          display: block;
          margin-top: 6px;
          color: #64748b;
          font-size: 12px;
          font-weight: 700;
        }

        .links {
          margin-top: 20px;
          display: grid;
          gap: 12px;
        }

        .link-card {
          position: relative;
          padding: 1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,1), rgba(227,240,251,0.94));
          box-shadow: 0 18px 45px rgba(11,77,136,0.10);
          overflow: hidden;
          animation: fadeUp .8s ease both;
        }

        .link-inner {
          position: relative;
          z-index: 1;
          border-radius: 23px;
          min-height: 88px;
          padding: 14px 16px;
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(244,250,255,0.90));
          display: flex;
          align-items: center;
          gap: 14px;
          transition: transform .35s ease, box-shadow .35s ease, background .35s ease;
        }

        .link-card:hover .link-inner {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 24px 50px rgba(11,77,136,0.12);
          background: linear-gradient(180deg, rgba(255,255,255,1), rgba(237,247,255,0.96));
        }

        .link-card.featured {
          background: linear-gradient(135deg, #0b4d88, #0c4073 52%, #14385d 100%);
          box-shadow: 0 22px 58px rgba(11,77,136,0.25);
        }

        .link-card.featured .link-inner {
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 26%),
            linear-gradient(135deg, rgba(13,78,135,0.94), rgba(12,64,115,0.98));
        }

        .icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex: 0 0 auto;
          background: linear-gradient(145deg, rgba(11,77,136,0.10), rgba(11,77,136,0.04));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
        }

        .link-card.featured .icon {
          background: rgba(255,255,255,0.14);
        }

        .content {
          min-width: 0;
          flex: 1;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 24px;
          padding: 0 10px;
          border-radius: 999px;
          background: rgba(11,77,136,0.08);
          color: #0b4d88;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        .link-card.featured .badge {
          background: rgba(255,255,255,0.14);
          color: #fff;
        }

        .content h3 {
          margin: 8px 0 0;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.08;
          letter-spacing: -.4px;
          color: #0f172a;
          font-weight: 900;
        }

        .link-card.featured .content h3 {
          color: #fff;
        }

        .content p {
          margin: 6px 0 0;
          color: #5b6c7d;
          font-size: 13px;
          line-height: 1.45;
          max-width: 95%;
        }

        .link-card.featured .content p {
          color: rgba(255,255,255,0.90);
        }

        .arrow {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #0b4d88;
          background: rgba(11,77,136,0.08);
          flex: 0 0 auto;
          transition: transform .3s ease, background .3s ease;
        }

        .link-card:hover .arrow {
          transform: translateX(5px) scale(1.04);
          background: rgba(11,77,136,0.12);
        }

        .link-card.featured .arrow {
          color: #fff;
          background: rgba(255,255,255,0.14);
        }

        .footer {
          margin-top: 14px;
          text-align: center;
          color: #6d7d8c;
          font-size: 12px;
          font-weight: 700;
          animation: fadeUp 1.1s ease both;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(8px); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }

        @media (max-width: 768px) {
          .container { padding: 0; }
          .hero {
            border-radius: 24px;
            padding: 16px 12px 18px;
          }
          .logo-placeholder {
            width: 130px;
            height: 60px;
            border-radius: 20px;
          }
          .stats {
            grid-template-columns: 1fr;
          }
          .link-inner {
            min-height: 82px;
            padding: 12px;
            gap: 12px;
          }
          .icon {
            width: 48px;
            height: 48px;
            border-radius: 16px;
            font-size: 20px;
          }
          .content h3 {
            font-size: 17px;
          }
          .content p {
            max-width: 100%;
            font-size: 12px;
          }
          .arrow {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
        }
      `}</style>

            <div className="page">
                <div className="bg-glow" />
                <div className="bg-glow-2" />
                <div className="bg-glow-3" />
                <div className="ring" />
                <div className="ring-2" />
                <div className="noise" />

                <div className="container">
                    <section className="hero">
                        <div className="logo-box">
                            <div className="logo-placeholder">
                                <img src="/onza2.png" alt="ONZA logo" />
                            </div>
                        </div>

                        {/* <h1 className="title">Стильный taplink без лишнего</h1> */}

                        {/* <div className="stats">
              <div className="stat">
                <strong>24/7</strong>
                <span>Быстрый доступ</span>
              </div>
              <div className="stat">
                <strong>8</strong>
                <span>Основных ссылок</span>
              </div>
              <div className="stat">
                <strong>ONZA</strong>
                <span>Единый вход</span>
              </div>
            </div> */}

                        <div className="links">
                            {links.map((item) => {
                                const inner = (
                                    <div className="link-inner">
                                        <div className="icon">{item.icon}</div>

                                        <div className="content">
                                            <div className="badge">{item.badge}</div>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                        </div>

                                        <div className="arrow">→</div>
                                    </div>
                                );
                                const cls = `link-card ${item.featured ? 'featured' : ''}`;

                                return item.internal ? (
                                    <Link key={item.title} to={item.href} className={cls}>{inner}</Link>
                                ) : (
                                    <a key={item.title} href={item.href} className={cls} target="_blank" rel="noopener noreferrer">{inner}</a>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}