import Marquee from "react-fast-marquee";

export default function TechStack() {
  const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

  const allTech = [
    { name: "React", url: `${baseUrl}react/react-original.svg` },
    { name: "Next.js", url: `${baseUrl}nextjs/nextjs-original.svg` },
    { name: "Vue.js", url: `${baseUrl}vuejs/vuejs-original.svg` },
    { name: "Flutter", url: `${baseUrl}flutter/flutter-original.svg` },
    { name: "Node.js", url: `${baseUrl}nodejs/nodejs-original.svg` },
    { name: "Python", url: `${baseUrl}python/python-original.svg` },
    { name: "PostgreSQL", url: `${baseUrl}postgresql/postgresql-original.svg` },
    { name: "MongoDB", url: `${baseUrl}mongodb/mongodb-original.svg` },
    { name: "Firebase", url: `${baseUrl}firebase/firebase-plain.svg` },
    { name: "TensorFlow", url: `${baseUrl}tensorflow/tensorflow-original.svg` },
    { name: "PyTorch", url: `${baseUrl}pytorch/pytorch-original.svg` },
    { name: "Docker", url: `${baseUrl}docker/docker-original.svg` },
    { name: "Arduino", url: `${baseUrl}arduino/arduino-original.svg` },
    { name: "Raspberry Pi", url: `${baseUrl}raspberrypi/raspberrypi-original.svg` },
    { name: "Linux", url: `${baseUrl}linux/linux-original.svg` },
    { name: "Ubuntu", url: `${baseUrl}ubuntu/ubuntu-plain.svg` },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tech <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Stack</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Tools modern standar industri yang kami gunakan untuk performa maksimal.
        </p>
      </div>

      <Marquee
        autoFill
        speed={40}
        gradient={true}
        gradientColor="#ffffff" 
        gradientWidth={100}
        className="py-4 overflow-hidden! [&_.rfm-marquee]:items-center"
      >
        {allTech.map((item, index) => (
          <div
            key={index}
            className="group mx-3 flex items-center justify-center rounded-2xl border border-amber-200 bg-amber-50/50 px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100"
            style={{ minWidth: '100px', minHeight: '80px' }} 
          >
            <img
              src={item.url}
              alt={item.name}
              className="h-10 w-10 object-contain transition-all duration-300"
              style={{ filter: 'grayscale(100%) opacity(0.5)', transition: '0.3s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
