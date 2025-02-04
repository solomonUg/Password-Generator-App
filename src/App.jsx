import PasswordGenerator from "./components/passwordGenerator"
function App() {

  return (
    <div className="bg-slate-950 w-full h-screen flex flex-col items-center justify-center ">
      <div className="text-slate-500 font-mono text-center">Password Generator</div>
      <PasswordGenerator/>
    </div>
  )
}

export default App
