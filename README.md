# NextJS Server-Sent Event demo

This is a super simple SSE demo I put up just to get a little experience
with the protocol.

By clicking "Connect", the frontend will subscribe to an event stream that
rolls random numbers at an interval. There's a little confetti pop on each new roll as well, which is — of course — scaled to the number rolled.

## It's just NextJS!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
bun dev
# (or `npm run dev`, if you prefer disappointment to joy)
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
