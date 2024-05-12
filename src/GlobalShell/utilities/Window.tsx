"use client";
import { ReactNode, useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";

import "react-resizable/css/styles.css";

interface Y extends X {
  active: { active: boolean; setActive: (active: boolean) => void };
  title: string;
  content: ReactNode;
}

const Window: React.FC<Y> = ({ active, title, content }) => {
  const { setActive } = active;

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);

  const handleExpand = () => {
    setWidth(window.innerWidth * 0.99);
    setHeight(window.innerHeight * 0.9);
  };

  const handleClose = () => {
    setActive(false);
    setWidth(400);
    setHeight(400);
  };
  return (
    <div
      className={`${active.active ? "block" : "hidden"} z-[1] flex h-full w-screen items-center justify-center overflow-auto`}
    >
      <Draggable bounds="parent" handle=".title-bar">
        <div>
          <div className="title-bar relative top-6 z-10 m-auto w-[99.2%]">
            <div className="title-bar-text">{title}</div>
            <span className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" onClick={() => handleExpand()} />
              <button aria-label="Close" onClick={() => handleClose()} />
            </span>
          </div>
          <Resizable
            width={width}
            height={height}
            onResize={(
              e,
              { size }: { size: { width: number; height: number } },
            ) => {
              setWidth(size.width);
              setHeight(size.height);
            }}
            handleSize={[20, 20]}
            resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
            className={`${active.active ? "block" : "hidden"} ${active.active ? "z-1" : "-z-1"} email-window window`}
          >
            <div style={{ width, height }}>{content}</div>
          </Resizable>
          <div className="status-bar relative bottom-6 z-10 m-auto w-[99.2%]">
            <p className="status-bar-field">Press F1 for help</p>
            <p className="status-bar-field">Slide 1</p>
            <p className="status-bar-field">CPU Usage: 14%</p>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Window;
