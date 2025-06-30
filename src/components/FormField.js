function FormField({ label, type = "text", id, placeholder, value, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default FormField;
