"use client";

import { useState } from "react";
import ServiceCard from "./service-card";
import { Service } from "./service";

type Props = {
  left: Service;
  right: Service;
  defaultActive?: "left" | "right";
};

export default function ServiceRow({
  left,
  right,
  defaultActive = "left",
}: Props) {
  const [active, setActive] = useState<"left" | "right">(defaultActive);

  return (
    <div className="flex gap-6">
      <ServiceCard
        service={left}
        active={active === "left"}
        onHover={() => setActive("left")}
      />

      <ServiceCard
        service={right}
        active={active === "right"}
        onHover={() => setActive("right")}
      />
    </div>
  );
}