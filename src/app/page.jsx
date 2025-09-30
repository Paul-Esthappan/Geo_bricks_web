"use client";

export default function Home() {
  // Generic conversion tracker with label
  const trackConversion = (sendToId, label) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: sendToId,
        event_label: label,
      });
    }
  };

  // Track "Get Directions" conversion
  const handleDirectionsClick = () => {
    trackConversion(
      "AW-17576087140/m-7gCKvaqqMbEOSc97xB",
      "Get Directions Click"
    );
  };

  // Track "Contact" conversion (phone / WhatsApp)
  const handleContactClick = (label) => {
    trackConversion("AW-17576087140/7AnSCKjaqqMbEOSc97xB", label);
  };

  const images = [
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nryEs76g6ZYE61ejpCbT_pH4RLaKwjevewEkyIG9-69e3xV3Gfr8zesmEvYYg_V3Ja2xaxNRys08c27BYgzDhLhHusJ_CD6gTrx02fiT3G5R07qxNIG84ASHRQYgISOy0PICAJtNw=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqiFJk_cfOUkPpZ9rfPuQLmKPfFxMgKU6igrs-jikb4b8SdcfkW7rZi-OOisY8uwG33s_kfyF8dK6PJV8jwsVBnV4XTVLXPFeVdXODiNjEg7GB0x7CchnWyYF9BofRdcc79_lXF=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMrTJxuI4mkA2pofYOCuYojGa5KCnADGAph-Vii=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipOdndkXlqTDWQ1_PP5QdT_954Sb7WKbriiSRDRm=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipPkwKBSWmpB0RJ3Ojoym9je0aYA9PZ7h-fDgd-v=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipNjjbXopvAdbELCuphqSe6PvKO7XF-R04jsjFT0=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipNXJfP6Mb3lmIgnYpJvz3BRuGkuyKm-rKBiwUF2=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipORIzc4Z_H9jFcMpcPoe_czORqV2mz4kUrc3pfF=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipOscKt-s2WnQR2Hp8ewhA7M3IsQ-f_xsgRa3dPf=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipN5CoWfuknrlwF4LF14c3h6y4F-9O1lEHTXXjMD=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMS5GiuPhBEYetdblP1CUeczs9aSlLFqjyL0ZF3=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipNDAnIyAaBcOrBYsrqCj-sITwjcP5cl4qF_vqgb=s1360-w1360-h1020-rw",
  ];

  const images2 = [
    "https://lh3.googleusercontent.com/p/AF1QipPRue3WyxjHhCWCiE4vreKiF5PgtTDGOW6sALiv=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqHAbUa7hGpyGGInXiHLp7ygI-tVLcBYCWxKO0wHqIzYLvJKiENAK2zedjcDEU0umc46Lc_wTRkHds1GG9MvFEASiwpYAKFgZxXtjWzrJQLbctoN6S46klpj_QH9vSvb2yMsJAr=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipPBkbJBGEUp56dJ7rFxzEYzqR5674vT6DS-2PHp=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMttFDy4vYU_ynUgSPKgG1FSNxnHhQ0NAZGyVBg=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipNwEXsAjItSErV7S8J7gmjKn_BzLQhas_VLLW3m=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqxVZiZ4MnhSR9FqyBxd14a0buvyfpr6gdBJblAMWdPdwLOXMc03_Y2CNbRXhLUnMFgC-mL33FK2HVcJp8_0TROvdwKADDRUIvtU3ys05O32leJIMl19rpr2aGV6lSdUPAQi41i=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFT4kdz7ISt7MY5TImBa7k1meOCelRXZ0heNYGU86bBa39mbD8pz8RJ26uT4LhJSqlkUKyXBKgm1nnEyEjJubllxmWs9-NJVcCW8vTPD-rZEC1pLopEllvcGLuT0aB2oYoIDVGCA=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrBn4OvVX7YxKgGyhw0UzCjrL2SMGBWmO0zk-_hhw70TCviABIFb2qRe3sraNymZexXA98l_5zOwdg8Lv8Lv3BO9FkfoVYgcN6TLCmUkxLY0tTAu1029jlI-P5QoYhl-wHzlAey2A=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPrvgUKcyyuyG2tYHVodViWTS8pF5q1NDAfn7sC28UbS2Qxa4t21o7EO78Jq2oLa0w5EjKB2B9BEvRTJ845UELY2cUvLm-xuHxYhywdJIMq40gIZkZszA49bb7EieDZA5W1xE=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipN9cvBL2QUoqdQtzdBe0AZGPRjj1rSru0TdIekr=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipNyHTKqrNVv-VLV4AQzV6WdNLQaPTZg_lAkWIgx=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipNi-1umjcwianhh4eOOzjKr9ieXrPVCyg1PO7vo=s1360-w1360-h1020-rw",
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 bg-gray-50">
      {/* Logo + Heading */}
      <div className="flex items-center gap-4 mb-6 flex-col justify-center">
        <img
          src="/logo.jpg"
          alt="Geo Bricks Logo"
          className="w-20 h-20 object-cover rounded-full shadow-md"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-green-700">
            GEO PRODUCTS
          </h1>
          <h2 className="text-1xl md:text-2xl text-green-900 font-bold">
            STEEL WINDOWS &amp; DOORS
          </h2>
          <h2 className="text-1xl md:text-2xl text-green-900 font-bold">
            CONCRETE INTERLOCKING BRICKS
          </h2>
        </div>
      </div>

      {/* About Us */}
      <section className="max-w-2xl text-center mb-12">
        <p className="text-lg text-gray-700 mb-3 font-bold italic">
          "Geo Products is a trusted concrete interlocking brick manufacturing
          and Steel Door and windows company with more than 5 years of
          experience in the industry."
        </p>
        <p className="text-lg text-gray-700">
          "We are dedicated to providing high-quality, durable, and eco-friendly
          interlocking bricks that make construction easier and cost-effective."
        </p>
      </section>

      {/* Gallery */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 pt-5">
          {images2.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl w-full mb-16">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {[
            {
              title: "Consulting",
              desc: "Expert advice for your building and construction needs.",
            },
            {
              title: "Supervision",
              desc: "Professional supervision to ensure quality and efficiency in every project.",
            },
            {
              title: "Manufacturing",
              desc: "Reliable supply of top-grade interlocking concrete bricks, Windows and Doors.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition hover:scale-105"
            >
              <h3 className="font-semibold text-xl mb-3 text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-2">
          📞 Call / WhatsApp:{" "}
          <a
            href="tel:+919400417316"
            className="text-green-700 font-medium hover:underline"
            onClick={() => handleContactClick("Phone Click - 9400417316")}
          >
            +91 9400417316
          </a>{" "}
          |{" "}
          <a
            href="tel:+918129777667"
            className="text-green-700 font-medium hover:underline"
            onClick={() => handleContactClick("Phone Click - 8129777667")}
          >
            +91 8129777667
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          📍 Address: VIII/97A Mookkannoor, Ernakulam, Kerala – 683577
        </p>
        <p className="text-lg text-gray-700">
          🗺️ Map Location:{" "}
          <a
            href="https://share.google/7F6uBlFYbJqvoTT0M"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDirectionsClick}
            className="text-green-700 font-medium hover:underline"
          >
            View on Google Maps
          </a>
        </p>
      </section>

      {/* Social Media Section */}
      <section className="max-w-4xl w-full text-center mb-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Follow Us</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              href: "https://www.instagram.com/geo_steel_windows_and_doors",
              label: "Geo Steel Windows & Doors",
              icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
            },
            {
              href: "https://www.instagram.com/geo_bricks_products",
              label: "Geo Concrete Interlocking Bricks",
              icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
            },
            {
              href: "https://www.facebook.com/share/19u2A2MKKm/",
              label: "Geo Bricks",
              icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
            },
            {
              href: "https://www.facebook.com/share/19u2A2MKKm/",
              label: "Geo Steel Windows & Doors",
              icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
            },
          ].map((sm, idx) => (
            <a
              key={idx}
              href={sm.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition w-72 justify-center"
            >
              <img
                src={sm.icon}
                alt={sm.label}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium text-gray-700">{sm.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919400417316"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleContactClick("WhatsApp Chat")}
        className="fixed right-5 bottom-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition transform hover:scale-110"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        <p className="ml-2">Chat for quote</p>
      </a>
    </main>
  );
}
