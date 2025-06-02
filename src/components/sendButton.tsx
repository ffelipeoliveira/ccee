import { RiArrowRightSLine } from "react-icons/ri";

interface SendButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

function SendButton({ onClick, disabled = false }: SendButtonProps) {
  return (
    <button 
      className="sendButton" 
      onClick={onClick}
      disabled={disabled}
    >
      <RiArrowRightSLine/>
    </button>
  );
}

export default SendButton;