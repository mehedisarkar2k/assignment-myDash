import "./App.scss";
import SignupForm from "./components/SignupForm";
import bg from "./img/signupFormBg.png";

function App() {
    return (
        <div style={{ display: "flex" }}>
            <div className="">
                <img src={bg} alt="" />
            </div>

            <SignupForm />
        </div>
    );
}

export default App;
