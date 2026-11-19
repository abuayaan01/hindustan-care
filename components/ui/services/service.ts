export type Service = {
    id: string;
    title: string;
    description: string;
    image: string;
    glow: string;
};

export const rowOne: Service[] = [
  {
    id: "geyser",
    title: "Geyser",
    description:
      "Professional geyser repair, installation and maintenance by experienced technicians.",
    image: "/images/appliances/gyeser.png",
    glow: "#3B82F6",
  },
  {
    id: "fridge",
    title: "Refrigerator",
    description:
      "Fast refrigerator diagnosis and cooling system repair.",
    image: "/images/appliances/fridge.png",
    glow: "#60A5FA",
  },
];

export const rowTwo: Service[] = [
  {
    id: "washing",
    title: "Washing Machine",
    description:
      "Expert repair for front-load and top-load washing machines.",
    image: "/images/appliances/washingmachine.png",
    glow: "#38BDF8",
  },
  {
    id: "microwave",
    title: "Microwave",
    description:
      "Reliable microwave oven repair with genuine spare parts.",
    image: "/images/appliances/microwave.png",
    glow: "#F59E0B",
  },
];