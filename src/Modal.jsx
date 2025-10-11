import React from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(34,34,34)",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
  borderRadius: "10px",
  padding: "10px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn fs-4" onClick={onClose}>
            ❌
          </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("cart-root")
  );
}
