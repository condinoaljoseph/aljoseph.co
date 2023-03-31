const { fontFamily, boxShadow, fontSize } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "src/app/**/*.{js,jsx,ts,tsx}",
    "src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.pink.700"),
              boxShadow: "0 1px 0 0 currentColor",
              textDecoration: "none",
              "&:hover": {
                boxShadow: "none",
              },
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.900") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.900") },
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            "h1,h2,h3,h4": {
              color: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
            },
            a: {
              color: theme("colors.pink.300"),
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.200") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.200") },
              },
            },
            strong: { color: theme("colors.gray.200") },
          },
        },
      }),
    },
    fontFamily: {
      serif: ["var(--font-kaisei)", ...fontFamily.serif],
      mono: ["SFMono-Regular", ...fontFamily.mono],
    },
    fontSize: {
      ...fontSize,
      xxl: "1.675rem",
    },
    boxShadow: {
      ...boxShadow,
      link: "0 1px 0 0 currentColor",
      cm: "0 2px 15px 0 rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
  variants: {
    extend: {},
    typography: ["dark"],
  },
  important: true,
  plugins: [require("@tailwindcss/typography")],
};
