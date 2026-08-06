


const SectionHeader = ({
  headTop,
  headBottom,
  description,
  sectionName,
}: {
  headTop: string;
  headBottom: string;
  description: string;
  sectionName: string;
}) => {
  return (
    <div className={`${sectionName}-section-header section-header`}>
      <h2>
        {headTop}. <span>{headBottom}</span>
      </h2>
      <p>{description}</p>
      <button>{headBottom}</button>
    </div>
  );
};

export default SectionHeader;
