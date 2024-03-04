import type { LinksFunction } from "@remix-run/node";
import {
  LiveReload,
  Outlet,
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import {
  NextUIProvider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Navbar isBordered>
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
              <NavbarBrand>
                <span className="font-bold text-inherit">测试</span>
              </NavbarBrand>
              <NavbarItem>
                <Link color="foreground" to="#">
                  Features
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link to="#" aria-current="page">
                  Customers
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" to="#">
                  Integrations
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link to="#">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>

          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  }

  return (
    <>
      <h1>Error!</h1>
      <p>{(error as Error)?.message ?? "Unknown error"}</p>
    </>
  );
}
