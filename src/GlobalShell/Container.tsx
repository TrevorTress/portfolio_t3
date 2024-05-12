import Image from "next/image";
import bg from "./bg.jpg";

const Container: React.FC<X> = ({ children }) => {
  return (
    <>
      <container className="flex h-[96.5vh] w-screen items-center justify-center">
        <Image
          src={bg}
          layout="fill"
          objectFit="cover"
          priority={true}
          alt="Background image"
        />
        {children}
      </container>
    </>
  );
};

export default Container;
