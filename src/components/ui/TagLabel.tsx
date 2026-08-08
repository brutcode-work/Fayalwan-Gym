import "./TagLabel.css";

interface TagLabelProps {
  label: string;
  fontType?: "sans" | "mono";
  variant?: "plain" | "boxed";
  className?: string;
  number?: string;
}

const TagLabel = ({
  label,
  fontType = "mono",
  variant = "plain",
  className = "",
  number,
}: TagLabelProps) => {
  return (
    <div
      className={`tag-label font-${fontType} variant-${variant} ${className}`.trim()}
    >
      {number ? (
        <span className="tag-label-number">{number}</span>
      ) : (
        <div className="tag-label-dots">
          <div className="tag-label-dot"></div>
          <div className="tag-label-dot"></div>
        </div>
      )}
      <span className="tag-label-text">{label}</span>
    </div>
  );
};

export default TagLabel;
