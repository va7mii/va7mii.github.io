// The three research interests shown on the home page.
// Edit the text here; `phrase` is what the typing animation cycles through.
export const interests = [
  {
    key: "robotics",
    title: "Robotics",
    phrase: "robots can learn skills in the physical world",
    question:
      "How can robots pick up new skills in messy, physical settings and turn them into reliable automation?",
    keywords: [
      "skill acquisition",
      "learning from demonstration",
      "automation",
    ],
  },
  {
    key: "genai",
    title: "Generative AI",
    phrase: "generative models can build images and 3D worlds",
    question:
      "How can generative models create better images and 3D models, and how can we make them more controllable and efficient?",
    keywords: ["image generation", "3D modelling", "model improvement"],
  },
  {
    key: "energy",
    title: "Energy Systems",
    phrase: "machine learning can help run the power grid",
    question:
      "How do we manage large power systems, and where can machine learning help optimize them?",
    keywords: ["power systems", "grid optimization", "machine learning"],
  },
] as const;
