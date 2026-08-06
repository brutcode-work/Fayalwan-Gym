import "./SectionHeader.css";
const SectionHeader = ({
  headTop,
  headBottom,
  description,
  sectionName,
  label,
}: {
  headTop: string;
  headBottom: string;
  description: string;
  sectionName: string;
  label: string;
}) => {
  return (
    <div className={`${sectionName}-section-header section-header`}>
      <div className="section-header-label">
        <div className="label-dots">
          <div className="label-dot"></div>
          <div className="label-dot"></div>
        </div>
        <label className="label">{label}</label>
      </div>
      <div className="section-header-content">
        <h2>
          {headTop} <br /> <span>{headBottom}</span>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
