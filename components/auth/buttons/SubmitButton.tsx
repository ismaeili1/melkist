interface SubmitButtonProps {
  title: string;
  loading?: boolean;
}

export default function SubmitButton({
  title,
  loading,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
    >
      {loading ? "در حال ورود..." : title}
    </button>
  );
}