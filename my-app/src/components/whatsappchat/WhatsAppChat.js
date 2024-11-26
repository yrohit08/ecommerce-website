import React, { useState } from "react";

const WhatsAppChat = () => {
  const [phoneNumber, setPhoneNumber] = useState("+17038430867"); // Your WhatsApp number
  const [message, setMessage] = useState("");
  const [chatVisible, setChatVisible] = useState(false);

  // Generate the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 9999 }}>
      {/* Floating Chat Button */}
      {!chatVisible && (
        <button
          onClick={() => setChatVisible(true)}
          style={{
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "15px",
            cursor: "pointer",
            zIndex: 9999,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      )}

      {/* Chat Box */}
      {chatVisible && (
        <div
          style={{
            width: "300px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            zIndex: 9999,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h4 style={{ margin: 0, color: "#25D366" }}>Chat with Us</h4>
            <button
              onClick={() => setChatVisible(false)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Message Input */}
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              height: "80px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "8px",
              marginBottom: "10px",
            }}
          />

          {/* Send Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              textAlign: "center",
              backgroundColor: "#25D366",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              width: "100%",
            }}
          >
            Start Chat
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
