import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { auth } from "./auth";

const http = httpRouter();

auth.addHttpRoutes(http);

http.route({
  path: "/discovery-proxy",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const siteUrl = process.env.CONVEX_SITE_URL;
    const response = await fetch(`${siteUrl}/.well-known/openid-configuration`);
    const config = await response.json();
    return new Response(JSON.stringify(config, null, 2), { status: 200 });
  }),
});

http.route({
  path: "/debug-token",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const authHeader = request.headers.get("Authorization");
    const serverTime = Date.now();
    
    if (!authHeader) {
      return new Response(JSON.stringify({ 
        status: "Missing Authorization Header",
        serverTime 
      }), { status: 400 });
    }

    const token = authHeader.replace("Bearer ", "");
    
    // We can't verify signature easily here without the private key (which convexAuth manages),
    // but we CAN decode the payload to see what the server received.
    
    const parts = token.split('.');
    if (parts.length !== 3) {
      return new Response(JSON.stringify({ 
        status: "Invalid Token Format", 
        tokenPartial: token.substring(0, 20),
        serverTime
      }), { status: 400 });
    }

    try {
      const payload = JSON.parse(atob(parts[1]));
      return new Response(JSON.stringify({
        status: "Token Received",
        serverTime,
        serverSiteUrl: process.env.CONVEX_SITE_URL,
        payload,
        // Check expiration relative to server time
        isExpired: payload.exp * 1000 < serverTime,
        isIssuedInFuture: payload.iat * 1000 > serverTime,
        timeDiff: serverTime - (payload.iat * 1000)
      }), { status: 200 });
    } catch (e) {
      return new Response(JSON.stringify({ 
        status: "Token Decode Failed", 
        error: String(e),
        serverTime
      }), { status: 400 });
    }
  }),
});

export default http;
