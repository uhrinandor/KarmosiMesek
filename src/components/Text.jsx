import "../styles/Text.scss";

export function BlockTitle({ children }) {
  return <p className="block-title">{children}</p>;
}

export function BreakText({ children }) {
  return <p className="break-text">{children}</p>;
}
