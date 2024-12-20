import React, { useState } from "react";

// this compontent is for post share

const ShareResultsPage = () => {
  const [copyNotification, setCopyNotification] = useState(false);

  const shareOptions = [
    { name: "Messages", icon: "💬", color: "#34C759" },
    { name: "WhatsApp", icon: "📱", color: "#25D366" },
    { name: "Messenger", icon: "💬", color: "#0084FF" },
    { name: "Telegram", icon: "✈️", color: "#26A5E4" },
    { name: "Instagram Stories", icon: "📸", color: "#E4405F" },
    { name: "Snap Camera", icon: "👻", color: "#FFFC00" },
    { name: "LinkedIn", icon: "💼", color: "#0A66C2" },
    { name: "Gmail", icon: "✉️", color: "#EA4335" },
    { name: "Mail", icon: "📧", color: "#2196F3" },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyNotification(true);
    setTimeout(() => setCopyNotification(false), 2000);
  };

  const handleShare = (platform) => {
    console.log(`Sharing via ${platform}`);
    // Implement actual sharing logic here
  };

  const handleButtonClick = (e) => {
    // Prevent the click event from bubbling up to the card
    e.stopPropagation();
  };

  return (

      <div className="share-container">
        <div className="share-panel" onClick={(e)=>{handleButtonClick(e)}}>
          <h2 className="share-title">Share your results</h2>

          {/* Top actions */}
          <div className="top-actions">
            <button
              className="action-button copy-link-button"
              onClick={handleCopyLink}
            >
              <div className="icon-circle link-icon">
                <img src="./link.svg" alt="" />
              </div>
              <span className="action-text">Copy Link</span>
            </button>

            <button className="action-button share-via-button">
              <div className="icon-circle share-icon">
                <img src="./upload.svg" alt="" />
              </div>
              <span className="action-text">Share via...</span>
            </button>
          </div>

          {/* Share options */}
          <div className="share-options">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                className="share-option-button"
                onClick={() => handleShare(option.name)}
              >
                <div
                  className="share-icon"
                  style={{ backgroundColor: option.color }}
                >
                  {option.icon}
                </div>
                <span className="share-option-text">{option.name}</span>
              </button>
            ))}
          </div>

          {copyNotification && (
            <div className="copy-notification">Link copied to clipboard!</div>
          )}
        </div>
      </div>
  );
};

export default ShareResultsPage;
