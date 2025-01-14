import { useState, useEffect } from "react";
import { getAllSentences } from "../api/sentenceApi";

const useSentences = () => {
  const [sentences, setSentences] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSentences = async () => {
      try {
        const data = await getAllSentences();
        setSentences(data);
      } catch (err) {
        setError("Failed to fetch sentences");
      } finally {
        setLoading(false);
      }
    };

    fetchSentences();
  }, []);

  return { sentences, loading, error };
};

export default useSentences;
