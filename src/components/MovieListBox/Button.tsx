type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen1: boolean) => void;
};

export default function Button({ isOpen, setIsOpen }: Props) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}
