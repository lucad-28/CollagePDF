import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import generatePDF from "./services/docs.service.js";

//Dotenv configuration
dotenv.config();

//Express configuration
const app = express();
app.use(express.json());
app.use(cors());

//Multer configuration
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

//Routes
app.post("/perPage", upload.array("images"), async (req, res) => {
  try {
    const { files } = req;
    const mode_data = JSON.parse(req.body.mode_data);
    const template = {
      type: "perPage",
      value: mode_data.value,
    };
    const { mode } = req.body;
    res.setHeader("Content-Type", "application/pdf");
    await generatePDF(files, template, mode, res);
    console.log("finish")
    /* res.status(200).json({
      success: true,
      message: "Imagen subida exitosamente",
      files: files,
    }); */
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
    res.status(500).json({
      success: false,
      message: "Error al crear el pdf",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});