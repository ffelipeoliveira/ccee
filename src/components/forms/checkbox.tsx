interface CheckBoxProps {
  name?: string;
  id: string;
  label: string;
  required?: boolean;
}

function CheckBox({ 
  name = "checkbox", 
  id,
  label = "", 
  required = false 
}: CheckBoxProps) {
  return (
    <div className="flex-auto">
      <div className="checkbox-wrapper">
        <input 
          className="checkbox" 
          type="checkbox" 
          name={name} 
          id={id} 
          required={required}
        />
        <label htmlFor={id} /> 
      </div>
      <p>{label}</p>
    </div>
  )
}

export default CheckBox