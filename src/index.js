import ReactDOM from "react-dom";
import Wrapper from "./components/Wrapper/Wrapper";

const element = document.getElementById("root");

const myMainComponent = Wrapper();

ReactDOM.render(myMainComponent, element);
