"use client";

import React, { useState } from "react";
import {
  Sparkles, FileText, BookOpen, CheckSquare,
  FileCheck, Bot, ChevronDown, ArrowRight, Clock3, CheckCircle2,
  Calendar, Layers, Network, Boxes, Send, Copy, Download, RefreshCw
} from "lucide-react";
import NavigationShell from "./NavigationShell";

interface GenerationItem {
  id: number;
  title: string;
  subject: string;
  time: string;
  status: "Completed";
  tone: string;
}

const recentGenerations: GenerationItem[] = [
  { id: 1, title: "Photosynthesis Explanation", subject: "Biology", time: "2 hours ago", status: "Completed", tone: "cyan" },
  { id: 2, title: "Quadratic Equations Notes", subject: "Mathematics", time: "3 hours ago", status: "Completed", tone: "purple" },
  { id: 3, title: "World War II Summary", subject: "Social Science", time: "5 hours ago", status: "Completed", tone: "orange" },
  { id: 4, title: "Trigonometry Quiz", subject: "Mathematics", time: "6 hours ago", status: "Completed", tone: "blue" },
  { id: 5, title: "Human Heart Explanation", subject: "Biology", time: "8 hours ago", status: "Completed", tone: "pink" }
];

export default function AiContentPage() {
  const [selectedSubject, setSelectedSubject] = useState("Choose a subject");
  const [selectedUnit, setSelectedUnit] = useState("Choose a unit");
  const [selectedTopic, setSelectedTopic] = useState("Choose a topic");
  const [contentType, setContentType] = useState<"explanation" | "notes" | "summary" | "quiz">("explanation");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <NavigationShell
      activePage="AI Content"
      showGreeting
      searchPlaceholder="Search AI content, topics, or keywords..."
      greetingSubtitle="Create · Generate · Inspire  |  RIXA Staff Dashboard"
    >
      <div className="ai-page-container">

        {/* 1. 5 ACTION / CAPABILITY CARDS */}
        <section className="ai-capability-grid">
          {/* Card 1: Generate Content */}
          <div className="ai-cap-card glass-panel">
            <div className="glow-sphere-orb cyan">
              <FileText size={18} className="relative z-10" />
            </div>
            <div className="cap-info">
              <h4 className="cap-title">Generate Content</h4>
              <p className="cap-desc">Create explanations, notes and summaries</p>
            </div>
            <button className="cap-arrow-btn" aria-label="Go to Generate Content">
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Card 2: Create Study Notes */}
          <div className="ai-cap-card glass-panel">
            <div className="glow-sphere-orb purple">
              <BookOpen size={18} className="relative z-10" />
            </div>
            <div className="cap-info">
              <h4 className="cap-title">Create Study Notes</h4>
              <p className="cap-desc">Organize key points in simple format</p>
            </div>
            <button className="cap-arrow-btn" aria-label="Go to Study Notes">
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Card 3: Generate Quiz */}
          <div className="ai-cap-card glass-panel">
            <div className="glow-sphere-orb teal">
              <CheckSquare size={18} className="relative z-10" />
            </div>
            <div className="cap-info">
              <h4 className="cap-title">Generate Quiz</h4>
              <p className="cap-desc">Auto-create questions and answers</p>
            </div>
            <button className="cap-arrow-btn" aria-label="Go to Quiz">
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Card 4: Summarize Topic */}
          <div className="ai-cap-card glass-panel">
            <div className="glow-sphere-orb blue">
              <FileCheck size={18} className="relative z-10" />
            </div>
            <div className="cap-info">
              <h4 className="cap-title">Summarize Topic</h4>
              <p className="cap-desc">Get quick topic summaries</p>
            </div>
            <button className="cap-arrow-btn" aria-label="Go to Summarize">
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Card 5: AI Assistant */}
          <div className="ai-cap-card glass-panel">
            <div className="glow-sphere-orb pink">
              <Bot size={18} className="relative z-10" />
            </div>
            <div className="cap-info">
              <h4 className="cap-title">AI Assistant</h4>
              <p className="cap-desc">Ask questions &amp; get instant help</p>
            </div>
            <button className="cap-arrow-btn" aria-label="Go to AI Assistant">
              <ArrowRight size={13} />
            </button>
          </div>
        </section>

        {/* 3. MAIN WORKSPACE ROW: Generate Workspace + Preview + Right Stats */}
        <section className="ai-workspace-layout">
          {/* LEFT: Generate New AI Content Generator Box */}
          <div className="ai-generator-box glass-panel">
            {/* Header */}
            <div className="ai-gen-header">
              <div className="glow-sphere-orb purple mini-orb">
                <Sparkles size={16} className="relative z-10" />
              </div>
              <div>
                <h3 className="gen-heading">Generate New AI Content</h3>
                <p className="gen-sub">Select a subject, unit and topic to create AI-powered learning content.</p>
              </div>
            </div>

            {/* Stepper Wizard (1..5) */}
            <div className="ai-stepper-row">
              <div className="step-item active">
                <span className="step-num">1</span>
                <span className="step-label">Subject</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <span className="step-num">2</span>
                <span className="step-label">Unit</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <span className="step-num">3</span>
                <span className="step-label">Topic</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <span className="step-num">4</span>
                <span className="step-label">Content Type</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <span className="step-num">5</span>
                <span className="step-label">Generate</span>
              </div>
            </div>

            {/* Selection Dropdowns Grid */}
            <div className="ai-dropdowns-grid">
              <div className="dropdown-col">
                <label className="dropdown-label">Select Subject</label>
                <div className="ai-select-field">
                  <div className="glow-sphere-orb cyan micro-orb">
                    <BookOpen size={10} className="relative z-10" />
                  </div>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="ai-select-input"
                  >
                    <option value="Choose a subject">Choose a subject</option>
                    <option value="Biology">Biology</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                  </select>
                  <ChevronDown size={13} className="ml-auto text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="dropdown-col">
                <label className="dropdown-label">Select Unit</label>
                <div className="ai-select-field">
                  <div className="glow-sphere-orb purple micro-orb">
                    <Boxes size={10} className="relative z-10" />
                  </div>
                  <select
                    value={selectedUnit}
                    onChange={(e) => setSelectedUnit(e.target.value)}
                    className="ai-select-input"
                  >
                    <option value="Choose a unit">Choose a unit</option>
                    <option value="Unit 1 - Foundations">Unit 1 - Foundations</option>
                    <option value="Unit 2 - Algebra">Unit 2 - Algebra</option>
                    <option value="Unit 3 - Cell Structure">Unit 3 - Cell Structure</option>
                  </select>
                  <ChevronDown size={13} className="ml-auto text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="dropdown-col">
                <label className="dropdown-label">Select Topic</label>
                <div className="ai-select-field">
                  <div className="glow-sphere-orb blue micro-orb">
                    <Network size={10} className="relative z-10" />
                  </div>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="ai-select-input"
                  >
                    <option value="Choose a topic">Choose a topic</option>
                    <option value="Photosynthesis">Photosynthesis</option>
                    <option value="Linear Equations">Linear Equations</option>
                    <option value="Human Heart Anatomy">Human Heart Anatomy</option>
                  </select>
                  <ChevronDown size={13} className="ml-auto text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Content Type Picker */}
            <div className="ai-content-type-section">
              <label className="dropdown-label">Content Type</label>
              <div className="content-type-cards">
                <button
                  type="button"
                  onClick={() => setContentType("explanation")}
                  className={`type-picker-btn ${contentType === "explanation" ? "type-active" : ""}`}
                >
                  <div className="glow-sphere-orb blue mini-orb">
                    <FileText size={14} className="relative z-10" />
                  </div>
                  <div className="text-left">
                    <strong className="block text-[9.5px] font-bold text-[#172d69]">Explanation</strong>
                    <span className="block text-[7.5px] text-[#64748b]">Detailed explanation</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setContentType("notes")}
                  className={`type-picker-btn ${contentType === "notes" ? "type-active" : ""}`}
                >
                  <div className="glow-sphere-orb purple mini-orb">
                    <BookOpen size={14} className="relative z-10" />
                  </div>
                  <div className="text-left">
                    <strong className="block text-[9.5px] font-bold text-[#172d69]">Notes</strong>
                    <span className="block text-[7.5px] text-[#64748b]">Quick notes</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setContentType("summary")}
                  className={`type-picker-btn ${contentType === "summary" ? "type-active" : ""}`}
                >
                  <div className="glow-sphere-orb teal mini-orb">
                    <FileCheck size={14} className="relative z-10" />
                  </div>
                  <div className="text-left">
                    <strong className="block text-[9.5px] font-bold text-[#172d69]">Summary</strong>
                    <span className="block text-[7.5px] text-[#64748b]">Short summary</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setContentType("quiz")}
                  className={`type-picker-btn ${contentType === "quiz" ? "type-active" : ""}`}
                >
                  <div className="glow-sphere-orb pink mini-orb">
                    <CheckSquare size={14} className="relative z-10" />
                  </div>
                  <div className="text-left">
                    <strong className="block text-[9.5px] font-bold text-[#172d69]">Quiz</strong>
                    <span className="block text-[7.5px] text-[#64748b]">Questions &amp; answers</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Large Generate CTA Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="generate-main-btn"
            >
              <Sparkles size={16} className={isGenerating ? "animate-spin" : ""} />
              <span>{isGenerating ? "Generating Content..." : "Generate Content"}</span>
              <ArrowRight size={15} className="ml-2" />
            </button>
          </div>

          {/* CENTER: AI Content Preview Box */}
          <div className="ai-preview-box glass-panel">
            <div className="preview-pedestal-stage">
              <div className="floating-docs-stack">
                <div className="doc-layer layer-back" />
                <div className="doc-layer layer-mid" />
                <div className="doc-layer layer-front">
                  <div className="doc-line w-12" />
                  <div className="doc-line w-16" />
                  <div className="doc-line w-10" />
                </div>
              </div>
              <div className="preview-pedestal-grid" />
            </div>

            <div className="preview-copy">
              <h4 className="preview-title">AI Content Preview</h4>
              <p className="preview-hint">Your generated content will appear here...</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Recent Generations + Quick Stats */}
          <aside className="ai-side-column">
            {/* Recent Generations Card */}
            <div className="ai-recent-card glass-panel">
              <div className="side-card-header flex items-center justify-between">
                <h4 className="side-title">Recent Generations</h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="recent-gen-list">
                {recentGenerations.map((gen) => (
                  <div key={gen.id} className="recent-gen-row">
                    <div className={`glow-sphere-orb ${gen.tone} mini-orb`}>
                      <Sparkles size={11} className="relative z-10" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="gen-item-title truncate">{gen.title}</p>
                      <p className="gen-item-meta">{gen.subject} · {gen.time}</p>
                    </div>
                    <span className="gen-status-pill">{gen.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="ai-stats-card glass-panel">
              <div className="side-card-header flex items-center justify-between">
                <h4 className="side-title">Quick Stats</h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="ai-stats-grid">
                <div className="mini-stat-box">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="glow-sphere-orb cyan mini-orb">
                      <Sparkles size={11} className="relative z-10" />
                    </div>
                  </div>
                  <span className="stat-label">Total Generated</span>
                  <strong className="stat-value">124</strong>
                </div>

                <div className="mini-stat-box">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="glow-sphere-orb purple mini-orb">
                      <Calendar size={11} className="relative z-10" />
                    </div>
                  </div>
                  <span className="stat-label">Today</span>
                  <strong className="stat-value">18</strong>
                </div>

                <div className="mini-stat-box">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="glow-sphere-orb blue mini-orb">
                      <BookOpen size={11} className="relative z-10" />
                    </div>
                  </div>
                  <span className="stat-label">Subjects</span>
                  <strong className="stat-value">8</strong>
                </div>

                <div className="mini-stat-box">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="glow-sphere-orb teal mini-orb">
                      <CheckCircle2 size={11} className="relative z-10" />
                    </div>
                  </div>
                  <span className="stat-label">Completion Rate</span>
                  <strong className="stat-value">92%</strong>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer className="dashboard-footer mt-3">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; AI Content</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 28 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}

