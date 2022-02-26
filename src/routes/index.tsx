import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAppThemecontext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemecontext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle theme
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial"></Navigate>} />
    </Routes>
  );
};
