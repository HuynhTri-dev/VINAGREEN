/**
 * @name tokens.ts
 * @description Design tokens and constants for Bio-Organic Modernism design system
 */

export const DESIGN_TOKENS = {
  name: "Bio-Organic Modernism",
  colors: {
    surface: "#fbfaf2",
    surfaceDim: "#dbdad3",
    surfaceBright: "#fbfaf2",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f5f4ec",
    surfaceContainer: "#efeee6",
    surfaceContainerHigh: "#e9e8e1",
    surfaceContainerHighest: "#e3e3db",
    onSurface: "#1b1c17",
    onSurfaceVariant: "#414941",
    inverseSurface: "#30312c",
    inverseOnSurface: "#f2f1e9",
    outline: "#717970",
    outlineVariant: "#c1c9be",
    surfaceTint: "#3a6843",

    // Primary: Forest Green
    primary: "#154423",
    primaryForest: "#2e5c38",
    onPrimary: "#ffffff",
    primaryContainer: "#2e5c38",
    onPrimaryContainer: "#a0d3a5",
    inversePrimary: "#a0d3a5",

    // Secondary: Meadow Moss / Sprout Vitality
    secondary: "#446900",
    secondaryMoss: "#82ac42",
    onSecondary: "#ffffff",
    secondaryContainer: "#c1ee7c",
    onSecondaryContainer: "#486d01",

    // Tertiary: Warm Timber / Earth Bazan
    tertiary: "#5b3110",
    tertiaryTimber: "#7b4b28",
    onTertiary: "#ffffff",
    tertiaryContainer: "#764724",
    onTertiaryContainer: "#f9b88c",

    // Status / Feedback
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#93000a",

    // Fixed Accent Variations
    primaryFixed: "#bbefc0",
    primaryFixedDim: "#a0d3a5",
    onPrimaryFixed: "#00210a",
    onPrimaryFixedVariant: "#22502d",
    secondaryFixed: "#c3f17e",
    secondaryFixedDim: "#a8d565",
    onSecondaryFixed: "#121f00",
    onSecondaryFixedVariant: "#334f00",
    tertiaryFixed: "#ffdcc6",
    tertiaryFixedDim: "#fab88d",
    onTertiaryFixed: "#311400",
    onTertiaryFixedVariant: "#683c1a",

    // Background & Inks
    background: "#fbfaf2",
    onBackground: "#1b1c17",
    surfaceVariant: "#e3e3db",
    deepInk: "#152418",
  },
  typography: {
    fonts: {
      display: "var(--font-epilogue), system-ui, sans-serif",
      body: "var(--font-plus-jakarta), system-ui, sans-serif",
    },
    scale: {
      headlineXl: {
        fontSize: "3.5rem",
        lineHeight: "4.25rem",
        fontWeight: "700",
        letterSpacing: "-0.025em",
        mobileFontSize: "2.25rem",
        mobileLineHeight: "2.75rem",
      },
      headlineLg: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        fontWeight: "700",
        letterSpacing: "-0.02em",
        mobileFontSize: "1.75rem",
        mobileLineHeight: "2.25rem",
      },
      headlineMd: {
        fontSize: "1.75rem",
        lineHeight: "2.25rem",
        fontWeight: "600",
        letterSpacing: "-0.015em",
      },
      headlineSm: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: "600",
        letterSpacing: "-0.01em",
      },
      bodyLg: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "400",
      },
      bodyMd: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: "400",
      },
      bodySm: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
      },
      labelLg: {
        fontSize: "0.9375rem",
        lineHeight: "1.25rem",
        fontWeight: "600",
        letterSpacing: "0.01em",
      },
      labelMd: {
        fontSize: "0.8125rem",
        lineHeight: "1.125rem",
        fontWeight: "600",
        letterSpacing: "0.015em",
      },
      labelSm: {
        fontSize: "0.6875rem",
        lineHeight: "1rem",
        fontWeight: "700",
        letterSpacing: "0.04em",
      },
    },
  },
  rounded: {
    sm: "0.5rem",
    default: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    full: "9999px",
  },
  spacing: {
    space2xs: "0.25rem",
    spaceXs: "0.5rem",
    spaceSm: "0.75rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    space3xl: "4rem",
    space4xl: "6rem",
    gutterDesktop: "2rem",
    gutterMobile: "1rem",
    containerMax: "76rem",
  },
  shadows: {
    organicFloating:
      "0 16px 36px -8px rgba(46, 92, 56, 0.12), 0 4px 12px rgba(123, 75, 40, 0.05)",
    organicHover: "0 20px 40px -10px rgba(46, 92, 56, 0.18)",
    organicSubtle: "0 4px 20px -2px rgba(46, 92, 56, 0.06)",
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
