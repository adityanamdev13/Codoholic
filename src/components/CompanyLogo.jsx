import { LuCheckCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const CompanyLogo = ({logo}) => {
   const navigate = useNavigate();
  return (
    <div className=" flex gap-1 items-center cursor-pointer" onClick={()=>navigate("/")}>
      <img
        src={`./src/assets/${logo ?"white_logo.webp":"black_logo.webp"}`}
        alt="Company Logo"
        className="h-20"
      />
      <div>
        <h1 className="text-4xl font-bold">
          <span className="text-[#E06C0E]">Co</span>doh
          <span className="relative">
            <LuCheckCheck strokeWidth={2} size={18} color="#2F80ED" className="absolute top-1 left-[3px]" />o
          </span>
          lic
        </h1>
        <p
          className='relative text-[10px] font-semibold pl-1 text-gray-600
             before:content-["“"] after:content-["”"]
             before:mr-[2px] after:ml-[2px] '
        >
          Let’s Programme Your Future
        </p>
      </div>
    </div>
  );
};

export default CompanyLogo;
