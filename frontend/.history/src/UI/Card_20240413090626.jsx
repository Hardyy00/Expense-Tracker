// eslint-disable-next-line react/prop-types
const Card = ({ children, className = "" }) => {
  return (
    <div className={`p-8 shadow-2xl bg-[#152246] rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
