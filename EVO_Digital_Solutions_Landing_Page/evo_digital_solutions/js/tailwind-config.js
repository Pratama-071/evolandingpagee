/* ============================================================
   EVO DIGITAL SOLUTIONS - TAILWIND CONFIGURATION
   Konfigurasi warna, tipografi, spacing, dan tema asli.
   ============================================================ */
tailwind.config = {
   darkMode: "class",
   theme: {
     extend: {
       "colors": {
         "tertiary-fixed-dim": "#b5cacf",
         "surface-tint": "#006c4e",
         "inverse-primary": "#21e0a8",
         "on-tertiary-container": "#3f5458",
         "outline": "#6b7b72",
         "secondary-fixed": "#6dfbc5",
         "on-surface-variant": "#3b4a43",
         "surface-container": "#e9edff",
         "secondary-container": "#6af8c2",
         "primary-container": "#18dda5",
         "background": "#f9f9ff",
         "on-secondary": "#ffffff",
         "on-tertiary-fixed": "#091e22",
         "surface": "#f9f9ff",
         "secondary": "#006c4e",
         "on-secondary-fixed": "#002115",
         "on-surface": "#141b2b",
         "surface-container-lowest": "#ffffff",
         "tertiary": "#4d6266",
         "primary-fixed": "#51fec3",
         "tertiary-fixed": "d0e6eb",
         "on-tertiary": "#ffffff",
         "error": "#ba1a1a",
         "on-background": "#141b2b",
         "inverse-surface": "#293040",
         "on-secondary-fixed-variant": "#00513a",
         "outline-variant": "#bacac0",
         "surface-bright": "#f9f9ff",
         "primary": "#006c4e",
         "inverse-on-surface": "#edf0ff",
         "surface-dim": "#d3daef",
         "tertiary-container": "#b1c7cc",
         "primary-fixed-dim": "#21e0a8",
         "on-primary-fixed-variant": "#00513a",
         "on-primary-container": "#005c42",
         "on-primary": "#ffffff",
         "surface-container-low": "#f1f3ff",
         "surface-container-highest": "#dce2f7",
         "error-container": "#ffdad6",
         "surface-container-high": "#e1e8fd",
         "on-tertiary-fixed-variant": "#364a4e",
         "on-error-container": "#93000a",
         "on-error": "#ffffff",
         "secondary-fixed-dim": "#4cdeaa",
         "on-primary-fixed": "#002115",
         "on-secondary-container": "#007151",
         "surface-variant": "#dce2f7"
      },
       "borderRadius": {
         "DEFAULT": "0.25rem",
         "lg": "0.5rem",
         "xl": "0.75rem",
         "full": "9999px"
      },
       "spacing": {
         "space-md": "1rem",
         "gutter-lg": "2rem",
         "space-xs": "0.5rem",
         "space-3xl": "4rem",
         "space-lg": "1.5rem",
         "space-sm": "0.75rem",
         "space-xl": "2rem",
         "margin-desktop": "3rem",
         "space-2xl": "3rem",
         "margin-mobile": "1rem",
         "gutter": "1.5rem",
         "gutter-sm": "1rem",
         "space-2xs": "0.25rem",
         "margin": "2rem"
      },
       "fontFamily": {
         "headline-lg": ["Plus Jakarta Sans"],
         "caption": ["Inter"],
         "display-hero": ["Plus Jakarta Sans"],
         "body-sm": ["Inter"],
         "label-sm": ["Inter"],
         "headline-xl-mobile": ["Plus Jakarta Sans"],
         "title-md": ["Plus Jakarta Sans"],
         "headline-xl": ["Plus Jakarta Sans"],
         "label-md": ["Inter"],
         "display-hero-mobile": ["Plus Jakarta Sans"],
         "body-md": ["Inter"],
         "headline-md": ["Plus Jakarta Sans"],
         "headline-sm": ["Plus Jakarta Sans"],
         "body-lg": ["Inter"]
      },
       "fontSize": {
         "headline-lg": ["32px",
         {
           "lineHeight": "40px",
           "letterSpacing": "-0.02em",
           "fontWeight": "700"
        }],
         "caption": ["11px",
         {
           "lineHeight": "14px",
           "letterSpacing": "0.02em",
           "fontWeight": "500"
        }],
         "display-hero": ["56px",
         {
           "lineHeight": "64px",
           "letterSpacing": "-0.03em",
           "fontWeight": "800"
        }],
         "body-sm": ["13px",
         {
           "lineHeight": "20px",
           "letterSpacing": "0.005em",
           "fontWeight": "400"
        }],
         "label-sm": ["12px",
         {
           "lineHeight": "16px",
           "letterSpacing": "0.04em",
           "fontWeight": "600"
        }],
         "headline-xl-mobile": ["28px",
         {
           "lineHeight": "36px",
           "letterSpacing": "-0.02em",
           "fontWeight": "700"
        }],
         "title-md": ["16px",
         {
           "lineHeight": "24px",
           "letterSpacing": "0em",
           "fontWeight": "600"
        }],
         "headline-xl": ["40px",
         {
           "lineHeight": "48px",
           "letterSpacing": "-0.025em",
           "fontWeight": "700"
        }],
         "label-md": ["14px",
         {
           "lineHeight": "20px",
           "letterSpacing": "0.01em",
           "fontWeight": "500"
        }],
         "display-hero-mobile": ["36px",
         {
           "lineHeight": "44px",
           "letterSpacing": "-0.02em",
           "fontWeight": "800"
        }],
         "body-md": ["15px",
         {
           "lineHeight": "24px",
           "letterSpacing": "0em",
           "fontWeight": "400"
        }],
         "headline-md": ["24px",
         {
           "lineHeight": "32px",
           "letterSpacing": "-0.015em",
           "fontWeight": "600"
        }],
         "headline-sm": ["20px",
         {
           "lineHeight": "28px",
           "letterSpacing": "-0.01em",
           "fontWeight": "600"
        }],
         "body-lg": ["18px",
         {
           "lineHeight": "28px",
           "letterSpacing": "-0.005em",
           "fontWeight": "400"
        }]
      }
    }
  }
}
