"use client";

import React, { useState } from "react";
import {
  Users, UserCheck, UserX, GraduationCap, CalendarCheck, Clock,
  Search, ChevronDown, Plus, Grid2X2, List, MoreVertical,
  ArrowRight, Sparkles, BookOpen, Layers, CheckCircle2,
  Calendar, Award, SlidersHorizontal
} from "lucide-react";
import NavigationShell from "./NavigationShell";

interface Student {
  id: number;
  name: string;
  avatar: string;
  avatarTone: string;
  rollNumber: string;
  department: string;
  year: string;
  status: "Active" | "On Leave" | "Inactive";
  progress: number;
}

const studentData: Student[] = [
  {
    id: 1,
    name: "Aravind Kumar",
    avatar: "AK",
    avatarTone: "from-blue-500 to-indigo-600",
    rollNumber: "RIXA001",
    department: "Computer Science",
    year: "III Year",
    status: "Active",
    progress: 92
  },
  {
    id: 2,
    name: "Priya Dharshini",
    avatar: "PD",
    avatarTone: "from-pink-500 to-rose-600",
    rollNumber: "RIXA002",
    department: "Electronics & Comm.",
    year: "II Year",
    status: "Active",
    progress: 78
  },
  {
    id: 3,
    name: "Karthik S",
    avatar: "KS",
    avatarTone: "from-amber-500 to-orange-600",
    rollNumber: "RIXA003",
    department: "Mechanical",
    year: "II Year",
    status: "Active",
    progress: 85
  },
  {
    id: 4,
    name: "Sneha V",
    avatar: "SV",
    avatarTone: "from-purple-500 to-violet-600",
    rollNumber: "RIXA004",
    department: "Civil Engineering",
    year: "III Year",
    status: "Active",
    progress: 71
  },
  {
    id: 5,
    name: "Vignesh R",
    avatar: "VR",
    avatarTone: "from-teal-500 to-emerald-600",
    rollNumber: "RIXA005",
    department: "IT",
    year: "I Year",
    status: "Active",
    progress: 63
  },
  {
    id: 6,
    name: "Divya S",
    avatar: "DS",
    avatarTone: "from-cyan-500 to-blue-600",
    rollNumber: "RIXA006",
    department: "CSE (AI & DS)",
    year: "I Year",
    status: "On Leave",
    progress: 45
  },
  {
    id: 7,
    name: "Logesh M",
    avatar: "LM",
    avatarTone: "from-indigo-500 to-purple-600",
    rollNumber: "RIXA007",
    department: "Mechanical",
    year: "III Year",
    status: "Active",
    progress: 88
  },
  {
    id: 8,
    name: "Keerthana P",
    avatar: "KP",
    avatarTone: "from-rose-500 to-pink-600",
    rollNumber: "RIXA008",
    department: "ECE",
    year: "I Year",
    status: "Inactive",
    progress: 32
  }
];

const studentActivities = [
  { title: "New student registered", sub: "Aravind Kumar - CSE", time: "2 hours ago", tone: "blue" },
  { title: "Attendance updated", sub: "Priya Dharshini - ECE", time: "3 hours ago", tone: "cyan" },
  { title: "Profile updated", sub: "Karthik S - MECH", time: "5 hours ago", tone: "purple" },
  { title: "New student registered", sub: "Sneha V - CIVIL", time: "6 hours ago", tone: "blue" }
];

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedIds, setSelectedIds] = useState<number[]>([1]);

  const toggleSelectAll = () => {
    if (selectedIds.length === studentData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(studentData.map(s => s.id));
    }
  };

  const toggleSelect = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredStudents = studentData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) ||
                          student.rollNumber.toLowerCase().includes(search.toLowerCase()) ||
                          student.department.toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === "All Departments" || student.department === selectedDept;
    const matchesYear = selectedYear === "All Years" || student.year === selectedYear;
    const matchesStatus = selectedStatus === "All Status" || student.status === selectedStatus;
    return matchesSearch && matchesDept && matchesYear && matchesStatus;
  });

  return (
    <NavigationShell
      activePage="Students"
      showGreeting
      searchPlaceholder="Search students, roll numbers, departments..."
      greetingSubtitle="Create · Manage · Share  |  RIXA Students"
    >
      <div className="students-page-container">

        {/* 1. TOP LAYOUT: Hero Card + Student Overview Card */}
        <section className="students-top-layout">
          {/* Main Hero Card */}
          <div className="students-hero-card glass-panel">
            <div className="students-hero-copy">
              <h2 className="students-hero-title">Student Management</h2>
              <p className="students-hero-sub">
                View, manage and track student progress, attendance and performance in one place.
              </p>

              <div className="students-hero-pills">
                <span className="student-pill">
                  <GraduationCap size={12} className="text-cyan-500" /> Track Progress
                </span>
                <span className="student-pill">
                  <Users size={12} className="text-blue-500" /> Manage Groups
                </span>
                <span className="student-pill">
                  <CalendarCheck size={12} className="text-purple-500" /> Attendance
                </span>
                <span className="student-pill">
                  <Award size={12} className="text-teal-500" /> Better Learning
                </span>
              </div>
            </div>

            {/* Right: 3D Illustrated Students Characters */}
            <div className="students-hero-visual">
              <div className="students-avatar-cluster">
                {/* 3D Student 1 */}
                <div className="student-char s1">
                  <div className="char-head male-1" />
                  <div className="char-body shirt-blue" />
                </div>
                {/* 3D Student 2 */}
                <div className="student-char s2">
                  <div className="char-head female-1" />
                  <div className="char-body shirt-light" />
                </div>
                {/* 3D Student 3 */}
                <div className="student-char s3">
                  <div className="char-head male-2" />
                  <div className="char-body shirt-blue" />
                </div>
                {/* 3D Student 4 with headphones */}
                <div className="student-char s4">
                  <div className="char-head female-2" />
                  <div className="char-body shirt-purple" />
                </div>
              </div>
              {/* Floating ambient badge */}
              <div className="floating-student-badge">
                <Users size={14} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Column Top: Student Overview Donut + Dept Chart */}
          <div className="students-overview-card glass-panel">
            <div className="card-header-row flex items-center justify-between mb-2">
              <h3 className="card-heading">Student Overview</h3>
            </div>

            {/* Donut Chart & Legend */}
            <div className="student-donut-wrap">
              <div className="student-donut-circle">
                <div className="donut-hole">
                  <strong className="text-[17px] font-black text-[#172d69]">48</strong>
                  <span className="text-[6.5px] text-slate-500 font-semibold">Total Students</span>
                </div>
              </div>

              <div className="student-donut-legend">
                <div className="legend-row">
                  <span className="legend-dot active" />
                  <span className="legend-title">Active</span>
                  <span className="legend-count">42 (88%)</span>
                </div>
                <div className="legend-row">
                  <span className="legend-dot inactive" />
                  <span className="legend-title">Inactive</span>
                  <span className="legend-count">6 (12%)</span>
                </div>
              </div>
            </div>

            {/* Department Distribution Mini Bars */}
            <div className="dept-dist-section mt-2 pt-2 border-t border-slate-100">
              <span className="text-[8px] font-bold text-slate-700 block mb-2">Department Distribution</span>
              <div className="dept-bars-chart">
                <div className="dept-bar-col"><span style={{ height: "100%" }} /><b>12</b><small>CSE</small></div>
                <div className="dept-bar-col"><span style={{ height: "66%" }} /><b>8</b><small>ECE</small></div>
                <div className="dept-bar-col"><span style={{ height: "58%" }} /><b>7</b><small>MECH</small></div>
                <div className="dept-bar-col"><span style={{ height: "50%" }} /><b>6</b><small>CIVIL</small></div>
                <div className="dept-bar-col"><span style={{ height: "41%" }} /><b>5</b><small>IT</small></div>
                <div className="dept-bar-col"><span style={{ height: "83%" }} /><b>10</b><small>Other</small></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ROW OF 6 METRIC CARDS */}
        <div className="students-stats-grid">
          <div className="metric-box glass-panel">
            <div className="flex items-center justify-between">
              <span className="metric-label">Total Students</span>
              <div className="metric-icon-orb bg-cyan-50 text-cyan-500"><Users size={12} /></div>
            </div>
            <strong className="metric-val">48</strong>
            <span className="metric-trend green">↑ 12%</span>
          </div>

          <div className="metric-box glass-panel">
            <div className="flex items-center justify-between">
              <span className="metric-label">Active Students</span>
              <div className="metric-icon-orb bg-emerald-50 text-emerald-500"><UserCheck size={12} /></div>
            </div>
            <strong className="metric-val">42</strong>
            <span className="metric-trend green">↑ 8%</span>
          </div>

          <div className="metric-box glass-panel">
            <div className="flex items-center justify-between">
              <span className="metric-label">Inactive Students</span>
              <div className="metric-icon-orb bg-pink-50 text-pink-500"><UserX size={12} /></div>
            </div>
            <strong className="metric-val">6</strong>
            <span className="metric-trend red">↓ 2%</span>
          </div>

          <div className="metric-box glass-panel">
            <div className="flex items-center justify-between">
              <span className="metric-label">Avg. Progress</span>
              <div className="metric-icon-orb bg-purple-50 text-purple-500"><GraduationCap size={12} /></div>
            </div>
            <strong className="metric-val">76%</strong>
            <span className="metric-trend green">↑ 15%</span>
          </div>

          <div className="metric-box glass-panel">
            <div className="flex items-center justify-between">
              <span className="metric-label">Today Present</span>
              <div className="metric-icon-orb bg-teal-50 text-teal-500"><CalendarCheck size={12} /></div>
            </div>
            <strong className="metric-val">36/48</strong>
            <span className="metric-trend green">↑ 6%</span>
          </div>

          <div className="metric-box glass-panel">
            <div className="flex items-center justify-between">
              <span className="metric-label">On Leave</span>
              <div className="metric-icon-orb bg-orange-50 text-orange-500"><Clock size={12} /></div>
            </div>
            <strong className="metric-val">3</strong>
            <span className="metric-trend red">↓ 1%</span>
          </div>
        </div>

        {/* 3. TOOLBAR ROW */}
        <div className="students-toolbar-row">
          <div className="students-search-wrap">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search students by name, roll number, or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search students"
            />
          </div>

          <div className="students-filters-wrap">
            <div className="filter-select-pill">
              <span>{selectedDept}</span>
              <ChevronDown size={13} />
            </div>

            <div className="filter-select-pill">
              <span>{selectedYear}</span>
              <ChevronDown size={13} />
            </div>

            <div className="filter-select-pill">
              <span>{selectedStatus}</span>
              <ChevronDown size={13} />
            </div>
          </div>

          <div className="students-toolbar-actions">
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

            <button className="add-student-btn">
              <Plus size={15} />
              <span>Add New Student</span>
            </button>
          </div>
        </div>

        {/* 4. MAIN BOTTOM SECTION: Table Card + Right Sidebar */}
        <div className="students-bottom-layout">
          {/* Student List Table Card */}
          <div className="students-table-card glass-panel">
            <div className="table-card-header mb-2">
              <h3 className="section-title">Student List</h3>
              <p className="section-sub">Manage and view all registered students</p>
            </div>

            <div className="students-table-responsive">
              <table className="students-data-table">
                <thead>
                  <tr>
                    <th className="w-8">
                      <input
                        type="checkbox"
                        checked={selectedIds.length === studentData.length}
                        onChange={toggleSelectAll}
                        className="rounded"
                      />
                    </th>
                    <th className="w-8">#</th>
                    <th className="w-12">Photo</th>
                    <th>Name</th>
                    <th>Roll Number</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th className="w-32">Progress</th>
                    <th className="w-10">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => {
                    const isChecked = selectedIds.includes(student.id);
                    return (
                      <tr key={student.id} className={isChecked ? "row-selected" : ""}>
                        <td>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleSelect(student.id)}
                            className="rounded"
                          />
                        </td>
                        <td className="text-slate-500 font-semibold">{student.id}</td>
                        <td>
                          <div className={`student-photo-avatar bg-gradient-to-tr ${student.avatarTone}`}>
                            <span>{student.avatar}</span>
                          </div>
                        </td>
                        <td className="font-bold text-[#172d69]">{student.name}</td>
                        <td className="font-medium text-slate-500">{student.rollNumber}</td>
                        <td className="font-medium text-slate-700">{student.department}</td>
                        <td className="text-blue-600 font-semibold">{student.year}</td>
                        <td>
                          <span className={`status-pill status-${student.status.toLowerCase().replace(" ", "-")}`}>
                            {student.status}
                          </span>
                        </td>
                        <td>
                          <div className="progress-cell">
                            <div className="progress-track">
                              <div
                                className="progress-bar-fill"
                                style={{ width: `${student.progress}%` }}
                              />
                            </div>
                            <span className="progress-num">{student.progress}%</span>
                          </div>
                        </td>
                        <td>
                          <button className="actions-menu-btn" aria-label="Actions">
                            <MoreVertical size={13} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination Row */}
            <div className="table-pagination-row mt-2">
              <span className="page-info">Showing 1-8 of 48 students</span>
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
          <aside className="students-side-panel">
            {/* Recent Activity Card */}
            <div className="students-activity-card glass-panel">
              <div className="card-header-row flex items-center justify-between mb-2">
                <h4 className="side-heading">Recent Activity</h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="activity-items-list">
                {studentActivities.map((act, i) => (
                  <div key={i} className="activity-item-row">
                    <div className={`activity-icon-orb tone-${act.tone}`}>
                      <Users size={12} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="activity-title truncate">{act.title}</p>
                      <p className="activity-sub truncate">{act.sub}</p>
                    </div>
                    <span className="activity-time">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Callout Card with 3D Robot */}
            <div className="students-ai-callout-card glass-panel">
              <div className="callout-header flex items-center gap-1.5 mb-1.5">
                <Sparkles size={13} className="text-purple-600" />
                <h4 className="text-[10px] font-bold text-[#172d69]">RIXA AI Assistant</h4>
              </div>

              <p className="ai-callout-quote">
                “Need help managing students? I can assist you with attendance, progress reports and more!”
              </p>

              <div className="flex items-center justify-between mt-2">
                <button className="ask-rixa-pill-btn">
                  <span>Ask RIXA</span> <ArrowRight size={11} />
                </button>

                <div className="robot-mascot-orb">
                  <div className="mascot-visor" />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer mt-2">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; Students</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 26 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}
