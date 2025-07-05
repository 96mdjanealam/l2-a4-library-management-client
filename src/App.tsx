import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { Toaster as Permission } from "sonner";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
      <Permission
        toastOptions={{
          style: {},
          actionButtonStyle: {
            backgroundColor: "#ef4444",
            color: "#fff",
          },
        }}
        position="top-center"
      />
    </div>
  );
}

export default App;
