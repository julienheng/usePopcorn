type Props = {
  isOpen1: boolean;
  setIsOpen1: (isOpen1: boolean) => void;
};

export default function Button({ isOpen1, setIsOpen1 }: Props) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen1(!isOpen1)}>
      {isOpen1 ? "–" : "+"}
    </button>
  );
}
