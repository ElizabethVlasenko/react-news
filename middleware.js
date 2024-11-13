import { NextResponse } from "next/server";

//runs on any page any request in the app; can block/redirect the request

export function middleware(request) {
  console.log(request);
  return NextResponse.next();
}

//can set up filters
export const config = {
  matcher: "/news",
};
