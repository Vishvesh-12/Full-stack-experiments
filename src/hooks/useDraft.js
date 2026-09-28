import { useEffect, useState } from "react";

function useDraft() {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("drafts")) || [];
    setDrafts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("drafts", JSON.stringify(drafts));
  }, [drafts]);

  return {
    drafts,
    setDrafts,
  };
}

export default useDraft;