(function () {
  const links = [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "images/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "images/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "images/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "images/site.webmanifest"
    }
  ];

  links.forEach(attr => {
    const link = document.createElement("link");
    Object.entries(attr).forEach(([key, value]) => link.setAttribute(key, value));
    document.head.appendChild(link);
  });
})();