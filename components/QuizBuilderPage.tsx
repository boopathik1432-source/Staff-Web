"use client";

import React, { useState } from "react";
import {
  Sparkles, BookOpen, CheckSquare, Clock3, Search, ChevronDown,
  Plus, Grid2X2, List, MoreVertical, Eye, Edit2, ArrowRight,
  Send, FileText, CheckCircle2, Layers, Puzzle, HelpCircle,
  BarChart3, MessageSquare, Compass
} from "lucide-react";
import NavigationShell from "./NavigationShell";

interface QuizTableItem {
  id: number;
  title: string;
  subject: string;
  unit: string;
  topic: string;
  questions: number;
  createdBy: string;
  status: "Published" | "Draft" | "Scheduled";
  iconTone: string;
}

const tableData: QuizTableItem[] = [
  {
    id: 1,
    title: "Algebra Basics Quiz",
    subject: "Mathematics",
    unit: "Unit 2",
    topic: "Linear Equations",
    questions: 10,
    createdBy: "Staff Member",
    status: "Published",
    iconTone: "blue"
  },
  {
    id: 2,
    title: "Human Heart Quiz",
    subject: "Biology",
    unit: "Unit 1",
    topic: "Heart Anatomy",
    questions: 8,
    createdBy: "Staff Member",
    status: "Published",
    iconTone: "pink"
  },
  {
    id: 3,
    title: "Solar System Quiz",
    subject: "Physics",
    unit: "Unit 2",
    topic: "Planets",
    questions: 12,
    createdBy: "Staff Member",
    status: "Scheduled",
    iconTone: "orange"
  },
  {
    id: 4,
    title: "Parts of Speech Quiz",
    subject: "Language",
    unit: "Unit 1",
    topic: "Nouns",
    questions: 10,
    createdBy: "Staff Member",
    status: "Draft",
    iconTone: "purple"
  },
  {
    id: 5,
    title: "Computer Components Quiz",
    subject: "Technology",
    unit: "Unit 3",
    topic: "Hardware",
    questions: 8,
    createdBy: "Staff Member",
    status: "Published",
    iconTone: "cyan"
  }
];

const quizActivities = [
  { title: "Quiz published", sub: "Algebra Basics Quiz", time: "2 hours ago", color: "text-[#10b981]", bg: "bg-[#d1fae5]" },
  { title: "New quiz created", sub: "Solar System Quiz", time: "4 hours ago", color: "text-[#8b5cf6]", bg: "bg-[#ede9fe]" },
  { title: "Quiz updated", sub: "Human Heart Quiz", time: "6 hours ago", color: "text-[#f59e0b]", bg: "bg-[#fef3c7]" },
  { title: "Quiz scheduled", sub: "Solar System Quiz", time: "8 hours ago", color: "text-[#0284c7]", bg: "bg-[#e0f2fe]" },
  { title: "New quiz created", sub: "Parts of Speech Quiz", time: "1 day ago", color: "text-[#ec4899]", bg: "bg-[#fce7f3]" }
];

export default function QuizBuilderPage() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredQuizzes = tableData.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(search.toLowerCase()) ||
                          quiz.subject.toLowerCase().includes(search.toLowerCase()) ||
                          quiz.topic.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = selectedSubject === "All Subjects" || quiz.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <NavigationShell activePage="Quiz Builder" showGreeting searchPlaceholder="Search quizzes, questions, topics...">
      <div className="quiz-page-container">

        {/* 1. TOOLBAR ROW */}
        <div className="quiz-toolbar-row">
          <div className="quiz-search-wrap">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search quizzes by title, subject, or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search quizzes"
            />
          </div>

          <div className="quiz-filters-wrap">
            <div className="quiz-select-pill">
              <span>{selectedSubject}</span>
              <ChevronDown size={13} />
            </div>

            <div className="quiz-select-pill">
              <span>All Units</span>
              <ChevronDown size={13} />
            </div>

            <div className="quiz-select-pill">
              <span>All Topics</span>
              <ChevronDown size={13} />
            </div>
          </div>

          <div className="quiz-toolbar-actions">
            <div className="view-toggle">
              <button
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "view-active" : ""}
                aria-label="Grid view"
              >
                <Grid2X2 size={15} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "view-active" : ""}
                aria-label="List view"
              >
                <List size={15} />
              </button>
            </div>

            <button className="create-quiz-btn">
              <Plus size={15} />
              <span>Create New Quiz</span>
            </button>
          </div>
        </div>

        {/* 3. QUICK START TEMPLATES SECTION (5 CARDS) */}
        <section className="quiz-templates-section">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="section-title">Quick Start Templates</h3>
              <p className="section-sub">Use these templates to create quizzes faster</p>
            </div>
            <button className="text-[9.5px] font-semibold text-[#0284c7] hover:underline">
              View All Templates
            </button>
          </div>

          <div className="templates-cards-grid">
            {/* Template 1: Multiple Choice */}
            <div className="template-card glass-panel">
              <div className="template-visual-stage">
                <div className="mcq-3d-stack">
                  <span className="mcq-badge badge-a">A</span>
                  <span className="mcq-badge badge-b">B</span>
                  <span className="mcq-badge badge-c">C</span>
                  <span className="mcq-badge badge-d">D</span>
                </div>
              </div>
              <h4 className="template-name">Multiple Choice</h4>
              <p className="template-desc">Standard MCQ format with one correct answer.</p>
              <button className="use-template-btn">
                <span>Use Template</span> <ArrowRight size={11} />
              </button>
            </div>

            {/* Template 2: True / False */}
            <div className="template-card glass-panel">
              <div className="template-visual-stage">
                <div className="tf-3d-wrap">
                  <div className="tf-badge-check">✔</div>
                  <div className="tf-badge-cross">✖</div>
                </div>
              </div>
              <h4 className="template-name">True / False</h4>
              <p className="template-desc">Simple true or false questions.</p>
              <button className="use-template-btn">
                <span>Use Template</span> <ArrowRight size={11} />
              </button>
            </div>

            {/* Template 3: Fill in the Blanks */}
            <div className="template-card glass-panel">
              <div className="template-visual-stage">
                <div className="blanks-3d-wrap">
                  <div className="blanks-doc">
                    <span className="blank-line w-8" />
                    <span className="blank-line w-12" />
                    <span className="blank-line w-6" />
                  </div>
                  <div className="blanks-pencil">✎</div>
                </div>
              </div>
              <h4 className="template-name">Fill in the Blanks</h4>
              <p className="template-desc">Complete the missing words or phrases.</p>
              <button className="use-template-btn">
                <span>Use Template</span> <ArrowRight size={11} />
              </button>
            </div>

            {/* Template 4: Matching */}
            <div className="template-card glass-panel">
              <div className="template-visual-stage">
                <div className="matching-3d-wrap">
                  <Puzzle size={28} className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]" />
                  <Puzzle size={24} className="text-purple-400 drop-shadow-[0_0_10px_#c084fc] -ml-2 rotate-45" />
                </div>
              </div>
              <h4 className="template-name">Matching</h4>
              <p className="template-desc">Match pairs from two columns.</p>
              <button className="use-template-btn">
                <span>Use Template</span> <ArrowRight size={11} />
              </button>
            </div>

            {/* Template 5: Short Answer */}
            <div className="template-card glass-panel">
              <div className="template-visual-stage">
                <div className="short-3d-wrap">
                  <MessageSquare size={28} className="text-cyan-400 drop-shadow-[0_0_10px_#38bdf8]" />
                  <div className="short-text-card">
                    <span className="short-line" />
                    <span className="short-line" />
                  </div>
                </div>
              </div>
              <h4 className="template-name">Short Answer</h4>
              <p className="template-desc">Subjective questions with text input.</p>
              <button className="use-template-btn">
                <span>Use Template</span> <ArrowRight size={11} />
              </button>
            </div>
          </div>
        </section>

        {/* 4. BOTTOM MAIN LAYOUT: Recent Quizzes Table + Right Sidebar */}
        <section className="quiz-bottom-layout">
          {/* Recent Quizzes Table Card */}
          <div className="quiz-table-card glass-panel">
            <div className="table-card-header">
              <h3 className="section-title">Recent Quizzes</h3>
              <p className="section-sub">Manage your recently created quizzes</p>
            </div>

            <div className="quiz-table-responsive">
              <table className="quiz-data-table">
                <thead>
                  <tr>
                    <th>Quiz Title</th>
                    <th>Subject</th>
                    <th>Unit</th>
                    <th>Topic</th>
                    <th>Questions</th>
                    <th>Created By</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQuizzes.map((quiz) => (
                    <tr key={quiz.id}>
                      <td className="quiz-title-cell">
                        <div className="flex items-center gap-2">
                          <span className={`quiz-row-icon ${quiz.iconTone}`}>
                            <BookOpen size={12} />
                          </span>
                          <span className="font-bold text-[#172d69]">{quiz.title}</span>
                        </div>
                      </td>
                      <td className="font-medium text-[#0284c7]">{quiz.subject}</td>
                      <td className="text-slate-600">{quiz.unit}</td>
                      <td className="text-slate-600">{quiz.topic}</td>
                      <td className="font-semibold text-slate-800">{quiz.questions}</td>
                      <td className="text-slate-600">{quiz.createdBy}</td>
                      <td>
                        <span className={`quiz-status-pill status-${quiz.status.toLowerCase()}`}>
                          {quiz.status}
                        </span>
                      </td>
                      <td className="actions-cell">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <button className="hover:text-cyan-600" aria-label="View"><Eye size={13} /></button>
                          <button className="hover:text-blue-600" aria-label="Edit"><Edit2 size={13} /></button>
                          <button className="hover:text-slate-700" aria-label="More"><MoreVertical size={13} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Row */}
            <div className="table-pagination-row">
              <span className="page-info">Showing 1-5 of 24 quizzes</span>
              <div className="page-buttons">
                <button className="page-btn">&lt;</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
                <button className="page-btn">&gt;</button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Recent Activity + AI Assistant Card */}
          <aside className="quiz-side-panel">
            {/* Recent Activity Card */}
            <div className="quiz-activity-card glass-panel">
              <div className="card-header-row flex items-center justify-between mb-2">
                <h4 className="side-heading">Recent Activity</h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="quiz-activity-list">
                {quizActivities.map((act) => (
                  <div key={act.title} className="quiz-act-row">
                    <div className={`quiz-act-icon ${act.color} ${act.bg}`}>
                      <CheckCircle2 size={13} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="act-title truncate">{act.title}</p>
                      <p className="act-sub truncate">{act.sub}</p>
                    </div>
                    <span className="act-time">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Callout Card with Mascot & Button */}
            <div className="quiz-ai-callout-card glass-panel">
              <div className="callout-avatar-wrap">
                <div className="callout-robot-avatar">
                  <div className="robot-visor-eye" />
                </div>
              </div>

              <div className="callout-content">
                <p className="callout-text">
                  “Need help creating a quiz? I can generate questions, suggest topics or build a full quiz for you!”
                </p>
                <span className="callout-sig">— RIXA AI</span>

                <button className="ask-rixa-cta-btn">
                  <span>Ask RIXA</span> <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer className="dashboard-footer mt-3">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; Quiz Builder</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 26 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}
