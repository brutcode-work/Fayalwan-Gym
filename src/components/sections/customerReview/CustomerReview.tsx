"use client";

import { useRef, SyntheticEvent } from "react";
import "./CustomerReview.css";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import gsap from "gsap";

const fallbackAvatars = [
  "/assets/avatar_1.png",
  "/assets/avatar_2.png",
  "/assets/avatar_3.png",
  "/assets/avatar_4.png",
];

const REVIEWS = [
  {
    id: 1,
    name: "Jessy Joseph",
    role: "Local Guide",
    rating: 5,
    review: "The gym provides a range of exercise machines and free weights, making it a well-equipped facility. The staff is friendly and knowledgeable, always ready to offer assistance whenever required. They keep the place clean, creating a motivating atmosphere. It's definitely a great option for anyone looking for a quality workout experience.",
    date: "2 years ago",
    verified: true,
    avatar: "/reviews/jessy-joseph.webp",
  },
  {
    id: 2,
    name: "Anoop Ajayan",
    role: "Local Guide",
    rating: 5,
    review: "I recently visited Fayalwan Gym at Kazhakoottam and I was thoroughly impressed. The gym is impeccably clean, the equipment is well-maintained, and the staff members are friendly, professional, and always willing to help.",
    date: "2 years ago",
    verified: true,
    avatar: "/reviews/anoop-ajayan.webp",
  },
  {
    id: 3,
    name: "Ullas Narayanan",
    role: "Member",
    rating: 5,
    review: "Fayalwan Gym is a must-have fitness centre near Technopark Phase 3. The trainers are incredibly friendly and dedicated, providing excellent guidance throughout my fitness journey. The owner's passion for health and wellness is evident in every aspect of the gym.",
    date: "3 years ago",
    verified: true,
    avatar: "/reviews/ullas-narayanan.webp",
  },
  {
    id: 4,
    name: "Heleena Prakash",
    role: "Local Guide",
    rating: 5,
    review: "One of the best gyms and easily accessible from Technopark Phase 3. The gym is spacious and the trainers provide enough guidance and support. As a beginner, I am extremely happy with my experience.",
    date: "2 years ago",
    verified: true,
    avatar: "/reviews/heleena-prakash.webp",
  },
  {
    id: 5,
    name: "Muhammed Fazil KP",
    role: "Member",
    rating: 5,
    review: "The gym is clean, well-maintained, and provides a pleasant workout environment. The trainers are very friendly and always ready to assist whenever needed.",
    date: "2 years ago",
    verified: true,
    avatar: "/reviews/muhammed-fazil-kp.webp",
  },
  {
    id: 6,
    name: "Nitheesh Krishnan",
    role: "Local Guide",
    rating: 5,
    review: "Very nice air-conditioned facility with adequate machines, friendly trainers available throughout the day, easy access from Technopark Phase 1 & 3, and affordable pricing compared to other gyms nearby.",
    date: "3 years ago",
    verified: true,
    avatar: "/reviews/nitheesh-krishnan.webp",
  },
  {
    id: 7,
    name: "Gopika Remesan",
    role: "Member",
    rating: 5,
    review: "Wonderful gym with excellent facilities. The trainers are highly experienced, friendly, and always encouraging. I really enjoy working out here.",
    date: "3 years ago",
    verified: true,
    avatar: "/reviews/gopika-remesan.webp",
  },
  {
    id: 8,
    name: "Shad Anwar",
    role: "Local Guide",
    rating: 5,
    review: "Kudos to the trainers! They are very friendly, have a great attitude, and the gym itself is spacious and comfortable.",
    date: "2 years ago",
    verified: true,
    avatar: "/reviews/shad-anwar.webp",
  },
  {
    id: 9,
    name: "Akhil Raj R M",
    role: "Local Guide",
    rating: 5,
    review: "The perfect destination to achieve my New Year fitness resolution. A family-friendly gym with a welcoming atmosphere.",
    date: "3 years ago",
    verified: true,
    avatar: "/reviews/akhil-raj-rm.webp",
  },
  {
    id: 10,
    name: "Neil Johnson",
    role: "Local Guide",
    rating: 4,
    review: "It's a bit small, but the environment is great and comfortable for regular workouts.",
    date: "1 year ago",
    verified: true,
    avatar: "/reviews/neil-johnson.webp",
  },
  {
    id: 11,
    name: "Aravind S",
    role: "Member",
    rating: 5,
    review: "Good instructors and a well-maintained gym. A great place for fitness enthusiasts.",
    date: "2 years ago",
    verified: true,
    avatar: "/reviews/aravind-s.webp",
  },
  {
    id: 12,
    name: "Sanjana Muralidhar",
    role: "Member",
    rating: 5,
    review: "Best place to work out. Spacious gym with the best trainers who provide excellent support and motivation.",
    date: "3 years ago",
    verified: true,
    avatar: "/reviews/sanjana-muralidhar.webp",
  },
  {
    id: 13,
    name: "Muhammed Bilal",
    role: "Member",
    rating: 5,
    review: "Friendly trainers, nice ambiance, and an enjoyable place to achieve fitness goals.",
    date: "2 years ago",
    verified: true,
    avatar: "/reviews/muhammed-bilal.webp",
  },
  {
    id: 14,
    name: "Gowri Shankar Sh",
    role: "Member",
    rating: 5,
    review: "Superb gym with high-quality equipment and excellent facilities. Highly recommended.",
    date: "3 years ago",
    verified: true,
    avatar: "/reviews/gowri-shankar.webp",
  },
  {
    id: 15,
    name: "Joby Jacob",
    role: "Local Guide",
    rating: 5,
    review: "Excellent trainers and a hygienic workout space. The gym is clean, professional, and perfect for daily fitness routines.",
    date: "3 years ago",
    verified: true,
    avatar: "/reviews/joby-jacob.webp",
  },
];

export default function CustomerReview() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "next" | "prev") => {
    if (sliderRef.current) {
      const cardElement = sliderRef.current.querySelector<HTMLElement>(".cr-card");
      if (!cardElement) return;

      const cardWidth = cardElement.offsetWidth;
      const gap = 28;
      const scrollAmount =
        direction === "next" ? cardWidth + gap : -(cardWidth + gap);

      gsap.to(sliderRef.current, {
        scrollLeft: sliderRef.current.scrollLeft + scrollAmount,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="customer-reviews" id="reviews">
      <div className="cr-header-row">
        <div className="cr-header-left">
          <h2 className="cr-title">Their Experience, Your Confidence</h2>
          <p className="cr-subheading">
            Fayalwan Gym made our body transformations effortless, sleek, and
            highly rewarding.
          </p>

          <div className="cr-rating-summary">
            <div className="cr-avatar-stack">
              <img src="/assets/avatar_1.png" alt="User 1" className="cr-stack-avatar" />
              <img src="/assets/avatar_2.png" alt="User 2" className="cr-stack-avatar" />
              <img src="/assets/avatar_3.png" alt="User 3" className="cr-stack-avatar" />
              <img src="/assets/avatar_4.png" alt="User 4" className="cr-stack-avatar" />
            </div>

            <div className="cr-rating-stars-wrapper">
              <div className="cr-rating-row" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div className="cr-header-stars">
                  <Star className="cr-star-icon" />
                  <Star className="cr-star-icon" />
                  <Star className="cr-star-icon" />
                  <Star className="cr-star-icon" />
                  <Star className="cr-star-icon" />
                </div>
                <span className="cr-rating-val">4.8</span>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", marginLeft: "0.5rem", padding: "2px 6px", borderRadius: "100px", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.1)", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" style={{ width: "12px", height: "12px", display: "block" }}>
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span style={{ fontSize: "9px", color: "#8c9c90", fontWeight: "600", fontFamily: "sans-serif" }}>Verified</span>
                </div>
              </div>
              <span className="cr-rating-label">
                From 5,000+ members in 3 months
              </span>
            </div>
          </div>
        </div>

        <div className="cr-header-right">
          <button
            className="cr-nav-btn prev"
            onClick={() => scrollSlider("prev")}
            aria-label="Scroll reviews left"
          >
            <ArrowLeft className="cr-btn-arrow" />
          </button>
          <button
            className="cr-nav-btn next"
            onClick={() => scrollSlider("next")}
            aria-label="Scroll reviews right"
          >
            <ArrowRight className="cr-btn-arrow" />
          </button>
        </div>
      </div>

      <div className="cr-slider-container" ref={sliderRef}>
        <div className="cr-slider-track">
          {REVIEWS.map((review) => (
            <div key={review.id} className="cr-card">
              <div>
                <div className="cr-card-quote">
                  <svg className="cr-quote-svg" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="cr-card-text">"{review.review}"</p>
              </div>

              <div>
                <div className="cr-card-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="cr-card-star" />
                  ))}
                </div>

                <div className="cr-card-profile">
                  <img
                    src={review.avatar}
                    onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                      const img = e.currentTarget;
                      img.onerror = null;
                      img.src = fallbackAvatars[(review.id - 1) % fallbackAvatars.length];
                    }}
                    alt={review.name}
                    className="cr-profile-avatar"
                  />
                  <div className="cr-profile-info">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <span className="cr-profile-name">{review.name}</span>
                      {review.verified && (
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", flexShrink: 0 }}>
                          <svg viewBox="0 0 24 24" style={{ width: "13px", height: "13px", display: "block" }}>
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                          </svg>
                          <span 
                            style={{ 
                              display: "inline-flex", 
                              alignItems: "center", 
                              justifyContent: "center", 
                              width: "12px", 
                              height: "12px", 
                              backgroundColor: "#4285F4", 
                              color: "#ffffff", 
                              borderRadius: "50%", 
                              fontSize: "8px", 
                              fontWeight: "900",
                              lineHeight: 1
                            }}
                            title="Google Verified Review"
                          >
                            ✓
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="cr-profile-company">{review.role} • {review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
