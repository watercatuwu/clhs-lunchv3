export default function (context) {
    const { req, res } = context;
    if (req.url === '/manifest.webmanifest') {
      res.setHeader('Content-Type', 'application/manifest+json');
    }
  }