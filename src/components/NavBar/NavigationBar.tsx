type Props = {
  children: React.ReactNode;
};

export default function NavigationBar({ children }: Props) {
  return <nav className="nav-bar">{children}</nav>;
}
