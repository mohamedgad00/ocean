import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
  hasAOS?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  hasAOS = true,
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
      data-aos={hasAOS ? "fade-down" : ""}
      data-aos-delay={hasAOS ? "400" : ""}
    >
      {children}
    </button>
  );
};

export default Button;
