export const designTokens = {
  colors: {
    primary: "var(--color-primary)",
    primaryHover: "var(--color-primary-hover)",
    secondary: "var(--color-secondary)",

    background: "var(--color-background)",
    surface: "var(--color-surface)",

    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    textMuted: "var(--color-text-muted)",

    border: "var(--color-border)",

    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
  },

  spacing: {
    xs: "var(--space-1)",
    sm: "var(--space-2)",
    md: "var(--space-4)",
    lg: "var(--space-6)",
    xl: "var(--space-8)",
    "2xl": "var(--space-12)",
    "3xl": "var(--space-16)",
  },

  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    full: "var(--radius-full)",
  },

  shadows: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  },
} as const;

export type DesignTokens = typeof designTokens;