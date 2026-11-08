import { PhoneCall, CalendarDays, Bell, MessageCircle, Database, Bot, Send, FileText, GitBranch, ListChecks, BookOpen } from "lucide-react";
import "./FeaturedWorkflowPreview.css";

const FLOWS = [
  { nodes: [[PhoneCall,"Caller request","Vapi webhook"],[CalendarDays,"Check availability","Google Calendar"],[CalendarDays,"Book / reschedule","Calendar tools"],[Bell,"Notify & record","Gmail / Sheets"]] },
  { nodes: [[MessageCircle,"Enquiry request","Webhook"],[GitBranch,"Route the action","n8n workflow"],[ListChecks,"Task follow-up","Asana"],[FileText,"Property details","Drive / Sheets"]] },
  { nodes: [[MessageCircle,"Facebook enquiry","Incoming message"],[BookOpen,"Business context","Knowledge document"],[Bot,"Prepare the reply","AI agent"],[Send,"Return response","Facebook Graph API"]] },
];
const POSITIONS = [[24,44],[332,44],[332,208],[24,208]];
const CONNECTIONS = ["M268 98H332","M454 152V208","M332 262H268"];

export default function FeaturedWorkflowPreview({ index }) {
  const flow = FLOWS[index];
  return (
    <div className="featured-flow relative aspect-video w-full overflow-hidden" aria-hidden="true">
      <div className="flow-grid" />
      <span className="absolute left-4 top-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-tealDeep dark:text-accent-tealLight">Workflow preview</span>
      <svg viewBox="0 0 600 352" className="absolute inset-0 h-full w-full">
        {CONNECTIONS.map((d,i) => <g key={d}><path d={d} className="flow-wire" /><path d={d} className="flow-signal" pathLength="1" style={{"--signal-delay":`${0.65+i*.85}s`}} /></g>)}
        {flow.nodes.map(([Icon,title,subtitle],i) => {
          const [x,y] = POSITIONS[i];
          return <g key={title}>
            <rect x={x} y={y} width="244" height="108" rx="16" className="flow-node" />
            <rect x={x} y={y} width="244" height="108" rx="16" className="flow-node-glow" style={{"--signal-delay":`${.3+i*.85}s`}} />
            <rect x={x+15} y={y+18} width="35" height="35" rx="10" className="flow-icon-box" />
            <Icon x={x+23} y={y+26} width="19" height="19" className="flow-icon" />
            <text x={x+62} y={y+40} className="flow-node-title">{title}</text>
            <text x={x+62} y={y+65} className="flow-node-subtitle">{subtitle}</text>
            <text x={x+18} y={y+91} className="flow-step-number">0{i+1}</text>
          </g>;
        })}
        <text x="300" y="343" textAnchor="middle" className="flow-footer">ILLUSTRATIVE FLOW · SELECT FOR CASE STUDY</text>
      </svg>
    </div>
  );
}
