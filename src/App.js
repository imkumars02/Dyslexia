import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import GamesDashboard from "./GameSection/GamesDashboard";
import AudioDashboard from "./AudioLearn/AudioDashboard";
import AboutSection from "./Header/AboutSection";
import Animation from "./GameSection/Animation"; // Import Animation component
import EducationDashboard from "./EducationResource/EducationDashboard";
import PythonTutorial from './AudioLearn/Books/PythonTutorial';
import ReactTutorial from './AudioLearn/Books/ReactTutorial';
import JavaScriptTutorial from './AudioLearn/Books/JavaScriptTutorial';
import DataScienceTutorial from './AudioLearn/Books/DataScienceTutorial';
import AlphabetLearn from "./EducationResource/AlphabetLearn";
import MathTableLearn from "./EducationResource/MathTableLearn";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/GamesDashboard" element={<GamesDashboard />} />
                <Route path="/AudioDashboard" element={<AudioDashboard />} />
                <Route path="/AboutSection" element={<AboutSection />} />
                <Route path="/Animation" element={<Animation />} />
                <Route path="/EducationDashboard" element={<EducationDashboard />} />
                <Route path="/PythonTutorial" element={<PythonTutorial />} />
                <Route path="/ReactTutorial" element={<ReactTutorial />} />
                <Route path="/JavaScriptTutorial" element={<JavaScriptTutorial />} />
                <Route path="/DataScienceTutorial" element={<DataScienceTutorial />} />
                <Route path="/AlphabetLearn" element={<AlphabetLearn />} />
                <Route path="/MathTableLearn" element={<MathTableLearn />} />
                <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Optional 404 page */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
