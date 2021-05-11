import React, {useEffect, useRef, useState } from "react";
import {
  PalmSmall1,
  BushSmall,
  PalmSmall3,
  KnightSmall,
  PawnSmall,
  PawanUpRightSmall,
  RunningQueen,
  Tree,
  RookSmall,
  RookUprightSmall,
} from "../Images/";

function QueenAnimations() {
const background1 = useRef(null);
const background2 = useRef(null);
const foreground1 = useRef(null);
const foreground2 = useRef(null);
const redQueen_alice_Sprite = useRef(null);

useEffect(() => {
  let sceneryFrames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];

  let sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
  };

  let sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
  };

  let background1 = document.getElementById("background1");
  let background2 = document.getElementById("background2");

  let background1Movement = background1.animate(
    sceneryFrames,
    sceneryTimingBackground
  );
  background1Movement.currentTime =
    background1Movement.effect.getTiming().duration / 2;

  let background2Movement = background2.animate(
    sceneryFrames,
    sceneryTimingBackground
  );

  let foreground1 = document.getElementById("foreground1");
  let foreground2 = document.getElementById("foreground2");

  let foreground1Movement = foreground1.animate(
    sceneryFrames,
    sceneryTimingForeground
  );
  foreground1Movement.currentTime =
    foreground1Movement.effect.getTiming().duration / 2;

  let foreground2Movement = foreground2.animate(
    sceneryFrames,
    sceneryTimingForeground
  );

  let spriteFrames = [
    { transform: "translateY(0)" },
    { transform: "translateY(-100%)" },
  ];

  let redQueen_alice_sprite = document.getElementById(
    "red-queen_and_alice_sprite"
  );

  let redQueen_alice = redQueen_alice_sprite.animate(spriteFrames, {
    easing: "steps(7, end)",
    direction: "reverse",
    duration: 600,
    playbackRate: 1,
    iterations: Infinity,
  });
  let sceneries = [
    foreground1Movement,
    foreground2Movement,
    background1Movement,
    background2Movement,
  ];

  let adjustBackgroundPlayback = function () {
    if (redQueen_alice.playbackRate < 0.8) {
      sceneries.forEach(function (anim) {
        anim.playbackRate = (redQueen_alice.playbackRate / 2) * -1;
      });
    } else if (redQueen_alice.playbackRate > 1.2) {
      sceneries.forEach(function (anim) {
        anim.playbackRate = redQueen_alice.playbackRate / 2;
      });
    } else {
      sceneries.forEach(function (anim) {
        anim.playbackRate = 0;
      });
    }
  };
  adjustBackgroundPlayback();

  setInterval(function () {
    if (redQueen_alice.playbackRate > 0.4) {
      redQueen_alice.playbackRate *= 0.9;
    }
    adjustBackgroundPlayback();
  }, 3000);

  let goFaster = function () {
    redQueen_alice.playbackRate *= 1.1;
    adjustBackgroundPlayback();
  };

  document.addEventListener("click", goFaster);
  document.addEventListener("touchstart", goFaster);
},[]) 
  return (
    <div className="Wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            id="red-queen_and_alice_sprite"
            src={RunningQueen}
            alt="RunningQueen"
            ref={redQueen_alice_Sprite}
          />
        </div>
      </div>

      <div className="scenery" id="foreground1" ref={foreground1}>
        <img id="palm3" src={PalmSmall3} alt="Palm" />
      </div>

      <div className="scenery" id="foreground2" ref={foreground2}>
        <img id="bush" src={BushSmall} alt="Bush" />
        <img id="w_rook_upright" src={RookUprightSmall} alt="RookUpright" />
      </div>

      <div className="scenery" id="background1" ref={background1}>
        <img id="r_pawn_upright" src={PawanUpRightSmall} alt="" />
        <img id="w_rook" src={RookSmall} alt="" />
        <img id="palm1" src={PalmSmall1} alt="" />
      </div>

      <div className="scenery" id="background2" ref={background2}>
        <img id="r_pawn" src={PawnSmall} alt="Pawn" />
        <img id="r_knight" src={KnightSmall} alt="Knight" />
        <img id="palm2" src={Tree} alt="Tree" />
      </div>
    </div>
  );
}

export default QueenAnimations;
