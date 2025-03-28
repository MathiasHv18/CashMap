import { useState, useEffect } from "react";
import { getAllSentences } from "../api/sentenceApi";
import { Sentence } from "../interfaces/SentenceInterface";

const useSentences = () => {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSentences = async () => {
      try {
        const data: Sentence[] = await getAllSentences();
        setSentences(data);
      } catch (err) {
        setError("Failed to fetch sentences");
      } finally {
        setLoading(false);
      }
    };

    fetchSentences();
  }, []);

  return { sentences, state: { loading, error } };
};

export default useSentences;
