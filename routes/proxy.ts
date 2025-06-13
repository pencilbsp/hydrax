import { Readable } from "stream";
import { Elysia, t } from "elysia";

import { HYDRAX_CDN, USER_AGENT } from "../config";

export default new Elysia({ prefix: "/p" }).all(
  "/*",
  async ({ request, params, query }) => {
    let domain = atob(query.d.replace(/_/g, "/").replace(/-/g, "+"));
    if (!domain.startsWith("https")) domain = "https:" + domain;

    const response = await fetch(`${domain}/${params["*"]}`, {
      method: request.method,
      body: request.body,
      headers: {
        origin: HYDRAX_CDN,
        "user-agent": USER_AGENT,
        "content-type": "application/json",
      },
    });

    return Readable.from(response.body as any);
  },
  {
    query: t.Object({
      d: t.String(),
    }),
  }
);
