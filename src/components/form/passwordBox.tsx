import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

interface PasswordBoxProps {
  value: string;
  required?: boolean;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordBox({ 
  value, 
  required = false, 
  placeholder = 'Password', 
  onChange 
}: PasswordBoxProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="formBox glass">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button 
        type="button" 
        onClick={togglePasswordVisibility}
        className="eye-toggle" // Add any styling class you need
      >
        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
      </button>
    </div>
  );
}

export default PasswordBox;