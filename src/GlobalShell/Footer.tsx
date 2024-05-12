import button from "./btn.png";
import logo from "../icons/email.png";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutes + " " + ampm;
  return (
    <footer className={`window relative flex h-[3.5vh] justify-between`}>
      <div className="left flex">
        <button id="start" className="pr-0 font-bold">
          <Image src={button} className="h-[75%] w-auto" alt="" />
        </button>

        <button className="flex items-center pl-0">
          <Image src={logo} className="h-full w-auto" alt="" />
          Outlook Express
        </button>
      </div>

      <div className="status-bar h-full w-[5%]">
        <p className="status-bar-field">{strTime}</p>
      </div>
    </footer>
  );
};

export default Footer;
