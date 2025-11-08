"use client";
import React from "react";
// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
function ImpactBar({ label, value, color, icon }) {
  const getLevel = (val) => {
    if (val >= 80) return "Expert";
    if (val >= 60) return "Strong";
    if (val >= 40) return "Good";
    return "Basic";
  };

  return (
    <div className="mb-3">
      {/* Label Row */}
      <div className="flex justify-between items-center text-xs text-gray-300">
        <span className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span>{label}</span>
        </span>
        <span className="text-[10px] text-gray-400">{getLevel(value)}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-[5px] bg-gray-800 rounded-full mt-1 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${value}%`,
            background: `linear-gradient(to right, ${color[0]}, ${color[1]})`,
            boxShadow: `0 0 4px ${color[1]}`,
          }}
        ></div>
      </div>
    </div>
  );
}

function ImpactMeter({ impact }) {
  // 🧠 Detect AI/ML vs Engineering type automatically
  const isAIML =
    impact.ml !== undefined || impact.ai !== undefined || impact.research !== undefined;

  return (
    <div className="w-full md:w-[240px] bg-[#0f0f0f] p-3 rounded-lg border border-gray-800 space-y-3 shadow-md">
      {isAIML ? (
        <>
          <ImpactBar
            label="Machine Learning"
            value={impact.ml || 0}
            icon="🤖"
            color={["#3B82F6", "#8B5CF6"]}
          />
          <ImpactBar
            label="Artificial Intelligence"
            value={impact.ai || 0}
            icon="🧠"
            color={["#8B5CF6", "#EC4899"]}
          />
          <ImpactBar
            label="Data Science"
            value={impact.data || 0}
            icon="📊"
            color={["#FBBF24", "#FACC15"]}
          />
          <ImpactBar
            label="Research"
            value={impact.research || 0}
            icon="🔬"
            color={["#06B6D4", "#3B82F6"]}
          />
        </>
      ) : (
        <>
          <ImpactBar
            label="Backend"
            value={impact.backend || 0}
            icon="⚙️"
            color={["#6366F1", "#8B5CF6"]}
          />
          <ImpactBar
            label="Frontend"
            value={impact.frontend || 0}
            icon="🎨"
            color={["#EC4899", "#F472B6"]}
          />
          <ImpactBar
            label="DevOps"
            value={impact.devops || 0}
            icon="☁️"
            color={["#10B981", "#34D399"]}
          />
          <ImpactBar
            label="Data"
            value={impact.data || 0}
            icon="📊"
            color={["#FBBF24", "#FACC15"]}
          />
        </>
      )}
    </div>
  );
}


export default ImpactMeter;
