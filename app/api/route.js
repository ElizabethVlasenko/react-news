//with route.js it will set up route handler; return json data; API-like

export function GET(request) {
  console.log(request);

  //   return Response.json();

  return new Response("Hello");
}
