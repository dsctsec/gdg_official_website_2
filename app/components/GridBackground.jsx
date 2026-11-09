import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }) {
  return (
    <div className="site-background relative flex flex-1 w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
         
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
     
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_10%,blue)] bg-black"></div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
