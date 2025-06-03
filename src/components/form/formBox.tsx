interface FormBoxProps {
  value?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormBox({ 
  value, 
  required = false, 
  placeholder = 'E-mail', 
  className = "",
  onChange 
}: FormBoxProps) {
  return (
    <div className={"formBox glass " + className}>
      <input
        type="text"
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default FormBox;