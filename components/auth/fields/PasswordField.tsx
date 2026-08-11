interface PasswordFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PasswordField({
  value,
  onChange,
}: PasswordFieldProps) {
  return (
    <div className="field">
      <label htmlFor="password">
        رمز عبور
      </label>

      <input
        id="password"
        type="password"
        autoComplete="current-password"
        value={value}
        placeholder="رمز عبور"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}