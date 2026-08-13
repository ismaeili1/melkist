interface ImagePlaceholderProps {
  height?: number;
}

export function ImagePlaceholder({
  height = 250,
}: ImagePlaceholderProps) {
  return (
    <div
      style={{
        width: "100%",
        height,
        background: "#f3f3f3",
        borderRadius: 8,
      }}
    />
  );
}