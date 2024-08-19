import "./App.css";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import { FaRegUser } from "react-icons/fa6";
import { TbLock } from "react-icons/tb";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" rounded-3xl flex flex-col justify-center items-center h-[600px] w-[600px] bg-transparent bg-opacity-20 backdrop-blur-lg shadow-r-shadow  w-[450px] ">
        <img src="/img/node-js.png" alt="logo" className="w-24" />

        <form className="flex flex-col  w-[70%] p-7">
          <Input
            id="name"
            htmlFor="name"
            type="text"
            placeholder="Digite seu login"
            name="Login"
            icon={<FaRegUser />}
          />
          <Input
            id="password"
            htmlFor="password"
            type="password"
            name="Senha"
            placeholder="Digite sua senha"
            icon={<TbLock />}
          />

          <div className="flex flex-col justify-center items-center w-full">
            <Button type="submit" name="Entrar" />
            <p className="text-gray-400 text-xs ">
              Ainda não tem um login?{" "}
              <span>
                <a className="hover:text-green-700 cursor-pointer">
                  Cadastre aqui!
                </a>
              </span>
            </p>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default App;
