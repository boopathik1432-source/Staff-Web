"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BookOpen, Boxes, BrainCircuit, CheckCircle2, FileText, Network, Plus, QrCode, Sparkles, Target, Users } from "lucide-react";
import NavigationShell from "./NavigationShell";

const stats = [
  { label: "Total Subjects", value: "12", trend: "↑ 2 this week", icon: BookOpen, tone: "cyan" },
  { label: "Total Units", value: "48", trend: "↑ 5 this week", icon: Boxes, tone: "purple" },
  { label: "Total Topics", value: "86", trend: "↑ 12 this week", icon: Network, tone: "blue" },
  { label: "AI Content", value: "51", trend: "↑ 8 this week", icon: Sparkles, tone: "pink" },
  { label: "AR Lessons", value: "24", trend: "↑ 6 this week", icon: Target, tone: "cyan" },
  { label: "Students", value: "128", trend: "↑ 15 this week", icon: Users, tone: "green" },
] as const;

const actions = [
  { label: "Create Subject", icon: BookOpen, tone: "cyan" }, { label: "Add Unit", icon: Boxes, tone: "blue" },
  { label: "Add Topic", icon: Network, tone: "purple" }, { label: "AI Content", icon: Sparkles, tone: "pink" },
  { label: "AR Lesson", icon: Target, tone: "cyan" }, { label: "Generate QR", icon: QrCode, tone: "green" },
] as const;

const activity = [
  ["New topic added", "Photosynthesis - Unit 3", "2m ago", Network, "green"],
  ["AI content generated", "Cell Structure - Biology", "12m ago", BrainCircuit, "purple"],
  ["3D model uploaded", "Human Heart - AR Lesson", "28m ago", Boxes, "blue"],
  ["Quiz created", "Photosynthesis Quiz", "1h ago", FileText, "orange"],
  ["New student registered", "Rahul Kumar (B.Sc)", "2h ago", Users, "cyan"],
] as const;

const subjectLegend = [["Science", "4", "#1bc7df"], ["Maths", "2", "#9955ec"], ["Technology", "2", "#4d8ff3"], ["Language", "2", "#f7a719"], ["Other", "2", "#ff5a56"]];

export default function Overview() {
  return <NavigationShell activePage="Dashboard" showGreeting>
    <div className="overview-reference">
      <div className="reference-stats">{stats.map(({ label, value, trend, icon: Icon, tone }, index) => <motion.div key={label} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }} className="reference-stat"><span className={`icon-bubble ${tone}`}><Icon size={22} /></span><div><p>{label}</p><strong>{value}</strong><small>{trend}</small></div></motion.div>)}</div>

      <div className="reference-main-grid">
        <section className="reference-panel glass-panel"><div className="panel-title"><div><h3>Quick Actions</h3><p>Jump into your most used tools</p></div><Chevron /></div><div className="reference-action-grid">{actions.map(({ label, icon: Icon, tone }) => <motion.button whileHover={{ y: -3 }} key={label}><span className={`icon-bubble ${tone}`}><Icon size={22} /></span><span>{label}</span><b><ArrowRight size={10} /></b></motion.button>)}</div></section>
        <section className="reference-panel glass-panel"><div className="panel-title"><h3>Recent Activity</h3><button>View All</button></div><div className="reference-activity">{activity.map(([title, sub, time, Icon, tone]) => <div key={title}><span className={`icon-bubble ${tone}`}><Icon size={16} /></span><div><p>{title}</p><small>{sub}</small></div><time>{time}</time></div>)}</div></section>
        <div className="reference-charts"><section className="reference-panel glass-panel"><div className="panel-title"><h3>Subject Overview</h3><button>View All</button></div><div className="donut-layout"><div className="reference-donut"><div><b>12</b><span>Total Subjects</span></div></div><div className="reference-legend">{subjectLegend.map(([name, value, color]) => <p key={name}><i style={{ background: color }} />{name}<b>{value}</b></p>)}</div></div></section><section className="reference-panel glass-panel"><div className="panel-title"><h3>Learning Progress</h3><button>View Report</button></div><div className="learning-layout"><div className="learning-ring"><div><b>72%</b><span>Overall Progress</span></div></div><div className="learning-legend"><p><i className="bg-[#1bc7a2]" />Completed <b>51</b></p><p><i className="bg-[#277ef3]" />In Progress <b>86</b></p><p><i className="bg-[#f3b316]" />Pending <b>8</b></p><p><i className="bg-[#f04c64]" />Overdue <b>4</b></p></div></div></section></div>
      </div>

      <div className="reference-bottom">{[
        { title: "Subjects", description: "Manage your course subjects and curriculum.", icon: BookOpen, tone: "cyan" },
        { title: "Units", description: "Organize subjects into units and chapters.", icon: Boxes, tone: "purple" },
        { title: "Topics", description: "Add detailed topics for each unit.", icon: Network, tone: "green" },
        { title: "AI Content", description: "Generate smart learning content with AI.", icon: Sparkles, tone: "orange" },
      ].map(({ title, description, icon: Icon, tone }) => <section key={title} className="reference-resource glass-panel"><span className={`icon-bubble ${tone}`}><Icon size={23} /></span><div><h3>{title}</h3><p>{description}</p></div><button><ArrowRight size={14} /></button></section>)}</div>
    </div>
  </NavigationShell>;
}

function Chevron() {
  return <ArrowRight size={14} className="text-[#478de0]" />;
}
