import "./styles.css";
import { findMatch } from "./matches.js";
import { renderMatchPage } from "./render.js";

const app = document.querySelector("#app");
renderMatchPage(app, findMatch(app.dataset.matchId));
