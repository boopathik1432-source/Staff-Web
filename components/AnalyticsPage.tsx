"use client";

import React, { useState } from "react";
import {
  BarChart3, TrendingUp, Calendar, ArrowRight, Sparkles, BookOpen,
  Boxes, Network, HelpCircle, Target, Users, ChevronDown, CheckCircle2,
  FileText, Download, Award, ShieldAlert, Zap, Layers, RefreshCw
} from "lucide-react";
import NavigationShell from "./NavigationShell";

const topStats = [
  { label: "Total Students", value: "48", trend: "↑ 12%", tone: "blue", icon: Users },
  { label: "Total Subjects", value: "8", trend: "↑ 8%", tone: "purple", icon: BookOpen },
  { label: "Total Units", value: "24", trend: "↑ 15%", tone: "cyan", icon: Boxes },
  { label: "Total Topics", value: "156", trend: "↑ 18%", tone: "indigo", icon: Network },
  { label: "Total Quizzes", value: "72", trend: "↑ 22%", tone: "pink", icon: HelpCircle },
  { label: "AR Lessons", value: "32", trend: "↑ 16%", tone: "teal", icon: Target },
];

const subjectDistribution = [
  { name: "Mathematics", pct: "22%", color: "#3b82f6" },
  { name: "Science", pct: "18%", color: "#06b6d4" },
  { name: "Computer Science", pct: "16%", color: "#8b5cf6" },
  { name: "English", pct: "12%", color: "#f97316" },
  { name: "Social Science", pct: "10%", color: "#ec4899" },
  { name: "Others", pct: "22%", color: "#a855f7" },
];

const subjectPerformance = [
  { name: "Mathematics", score: 92, color: "from-blue-500 to-indigo-600" },
  { name: "Science", score: 78, color: "from-cyan-400 to-blue-500" },
  { name: "Computer Science", score: 86, color: "from-purple-500 to-pink-500" },
  { name: "English", score: 63, color: "from-amber-400 to-orange-500" },
  { name: "Social Science", score: 56, color: "from-pink-500 to-rose-500" },
  { name: "Arts & Design", score: 42, color: "from-rose-400 to-red-500" },
];

const studentProgressList = [
  { rank: 1, name: "Aravind Kumar", avatar: "AK", subject: "Mathematics", progress: 92, status: "On Track" },
  { rank: 2, name: "Priya Dharshini", avatar: "PD", subject: "Science", progress: 78, status: "On Track" },
  { rank: 3, name: "Karthik S", avatar: "KS", subject: "Computer Science", progress: 85, status: "On Track" },
  { rank: 4, name: "Sneha V", avatar: "SV", subject: "English", progress: 71, status: "In Progress" },
  { rank: 5, name: "Vignesh R", avatar: "VR", subject: "Mathematics", progress: 63, status: "Needs Help" },
];

const analyticsActivities = [
  { title: "New student registered", sub: "Aravind Kumar - CSE", time: "2 hours ago", tone: "blue" },
  { title: "Quiz completed", sub: "Mathematics Quiz - II Year", time: "4 hours ago", tone: "pink" },
  { title: "AR lesson viewed", sub: "Human Heart Anatomy", time: "6 hours ago", tone: "cyan" },
  { title: "Attendance updated", sub: "II Year - CSE", time: "8 hours ago", tone: "teal" },
  { title: "New quiz created", sub: "Physics Quiz", time: "1 day ago", tone: "purple" },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("Last 7 Days");

  return (
    <NavigationShell
      activePage="Analytics"
      showGreeting
      searchPlaceholder="Search analytics, reports, students, subjects..."
      greetingSubtitle="Create · Manage · Share  |  RIXA Analytics"
    >
      <div className="analytics-page-container">

        {/* 1. TOP SECTION: Hero Banner + Right Date & Student Activity Card */}
        <section className="analytics-top-layout">
          {/* Main Hero Banner */}
          <div className="analytics-hero-card glass-panel">
            <div className="analytics-hero-copy">
              <span className="analytics-badge-tag">
                <Sparkles size={11} /> Analytics Overview
              </span>
              <h2 className="analytics-hero-title">Learning Analytics</h2>
              <p className="analytics-hero-sub">
                Track progress, measure performance and make data-driven decisions for better learning outcomes.
              </p>

              <div className="analytics-hero-pills">
                <span className="analytics-pill">
                  <BarChart3 size={12} className="text-cyan-500" /> Real-time Data
                </span>
                <span className="analytics-pill">
                  <Sparkles size={12} className="text-blue-500" /> Smart Insights
                </span>
                <span className="analytics-pill">
                  <Award size={12} className="text-purple-500" /> Better Decisions
                </span>
                <span className="analytics-pill">
                  <TrendingUp size={12} className="text-teal-500" /> Student Growth
                </span>
              </div>
            </div>

            {/* 3D Visual Stage: Holographic Analytics Dashboard + Charts */}
            <div className="analytics-hero-visual">
              <div className="hologram-screen-wrap">
                <div className="holo-screen-base">
                  <div className="holo-header-bar">
                    <span className="holo-dot" />
                    <span className="holo-dot" />
                    <span className="holo-dot" />
                  </div>
                  <div className="holo-chart-row">
                    <div className="holo-bars">
                      <span style={{ height: "40%" }} />
                      <span style={{ height: "65%" }} />
                      <span style={{ height: "50%" }} />
                      <span style={{ height: "85%" }} />
                      <span style={{ height: "100%" }} />
                    </div>
                    <div className="holo-pie">
                      <div className="holo-pie-hole" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-metric-badge">
                <TrendingUp size={13} className="text-white" />
              </div>
            </div>
          </div>

          {/* Top Right: Date Range Selector + Student Activity Donut */}
          <div className="analytics-top-side glass-panel">
            {/* Date Range Pill */}
            <div className="date-range-badge">
              <Calendar size={12} className="text-blue-500" />
              <span>26 Oct 2026 - 26 Oct 2026</span>
            </div>

            {/* Student Activity Donut */}
            <div className="student-activity-card">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="side-heading">Student Activity</h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline flex items-center">
                  View All <ArrowRight size={10} className="ml-0.5" />
                </button>
              </div>

              <div className="activity-donut-flex">
                <div className="activity-donut-ring">
                  <div className="donut-core">
                    <strong className="text-[15px] font-black text-[#172d69]">76%</strong>
                    <span className="text-[6.5px] text-slate-500 font-semibold">Active Users</span>
                  </div>
                </div>

                <div className="activity-donut-legend">
                  <div className="donut-legend-item">
                    <span className="donut-legend-dot bg-cyan-500" />
                    <span className="donut-legend-label">Active</span>
                    <strong className="donut-legend-val">37 (76%)</strong>
                  </div>
                  <div className="donut-legend-item">
                    <span className="donut-legend-dot bg-pink-500" />
                    <span className="donut-legend-label">Inactive</span>
                    <strong className="donut-legend-val">11 (24%)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ROW OF 6 KPI METRIC CARDS */}
        <div className="analytics-metrics-grid">
          {topStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="analytics-kpi-card glass-panel">
                <div className="flex items-center justify-between">
                  <span className="kpi-label">{stat.label}</span>
                  <div className={`kpi-icon-orb tone-${stat.tone}`}>
                    <Icon size={12} />
                  </div>
                </div>
                <strong className="kpi-val">{stat.value}</strong>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="kpi-trend">↑ {stat.trend.replace("↑ ", "")}</span>
                  {/* Mini Sparkline Line */}
                  <svg className="kpi-sparkline" viewBox="0 0 40 12" fill="none">
                    <path
                      d="M1 9L10 6L18 8L28 3L39 7"
                      stroke={stat.tone === "blue" ? "#3b82f6" : stat.tone === "purple" ? "#8b5cf6" : stat.tone === "cyan" ? "#06b6d4" : stat.tone === "indigo" ? "#6366f1" : stat.tone === "pink" ? "#ec4899" : "#0d9488"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. MIDDLE CHARTS ROW: Student Progress Line Chart (Left) + Subject-wise Distribution Donut (Center) + Subject Performance (Right) */}
        <div className="analytics-middle-layout">
          {/* Main Area: Progress Line Chart + Donut */}
          <div className="analytics-charts-split">
            {/* Student Progress Overview Wave/Line Chart */}
            <div className="progress-overview-card glass-panel">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="section-title">Student Progress Overview</h3>
                  <p className="section-sub">Overall learning progress across all subjects and units</p>
                </div>
                <button className="time-select-btn">
                  <Calendar size={11} />
                  <span>{timeRange}</span>
                  <ChevronDown size={11} />
                </button>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-4 mb-2 text-[7.5px] font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7]" /> Completed
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#a855f7]" /> In Progress
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" /> Not Started
                </span>
              </div>

              {/* SVG Multi-Line Chart */}
              <div className="progress-svg-chart-wrap">
                <svg viewBox="0 0 400 130" className="w-full h-full" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="20" y1="10" x2="395" y2="10" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="20" y1="35" x2="395" y2="35" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="20" y1="65" x2="395" y2="65" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="20" y1="95" x2="395" y2="95" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="20" y1="120" x2="395" y2="120" stroke="#cbd5e1" strokeWidth="0.8" />

                  {/* Y-axis labels */}
                  <text x="2" y="13" fontSize="6.5" fill="#94a3b8">100</text>
                  <text x="5" y="38" fontSize="6.5" fill="#94a3b8">80</text>
                  <text x="5" y="68" fontSize="6.5" fill="#94a3b8">60</text>
                  <text x="5" y="98" fontSize="6.5" fill="#94a3b8">40</text>
                  <text x="5" y="122" fontSize="6.5" fill="#94a3b8">0</text>

                  {/* Line 1: Completed (Cyan/Blue) */}
                  <path
                    d="M30,68 C70,62 100,50 140,58 C180,66 210,38 260,35 C310,42 340,30 385,32"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2"
                  />
                  <circle cx="30" cy="68" r="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="140" cy="58" r="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="260" cy="35" r="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="385" cy="32" r="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />

                  {/* Line 2: In Progress (Purple) */}
                  <path
                    d="M30,88 C70,82 100,80 140,88 C180,75 210,82 260,78 C310,68 340,72 385,65"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                  <circle cx="30" cy="88" r="3" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="140" cy="88" r="3" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="260" cy="78" r="3" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="385" cy="65" r="3" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />

                  {/* Line 3: Not Started (Emerald Green) */}
                  <path
                    d="M30,105 C70,108 100,105 140,110 C180,102 210,105 260,108 C310,106 340,108 385,104"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                  <circle cx="30" cy="105" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="140" cy="110" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="260" cy="108" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="385" cy="104" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                </svg>

                {/* X-axis date labels */}
                <div className="flex justify-between pl-6 pr-2 pt-1 text-[6.5px] text-slate-500 font-semibold">
                  <span>Oct 20</span>
                  <span>Oct 21</span>
                  <span>Oct 22</span>
                  <span>Oct 23</span>
                  <span>Oct 24</span>
                  <span>Oct 25</span>
                  <span>Oct 26</span>
                </div>
              </div>
            </div>

            {/* Subject-wise Distribution Donut Card */}
            <div className="subject-dist-card glass-panel">
              <h3 className="section-title mb-2">Subject-wise Distribution</h3>
              <div className="subject-donut-stage">
                <div className="subject-donut-wheel">
                  <div className="donut-core-subjects">
                    <strong className="text-[18px] font-black text-[#172d69]">8</strong>
                    <span className="text-[6.5px] text-slate-500 font-semibold">Subjects</span>
                  </div>
                </div>

                <div className="subject-donut-legend-grid">
                  {subjectDistribution.map((item) => (
                    <div key={item.name} className="sub-legend-row">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="sub-legend-name">{item.name}</span>
                      <strong className="sub-legend-pct">{item.pct}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Top: Subject Performance Card */}
          <div className="subject-perf-card glass-panel">
            <div className="flex items-center justify-between mb-2">
              <h4 className="side-heading">Subject Performance</h4>
              <button className="text-[9px] font-semibold text-[#0284c7] hover:underline flex items-center">
                View All <ArrowRight size={10} className="ml-0.5" />
              </button>
            </div>

            <div className="subject-bars-list">
              {subjectPerformance.map((item) => (
                <div key={item.name} className="perf-item-row">
                  <div className="flex items-center justify-between text-[7.5px] mb-1">
                    <span className="font-bold text-[#172d69]">{item.name}</span>
                    <strong className="text-slate-600 font-bold">{item.score}%</strong>
                  </div>
                  <div className="perf-track">
                    <div
                      className={`perf-fill bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. BOTTOM WORKSPACE: Performance Insights + Student Progress Mini-Table + Right Activity/AI Card */}
        <div className="analytics-bottom-layout">
          {/* Left/Center Area: Insights & Mini Student Progress */}
          <div className="analytics-bottom-center">
            {/* Performance Insights 4 Cards */}
            <div className="perf-insights-card glass-panel">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-500 text-[13px]">💡</span>
                  <h3 className="section-title">Performance Insights</h3>
                </div>
                <span className="ai-insights-pill">
                  <Sparkles size={9} /> AI Powered Insights
                </span>
              </div>

              <div className="insights-quad-grid">
                <div className="insight-box glass-panel">
                  <div className="flex items-start gap-2">
                    <div className="insight-icon-orb bg-blue-50 text-blue-500">
                      <BookOpen size={12} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="insight-cat">Highest Performance</span>
                      <strong className="insight-title">Computer Science</strong>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[7.5px] font-black text-[#172d69]">92%</span>
                        <span className="text-[6.5px] text-slate-500">Avg. Score</span>
                        <span className="text-[6.5px] font-bold text-emerald-600">↑ 12%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="insight-box glass-panel">
                  <div className="flex items-start gap-2">
                    <div className="insight-icon-orb bg-pink-50 text-pink-500">
                      <ShieldAlert size={12} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="insight-cat">Needs Attention</span>
                      <strong className="insight-title">English</strong>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[7.5px] font-black text-[#172d69]">63%</span>
                        <span className="text-[6.5px] text-slate-500">Avg. Score</span>
                        <span className="text-[6.5px] font-bold text-rose-600">↓ 5%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="insight-box glass-panel">
                  <div className="flex items-start gap-2">
                    <div className="insight-icon-orb bg-emerald-50 text-emerald-500">
                      <TrendingUp size={12} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="insight-cat">Fastest Growth</span>
                      <strong className="insight-title">Science</strong>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[7.5px] font-black text-[#172d69]">+18%</span>
                        <span className="text-[6.5px] text-slate-500">Improvement</span>
                        <span className="text-[6.5px] font-bold text-emerald-600">↑</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="insight-box glass-panel">
                  <div className="flex items-start gap-2">
                    <div className="insight-icon-orb bg-purple-50 text-purple-500">
                      <Users size={12} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="insight-cat">Most Active Class</span>
                      <strong className="insight-title">II Year - CSE</strong>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[7.5px] font-black text-[#172d69]">88%</span>
                        <span className="text-[6.5px] text-slate-500">Participation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Progress Mini Table */}
            <div className="student-progress-mini-card glass-panel">
              <div className="flex items-center justify-between mb-2">
                <h3 className="section-title">Student Progress</h3>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline flex items-center">
                  View Details <ArrowRight size={10} className="ml-0.5" />
                </button>
              </div>

              <div className="mini-table-responsive">
                <table className="mini-data-table">
                  <thead>
                    <tr>
                      <th className="w-6">#</th>
                      <th>Name</th>
                      <th>Subject</th>
                      <th className="w-32">Progress</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentProgressList.map((st) => (
                      <tr key={st.rank}>
                        <td className="text-slate-500 font-semibold">{st.rank}</td>
                        <td>
                          <div className="flex items-center gap-1.5">
                            <div className="mini-avatar">
                              <span>{st.avatar}</span>
                            </div>
                            <span className="font-bold text-[#172d69]">{st.name}</span>
                          </div>
                        </td>
                        <td className="text-slate-600 font-medium">{st.subject}</td>
                        <td>
                          <div className="flex items-center gap-2">
                            <div className="mini-progress-track">
                              <div
                                className="mini-progress-fill"
                                style={{ width: `${st.progress}%` }}
                              />
                            </div>
                            <span className="text-[7.5px] font-bold text-slate-700">{st.progress}%</span>
                          </div>
                        </td>
                        <td>
                          <span
                            className={`mini-status-pill ${
                              st.status === "On Track"
                                ? "bg-emerald-50 text-emerald-600"
                                : st.status === "In Progress"
                                ? "bg-blue-50 text-blue-600"
                                : "bg-amber-50 text-amber-600"
                            }`}
                          >
                            {st.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column Bottom: Recent Activity & Quote Card */}
          <aside className="analytics-side-column">
            {/* Recent Activity Card */}
            <div className="analytics-activity-card glass-panel">
              <div className="flex items-center justify-between mb-2">
                <h4 className="side-heading">Recent Activity</h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="analytics-activities-list">
                {analyticsActivities.map((act, i) => (
                  <div key={i} className="analytics-act-row">
                    <div className={`analytics-act-icon tone-${act.tone}`}>
                      <Users size={11} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="analytics-act-title truncate">{act.title}</p>
                      <p className="analytics-act-sub truncate">{act.sub}</p>
                    </div>
                    <span className="analytics-act-time">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Mascot Quote Card */}
            <div className="analytics-ai-quote-card glass-panel">
              <div className="quote-flex-content">
                <p className="analytics-quote-text">
                  “Data is not just numbers, it&apos;s the story of every learner&apos;s journey.”
                </p>
                <span className="analytics-quote-sig">— RIXA AI</span>
              </div>

              <div className="analytics-robot-mascot">
                <div className="mascot-face" />
              </div>
            </div>
          </aside>
        </div>

        {/* 5. QUICK ANALYTICS ACTIONS (Bottom Row) */}
        <section className="quick-analytics-actions-section">
          <div className="mb-2">
            <h4 className="text-[10px] font-bold text-[#172d69]">Quick Analytics Actions</h4>
            <p className="text-[7.5px] text-slate-500">Get detailed reports and insights with one click.</p>
          </div>

          <div className="quick-actions-bar">
            <button className="quick-action-pill-btn">
              <div className="quick-btn-icon bg-purple-50 text-purple-600">
                <FileText size={12} />
              </div>
              <div className="text-left">
                <span className="quick-btn-title">Generate Report</span>
                <span className="quick-btn-sub">Download detailed PDF</span>
              </div>
            </button>

            <button className="quick-action-pill-btn">
              <div className="quick-btn-icon bg-emerald-50 text-emerald-600">
                <BarChart3 size={12} />
              </div>
              <div className="text-left">
                <span className="quick-btn-title">View Subject Analytics</span>
                <span className="quick-btn-sub">Subject-wise performance</span>
              </div>
            </button>

            <button className="quick-action-pill-btn">
              <div className="quick-btn-icon bg-pink-50 text-pink-600">
                <Users size={12} />
              </div>
              <div className="text-left">
                <span className="quick-btn-title">Student Performance</span>
                <span className="quick-btn-sub">Individual &amp; class reports</span>
              </div>
            </button>

            <button className="quick-action-pill-btn">
              <div className="quick-btn-icon bg-amber-50 text-amber-600">
                <Download size={12} />
              </div>
              <div className="text-left">
                <span className="quick-btn-title">Export Data</span>
                <span className="quick-btn-sub">CSV / Excel</span>
              </div>
            </button>

            <button className="quick-action-pill-btn">
              <div className="quick-btn-icon bg-cyan-50 text-cyan-600">
                <Sparkles size={12} />
              </div>
              <div className="text-left">
                <span className="quick-btn-title">AI Insights</span>
                <span className="quick-btn-sub">Smart recommendations</span>
              </div>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="dashboard-footer mt-2">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; Analytics</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 26 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}

