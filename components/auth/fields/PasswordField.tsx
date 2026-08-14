import { forwardRef } from "react";

interface PasswordFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  function PasswordField(
    { label, error, id = "password", autoComplete = "current-password", ...rest },
    ref,
  ) {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="password"
          autoComplete={autoComplete}
          ref={ref}
          {...rest}
        />
        {error && <p role="alert">{error}</p>}
      </div>
    );
  },
);

export default PasswordField;
