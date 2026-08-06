import "./SectionHeader.css";
import HeaderLabel from "@/components/ui/HeaderLabel";

const SectionHeader = ({
  headTop,
  headBottom,
  description,
  sectionName,
  label,
  fontType = "sans",
}: {
  headTop: string;
  headBottom: string;
  description: string;
  sectionName: string;
  label: string;
  fontType?: "sans" | "mono";
}) => {
  return (
    <div className={`${sectionName}-section-header section-header`}>
      <HeaderLabel label={label} fontType={fontType} />
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

