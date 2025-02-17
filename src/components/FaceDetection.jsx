/*import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const FaceDetection = ({ onViolation }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");

      startVideo();
    };

    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  };

  useEffect(() => {
    videoRef.current?.addEventListener("play", () => {
      const interval = setInterval(async () => {
        const detections = await faceapi.detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        );

        if (detections.length === 0) {
          onViolation("No face detected! Please stay in front of the camera.");
        } else if (detections.length > 1) {
          onViolation("Multiple faces detected! Exam may be disqualified.");
        }
      }, 2000);

      return () => clearInterval(interval);
    });
  }, []);

  return (
    <div>
      {loading && <p>Loading AI Proctoring...</p>}
      <video ref={videoRef} autoPlay muted width="400" height="300" />
    </div>
  );
};

export default FaceDetection;*/
