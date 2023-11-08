import { useState } from "react";

//COMPONENTS
import Button from "./MovieListBox/Button";

type Props = {
  children: React.ReactNode;
};

export default function Box({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
}
