interface FooterSectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, className, children }: FooterSectionProps) => {
  return (
    <div className={className}>
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      {children}
    </div>
  );
};

export default FooterSection;
