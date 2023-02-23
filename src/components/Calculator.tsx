import { FC, MouseEvent, useState } from "react";
import Button from "./Button";

interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = (): JSX.Element => {
  const [result, setResult] = useState<string>("");

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setResult(result.concat(e.currentTarget.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="btn-wrapper">
        <Button name="1" onClick={handleClick} />
        <Button name="2" onClick={handleClick} />
        <Button name="3" onClick={handleClick} />
        <Button name="+" onClick={handleClick} />
        <Button name="4" onClick={handleClick} />
        <Button name="5" onClick={handleClick} />
        <Button name="6" onClick={handleClick} />
        <Button name="-" onClick={handleClick} />
        <Button name="7" onClick={handleClick} />
        <Button name="8" onClick={handleClick} />
        <Button name="9" onClick={handleClick} />
        <Button name="*" onClick={handleClick} />
        <Button name="C" onClick={clear} />
        <Button name="0" onClick={handleClick} />
        <Button name="/" onClick={handleClick} />
        <Button name="=" onClick={calculate} />
      </div>
    </div>
  );
};

export default Calculator;
