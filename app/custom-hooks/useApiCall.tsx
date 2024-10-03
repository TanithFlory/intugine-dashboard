import { useState } from "react";

type UseApiCallReturn = {
  apiError: string;
  loading: boolean;
  sendRequest: (url: string, method: string, body?: object) => Promise<any>;
  response: string;
};

export function useApiCall(): UseApiCallReturn {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [response, setResponse] = useState("");
  async function sendRequest(
    url: string,
    method: string = "POST",
    body: object = {}
  ): Promise<any> {
    setLoading(true);
    setApiError("");

    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setApiError(json.message || "An error occurred.");
        return null;
      }
      setResponse(json.message);
      return json;
    } catch (error: any) {
      setApiError(error.message || "An error occurred.");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { apiError, loading, sendRequest, response };
}
