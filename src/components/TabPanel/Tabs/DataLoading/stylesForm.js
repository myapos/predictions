export const stylesForm = {
  input: {
    flex: "1",
    padding: "3px 5px",
    fontSize: "1em",
    marginLeft: "15px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    maxWidth: "30rem"
  },
  label: {
    color: "#333",
    fontSize: "1em",
    lineHeight: "32px",
    justifySelf: "right"
  },
  dontHaveErrors: {
    gridColumn: "1 / span 2"
  },
  buttons: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "15px",
    gridColumn: "1 / span 2"
  },
  button: {
    whiteSpace: "nowrap",
    display: "inline-block",
    borderRadius: "5px",
    padding: "5px 15px",
    margin: "5px",
    fontSize: "16px"
  },
  submitButton: {
    color: "white",
    backgroundImage: "linear-gradient(#4f93ce,#285f8f)",
    border: "1px solid #285f8f"
  },
  resetButton: {
    color: "#555",
    backgroundImage: "linear-gradient(#ffffff,#d5d5d5);",
    border: "1px solid #d5d5d5"
  },
  rowForm: {
    display: "flex"
  },
  rowLabel: {
    flex: "0 1 100%",
    padding: "0 1rem",
    textAlign: "right",
    maxWidth: "600px",
    padding: "5px",
    margin: "5px"
  },
  rowInput: {
    flex: "0 1 100%",
    padding: "0 1rem",
    maxWidth: "600px",
    padding: "5px",
    margin: "5px"
  },
  rowError: {
    lineHeight: "32px",
    marginLeft: "10px",
    color: "#800",
    fontWeight: "bold",
    maxWidth: "20rem",
    overflow: "auto"
  }
};
