import React, { useState, useRef, useEffect } from "react";
import { Play, Trash, Mic, Square } from "lucide-react";
import "./RecordReplay.scss";

const RecordReplay = () => {
  const [recordings, setRecordings] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  }, [isRecording]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      setRecordings((prev) => [...prev, { audio, blob: audioBlob }]);
      audioChunksRef.current = [];
    };
    mediaRecorderRef.current.start();
  };

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  const playRecording = (index, recording) => {
    recording.audio.play();
    setPlayingIndex(index);
    recording.audio.onended = () => setPlayingIndex(null);
  };

  const stopRecordingPlayback = (recording) => {
    recording.audio.pause();
    recording.audio.currentTime = 0;
    setPlayingIndex(null);
  };

  const deleteRecording = (index) => {
    setRecordings((prev) => prev.filter((_, i) => i !== index));
    if (playingIndex === index) setPlayingIndex(null);
  };

  return (
    <div className="RecordReplay">
      <h2 className="title">Record & Replay</h2>
      <button
        className={`RecordButton ${isRecording ? "active" : ""}`}
        onClick={toggleRecording}
      >
        <Mic /> {isRecording ? "Stop Recording" : "Start Recording"}
      </button>

      <div className="Recordings">
        <h3>Recorded Clips</h3>
        {recordings.length === 0 ? (
          <p>No recordings yet.</p>
        ) : (
          <ul>
            {recordings.map((recording, index) => (
              <li key={index}>
                <div className="RecordingItem">
                  {playingIndex === index ? (
                    <button
                      onClick={() => stopRecordingPlayback(recording)}
                      className="StopButton"
                    >
                      <Square /> Stop
                    </button>
                  ) : (
                    <button
                      onClick={() => playRecording(index, recording)}
                      className="PlayButton"
                    >
                      <Play /> Play
                    </button>
                  )}
                  <span className="RecordingLabel">Recording {index + 1}</span>
                  <button
                    onClick={() => deleteRecording(index)}
                    className="DeleteButton"
                  >
                    <Trash /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecordReplay;
