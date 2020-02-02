// Stops the flash of large icons => https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
