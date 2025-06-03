import { RiArrowRightSLine } from "react-icons/ri";

interface SendButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

function SendButton({ onClick, disabled = false, className = "" }: SendButtonProps) {
  return (
    <button 
      className= {"sendButton " + className} 
      onClick={onClick}
      disabled={disabled}
    >
      <RiArrowRightSLine/>
    </button>
  );
}

export default SendButton;