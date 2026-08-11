interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EmailField({
  value,
  onChange,
}: EmailFieldProps) {
  return (
    <div className="field">
      <label htmlFor="email">
        ایمیل
      </label>

      <input
        id="email"
        type="email"
        autoComplete="email"
        value={value}
        placeholder="example@email.com"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}