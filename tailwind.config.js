/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-primary-fixed-variant": "#3f465c",
        "tertiary-container": "#cba72f",
        "on-error": "#ffffff",
        "on-primary": "#ffffff",
        "inverse-primary": "#bec6e0",
        "on-primary-fixed": "#131b2e",
        "background": "#f7f9fb",
        "tertiary-fixed-dim": "#e9c349",
        "secondary-fixed-dim": "#bcc7de",
        "hover-gold": "#F1C40F",
        "on-primary-container": "#7c839b",
        "primary": "#000000",
        "tertiary-fixed": "#ffe088",
        "error-container": "#ffdad6",
        "inverse-surface": "#2d3133",
        "surface-tint": "#565e74",
        "on-secondary-fixed": "#111c2d",
        "on-secondary-container": "#586377",
        "on-tertiary-container": "#4e3d00",
        "surface-container-lowest": "#ffffff",
        "surface": "#f7f9fb",
        "secondary": "#545f73",
        "surface-bright": "#f7f9fb",
        "primary-fixed": "#dae2fd",
        "inverse-on-surface": "#eff1f3",
        "on-surface": "#191c1e",
        "on-tertiary": "#ffffff",
        "surface-variant": "#e0e3e5",
        "on-secondary": "#ffffff",
        "tertiary": "#735c00",
        "surface-dim": "#d8dadc",
        "on-background": "#191c1e",
        "surface-container-low": "#f2f4f6",
        "primary-container": "#131b2e",
        "on-surface-variant": "#45464d",
        "on-tertiary-fixed": "#241a00",
        "on-tertiary-fixed-variant": "#574500",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#3c475a",
        "surface-container": "#eceef0",
        "surface-white": "#FFFFFF",
        "primary-fixed-dim": "#bec6e0",
        "secondary-fixed": "#d8e3fb",
        "surface-container-high": "#e6e8ea",
        "outline": "#76777d",
        "secondary-container": "#d5e0f8",
        "outline-variant": "#c6c6cd",
        "surface-container-highest": "#e0e3e5",
        "on-error-container": "#93000a"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "gutter": "1.5rem",
        "section-padding-desktop": "5rem",
        "stack-lg": "2rem",
        "stack-md": "1rem",
        "container-max": "1280px",
        "stack-sm": "0.5rem",
        "section-padding-mobile": "2.5rem"
      },
      "fontFamily": {
        "label-caps": [
          "Inter"
        ],
        "body-md": [
          "Inter"
        ],
        "body-lg": [
          "Inter"
        ],
        "headline-lg": [
          "Playfair Display"
        ],
        "button": [
          "Inter"
        ],
        "headline-lg-mobile": [
          "Playfair Display"
        ],
        "headline-md": [
          "Playfair Display"
        ]
      },
      "fontSize": {
        "label-caps": [
          "14px",
          {
            "lineHeight": "1.2",
            "letterSpacing": "0.05em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "1.6",
            "fontWeight": "400"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "1.6",
            "fontWeight": "400"
          }
        ],
        "headline-lg": [
          "48px",
          {
            "lineHeight": "1.2",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ],
        "button": [
          "16px",
          {
            "lineHeight": "1",
            "fontWeight": "600"
          }
        ],
        "headline-lg-mobile": [
          "32px",
          {
            "lineHeight": "1.3",
            "fontWeight": "700"
          }
        ],
        "headline-md": [
          "32px",
          {
            "lineHeight": "1.4",
            "fontWeight": "600"
          }
        ]
      }
    },
  },
  plugins: [],
}
