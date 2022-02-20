import game from "./gameState";
import initButtons from "./button";
import { TICK_RATE } from "./constants";
import gameState, { handleUserAction } from "./gameState";

const init = async () => {
    console.log("Starting game");
    initButtons(handleUserAction);

    let nextTimeToTick = Date.now();
    const nextAnimationFrame = () => {
        const now = Date.now();
        if (nextTimeToTick <= now) {
            game.tick();
            nextTimeToTick = now + TICK_RATE;
        }
        requestAnimationFrame(nextAnimationFrame);
    };
    nextAnimationFrame();
};

init();
