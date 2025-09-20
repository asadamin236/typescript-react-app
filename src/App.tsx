import { useState } from "react";
import "./App.css";
// import Button from "./components/Button";
// import Cart from "./components/Cart";
// import LoginCLassForm from "./components/LoginCLassForm";
// import LoginForm from "./components/LoginForm";
// import Todos from "./components/Todos";
// import WelcomeMessage from "./components/WelcomeMessage";
// import PostPage from "./components/PostPage";
// import Todos from "./components/Todos";
import LoginForm from "./components/LoginForm";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import NewTodos from "./components/NewTodos";

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

function App() {
  // const [showCount, setShowCount] = useState(true)
  return (
    <>
    {/* <WelcomeMessage user={{name:"Asad", type: 'guest'}} isLogin={true} />
    <WelcomeMessage user={{name:"Amir", type: "admin"}} isLogin={true} />
    <WelcomeMessage user={{name:"Aqib", type: "user"}} isLogin={true} />
      <LoginForm />
      <div className="mb-20">
        <LoginCLassForm />
      </div>
      <Todos />
      <h1 className="mb-4">Hello World</h1>
      <p className="text-blue-400">Tailwind CSS is working!</p> */}
      {/* {showCount && <Button />}
      <button onClick={() => setShowCount(show => !show)}>
        Toggle Show Counter
      </button> */}
      {/* <Todos />  */}
      {/* <ThemeProvider theme={darkTheme}>
      <CssBaseline /> */}
      <LoginForm/>
    {/* </ThemeProvider> */}
    <Counter/>
      {/* <Cart /> */}
      {/* <PostPage /> */}
      <CounterButton/>
      <NewTodos/>
    </>
  );
}

export default App;
