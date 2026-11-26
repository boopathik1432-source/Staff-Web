"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Activity, ArrowRight, BarChart3, Bell, BookOpen, Boxes, BrainCircuit,
  ChevronDown, ChevronRight, Clock3, Grid2X2, HeartPulse, List, Menu, Microscope,
  MoreVertical, Network, Palette, Plus, QrCode, Search, Settings, Sparkles,
  Target, Users, X, Zap
} from "lucide-react";

const navigation = [
  ["Dashboard", Activity], ["Subjects", BookOpen], ["Units", Boxes], ["Topics", Network],
  ["AI Content", BrainCircuit], ["AR Lessons", Target], ["Quiz Builder", BookOpen],
  ["QR Generator", QrCode], ["Students", Users], ["Analytics", BarChart3],
  ["Notifications", Bell], ["Settings", Settings],
] as const;

const subjects = [
  { title: "Science", description: "Explore the wonders of the natural world.", units: "5 Units", topics: "18 Topics", students: "245 Students", icon: Microscope, tone: "cyan" },
  { title: "Mathematics", description: "Build logical thinking and problem solving skills.", units: "4 Units", topics: "12 Topics", students: "198 Students", icon: Network, tone: "purple" },
  { title: "Technology", description: "Innovate, build and shape the future.", units: "3 Units", topics: "10 Topics", students: "166 Students", icon: BrainCircuit, tone: "blue" },
  { title: "Language", description: "Communicate, express and connect.", units: "2 Units", topics: "8 Topics", students: "132 Students", icon: BookOpen, tone: "pink" },
  { title: "Social Science", description: "Understand people, cultures and societies.", units: "2 Units", topics: "6 Topics", students: "98 Students", icon: Activity, tone: "cyan" },
  { title: "Computer Science", description: "Code today, build tomorrow.", units: "4 Units", topics: "14 Topics", students: "210 Students", icon: Boxes, tone: "purple" },
  { title: "Arts & Design", description: "Create, imagine and express.", units: "3 Units", topics: "9 Topics", students: "87 Students", icon: Palette, tone: "orange" },
  { title: "Health & Fitness", description: "Healthy body, healthy mind.", units: "2 Units", topics: "5 Topics", students: "64 Students", icon: HeartPulse, tone: "green" },
];

function IconBubble({ tone = "cyan", children }: { tone?: string; children: React.ReactNode }) {
  return <span className={`icon-bubble ${tone}`}>{children}</span>;
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-panel ${className}`}>{children}</div>;
}

export default function Dashboard({ activePage = "Subjects" }: { activePage?: string }) {
  const [sidebar, setSidebar] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const router = useRouter();

  return (
    <main className="dashboard-shell">
      {sidebar && <button className="sidebar-backdrop lg:hidden" onClick={() => setSidebar(false)} aria-label="Close menu" />}
      <aside className={`dashboard-sidebar ${sidebar ? "sidebar-open" : ""}`}>
        <div className="flex items-center justify-between"><div><img className="rixa-logo" src="/rixa-ar-logo.png" alt="RIXA AR Smart Learning" /><p className="ml-1 text-[7px] font-bold tracking-[.24em] text-[#5273b1]">AR SMART LEARNING</p></div><button onClick={() => setSidebar(false)} className="lg:hidden"><X size={19} /></button></div>
        <nav className="mt-8 space-y-1">
          {navigation.map(([label, Icon]) => <button key={label} onClick={() => { setSidebar(false); router.push(label === "Dashboard" ? "/dashboard" : `/${label.toLowerCase().replaceAll(" ", "-")}`); }} className={`side-link ${label === activePage ? "side-link-active" : ""}`}><Icon size={17} /> <span>{label}</span>{label === "Notifications" && <b className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#ff3d70] text-[9px] text-white">3</b>}{label === activePage && <ChevronRight className="ml-auto" size={14} />}</button>)}
        </nav>
        <div className="mt-auto"><div className="assistant-card"><div className="robot-orb"><BrainCircuit size={22} /></div><div className="min-w-0"><p className="text-[12px] font-bold text-[#264687]">RIXA AI Assistant</p><p className="mt-1 truncate text-[9px] text-[#7792c5]">Ask RIXA anything...</p></div><button className="ml-auto rounded-full bg-white/70 p-1.5 text-[#3d8cf1]"><ArrowRight size={14} /></button></div><p className="mt-5 text-[9px] text-[#7b98c8]">© 2026 RIXA AR Smart Learning</p></div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header"><div className="flex items-center gap-3"><button onClick={() => setSidebar(true)} className="rounded-lg p-2 hover:bg-white/70 lg:hidden"><Menu size={21} /></button>{activePage === "Dashboard" && <div className="dashboard-header-greeting"><h1 className="text-[15px] font-bold text-[#172d6c] sm:text-[17px]">👋 Good Morning, Staff!</h1><p className="text-[9px] text-[#7994c6]">Create · Manage · Inspire &nbsp;|&nbsp; RIXA Staff Dashboard</p></div>}</div><div className="dashboard-search"><Search size={16} /><input placeholder="Search subjects, units, topics..." aria-label="Search subjects" /></div><div className="flex items-center gap-4"><button className="relative rounded-full border border-white/80 bg-white/55 p-2.5 text-[#5580c5]"><Bell size={17} /><b className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff3d68] text-[9px] text-white">3</b></button><div className="flex items-center gap-2"><div className="profile-avatar">SM</div><div className="hidden leading-tight sm:block"><p className="text-[10px] font-bold text-[#243d78]">Staff Member</p><p className="text-[9px] text-[#7893c3]">Admin</p></div><ChevronRight size={14} className="text-[#6590ca]" /></div></div></header>

        <div className="dashboard-content subjects-content">
          <div className="subject-toolbar"><div className="subject-search"><Search size={15} /><input placeholder="Search subjects..." aria-label="Filter subjects" /></div><button className="unit-select">All Subjects <ChevronDown size={13} /></button><div className="view-toggle"><button onClick={() => setView("grid")} className={view === "grid" ? "view-active" : ""}><Grid2X2 size={16} /></button><button onClick={() => setView("list")} className={view === "list" ? "view-active" : ""}><List size={16} /></button></div><button className="add-unit"><Plus size={14} /> Add New Subject</button></div>

          <div className={`subjects-grid ${view === "list" ? "subjects-list" : ""}`}>{subjects.map((subject, index) => <motion.div key={subject.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .035 }} whileHover={{ y: -3 }} className="subject-card"><div className="subject-card-top"><div className={`subject-visual ${subject.tone}`}><IconBubble tone={subject.tone}><subject.icon size={37} /></IconBubble></div><button className="subject-menu"><MoreVertical size={16} /></button></div><h3>{subject.title}</h3><span className="units-pill">{subject.units}</span><div className="subject-divider" /><div className="subject-meta"><span><Sparkles size={12} /> {subject.topics}</span><span><Users size={12} /> {subject.students}</span></div><div className="subject-actions"><button>View Details</button><button>Manage <ArrowRight size={12} /></button></div></motion.div>)}</div>

        </div>
        <footer className="dashboard-footer"><span><Zap size={10} /> RIXA AR Smart Learning &nbsp;|&nbsp; Empowering the next generation</span><span className="hidden sm:flex"><i /> System Online &nbsp; | &nbsp; 10:45 AM &nbsp; | &nbsp; 26 Oct 2026</span></footer>
      </section>
    </main>
  );
}
