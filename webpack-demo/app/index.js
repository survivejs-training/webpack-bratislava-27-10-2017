import "./main.css";
import component from "./component";
import { bake } from "./shake";

bake();

if (process.env.NODE_ENV === "development") {
  console.log("bar");
}

document.body.appendChild(component());
