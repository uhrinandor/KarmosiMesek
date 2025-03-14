import "../styles/Section.scss";
import { ReactComponent as FoltUno } from "../assets/sections/FoltUno.svg";
import { ReactComponent as FoltDos } from "../assets/sections/FoltDos.svg";

export default function Section({ children, title, variant, id, className }) {
  return (
    <section id={id} className={`sec ${className}`}>
      <Title variant={variant}>{title}</Title>
      {children}
    </section>
  );
}

function Title({ children, variant }) {
  return (
    <div className={`${variant} title`}>
      {variant === "1" ? (
        <FoltUno className="folt" />
      ) : (
        <FoltDos className="folt" />
      )}
      <p>{children}</p>
    </div>
  );
}
