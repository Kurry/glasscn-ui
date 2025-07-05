module.exports = {
  extends: [
    // Your existing extends...
  ],
  plugins: [
    // Your existing plugins...
    "better-tailwindcss"
  ],
  rules: {
    // Your existing rules...
    "better-tailwindcss/classnames-order": "warn",
    "better-tailwindcss/no-contradicting-classname": "error"
  }
}