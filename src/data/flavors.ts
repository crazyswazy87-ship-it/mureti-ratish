export interface Flavor {
  id: string;
  name: string;
  litres: number;
  price: number;
  image: string;
  inStock: boolean;

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
    name: "JERRYS\nRATISH",
    litres: 1,
    price: 200,
    image: "/assets/images/jerrys1ltr.png",

    inStock:true ,
    metal: "#e7e59a",
    bandTop: "#2c1a7a",
    bandBottom: "#e7e59a",
    ink: "#351d9f",
    blob: "#f2c94c",
    accent: "#c23fd6",
    accent2: "#38d9c8",
  },

  {
    id: "mureti-ratish-2l",
    name: "JERRYS\nRATISH",
    litres: 2,
    price: 400,
    image: "/assets/images/jerrys1ltr.png",

    inStock:true ,
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
    name: "JERRYS\nRATISH",
    litres: 5,
    price: 1000,
    image: "/assets/images/jerrys5l.png",

    inStock:true ,
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
    name: "JERRYS\nRATISH",
    litres: 10,
    price: 2000,
    image: "/assets/images/jerrys10l.png",

    inStock:true ,
    metal: "#e7e59a",
    bandTop: "#2c1a7a",
    bandBottom: "#e7e59a",
    ink: "#2c1a7a",
    blob: "#f2c94c",
    accent: "#c23fd6",
    accent2: "#38d9c8",
  },

  {
    id: "mureti-ratish-20l",
    name: "JERRYS\nRATISH",
    litres: 20,
    price: 4000,
    image: "/assets/images/jerrys20l.png",

    inStock:false ,
    metal: "#e7e59a",
    bandTop: "#2c1a7a",
    bandBottom: "#e7e59a",
    ink: "#2c1a7a",
    blob: "#f2c94c",
    accent: "#c23fd6",
    accent2: "#38d9c8",
  },
];