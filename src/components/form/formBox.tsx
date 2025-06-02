interface FormBoxProps {
  value: string;
  required?: boolean;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormBox({ 
  value, 
  required = false, 
  placeholder = 'E-mail', 
  onChange 
}: FormBoxProps) {
  return (
    <div className="formBox glass">
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