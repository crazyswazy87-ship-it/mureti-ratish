export interface Flavor {
  id: string;
  name: string;

  // Product size and price
  litres: number;
  price: number;

  metal: string;
  bandTop: string;
  bandBottom: string;
  ink: string;
  blob: string;
  accent: string;
  accent2: string;
}

export const flavors: Flavor[] = [
  {
    id: "mureti-ratish-1l",
    name: "MURETI\nRATISH",
    litres: 1,
    price: 200,

    metal: "#e7e59a",
    bandTop: "#2c1a7a",
    bandBottom: "#e7e59a",
    ink: "#2c1a7a",
    blob: "#f2c94c",
    accent: "#c23fd6",
    accent2: "#38d9c8",
  },

  {
    id: "mureti-ratish-2l",
    name: "MURETI\nRATISH",
    litres: 2,
    price: 400,

    metal: "#e7e59a",
    bandTop: "#2c1a7a",
    bandBottom: "#e7e59a",
    ink: "#2c1a7a",
    blob: "#f2c94c",
    accent: "#c23fd6",
    accent2: "#38d9c8",
  },

  {
    id: "mureti-ratish-5l",
    name: "MURETI\nRATISH",
    litres: 5,
    price: 1000,

    metal: "#e7e59a",
    bandTop: "#2c1a7a",
    bandBottom: "#e7e59a",
    ink: "#2c1a7a",
    blob: "#f2c94c",
    accent: "#c23fd6",
    accent2: "#38d9c8",
  },

  {
    id: "mureti-ratish-10l",
    name: "MURETI\nRATISH",
    litres: 10,
    price: 2000,

    metal: "#e7e59a",
    bandTop: "#2c1a7a",
    bandBottom: "#e7e59a",
    ink: "#2c1a7a",
    blob: "#f2c94c",
    accent: "#c23fd6",
    accent2: "#38d9c8",
  },
];