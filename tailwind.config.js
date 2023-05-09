import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".observable": {
          width: "300px",
          height: "300px",
          margin: "8rem auto",
          borderRadius: "1rem",
          transition: "opacity 0.15s ease-in-out",

          "&:nth-of-type(even)": {
            backgroundColor: theme("colors.indigo.400"),
          },
          "&:nth-of-type(odd)": {
            backgroundColor: theme("colors.emerald.400"),
          },
        },
      });
    }),
  ],
};
