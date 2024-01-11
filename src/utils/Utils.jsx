const Container = ({ children }) => {
  return <div className="max-w-[1350px] mx-auto px-4">{children}</div>;
};

const ButtonMain = ({ text, icon, click, type }) => {
  return (
    <button type={type ? type : "button"} onClick={click} className="bg-[#ff9b24] hover:bg-[#00bbae] transition text-white  py-2 px-6 rounded-full text-[18px]">
      {icon} {text}
    </button>
  );
};

export { Container, ButtonMain };