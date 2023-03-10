import modelsImage from "../assets/images/coliseum5.webp";
import kids from "../assets/images/coliseum6.webp";
import individual from "../assets/images/coliseum3.webp";
import group from "../assets/images/coliseum4.webp";

const INFOCARDS = [
  {
    title: "Clases Personalizadas",
    text: "Agenda con tu coach y entrena como un profesional!",
    image: individual,
  },
  {
    title: "Clases Grupales",
    text: "Lunes a viernes de 6am - 10pm y Sábado de 9am - 1pm.",
    image: group,
  },
  {
    title: "Clases para Niños",
    text: "Lunes, Miércoles y Viernes 4pm",
    image: kids,
  },
];

export default function About() {
  return (
    <div>
      <div
        id="boxing-club"
        className="flex items-center gap-1 flex-col-reverse bg-neutral-900 text-white sm:flex-row-reverse sm:justify-around sm:gap-5"
      >
        <div className="w-full md:w-1/3">
          <img
            loading="lazy"
            src={modelsImage}
            alt="Coliseum Boxing Club"
            className="object-cover h-80 object-top w-full md:h-auto"
          />
        </div>
        <div className="w-full md:w-2/3 h-80 md:h-auto flex justify-center  flex-col md:block">
          <h2 className="mb-5 text-center text-3xl sm:text-5xl">
            Coliseum Boxing Club
          </h2>
          <a
            aria-label="Instagram hashtag"
            href="https://www.instagram.com/explore/tags/thisiscoliseum/"
            className="mb-3 w-full text-center text-xl underline"
          >
            <p>#thisiscoliseum</p>
          </a>
        </div>
      </div>
      <section className="bg-slate-200 p-10 sm:px-0">
        <div className="flex justify-center flex-wrap items-center gap-5">
          {/* card */}
          {INFOCARDS.map((info) => (
            <div className="rounded-xl w-full lg:w-1/4 bg-white shadow-2xl flex flex-col sm:flex-row lg:flex-col justify-between h-98 lg:h-[600px]">
              <div className="p-3 sm:p-5 h-28 sm:w-72 md:w-full">
                <h5 className="text-md mb-3 font-bold md:text-lg lg:text-xl">
                  {info.title}
                </h5>
                <p className="text-sm md:text-md lg:text-lg">{info.text}</p>
              </div>
              <div className="w-full h-64 overflow-hidden lg:h-[400px]">
                <img
                  loading="lazy"
                  src={info.image}
                  alt={info.title}
                  className="w-full h-72 rounded-b-xl object-cover object-top scale-125 -translate-y-12 lg:h-[400px]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
