const Heading2 = ({ children, className }) => {
  return (
    <h2 className={`text-heading font-semibold text-xl ${className}`}>
      {children}
    </h2>
  );
};

export default Heading2;
