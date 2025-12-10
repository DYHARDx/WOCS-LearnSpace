import { Routes, Route } from "react-router-dom";
import Kanban from "./Kanban";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookPreview from "./pages/BookPreview";
import Contributors from "./pages/Contributors";
import About from "./pages/About";
import Whiteboard from "./components/Whiteboard";

// Route Guard (but currently always allows)
const ProtectedRoute = ({ children }) => {
  return children;
};

function App() {
  // Temporary: auto-login
  localStorage.setItem("isLoggedIn", "true");

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/contributors"
          element={
            <ProtectedRoute>
              <Contributors />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/kanban"
          element={
            <ProtectedRoute>
              <Kanban />
            </ProtectedRoute>
          }
        />

        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookPreview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/whiteboard"
          element={
            <ProtectedRoute>
              <Whiteboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
