import { forwardRef } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ label, error, id, ...rest }, ref) {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...rest} />
        {error && <p role="alert">{error}</p>}
      </div>
    );
  },
);

export default TextField;
