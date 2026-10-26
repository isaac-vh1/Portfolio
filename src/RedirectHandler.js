// src/RedirectHandler.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    // Only follow same-site paths (e.g. "/titan"), never "//host" or "https://..."
    if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}