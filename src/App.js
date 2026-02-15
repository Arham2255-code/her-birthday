import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isCakeCut, setIsCakeCut] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [replyMsg, setReplyMsg] = useState("");
  const [decorItems, setDecorItems] = useState([]);
  const [tangStep, setTangStep] = useState(0);

  const prankMessages = [
    "Click kro surprise hai !✨",
    "Itni jaldi kya hai? 😂",
    "Tang toh nahi ho rahi na? 🤔",
    "Try again,🎯",
    "Dil se click karo.😔❤️",
    "Soch lo pehle ek baar!🙂",
    "Bas ek aur... pakka last! 🥹",
    "chalo ab apni kismat azmalo!🥲"
  ];

  useEffect(() => {
    const icons = ['🎈', '💖', '✨', '🌸', '🌹', '🤍', '🎂', '🍰'];
    const items = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100 + 'vw',
      delay: Math.random() * 10 + 's',
      size: Math.random() * (30 - 15) + 15 + 'px'
    }));
    setDecorItems(items);
  }, []);

  const handleCakeCut = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 4000 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    setIsCakeCut(true);
    setTimeout(() => { setShowContent(true); }, 300);
  };

  const sendToWhatsApp = () => {
    if (!replyMsg.trim()) {
      alert("Pehle kuch likh toh lo! 😊");
      return;
    }
    const myNumber = "923002262072";
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent("Areesha's Reply: " + replyMsg)}`;
    window.open(url, '_blank').focus();
  };

  return (
    <div className="App">
      {!isCakeCut ? (
        <div id="cake-overlay">
          {tangStep < prankMessages.length ? (
            <div className="prank-wrapper w-100 h-100">
              <h2 className="tang-text">kiya apko tang krlun main?</h2>
              <button 
                className="cute-prank-btn"
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 60 + 20}vh`,
                  left: `${Math.random() * 60 + 5}vw`,
                }}
                onClick={() => setTangStep(tangStep + 1)}
              >
                {prankMessages[tangStep]}
              </button>
            </div>
          ) : (
            <div className="cake-slice-container text-center">
               <div className="cake-slice" onClick={handleCakeCut} style={{cursor: 'pointer'}}>
                <img 
                  src="/images/birthday-cake.png.png" 
                  alt="Birthday Cake" 
                  className="cake-img img-fluid" 
                  style={{maxWidth: '300px'}}
                  onError={(e) => {e.target.src = "https://cdn-icons-png.flaticon.com/512/3168/3168127.png"}} 
                />
                <div className="knife-icon">🔪</div>
              </div>
              <h2 className="tap-text mt-3">Cake cut kro ab! 🎂❤️</h2>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="decorations">
            {decorItems.map(item => (
              <div key={item.id} className="item" style={{ left: item.left, animationDelay: item.delay, fontSize: item.size }}>
                {item.icon}
              </div>
            ))}
          </div>

          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between">
              <div className="navbar-logo">~happy birthday areesha</div>
              <ul className="navbar-links d-flex mb-0 list-unstyled gap-3">
                <li><a href="#hero" className="text-decoration-none text-dark">main wish</a></li>
                <li><a href="#messages" className="text-decoration-none text-dark">love</a></li>
                <li><a href="#reply" className="text-decoration-none text-dark">Reply</a></li>
              </ul>
            </div>
          </nav>

          <div className={`main-wrapper ${showContent ? 'visible' : ''}`}>
            <section id="hero" className="hero-section">
              <video autoPlay loop muted playsInline className="hero-video">
                <source src="" type="video/mp4" />
              </video>
              <div className="hero-content-overlay container">
                <h1 className="hero-heading">Happy Birthday, Areeshu! 🥹🌹</h1>
                <p className="hero-subtext mx-auto" style={{maxWidth: '700px'}}>
                  my prayer for you is that Allah turns every coming year of your life into ease, light, and a destiny more beautiful than anything you have ever imagined.✨🤍
                </p>
              </div>
            </section>

            <section id="messages" className="container py-5 mt-5">
              {[
                { img: "image-4.jpeg (2).jpeg", title: "Areeshu!!...", text: "Areesha main hamesha sab kuch alfaazun mn nahe keh pata lekin aj main apko yeh batana chahta hun ke ap mere liye bht khaas ho. Main dil se dua karta hun ke apki zindagi ka yeh naya saal apko sukoon khushi aur bohot se ese lamhe de (mere Sath😭) jisse apka dil khush ho..😭✨Allah hamesha apki hifazat kare ameen apko har wo rasta dikhaye jo apke liye behtar ho or har barhte saal ke sath apka naseeb or bhi zyada khoobsurat or acha hojaye. AP har wo cheez deserve krti ho jisse Apko khushi mile. Hamesha isi tarah ache dil wali rehna areresha apki wajah se duniya or bhi achi lagti hai kiu ap meri nanni si jaan ho na.🥹🎀 jab mn  peda hua tha tw Meri mama ne  Meri khushiyunn ki Dua mangi thi tw Allah ne apko 3saal bad Bhej diya tha is dunya Mein mere lye 🥹👉👈 Baki I love youuu so much Birthday Girl 😭❤️🌎" },
                { img: "image-2.jpeg", title: "Beautiful Moments 💖", text: ` Har lamha jo humne saath guzara hai, wo yaadein mere dil mein hamesha chamakti rehti hain ✨
                Chahe dukh ho ya sukh, ap hamesha mere saath rahein bina kisi shikayat ke 💞
                Apki har ek baat, har ek hasi, mujhe andar tak khushi deti hai 🌸
                Ap meri life ka wo hissa hain jisko mn kabhi khona nahi chahta💗
                Meri dua hai ke Allah apko har us khushi se nawazay jo ap chahti hain 🤲
                APK har din khushiyon se bhara ho, apka har sapna pura ho 💭🌈
                ap duniya ki sabse successful, sabse khush insan banay 💪💖
                Or hamesha yunhi pyari, caring or chota don bani rahein 😇🌷
                Aaj ka din sirf apka hai tw khud ko special feel karwa !! kyunki ap waqai special hai! 💐
                Love you from the bottom of my heart meri nanni si  jaan 😘
                Once again, Happy Birthday! 🎁🎈🎊 ` },
                { img: "image-1.jpeg", title: "My Promise ❤️", text: `I want to tell you something 🥺👉🏻👈🏻 I love you so much and I’ll always be with you. Whatever you say I’ll do it and I’ll never let you feel bad. You are my first priority and besides you, no one else exists for me 😭❤️ My day starts with you and ends with you. I promise I’ll always keep you happy and keep making efforts for you because I love you so much 🥺❤️ They say the day starts with you, the evening comes with you, and everything is about you  that’s exactly how it is for me 😭 You are my LOML (Love of My Life) 😭❤️👉🏻👈🏻` }
              ].map((card, idx) => (
                <div className={`row card-custom align-items-center mb-5 g-4 py-4 px-3 mx-1`} key={idx} style={{background: 'var(--glass)', borderRadius: '30px', border: '1px solid white'}}>
                  {/* Image Div */}
                  <div className={`col-12 col-md-5 ${idx % 2 !== 0 ? 'order-md-2' : ''} text-center`}>
                    <img src={`/images/${card.img}`} alt={card.title} className="img-fluid rounded-4 shadow-sm" style={{maxHeight: '400px', objectFit: 'cover', width: '100%'}} />
                  </div>
                  {/* Text Div */}
                  <div className={`col-12 col-md-7 ${idx % 2 !== 0 ? 'order-md-1' : ''}`}>
                    <h2 className="card-title" style={{fontFamily: 'Dancing Script', color: 'var(--primary)', fontSize: '2.2rem'}}>{card.title}</h2>
                    <p className="card-text mt-3" style={{fontSize: '1.05rem', lineHeight: '1.6'}}>{card.text}</p>
                  </div>
                </div>
              ))}
            </section>

            <section id="reply" className="container py-5 text-center">
              <div className="card-custom py-5 px-4 mx-auto shadow-sm" style={{maxWidth: '700px', background: 'var(--glass)', borderRadius: '30px', border: '1px solid white'}}>
                <h2 className="mb-4" style={{fontFamily: 'Dancing Script', color: 'var(--primary)'}}>Kuch Kehna Chahti App? 💌</h2>
                <textarea 
                  className="form-control mb-3 shadow-none" 
                  style={{borderRadius: '20px', border: '2px solid var(--secondary)', minHeight: '120px'}}
                  value={replyMsg} 
                  onChange={(e) => setReplyMsg(e.target.value)} 
                  placeholder="Jo dil mein hai boldo koi nahe parh skta apka yhn msg..." 
                />
                <button className="whatsapp-btn border-0 py-2 px-5" onClick={sendToWhatsApp}>Send please! 🤌🏻</button>
              </div>
            </section>

            <footer className="fancy-footer py-5 text-center mt-5">
                <div className="footer-line mx-auto mb-3" style={{width: '60px', height: '2px', background: 'var(--primary)'}}></div>
                <p className="footer-label mb-1">Always & Forever</p>
                <p className="footer-name-new">I Love Youh Areesha 🥹🫶🏻❤️</p>
                <div className="footer-line mx-auto mt-3" style={{width: '60px', height: '2px', background: 'var(--primary)'}}></div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;