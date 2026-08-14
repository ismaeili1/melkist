import { forwardRef } from "react";

interface EmailFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>(
  function EmailField({ label, error, id = "email", ...rest }, ref) {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="email"
          autoComplete="email"
          placeholder="example@email.com"
          ref={ref}
          {...rest}
        />
        {error && <p role="alert">{error}</p>}
      </div>
    );
  },
);

export default EmailField;
