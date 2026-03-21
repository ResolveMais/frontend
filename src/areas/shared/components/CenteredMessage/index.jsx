import React from "react";
import PropTypes from "prop-types";
import LoggedHeader from "../../../../components/LoggedHeader";

const containerStyle = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "24px",
  background:
    "radial-gradient(900px 400px at 10% 10%, #e8fff3 0%, transparent 60%), linear-gradient(140deg, #f5fbf8 0%, #eef5f2 100%)",
};

const cardStyle = {
  background: "rgba(255, 255, 255, 0.95)",
  border: "1px solid rgba(15, 46, 47, 0.12)",
  borderRadius: "18px",
  padding: "36px 28px",
  maxWidth: "560px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0 14px 30px rgba(15, 46, 47, 0.1)",
};

const titleStyle = {
  margin: 0,
  color: "#0f2e2f",
  fontSize: "30px",
  fontWeight: 700,
};

const descriptionStyle = {
  marginTop: "12px",
  marginBottom: 0,
  color: "#315050",
  lineHeight: 1.5,
};

const CenteredMessage = ({ title, description, showHeader = false }) => {
  const computedContainerStyle = showHeader
    ? {
        ...containerStyle,
        minHeight: "calc(100vh - 70px)",
        paddingTop: "94px",
      }
    : containerStyle;

  return (
    <>
      {showHeader && <LoggedHeader />}
      <main style={computedContainerStyle}>
        <section style={cardStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <p style={descriptionStyle}>{description}</p>
        </section>
      </main>
    </>
  );
};

CenteredMessage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showHeader: PropTypes.bool,
};

export default CenteredMessage;
