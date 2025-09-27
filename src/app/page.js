export const metadata = {
  title: "Geo Bricks - Concrete Interlocking Bricks",
  description:
    "Geo Bricks is a trusted concrete interlocking brick manufacturing company in Kerala.",
};

export default function Home() {
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
    <main className="min-h-screen flex flex-col items-center px-6 py-12">
      {/* Logo + Heading */}
      <div className="flex items-center gap-4 mb-6 flex-col">
        <img
          src="https://scontent.fcok14-1.fna.fbcdn.net/v/t39.30808-1/300583196_461743002631932_6494022114130504981_n.jpg?stp=c10.0.740.740a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=vVU7IlpvUpEQ7kNvwGkbBvY&_nc_oc=AdmDs369qnnpaAMJFaj6asLZSVqrlVlkkbbw3YMzt2BnpCMvPnxY9jie8Q4XM849_m4&_nc_zt=24&_nc_ht=scontent.fcok14-1.fna&_nc_gid=9No4LUUobhVLPkpTUdM1WA&oh=00_AfZfXSIY-1Bn775z2_Vvelv8p7edWPh_4C9pqRY-inQ5-w&oe=68DDA62F"
          alt="Geo Bricks Logo"
          className="w-16 h-16 object-cover rounded-full shadow-md"
        />
        <h1 className="text-6xl font-extrabold tracking-tight text-green-700">
          GEO PRODUCTS
        </h1>
       
<h2 className="text-2xl text-green-900 font-bold">STEEL WINDOWS & DOORS</h2>
        <h2 className="text-2xl text-green-900 font-bold">CONCRETE IINTERLOCKING BRICKS</h2>
       
      </div>

      {/* About Us */}
      <section className="max-w-2xl text-center mb-12">
        <p className="text-lg text-gray-700 mb-3 font-bold italic">
          "Geo Products is a trusted concrete interlocking brick manufacturing and Steel Door and windows
          company with more than 5 years of experience in the industry."
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
          >
            +91 9400417316
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
            className="text-green-700 font-medium hover:underline"
          >
            View on Google Maps
          </a>
        </p>
      </section>

       {/* Social Media Section */}
      <section className="max-w-4xl w-full text-center mb-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Follow Us
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Instagram Geo Steel */}
          <a
            href="https://www.instagram.com/geo_steel_windows_and_doors?igsh=dm9ndW4yMjU5NGV0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="Instagram"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700">
              Geo Steel Windows & Doors
            </span>
          </a>

          {/* Instagram Geo Bricks */}
          <a
            href="https://www.instagram.com/geo_bricks_products?igsh=MTV5YTFuY3ZrbjQ4OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="Instagram"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700">
              Geo Concrete Interlocking Bricks
            </span>
          </a>

          {/* Facebook Geo Bricks */}
          <a
            href="https://www.facebook.com/share/19u2A2MKKm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700">
              Geo Bricks
            </span>
          </a>

          {/* Facebook Geo Windows */}
          <a
            href="https://www.facebook.com/share/19u2A2MKKm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700">
              Geo Steel Windows & Doors
            </span>
          </a>
        </div>
      </section>

      {/* WhatsApp Floating Button */}

<a
        href="https://wa.me/919400417316"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16.88 14.68c-.3-.15-1.78-.87-2.05-.97s-.47-.15-.66.15-.76.97-.93 1.17-.34.22-.63.07c-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.48-1.74-1.65-2.04s-.02-.46.13-.61c.13-.13.3-.34.45-.51.15-.15.2-.26.3-.43.1-.15.05-.3-.02-.43-.07-.13-.66-1.59-.91-2.18-.24-.57-.49-.5-.66-.51h-.56c-.18 0-.46.05-.7.34s-.91.88-.91 2.15 1 2.5 1.14 2.68c.15.18 1.95 3 4.72 4.2 2.78 1.18 2.78.79 3.28.74.5-.05 1.55-.63 1.77-1.23.23-.59.23-1.09.16-1.2-.07-.1-.3-.15-.63-.3z" />
        </svg>
         <p>Chat for quote</p>
      </a>

    </main>
  );
}
