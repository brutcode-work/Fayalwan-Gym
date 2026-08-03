"use client";

interface FixedCardProps {
  img: string;
  idx: number;
  title: string;
  subtitle?: string;
}

export const FixedCard = ({ img, idx, title, subtitle }: FixedCardProps) => {
  return (
    <div className={`card card-${idx}`}>
      <img src={img} alt={title || `Card ${idx}`} />
      <div className="card-overlay">
        <span>0{idx + 1}</span>
        <h5>{title || "DISCIPLINE"}</h5>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};
