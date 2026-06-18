import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DonorsContext = createContext();

export function DonorsProvider({ children }) {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDonors = async (params = {}) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://blood-website-backend.vercel.app/api/donors", {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.data.donors;
    } catch (error) {
      console.log(error);
      return [];
    }
  };


 const [callCount, setCallCount] = useState(0);

useEffect(() => {
  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://blood-website-backend.vercel.app/api/stats");
      setCallCount(response.data.data.callCount);
    } catch (error) {
      console.log(error);
    }
  };
  fetchStats();
}, []);

  useEffect(() => {
    const loadDonors = async () => {
      setLoading(true);
      const data = await fetchDonors();
      setDonors(data);
      setFilteredDonors(data);
      setLoading(false);
    };
    loadDonors();
  }, []);

  const searchDonors = async (bloodGroup, city) => {
    const data = await fetchDonors({
      bloodGroup: bloodGroup === "الكل" ? "" : bloodGroup,
      city: city === "الكل" ? "" : city,
    });
    setFilteredDonors(data);
  };

  const addDonor = (donor) => {
    setDonors((prev) => [...prev, donor]);
    setFilteredDonors((prev) => [...prev, donor]);
  };


const incrementCallCount = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "https://blood-website-backend.vercel.app/api/stats/call",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCallCount(res.data.data.callCount);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <DonorsContext.Provider
      value={{ donors, setDonors,filteredDonors, setFilteredDonors,loading, searchDonors, addDonor , callCount, incrementCallCount}}
    >
      {children}
    </DonorsContext.Provider>
  );
}

export function useDonors() {
  return useContext(DonorsContext);
}
