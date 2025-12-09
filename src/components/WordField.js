import React, { useContext } from "react";
import { GameContext } from "./Main";
import Text from "./Text";

function WordField() {
  const { wordFieldRef } = useContext(GameContext);

  return (
    <div ref={wordFieldRef} className="wordfield">
      <Text />
    </div>
  );
}

export default React.memo(WordField);
