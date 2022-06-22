export const MatchBox = {
  width: "300px",
  margin: "1rem",
};

export const MatchCard = {
  padding: "1rem",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "10px 10px 20px #e6e6e6, -10px -10px 20px #ffffff",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const MatchScore = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "all 1s ease-in-out",
  "&:visibility": {
    transform: "scale(1.05)",
  },
};

export const HiddenMatchScore = {
  display: "flex",
  visibility: "hidden",
};

export const ButtonsBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
};
