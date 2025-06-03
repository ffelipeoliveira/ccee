interface CheckBoxProps {
  name?: string;
  id: string;
  label: string | React.ReactNode; // Changed to accept React nodes
  required?: boolean;
}

function CheckBox({ 
  name = "checkbox", 
  id,
  label = "", 
  required = false 
}: CheckBoxProps) {
  return (
    <div className="flex-auto checkbox-wrapper">
        <input 
          className="checkbox" 
          type="checkbox" 
          name={name} 
          id={id} 
          required={required}
        />
      <p className="checkbox-label">{label}</p>
    </div>
  )
}

export default CheckBox;