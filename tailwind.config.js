/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./{app,components}/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          body: "Roboto_400Regular",
          title: "Roboto_700Bold",
          alt: "Roboto_500Medium",
        },
      },
    },
  },
  plugins: [],
};
