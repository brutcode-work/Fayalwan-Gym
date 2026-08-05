"use client";
import "./GymServices.css";

export const programs = [
  {
    id: 1,
    title: "Weight Loss",
    description:
      "Scientifically planned workouts and nutrition guidance to help you burn fat, improve endurance, and build healthy habits that last.",
    img: "/images/programs/weight-loss.webp",
  },
  {
    id: 2,
    title: "Muscle Building",
    description:
      "Structured strength training focused on progressive overload, balanced nutrition, and consistent growth for every fitness level.",
    img: "/images/programs/muscle-building.webp",
  },
  {
    id: 3,
    title: "Powerlifting",
    description:
      "Master the squat, bench press, and deadlift with expert coaching designed to improve technique, strength, and competition performance.",
    img: "/images/programs/powerlifting.webp",
  },
  {
    id: 4,
    title: "Cross Training",
    description:
      "High-energy functional workouts that combine strength, agility, mobility, and endurance to improve overall athletic performance.",
    img: "/images/programs/cross-training.webp",
  },
  {
    id: 5,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals, fitness level, and lifestyle with continuous progress tracking and expert support.",
    img: "/images/programs/personal-training.webp",
  },
  {
    id: 6,
    title: "Women's Fitness",
    description:
      "Supportive fitness programs designed to build strength, confidence, flexibility, and long-term wellness in a comfortable environment.",
    img: "/images/programs/womens-fitness.webp",
  },
  {
    id: 7,
    title: "Cardio Conditioning",
    description:
      "Improve cardiovascular health, stamina, and calorie burn through engaging interval training and endurance-focused workouts.",
    img: "/images/programs/cardio-conditioning.webp",
  },
];

const GymServices = () => {
  return (
    <section className="gym-services-main">
      <div className="gym-services-header">
        <h2>Signature Programs</h2>
        <p>
          One hour. Day after day. That’s all it takes. <br />
          You bring the consistency. We bring the rest.
        </p>
      </div>
      <div className="gym-services-grid">
        {programs.map((program) => (
          <div key={program.title} className="gym-services-wrapper">
            <div className="gym-services-content">
              <h4>{program.title}</h4>
              <div className="gym-service-para">
                <p>{program.description}</p>
              </div>
              <div className="gym-services-img">
                <img src={program.img} alt={program.title} />
              </div>
            </div>
            <div className="gym-service-bg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GymServices;
