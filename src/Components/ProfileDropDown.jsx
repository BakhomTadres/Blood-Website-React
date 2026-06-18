import axios from "axios";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router";

export default function ProfileDropdown({ isOpen, onClose }) {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  async function handleLogout() {
    const token = localStorage.getItem("token");
    setUser(null);
    localStorage.removeItem("token");
    onClose();
    navigate("/login");

    await axios.post(
      "http://localhost:3000/api/users/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  if (!isOpen || !user) return null;

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "calc(100% - 1px)",
          left: "0%",
          backgroundColor: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          padding: "16px",
          paddingTop: "30px",
          minWidth: "300px",
          zIndex: 20,
          textAlign: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--main-color)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            margin: "0 auto 12px",
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>

        <p
          style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "4px" }}
        >
          {user.name}
        </p>

        <p style={{ fontSize: "16px", color: "#888", marginBottom: "16px" }}>
          {user.email}
        </p>

        <hr style={{ marginBottom: "12px", borderColor: "#eee" }} />

        <button
          onClick={handleLogout}
          style={{
            width: "80%",
            padding: "10px",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "100px",
          }}
        >
          <i
            className="fa-solid fa-right-from-bracket"
            style={{ marginLeft: "8px" }}
          ></i>
          تسجيل الخروج
        </button>
      </div>
    </>
  );
}
