"use client";
import Window from "../../GlobalShell/utilities/Window";
import logo from "../../icons/email.png";
import { useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
// import { signal } from '@preact/signals-react';

const EmailMe = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Draggable bounds="parent" handle=".handle">
        <div
          className="absolute right-[5%] top-[5%] flex flex-col items-center font-bold"
          onDoubleClick={() => setActive(true)}
        >
          <Image
            src={logo}
            className="handle w-24"
            onDragStart={(event) => event.preventDefault()}
            alt="Email Me"
          />
          <p>Email Me</p>
        </div>
      </Draggable>
      <Window
        active={{ active, setActive }}
        title="Outlook Express"
        content={<></>}
      />
    </>
  );
};

export default EmailMe;

// href="mailto:trevor.tress@outlook.com"
