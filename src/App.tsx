import Navbar from "./components/navbar";
import canopyImage from "./assets/images/canopy.webp";
import charlesImage from "./assets/images/charles.webp";
import marceloImage from "./assets/images/marcelo.webp";
import coliseumLogo from "./assets/images/coliseum-logo.webp";
import modelsImage from "./assets/images/coliseum5.webp";
import kids from "./assets/images/coliseum6.webp";
import individual from "./assets/images/coliseum3.webp";
import group from "./assets/images/coliseum4.webp";
import {
  RiBoxingFill,
  RiInstagramLine,
  RiWhatsappLine,
  RiMapPin2Line,
  RiCalendar2Line,
  RiFacebookBoxLine,
} from "react-icons/ri";

const COACHES = [
  {
    instagram: "canopy_box",
    image: canopyImage,
    name: "Antonio",
  },
  {
    instagram: "charles_coach_cpr",
    image: charlesImage,
    name: "Carlos",
  },
  {
    instagram: "riveri_89theredbull",
    image: marceloImage,
    name: "Marcelo",
  },
];

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

export default function App() {
  return (
    <main>
      <Navbar />
      {/* image */}
      <section
        id="coliseum"
        className={`h-screen w-full bg-[url(./assets/images/coliseum-logo.webp)] bg-repeat bg-center`}
      >
        <div className="flex h-screen w-full items-center justify-center bg-gray-700/80 text-white">
          <div>
            <h2 className="text-center font-bold text-5xl sm:text-8xl">
              Coliseum
            </h2>
            <p className="text-center text-xl sm:font-semibold sm:text-3xl">
              The best Boxing Club in Playa del Carmen
            </p>
          </div>
        </div>
      </section>
      {/* about */}
      <div
        id="boxing-club"
        className="flex items-center gap-1 flex-col-reverse bg-neutral-900 text-white sm:flex-row-reverse sm:justify-around sm:gap-5"
      >
        <div className="w-full md:w-1/3">
          <img
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
            href="https://www.instagram.com/explore/tags/thisiscoliseum/"
            className="mb-3 w-full text-center text-xl"
          >
            <p>#thisiscoliseum</p>
          </a>
        </div>
      </div>
      <section className="bg-slate-200 p-10">
        <div className="flex justify-center flex-wrap items-center gap-10">
          {/* card */}
          {INFOCARDS.map((info) => (
            <div className="rounded-xl w-full md:w-1/4 bg-white shadow-2xl flex flex-col justify-between">
              <div className="p-3 sm:p-5 h-28">
                <h5 className="text-md mb-3 font-bold sm:text-lg">
                  {info.title}
                </h5>
                <p className="text-sm">{info.text}</p>
              </div>
              <img
                src={info.image}
                alt="Coliseum Boxing Club"
                className="w-full h-72 md:h-80 rounded-b-xl object-cover object-top"
              />
            </div>
          ))}
        </div>
      </section>
      {/* coaches */}
      <section
        id="the-coaches"
        className="flex items-center gap-10 justify-around bg-neutral-900 p-10 px-14 text-white min-h-screen sm:gap-32 sm:p-20 flex-col md:flex-row flex-wrap"
      >
        {/* card */}
        <p className="font-bold text-center text-3xl sm:text-5xl lg:w-full">
          The Team
        </p>
        {COACHES.map((coach) => (
          <div className="flex flex-col items-center">
            <img
              src={coach.image}
              alt="Coliseum Boxing Club"
              className="mb-5 object-cover rounded-full h-[220px] w-[220px] lg:h-[300px] lg:w-[300px]"
            />
            <h5 className="mb-3 flex items-center justify-center gap-1 text-center text-xl">
              <RiBoxingFill />
              {coach.name}
            </h5>
            <p className="mb-3 text-center">
              <a
                href={`https://instagram.com/${coach.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
                @{coach.instagram}
              </a>
            </p>
            <p className="text-md mb-3 flex items-center justify-center gap-1 text-slate-500">
              Coach
            </p>
          </div>
        ))}
      </section>
      {/* RRSS */}
      <section
        id="contact"
        className="flex h-screen flex-col bg-slate-200 sm:flex-row sm:items-center"
      >
        <div className="w-full bg-slate-200 p-5 sm:w-1/3 sm:px-10 sm:py-20">
          <p className="mb-5 text-center text-3xl">¿Listo para entrenar?</p>
          <p className="text-md mb-5 sm:text-lg">
            No importa si eres principiante, sólo necesitas traer dos vendas #5,
            tus guantes, agua, toalla y muchas ganas!
          </p>
          <p className="text-md mb-5 flex gap-3 sm:items-center sm:text-sm">
            <RiCalendar2Line className="text-xl sm:text-2xl" />
            <span>Lunes a viernes 6am - 10pm. Sábado 9am - 1pm.</span>
          </p>

          <a
            href="https://goo.gl/maps/tsckhvYg5QKJornZA"
            target="_blank"
            className="text-md mb-5 flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiMapPin2Line className="text-xl sm:text-2xl" />
            <span className="underline">
              Av. Universidades y Calle Langosta, Col. Arrecifes.
            </span>
          </a>

          <a
            href="https://wa.me/529841797400"
            target="_blank"
            className="text-md mb-5 flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiWhatsappLine className="text-xl sm:text-2xl" />
            <span className="underline"> Escríbenos para más información.</span>
          </a>
          <a
            href="https://www.instagram.com/coliseumboxingclub/"
            target="_blank"
            className="text-md mb-5 flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiInstagramLine className="text-xl sm:text-2xl" />
            <span className="underline"> Sigue nuestros entrenamientos!</span>
          </a>
        </div>
        <section
          className={` h-screen bg-[url(./assets/images/coliseum2.webp)] bg-cover bg-center bg-no-repeat sm:w-2/3`}
        ></section>
      </section>
      {/* comments */}
      {/* footer */}
      <section className="flex flex-col items-center justify-between gap-1 bg-neutral-900 p-5 text-white">
        <div className="mb-1 w-32">
          <img
            src={coliseumLogo}
            alt="coliseum"
            className="object-cover w-full rounded-full"
          />
        </div>
        <div className="mb-3 flex gap-5">
          <a
            href="https://www.instagram.com/coliseumboxingclub/"
            target="_blank"
            className="text-md flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiInstagramLine className="text-xl sm:text-2xl" />
          </a>
          <a
            href="https://wa.me/529841797400"
            target="_blank"
            className="text-md flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiWhatsappLine className="text-xl sm:text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/coliseumboxingclub/"
            target="_blank"
            className="text-md flex gap-3 sm:items-center sm:text-sm"
            rel="noreferrer"
          >
            <RiFacebookBoxLine className="text-xl sm:text-2xl" />
          </a>
        </div>
        <p className="text-center text-xs">
          © Coliseum Boxing Club Playa del Carmen {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
