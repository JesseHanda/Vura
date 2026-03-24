export type Career = {
  id: string;
  title: string;
  category: string;
  description: string;
  interests: string[];
  workStyles: string[];
  educationLevels: string[];
  peopleOrientation: string[];
  stages: string[];
  goals: string[];
};

export const careers: Career[] = [
  {
    id: "software-developer",
    title: "Software Developer",
    category: "Technology",
    description:
      "Designs and builds applications, websites, and software systems.",
    interests: ["technology"],
    workStyles: ["flexible", "independent", "collaborative"],
    educationLevels: ["college-university", "extended"],
    peopleOrientation: ["balanced", "independent"],
    stages: ["high-school", "college", "university", "early-career"],
    goals: ["income", "growth", "interest"],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    category: "Design",
    description:
      "Designs digital products and user experiences that are intuitive and useful.",
    interests: ["creative", "technology"],
    workStyles: ["flexible", "collaborative"],
    educationLevels: ["college-university", "short"],
    peopleOrientation: ["balanced", "people-focused"],
    stages: ["high-school", "college", "university", "career-change"],
    goals: ["interest", "growth", "balance"],
  },
  {
    id: "registered-nurse",
    title: "Registered Nurse",
    category: "Healthcare",
    description:
      "Provides patient care, supports treatment, and works directly with people in healthcare settings.",
    interests: ["health"],
    workStyles: ["structured", "collaborative"],
    educationLevels: ["college-university", "extended"],
    peopleOrientation: ["people-focused"],
    stages: ["high-school", "college", "university", "career-change"],
    goals: ["impact", "stability", "growth"],
  },
  {
    id: "electrician",
    title: "Electrician",
    category: "Skilled Trades",
    description:
      "Installs, repairs, and maintains electrical systems in homes, buildings, and industrial settings.",
    interests: ["skilled-trades"],
    workStyles: ["structured", "independent"],
    educationLevels: ["short", "minimal"],
    peopleOrientation: ["balanced", "independent"],
    stages: ["high-school", "college", "career-change", "unsure"],
    goals: ["income", "stability", "growth"],
  },
  {
    id: "teacher",
    title: "Teacher",
    category: "Education",
    description:
      "Helps students learn, grow, and develop knowledge and skills over time.",
    interests: ["education"],
    workStyles: ["structured", "collaborative"],
    educationLevels: ["college-university", "extended"],
    peopleOrientation: ["people-focused"],
    stages: ["high-school", "college", "university", "career-change"],
    goals: ["impact", "stability", "interest"],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "Business / Technology",
    description:
      "Works with data to uncover insights, support decisions, and solve business problems.",
    interests: ["technology", "business", "science"],
    workStyles: ["structured", "independent", "collaborative"],
    educationLevels: ["college-university", "short"],
    peopleOrientation: ["balanced", "independent"],
    stages: ["college", "university", "early-career", "career-change"],
    goals: ["income", "growth", "stability"],
  },
  {
    id: "accountant",
    title: "Accountant",
    category: "Business / Finance",
    description:
      "Manages financial records, reporting, and planning for individuals or organizations.",
    interests: ["business"],
    workStyles: ["structured", "independent"],
    educationLevels: ["college-university", "extended"],
    peopleOrientation: ["balanced", "independent"],
    stages: ["college", "university", "early-career", "career-change"],
    goals: ["income", "stability", "growth"],
  },
  {
    id: "marketing-coordinator",
    title: "Marketing Coordinator",
    category: "Business / Creative",
    description:
      "Supports campaigns, content, and brand initiatives across digital and traditional channels.",
    interests: ["business", "creative"],
    workStyles: ["flexible", "collaborative"],
    educationLevels: ["college-university", "short"],
    peopleOrientation: ["balanced", "people-focused"],
    stages: ["college", "university", "early-career", "career-change"],
    goals: ["growth", "interest", "balance"],
  },
];