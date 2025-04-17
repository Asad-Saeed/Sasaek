import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css"; // Ensure styles are loaded

interface PhoneInputProps {
  className?: string;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = ({
  className,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full">
      <PhoneInput
        id={id}
        defaultCountry="US"
        value={value}
        onChange={onChange}
        style={phoneInputStylesContact} // Apply custom styles
        className={`w-full rounded-full border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
};

export default CustomPhoneInput;

export const phoneInputStylesContact: React.CSSProperties = {
  "--react-international-phone-border-radius": "6px", // Match other inputs
  "--react-international-phone-border-color": "transparent", // Remove inner border
  "--react-international-phone-background-color": "white", // Ensure background is white
  "--react-international-phone-text-color": "#000", // Match text color
  "--react-international-phone-font-size": "16px", // Adjust font size
  "--react-international-phone-selected-dropdown-item-background-color":
    "transparent",
  "--react-international-phone-height": "24px", // Match other inputs
};
