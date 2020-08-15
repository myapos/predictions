import ReactDOM from "react-dom";
import App from "./components/App";

const element = document.getElementById("root");

const myMainComponent = App();

ReactDOM.render(myMainComponent, element);
