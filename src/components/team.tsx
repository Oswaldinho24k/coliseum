import { RiBoxingFill } from "react-icons/ri";
import canopyImage from "../assets/images/canopy.webp";
import charlesImage from "../assets/images/charles.webp";
import marceloImage from "../assets/images/marcelo.webp";

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

export default function Team() {
  return (
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
            loading="lazy"
            src={coach.image}
            alt="Coliseum Boxing Club"
            className="mb-5 object-cover rounded-full h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] object-center"
          />
          <h5 className="mb-3 flex items-center justify-center gap-1 text-center text-xl">
            <RiBoxingFill />
            {coach.name}
          </h5>
          <p className="mb-3 text-center">
            <a
              aria-label="Instagram coach account"
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
  );
}
