import { FC, MouseEvent } from "react";

interface Props {
  name: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({name, onClick}): JSX.Element => {
  return <button className="btn-calc" name={name} onClick={onClick}>{name}</button>
};

export default Button;