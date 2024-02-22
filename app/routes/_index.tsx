import type { MetaFunction } from "@remix-run/node";
import { Input, Button } from "@nextui-org/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Button variant="light" size="sm" onClick={(e) => console.log(e)}>
        12313
      </Button>
    </div>
  );
}
