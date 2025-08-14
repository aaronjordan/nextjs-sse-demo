import { NextRequest, NextResponse } from "next/server";

/**
 * Generator for our stream's values.
 *
 * Returns an endless sequence of dice rolls.
 *
 * @param sides number of sides on the die
 */
function* createDie(sides = 6) {
  while (true) {
    yield Math.ceil(Math.random() * sides);
  }
}

const encoder = new TextEncoder();

export async function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams as any;

  const die = createDie(sp?.s ?? 6);

  const stream = new ReadableStream({
    async pull(controller) {
      const { value } = die.next();
      const encoded = encoder.encode(`data: ${value}\n\n`);
      controller.enqueue(encoded);
      await new Promise((r) => setTimeout(r, 1500));
    },
    cancel() {
      console.log("cancelled");
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
