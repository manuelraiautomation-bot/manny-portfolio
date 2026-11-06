export const PROJECTS = [
  {
    title: "AI Agent for Facebook",
    summary: "Answers Facebook enquiries using business knowledge through an n8n AI agent.",
    tags: ["N8N", "AI AGENT"],
    image: "/images/portfolio/ai-agent-facebook.png",
    pain: "Businesses running Facebook pages were missing comments and messages during off hours, losing warm leads to slow response times.",
    solution:
      "I built an n8n AI agent that reads incoming messages, references a knowledge document held in memory, and replies automatically through the Facebook Graph API in real time.",
    benefit:
      "Response time dropped from hours to seconds, and the page now stays responsive 24/7 without hiring extra support staff.",
  },
  {
    title: "AI Content Repurposing",
    tags: ["ZAPIER", "CONTENT AI"],
    image: "/images/portfolio/ai-content-repurposing.png",
    pain: "A single recorded video was going unused after posting once — no blog content, no LinkedIn or Facebook follow-up.",
    solution:
      "I built a Zapier automation that detects new videos in Google Drive, transcribes them with AI, generates two blog posts, then auto-publishes to LinkedIn and Facebook Pages through parallel paths.",
    benefit:
      "One video now produces multiple ready-to-publish pieces of content automatically, multiplying reach without extra editing work.",
  },
  {
    title: "AI Facebook Messenger Knowledge Assistant",
    tags: ["N8N", "SUPPORT AI"],
    image: "/images/portfolio/ai-messenger-knowledge-assistant.png",
    pain: "Support was answering the same FAQs on repeat in Messenger, with no fallback if the primary AI model went down.",
    solution:
      "I built an n8n support agent that pulls answers from a knowledge base, uses Gemini 2.5 as the primary model with a Groq Llama backup for redundancy, and keeps conversation memory across messages.",
    benefit:
      "Customers get instant, accurate answers around the clock, with near-zero downtime thanks to automatic model failover.",
  },
  {
    title: "AI Job Scraper + Resume Optimizer",
    tags: ["N8N", "AI AUTOMATION"],
    image: "/images/portfolio/ai-job-scraper-resume-optimizer.png",
    pain: "Manually searching job boards and tailoring a resume and proposal for every listing was eating hours every week.",
    solution:
      "I built a Slack-triggered automation that searches job listings, validates matches with AI, then generates a tailored resume and proposal draft for each one.",
    benefit:
      "What used to take an hour per application now happens in minutes, with drafts delivered straight to Slack and Gmail.",
  },
  {
    title: "Email Attachment Sorting, Log & Summary",
    tags: ["MAKE", "GEMINI"],
    image: "/images/portfolio/email-attachment-sorting.png",
    pain: "Important email attachments were getting buried in an inbox with no organized record of what arrived or what it contained.",
    solution:
      "I built a Make.com automation that detects new attachments, uses Gemini to read and summarize each file, uploads it to Google Drive, logs it in a spreadsheet, and emails a summary.",
    benefit:
      "Every attachment is now automatically filed, searchable, and summarized — no more digging through inboxes.",
  },
  {
    title: "Xero Bank Statement to Asana Automation",
    tags: ["MAKE", "FINANCE OPS"],
    image: "/images/portfolio/xero-asana-automation.png",
    pain: "Bookkeeping data was split across Xero, Asana, and spreadsheets, requiring manual entry to keep everything in sync.",
    solution:
      "I built a Make.com integration that watches completed Asana tasks, pulls the relevant Xero data through its API, and routes it into Google Sheets and Asana attachments automatically.",
    benefit:
      "Financial data now stays in sync across all three tools without manual re-entry, cutting bookkeeping admin time significantly.",
  },
  {
    title: "YT Shorts & FB Reels Video Generation",
    tags: ["N8N", "VIDEO AI"],
    image: "/images/portfolio/yt-shorts-fb-reels-video-generation.png",
    pain: "Producing daily short-form video for YouTube Shorts and Facebook Reels was too time-consuming to sustain manually.",
    solution:
      "I built a fully automated n8n pipeline that generates a video prompt with AI, calls a video generation API, waits for rendering to finish, then uploads the finished video straight to Facebook and YouTube.",
    benefit:
      "A content channel now publishes new short-form video on a schedule, with zero manual editing or uploading.",
  },
  {
    title: "AI Voice Receptionist & Appointment Booking",
    summary: "Checks calendar availability, books and reschedules appointments, and records caller messages.",
    tags: ["N8N", "VAPI", "VOICE AI"],
    image: "/images/portfolio/ai-voice-receptionist.png",
    pain: "Handling appointment requests, rescheduling, and phone messages manually can interrupt a small team's day and leave follow-ups scattered across tools.",
    solution:
      "I built an n8n backend for a Vapi voice receptionist that checks Google Calendar availability, suggests open slots, re-checks availability before booking, and reschedules existing appointments. It also saves messages and call reports to Google Sheets and sends booking, rescheduling, and message alerts through Gmail.",
    benefit:
      "Brings scheduling, caller messages, and call records into one connected workflow, with replies for missing booking details, unavailable slots, and bookings that cannot be found.",
  },
  {
    title: "Property Enquiry & Asana Automation",
    summary: "Connects property enquiries, viewing links, and files with Asana follow-up tasks.",
    tags: ["N8N", "ASANA", "PROPERTY OPS"],
    image: "/images/portfolio/property-enquiry-asana.png",
    pain: "Property enquiries, listing details, viewing links, and follow-up tasks can become scattered across spreadsheets, files, and project boards.",
    solution:
      "I built a webhook-driven n8n workflow that creates and updates Asana tasks, logs enquiries in Google Sheets, retrieves files from Google Drive, looks up property viewing links, and finds matching leads. Task creation can also attach advert links, viewing links, and relevant files.",
    benefit:
      "Connects enquiry records, property information, and Asana follow-ups so the team can retrieve details and manage next steps through one automation entry point.",
  },
  {
    title: "Error Handler — Log + Email Alert",
    image: "/images/portfolio/error-handler-log-email-alert.png",
    summary: "Captures n8n failures, logs execution details in Google Sheets, and sends a Gmail alert.",
    tags: ["N8N", "GOOGLE SHEETS", "GMAIL"],
    pain: "Workflow failures can go unnoticed without a clear error record and a notification to the person responsible.",
    solution:
      "I built an n8n error workflow that starts with an Error Trigger, formats the failure details, appends a record to Google Sheets, and then sends an alert through Gmail. The log includes a London timestamp, workflow name, failed node, error message, execution ID and URL, execution mode, and workflow ID.",
    benefit:
      "Keeps failure details in a central log and sends an email alert, giving the team the context and execution reference needed to investigate.",
  },
];

export const FEATURED_PROJECTS = [PROJECTS[7], PROJECTS[8], PROJECTS[0]];
