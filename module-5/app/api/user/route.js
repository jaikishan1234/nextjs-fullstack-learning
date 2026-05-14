import { headers, cookies } from "next/headers";


export async function GET(request) {
    // const reqHeaders = new Headers(request.headers);
    // console.log((reqHeaders.get("Authorization")));

    const reqHeaders = await headers();
    // console.log(reqHeaders.get("Authorization"));
    // console.log(reqHeaders.get("User-Agent"));

    // return new Response("Hello from Next.js API route");

    // const username = request.cookies.get("username");
    // console.log(username);

    const cookieStore = await cookies();
    cookieStore.set("theme", "dark");

    const theme = cookieStore.get("theme");
    console.log(theme);

    return new Response("<h1>Hello from Next.js API route</h1>", {
        headers: {
            "Content-Type": "text/html",
            // "set-cookie": "username=abc123",
        }
    });
}