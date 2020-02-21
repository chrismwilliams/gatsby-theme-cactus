/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

export default function ToggleMode(props) {
  let [mode, setMode] = useColorMode();

  function handleToggle() {
    let newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  }

  return (
    <button
      sx={{
        display: `inline-block`,
        fontFamily: `inherit`,
        background: `none`,
        border: 0,
        textTransform: `capitalize`,
        fontWeight: `bold`,
        px: 3,
        py: 2,
        borderRadius: 5,
        color: `text`,
        backgroundColor: `rgba(0,0,0,0.25)`,
      }}
      {...props}
      title="Toggle Dark Mode"
      onClick={handleToggle}
    >
      {mode === "default" ? "dark" : mode}
    </button>
  );
}
