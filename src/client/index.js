import React from "react";
import { hydrateRoot } from "react-dom/client";

import Home from "../share/pages/Home";

hydrateRoot(document.getElementById("root"), <Home />);
