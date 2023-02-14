interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Enim incididunt in incididunt ullamco qui eiusmod pariatur officia duis in nostrud consectetur nisi ut.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En-progreso: Enim magna amet esse non mollit reprehenderit tempor ullamco exercitation ipsum dolor eiusmod.",
      status: "in-progress",
      createdAt: Date.now() - 100,
    },
    {
      description:
        "Terminado: Dolore id voluptate exercitation amet aliqua et exercitation.",
      status: "finished",
      createdAt: Date.now() - 10,
    },
  ],
};
