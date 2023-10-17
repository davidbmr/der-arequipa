import Contacto from "@/components/Contacto/Contacto";
import Inicio from "@/components/Inicio/Inicio";
import SelectHome from "@/components/SelectHome/SelectHome";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main >
  <Inicio/>
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </main>
  )
}
