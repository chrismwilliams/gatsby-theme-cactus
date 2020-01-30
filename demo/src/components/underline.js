/** @jsx jsx */
import { jsx } from "theme-ui";

export default function Underline({ themeColor, hoverThemeColor, children }) {
  return (
    <span
      sx={{
        backgroundImage: theme =>
          `linear-gradient(transparent, transparent 5px, ${theme.colors[themeColor]} 5px, ${theme.colors[themeColor]})`,
        backgroundPosition: `bottom`,
        backgroundSize: `100% 6px`,
        backgroundRepeat: `repeat-x`,
        ":hover": {
          backgroundImage: theme =>
            `linear-gradient(transparent, transparent 4px, ${theme.colors[hoverThemeColor]} 4px, ${theme.colors[hoverThemeColor]})`
        }
      }}
    >
      {children}
    </span>
  );
}
