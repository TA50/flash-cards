import { HTMLAttributes } from 'react';
import "./IconButton.css";

export interface IconButtonProps {
  label?: string;
  icon: JSX.Element;
  iconPosition?: "right" | "left" | "center";
  buttonProps?: HTMLAttributes<HTMLButtonElement>
}

export const IconButton = (props: IconButtonProps) => {
  let className = props.buttonProps?.className + " icon-button"
  let rearranagedElements;

  switch (props.iconPosition) {
    case "center":
      className += " center";
      rearranagedElements = <span className={"icon  " + (props.iconPosition || "center")}>
        {props.icon}
      </span>
      break;
    case "left":
      rearranagedElements = <>
        <span className={"icon  " + (props.iconPosition || "center")}>
          {props.icon}
        </span>
        <span className="label col-8">
          {props.label}
        </span>
      </>
      break;
    case "right":
      rearranagedElements = <>
        <span className="label col-8">
          {props.label}
        </span>
        <span className={"icon  " + (props.iconPosition || "center")}>
          {props.icon}
        </span>
      </>
      break;
    default:
      rearranagedElements = <>
        <span className="label col-8">
          {props.label}
        </span>
        <span className={"icon  " + (props.iconPosition || "center")}>
          {props.icon}
        </span>
      </>
  }
  return <button
    {...props.buttonProps}
    className={className}
  >
    {rearranagedElements}
  </button>
}