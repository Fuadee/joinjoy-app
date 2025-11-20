// JoinJoyLanding.jsx
import React from "react";

function JoinJoyLanding() {
  const handleBookClick = () => {
    // ตรงนี้เอาไว้ใส่ลิงก์จอง หรือ scroll ไป section จองก็ได้
    // ตัวอย่าง: ไปหน้าเว็บจองของ JoinJoy
    window.location.href = "https://joinjoytravel.com";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "24px",
        fontFamily: "sans-serif",
        background: "linear-gradient(135deg, #00bcd4, #00796b)",
        color: "#ffffff",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "12px" }}>JoinJoy Travel</h1>

      <p style={{ fontSize: "18px", maxWidth: "480px", marginBottom: "24px" }}>
        จองเรือเที่ยวกระบี่แบบ Real-time เลือกเรือเองได้ เจอทะเลสวย น้ำใส
        แบบที่เคาน์เตอร์ทัวร์ให้คุณไม่ได้
      </p>

      <button
        onClick={handleBookClick}
        style={{
          padding: "12px 28px",
          fontSize: "18px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: "#ffeb3b",
          color: "#004d40",
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
        }}
      >
        จองเรือเลย
      </button>
    </div>
  );
}

export default JoinJoyLanding;
