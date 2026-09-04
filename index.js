export default {
  async fetch(request, env, ctx) {
    return new Response("Hello! My site is connected to GitHub! 🎉", {
      headers: { "content-type": "text/plain" },
    });
  },
};
