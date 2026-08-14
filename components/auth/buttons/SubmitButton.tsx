interface SubmitButtonProps {
  title: string;
  loadingTitle?: string;
  loading?: boolean;
}

export default function SubmitButton({
  title,
  loadingTitle,
  loading,
}: SubmitButtonProps) {
  return (
    <button type="submit" disabled={loading}>
      {loading ? (loadingTitle ?? title) : title}
    </button>
  );
}
