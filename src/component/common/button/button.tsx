import React from "react";
import { Button, ButtonProps } from "@heroui/react";
import { ClassValue } from "tailwind-variants";
import { FaSpinner } from "react-icons/fa";
import clsx from "clsx";

interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  loading?: boolean;
  iconClassName?: ClassValue;
  buttonClassName?: ClassValue;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      children,
      icon,
      loading = false,
      buttonClassName = "",
      iconClassName = "",
      onClick,
      disabled,
      color = "primary",
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        disabled={disabled || loading}
        color={color}
        className={clsx(
          "flex w-full items-center justify-center gap-2 rounded-3xl border border-primary bg-primary px-4 py-2 font-normal text-white outline-none", // Default styles
          className
        )}
        {...rest}
      >
        {icon ? <span className={` ${iconClassName}`}>{icon}</span> : null}
        {children}
        {loading ? (
          <FaSpinner className={`animate-spin ${iconClassName}`} />
        ) : null}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
