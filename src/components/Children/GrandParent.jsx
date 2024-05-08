import { useState } from "react";
import { Parent } from "./Parent";
import { Son } from "./Son";
import { Uncle } from "./Uncle";

export const GrandParent = ({ children }) => {
  //   console.log("children grandparent", children);

  const [number, setNumber] = useState(1);

  const exampleTernary = () => {
    const num1 = 10;
    const total = num1 > 8 ? 900 : num1 < 3 ? 700 : 600;

    return total;
  };
  console.log(`exampleTernary`, exampleTernary());

  const handleClick = () => {
    setNumber(2);
  };

  const notifyAction = (name) => {
    console.log(name);
  };

  return (
    <div>
      <button onClick={handleClick}>Cambiar</button>
      <Parent>
        {number === 1 ? (
          <Son
            email="andres@gmail.com"
            socialmedias={["facebook", "twitter"]}
          />
        ) : number < 4 ? (
          <Uncle name={"juan"} age={40} onNotify={notifyAction} />
        ) : (
          ""
        )}
      </Parent>
    </div>
  );
};
