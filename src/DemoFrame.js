import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import demos from "./demos";
import Footer from "./components/Footer";

export default function DemoFrame() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const demo = Object.prototype.hasOwnProperty.call(demos, id) ? demos[id] : null;
  const title = demo ? demo.title : "Demo";
  const DemoComponent = demo && demo.component;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Banner */}
      <div
        style={{
          background: "#1300a1",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          flexShrink: 0,
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              background: "#fbbf24",
              color: "#1a1a1a",
              fontWeight: 700,
              fontSize: 12,
              borderRadius: 4,
              padding: "2px 8px",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Demo
          </span>
          <span style={{ fontWeight: 600, fontSize: 16 }}>{title}</span>
          <span style={{ fontSize: 13, opacity: 0.75 }}>
            — This is a demo application
          </span>
        </div>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "white",
            color: "#1300a1",
            border: "none",
            borderRadius: 6,
            padding: "6px 16px",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          ← Back to Portfolio
        </button>
      </div>

      {/* iframe */}
      {DemoComponent ? (
        <div style={{ flex: 1, overflow: "auto" }}>
          <DemoComponent />
        </div>
      ) : demo ? (
        <iframe
          src={demo.url}
          title={title}
          style={{ flex: 1, border: "none", width: "100%" }}
        />
      ) : (
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            color: "#666",
          }}
        >
          Demo not found.
        </div>
      )}

      {/* Footer */}
      <div style={{ flexShrink: 0 }}>
        <ChakraProvider>
          <Footer />
        </ChakraProvider>
      </div>
    </div>
  );
}
