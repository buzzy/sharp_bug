import sharp from "sharp";
import { createCanvas } from "@napi-rs/canvas";

// Create a canvas and draw text on it
const width = 800;
const height = 600;
const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

context.fillStyle = "#ffffff";
context.fillRect(0, 0, width, height);

context.fillStyle = "#000000";
context.font = "48px sans-serif";
context.fillText("Hello, World!", 50, 100);

// Convert the canvas to a buffer
const buffer = canvas.toBuffer("image/png");

// Use sharp to save the buffer as an image file
sharp(buffer)
  .toFile("hello-world.png")
  .then(() => {
    console.log("Image created: hello-world.png");
  })
  .catch((err) => {
    console.error("Error creating image:", err);
  });
