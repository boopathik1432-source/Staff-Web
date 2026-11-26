"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Boxes, BrainCircuit, ChevronDown, Grid2X2, List, MoreVertical, Network, Plus, Search, Target } from "lucide-react";
import NavigationShell from "./NavigationShell";

const units = [
  ["Unit 1", "Number Systems", "6 Topics", "18 Lessons", "Learn about natural numbers, whole numbers, integers, rational and irrational numbers.", "Completed", "cyan", Boxes],
  ["Unit 2", "Algebra", "5 Topics", "16 Lessons", "Understand variables, expressions, equations and inequalities.", "In Progress", "purple", BrainCircuit],
  ["Unit 3", "Geometry", "5 Topics", "15 Lessons", "Explore shapes, angles, triangles, circles and 3D geometry.", "In Progress", "blue", Target],
  ["Unit 4", "Trigonometry", "4 Topics", "12 Lessons", "Study relationships between angles and sides of triangles.", "Pending", "orange", Network],
  ["Unit 5", "Data Handling", "4 Topics", "11 Lessons", "Learn about data collection, organization, representation and analysis.", "Pending", "purple", BookOpen],
  ["Unit 6", "Mensuration", "4 Topics", "10 Lessons", "Calculate area, perimeter, volume and surface area.", "Coming Soon", "cyan", Boxes],
] as const;

function IconBubble({ tone = "cyan", children }: { tone?: string; children: React.ReactNode }) {
  return <span className={`icon-bubble ${tone}`}>{children}</span>;
}

export default function UnitsPage() {
  return <NavigationShell activePage="Units">
    <div className="units-page">
      <div className="unit-toolbar"><div className="subject-search"><Search size={14} /><input placeholder="Search units..." /></div><button className="unit-select">All Units <ChevronDown size={13} /></button><div className="view-toggle"><button className="view-active"><Grid2X2 size={15} /></button><button><List size={15} /></button></div><button className="add-unit"><Plus size={14} /> Add New Unit</button></div>
      <div className="units-layout"><div className="units-grid">{units.map(([number, title, topics, lessons, _description, status, tone, Icon], index) => <motion.article key={title} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }} whileHover={{ y: -3 }} className="unit-card glass-panel"><div className="unit-card-top"><div className={`unit-visual ${tone}`}><IconBubble tone={tone}><Icon size={34} /></IconBubble></div><div className={`status-badge ${status.toLowerCase().replace(" ", "-")}`}>{status}</div><button className="unit-menu"><MoreVertical size={15} /></button></div><p className="unit-number">{number}</p><h3>{title}</h3><div className="unit-counts"><span><Network size={11} /> {topics}</span><span><BookOpen size={11} /> {lessons}</span></div><div className="unit-actions"><button>View Topics</button><button>Manage <ArrowRight size={11} /></button></div></motion.article>)}</div></div>
    </div>
  </NavigationShell>;
}
