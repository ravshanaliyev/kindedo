const Container = ({ children }) => {
  return <div className="w-[1320px] mx-auto">{children}</div>;
};

const Button = ({ text, icon, click, type }) => {
  return (
    <button type={type ? type : "button"} onClick={click} className="bg-[#ff9b24] hover:bg-[#00bbae] transition text-white  py-2 px-6 rounded-full text-[18px]">
      {icon} {text}
    </button>
  );
};

export { Container, Button };