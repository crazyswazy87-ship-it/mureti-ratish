import type { Flavor } from "../data/flavors";
import "./Can.css";

interface CanProps {
  flavor: Flavor;
}

export default function Can({ flavor }: CanProps) {
  return (
    <div className="can">
      <img
        src={flavor.image}
        alt={`${flavor.litres} litre ${flavor.name.replace("\n", " ")}`}
        className="can__image"
      />
    </div>
  );
}