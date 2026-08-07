import "./HeaderLabel.css";

interface HeaderLabelProps {
  label: string;
  fontType?: "sans" | "mono";
  className?: string;
}

const HeaderLabel = ({
  label,
  fontType = "sans",
  className = "",
}: HeaderLabelProps) => {
  return (
    <div className={`header-label font-${fontType} ${className}`.trim()}>
      <div className="label-dots">
        <div className="label-dot"></div>
        <div className="label-dot"></div>
      </div>
      <label className="label">{label}</label>
    </div>
  );
};

export default HeaderLabel;
