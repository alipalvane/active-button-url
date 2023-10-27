import { ReactNode } from "react";

type ButtonProps = {
  label: string;
  classes?:string
};
const Button = ({ label,classes }: ButtonProps) => {
  return <button className={classes}>{label}</button>;
};


type ButtonIconProps = ButtonProps & {
  icon: ReactNode;
};
Button.Icon = ({ icon, label }: ButtonIconProps) => {
  return (
    <button>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
