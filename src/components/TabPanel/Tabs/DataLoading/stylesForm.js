export const stylesForm = {
  input: {
    flex: "1",
    padding: "3px 5px",
    fontSize: "1em",
    marginLeft: "15px",
    border: "1px solid #ccc",
    borderRadius: "3px"
  },
  label: {
    color: "#333",
    width: "110px",
    fontSize: "1em",
    lineHeight: "32px"
  },
  buttons: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "15px"
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
  error: {
    lineHeight: "32px",
    marginLeft: "10px",
    color: "#800",
    fontWeight: "bold"
  }

  //   form {
  //     max-width: 500px;
  //     margin: 10px auto;
  //     border: 1px solid #ccc;
  //     padding: 20px;
  //     box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  //     border-radius: 3px;
  //     & > div {
  //       display: flex;
  //       flex-flow: row nowrap;
  //       line-height: 2em;
  //       margin: 5px;
  //       & > label {
  //         color: #333;
  //         width: 110px;
  //         font-size: 1em;
  //         line-height: 32px;
  //       }
  //       & > input,
  //       & > select,
  //       & > textarea {
  //         flex: 1;
  //         padding: 3px 5px;
  //         font-size: 1em;
  //         margin-left: 15px;
  //         border: 1px solid #ccc;
  //         border-radius: 3px;
  //       }
  //       & > input[type='checkbox'] {
  //         margin-top: 7px;
  //       }
  //       & > div {
  //         margin-left: 16px;
  //         & > label {
  //           display: block;
  //           & > input {
  //             margin-right: 3px;
  //           }
  //         }
  //       }
  //       & > span {
  //         line-height: 32px;
  //         margin-left: 10px;
  //         color: #800;
  //         font-weight: bold;
  //       }
  //     }
  //     & > .buttons {
  //       display: flex;
  //       flex-flow: row nowrap;
  //       justify-content: center;
  //       margin-top: 15px;
  //     }
  //     button {
  //       margin: 0 10px;
  //       &[type='submit'] {
  //         ${btnPrimary};
  //       }
  //       &[type='button'] {
  //         ${btnDefault};
  //       }
  //     }
};
