// api/bhav.js

let currentBhav = 76; // default value
let lastUpdated = new Date().toLocaleString();

export default function handler(req, res) {
  // Handle GET - return current bhav
  if (req.method === "GET") {
    return res.status(200).json({
      bhav: currentBhav,
      lastUpdated,
    });
  }

  // Handle POST - update bhav
  if (req.method === "POST") {
    try {
      let body = "";

      // Gather incoming data
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          if (!parsed.newBhav || isNaN(parsed.newBhav)) {
            return res.status(400).json({ message: "Invalid bhav value" });
          }

          currentBhav = Number(parsed.newBhav);
          lastUpdated = new Date().toLocaleString();

          return res.status(200).json({
            message: "✅ Bhav updated successfully!",
            bhav: currentBhav,
            lastUpdated,
          });
        } catch (err) {
          console.error("JSON Parse Error:", err);
          return res.status(400).json({ message: "Invalid JSON format" });
        }
      });
    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Method not allowed
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
