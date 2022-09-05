import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // return new Response("Hello, world!");

  // pegar o cookie de autenticação
  // chamar alguma api
  // redirecionar o usuário

  return NextResponse.redirect("http://localhost:3000");
}
