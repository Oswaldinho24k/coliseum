import {
  RiInstagramLine,
  RiWhatsappLine,
  RiMapPin2Line,
  RiCalendar2Line,
} from "react-icons/ri";

import image from "../assets/images/coliseum2.webp";

export default function Info() {
  return (
    <section
      id="contact"
      className="flex md:h-screen flex-col bg-slate-200 sm:flex-row sm:items-center"
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
          aria-label="Gym location"
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
          aria-label="whatsapp contact"
          href="https://wa.me/529841797400"
          target="_blank"
          className="text-md mb-5 flex gap-3 sm:items-center sm:text-sm"
          rel="noreferrer"
        >
          <RiWhatsappLine className="text-xl sm:text-2xl" />
          <span className="underline"> Escríbenos para más información.</span>
        </a>
        <a
          aria-label="Instagram account"
          href="https://www.instagram.com/coliseumboxingclub/"
          target="_blank"
          className="text-md mb-5 flex gap-3 sm:items-center sm:text-sm"
          rel="noreferrer"
        >
          <RiInstagramLine className="text-xl sm:text-2xl" />
          <span className="underline"> Sigue nuestros entrenamientos!</span>
        </a>
      </div>
      <div className="sm:w-2/3 h-screen w-full">
        <img
          loading="lazy"
          src={image}
          alt="Boxing team training"
          className={`h-screen object-cover w-full`}
        />
      </div>
    </section>
  );
}
