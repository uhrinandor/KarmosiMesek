import { ReactComponent as ButtonSvg } from "../assets/components/Button.svg";
import "../styles/Button.scss";

export function Button({ children, onClick, className }) {
  return (
    <div onClick={onClick} className={`button ${className}`}>
      <ButtonSvg className="svg" />
      <p>{children}</p>
    </div>
  );
}
