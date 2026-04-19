import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Bryan Leonard Thompson (@bryanth0mpson)

I build apps, restore old Land Rovers, and take photographs. Based in Glasgow, Scotland.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@bryanth0mpson](https://twitter.com/bryanth0mpson)
- GitHub: [@bryanleonardthompson](https://github.com/bryanleonardthompson)
- Email: bryan@bryanleonardthompson.com

---

*This is the markdown-only version of bryanleonardthompson.com. Visit [bryanleonardthompson.com](https://bryanleonardthompson.com) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
