import {
  BookOpen,
  Brain,
  ClipboardCheck,
  BarChart3,
  Timer,
  Users,
} from "lucide-react";

export const featureCategories = [
  {
    id: "study",
    title: "Study",
    description:
      "Keep your courses and study materials organized in one place.",
    icon: BookOpen,
    features: [
      "Create and organize courses",
      "Import PDF study materials",
      "Continue reading from where you stopped",
      "Bookmarks and reading progress",
      "Offline access to saved materials",
    ],
  },
  {
    id: "practice",
    title: "Practice",
    description:
      "Turn your materials and question banks into focused exam practice.",
    icon: ClipboardCheck,
    features: [
      "CBT practice sessions",
      "Question Bank",
      "Mock Exams",
      "Theory questions",
      "Resume interrupted practice sessions",
      "Read Aloud",
    ],
  },
  {
    id: "understand",
    title: "Understand",
    description:
      "Use AI tools to turn difficult study material into something easier to learn.",
    icon: Brain,
    features: [
      "AI Tutor",
      "AI-generated notes",
      "AI flashcards",
      "AI study plans",
      "Theory-answer analysis",
      "Lecturer Intelligence",
    ],
  },
  {
    id: "improve",
    title: "Improve",
    description:
      "Learn from your performance instead of repeating the same mistakes.",
    icon: BarChart3,
    features: [
      "Mistake Book",
      "Revision",
      "Study DNA",
      "Readiness and progress",
      "Study analytics",
      "Performance tracking",
    ],
  },
  {
    id: "focus",
    title: "Focus",
    description:
      "Create a study environment that helps you stay consistent.",
    icon: Timer,
    features: [
      "Pomodoro sessions",
      "Custom study duration",
      "Course and task-based sessions",
      "Background sounds",
      "Persisted study sessions",
    ],
  },
  {
    id: "connect",
    title: "Connect",
    description:
      "Study with other students and keep your progress social.",
    icon: Users,
    features: [
      "Friends",
      "Study Groups",
      "Group conversations",
      "Shared study materials",
      "Leaderboard",
    ],
  },
] as const;
