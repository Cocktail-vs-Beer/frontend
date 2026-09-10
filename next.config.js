/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      // Routes from the previous site that are now folded into the one-pager.
      { source: "/tickets", destination: "/#tickets", permanent: true },
      { source: "/thank-you", destination: "/confirmation", permanent: true },
    ];
  },
};
