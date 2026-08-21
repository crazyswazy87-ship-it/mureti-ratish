import type { Flavor } from "../data/flavors";
import bottleImage from "../../public/assets/images/mureti-ratish-bottle.png";
interface CanProps {
  flavor: Flavor;
  className?: string;
}

export default function Can({ flavor, className }: CanProps) {
  return (
    <img
      src={bottleImage}
      alt={`${flavor.name.replace("\n", " ")} traditional brew`}
      className={className}
      draggable={false}
    />
  );
}