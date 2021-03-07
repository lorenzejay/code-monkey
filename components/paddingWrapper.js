const PaddingWrapper = ({ children, className }) => {
  return <div className={`sm:px-5 lg:px-8 xl:px-44  ${className}`}>{children}</div>;
};

export default PaddingWrapper;
