import { registerRoot } from "remotion";
import { RemotionVideo } from "./RemotionRoot.js"; // ✅ Import từ file trung gian
import "bootstrap/dist/css/bootstrap.min.css";
import "./animations.css";

registerRoot(RemotionVideo);
