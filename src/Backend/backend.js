import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from  "cors";

const app = express()
app.use(cors());

const port = 4000;
const API_URL = "https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classSearch/getTerms?";

  app.get('/', async (req, res) => {
    // Get offset and max from query parameters (default values if not provided)
    const offset = parseInt(req.query.offset) || 1;
    const max = parseInt(req.query.max) || 10;

    try {
        const response = await axios.get(API_URL, {
            params: {
                offset: offset,  // Ensure these are numeric
                max: max,
                searchTerm: req.query.searchTerm || "2024"
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({"message": error.message});
    }
});

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

