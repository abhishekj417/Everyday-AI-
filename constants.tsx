import { Lesson, Scenario, TrackLevel, Persona, AITool } from './types';
import { Briefcase, GraduationCap, PenTool, TrendingUp, User } from 'lucide-react';

export const PERSONAS: Persona[] = [
  { id: 'sales', role: 'Sales Professional', painPoint: 'Struggles with outreach wording', goal: 'Automate emails & improve tone', icon: TrendingUp },
  { id: 'teacher', role: 'Teacher', painPoint: 'Overwhelmed by grading & planning', goal: 'Generate worksheets & feedback', icon: GraduationCap },
  { id: 'freelance', role: 'Freelancer', painPoint: 'Proposals take too long', goal: 'Speed up research & proposals', icon: PenTool },
  { id: 'business', role: 'Business Owner', painPoint: 'Managing schedule & reports', goal: 'Automate reporting', icon: Briefcase },
  { id: 'student', role: 'Student', painPoint: 'Need study help', goal: 'Homework aid & clarifying concepts', icon: User },
];

export const AI_TOOLS: AITool[] = [
  {
    id: 't1',
    name: 'Google Gemini',
    tagline: 'The Google Workspace Wizard',
    category: 'Assistant',
    description: 'An advanced AI that integrates directly with Google Docs, Gmail, and Drive. It creates text, analyzes images, and can even read your messy documents.',
    bestFor: ['Everyone', 'Business', 'Students'],
    pricing: 'Freemium',
    website: 'https://gemini.google.com',
    coachTip: 'Use the "Upload" button to attach a PDF or image. Ask it to "Summarize this" or "Find the due date". It saves hours of reading.',
    logoColor: 'bg-blue-600'
  },
  {
    id: 't2',
    name: 'Perplexity',
    tagline: 'The Reliable Research Assistant',
    category: 'Research',
    description: 'Think of this as Google Search meets AI. Instead of giving you 10 blue links, it reads the websites for you and writes a summarized answer with citations.',
    bestFor: ['Students', 'Researchers', 'Freelancers'],
    pricing: 'Freemium',
    website: 'https://www.perplexity.ai',
    coachTip: 'Use this when accuracy matters. It always cites its sources so you can verify facts easily.',
    logoColor: 'bg-teal-600'
  },
  {
    id: 't3',
    name: 'Canva Magic Studio',
    tagline: 'Design for Non-Designers',
    category: 'Visuals',
    description: 'Canva now has AI built-in. You can type "A poster for a bake sale" and it will generate the actual design, images, and text for you.',
    bestFor: ['Marketers', 'Small Business', 'Teachers'],
    pricing: 'Freemium',
    website: 'https://www.canva.com',
    coachTip: 'Try "Magic Expand" to fix photos that are too zoomed in, or "Magic Edit" to change a red shirt to a blue one instantly.',
    logoColor: 'bg-purple-600'
  },
  {
    id: 't4',
    name: 'Otter.ai',
    tagline: 'The Meeting Secretary',
    category: 'Audio',
    description: 'Connects to your Zoom/Teams calls and writes a perfect transcript. It also identifies who said what and generates a summary.',
    bestFor: ['Sales', 'Managers', 'Freelancers'],
    pricing: 'Freemium',
    website: 'https://otter.ai',
    coachTip: 'Don\'t take notes during meetings. Let Otter do it, so you can focus on listening and making eye contact.',
    logoColor: 'bg-indigo-600'
  },
  {
    id: 't5',
    name: 'Goblin.tools',
    tagline: 'The Overwhelm Crusher',
    category: 'Productivity',
    description: 'A super simple app designed for neurodivergent brains. It breaks down big, scary tasks (like "Move house") into tiny, manageable steps.',
    bestFor: ['Everyone', 'ADHD', 'Students'],
    pricing: 'Free',
    website: 'https://goblin.tools',
    coachTip: 'Use the "Magic To-Do" feature. Type one big task, click the magic wand, and watch it generate a checklist for you.',
    logoColor: 'bg-emerald-600'
  },
  {
    id: 't6',
    name: 'Gamma',
    tagline: 'Instant Presentations',
    category: 'Visuals',
    description: 'Hate making PowerPoint slides? Type your topic into Gamma, and it generates a beautiful slide deck with text, images, and formatting in seconds.',
    bestFor: ['Business', 'Sales', 'Students'],
    pricing: 'Freemium',
    website: 'https://gamma.app',
    coachTip: 'Don\'t start from a blank slide. Use Gamma to create the first draft, then edit the text to add your personal touch.',
    logoColor: 'bg-yellow-600'
  },
  {
    id: 't7',
    name: 'Midjourney',
    tagline: 'Professional Art Generator',
    category: 'Visuals',
    description: 'The most powerful AI art generator. It requires Discord to use, but creates photo-realistic images, logos, and illustrations.',
    bestFor: ['Designers', 'Creatives', 'Marketing'],
    pricing: 'Paid',
    website: 'https://www.midjourney.com',
    coachTip: 'Use specific style words like "Cinematic", "Vector Art", or "Shot on 35mm" to get the best results.',
    logoColor: 'bg-slate-800'
  },
  {
    id: 't8',
    name: 'Zapier AI',
    tagline: 'The Automation Builder',
    category: 'Productivity',
    description: 'Connects your apps together. "If I get a lead in Gmail, add it to my spreadsheet." Now you can build these flows just by chatting.',
    bestFor: ['Business', 'Freelance', 'Tech'],
    pricing: 'Freemium',
    website: 'https://zapier.com',
    coachTip: 'Start simple. Automate one boring task you do every day, like saving email attachments to Google Drive.',
    logoColor: 'bg-orange-500'
  },
  {
    id: 't9',
    name: 'Notion AI',
    tagline: 'The Second Brain',
    category: 'Productivity',
    description: 'A workspace for notes and projects. The AI can summarize your messy notes, translate them, or rewrite them to be more professional.',
    bestFor: ['Students', 'Startups', 'Writers'],
    pricing: 'Freemium',
    website: 'https://notion.so',
    coachTip: 'Use the "Ask AI" feature to query your own notes. "What did we decide about the budget last week?"',
    logoColor: 'bg-slate-900'
  },
  {
    id: 't10',
    name: 'Descript',
    tagline: 'Edit Video Like Text',
    category: 'Audio',
    description: 'Upload a video, and it generates a transcript. If you delete a word in the text, it cuts that part out of the video automatically.',
    bestFor: ['Podcasters', 'Marketing', 'Teachers'],
    pricing: 'Freemium',
    website: 'https://descript.com',
    coachTip: 'Use the "Studio Sound" feature to remove background noise and make your voice sound professional with one click.',
    logoColor: 'bg-blue-500'
  }
];

export const LESSONS: Lesson[] = [
  // ==================================================================================
  // BEGINNER TRACK: FOUNDATIONS (What is it?)
  // ==================================================================================
  {
    id: 'l1',
    title: '1. What is AI?',
    track: TrackLevel.Beginner,
    description: 'AI explained using real-life analogies.',
    content: `
![Chef Cooking](https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80)

### The Chef Analogy
Think of **Generative AI** (like Gemini or ChatGPT) like a very fast, very well-read **Chef**. 

1.  **Training (The Cookbook Library):** Just as a chef reads thousands of cookbooks to learn recipes, AI "reads" billions of pages from the internet to learn the patterns of human language. It learns that "Thank" is usually followed by "You".
2.  **The Prompt (The Order Ticket):** This is your instruction. If you just say "Make food," the chef is confused. If you say "Make a spicy taco with extra cheese and a side of guac," the chef knows exactly what to do.
3.  **Generation (Cooking Fresh):** The chef creates a *new* dish based on what they know. They don't just microwave a frozen meal (copy-paste from Google); they build it ingredient by ingredient. This is why it's called **Generative** AI—it generates something new every time.

\`\`\`interactive-chef
// This block renders the Interactive Chef Diagram
\`\`\`

> AI doesn't copy and paste. It creates something new every time, just like a chef cooking a meal from scratch.

### Key Terms Simplified
*   **Model:** The Chef's Brain (the software engine).
*   **Prompt:** The Order Ticket (what you type).
*   **LLM (Large Language Model):** A really, really big brain that has read almost everything.

[Watch: AI Explained in 1 Minute](video:https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4)
    `,
    outcomes: ['Understand AI basics', 'Identify "Generative AI"', 'Learn the Chef analogy'],
    quiz: [
      {
        id: 1,
        question: 'What does "Generative" mean in AI?',
        options: ['It generates electricity', 'It creates new, original content', 'It searches Google and copies text'],
        correctAnswer: 1,
        explanation: 'Generative AI creates new text, images, or code based on patterns it learned, rather than just retrieving existing pages.'
      },
      {
        id: 2,
        question: 'What is a "prompt"?',
        options: ['The result the AI gives you', 'The software update', 'Your instructions to the AI'],
        correctAnswer: 2,
        explanation: 'A prompt is the text instruction you provide to the AI model to guide its output.'
      }
    ]
  },
  {
    id: 'l_ml_sup',
    title: '2. ML: Supervised Learning',
    track: TrackLevel.Beginner,
    description: 'Learning with an Answer Key.',
    content: `
### The Flashcards Analogy
How do computers learn? The most common way is **Supervised Learning**.

![Teacher with Flashcards](https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80)

Imagine teaching a toddler with flashcards.
1.  **The Input:** You show a card with a picture of an apple.
2.  **The Label:** The back of the card says "Apple".
3.  **The Training:** You do this 1,000 times.
4.  **The Test:** You show a picture of an apple *without* the label, and the toddler says "Apple!"

In AI, we feed the computer **Labeled Data** (e.g., thousands of emails marked as "Spam" or "Not Spam"). The AI practices guessing and checks the answer key until it gets it right every time.

### Real World Use
*   **Spam Filters:** Learned from millions of emails marked as "Junk".
*   **Face ID:** Learned from photos labeled with your name.
    `,
    outcomes: ['Understand Supervised Learning', 'Define Labeled Data', 'Recognize training patterns'],
    quiz: [
      {
        id: 1,
        question: 'What does Supervised Learning require?',
        options: ['A camera', 'Labeled data (examples with answers)', 'Robots'],
        correctAnswer: 1,
        explanation: 'Supervised learning needs examples that have the "correct answer" (label) attached to them so the AI can check its work.'
      }
    ]
  },
  {
    id: 'l_ml_unsup',
    title: '3. ML: Unsupervised Learning',
    track: TrackLevel.Beginner,
    description: 'Finding patterns in the chaos.',
    content: `
### The Librarian Analogy
What if you have data but no answer key? This is **Unsupervised Learning**.

![Library with Books](https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80)

Imagine a librarian is given 10,000 books with no covers, no titles, and no genre labels. They have to organize them.
1.  They start reading pages at random.
2.  They notice some books mention "spaceships" and "aliens". They put these in Pile A.
3.  They notice others mention "detectives" and "murder". They put these in Pile B.
4.  **Result:** The librarian has clustered the books into genres (Sci-Fi, Mystery) *without ever knowing the names of those genres*.

**Unsupervised AI** looks at raw data and finds hidden patterns, structures, or anomalies on its own.

> This is great for discovering things you didn't even know to look for, like a new type of customer behavior.

### Real World Use
*   **Customer Segmentation:** "These 500 customers buy diapers and beer on Fridays." (The AI found a pattern you didn't look for).
*   **Recommendation Engines:** "People who watched this movie also watched that movie."
    `,
    outcomes: ['Understand Unsupervised Learning', 'Pattern recognition', 'Clustering data'],
    quiz: [
      {
        id: 1,
        question: 'What is the goal of Unsupervised Learning?',
        options: ['To win a game', 'To find hidden patterns or groups in data', 'To translate languages'],
        correctAnswer: 1,
        explanation: 'It organizes data into groups (clusters) based on similarities without being told what the groups are.'
      }
    ]
  },
  {
    id: 'l_ml_rl',
    title: '4. Reinforcement Learning',
    track: TrackLevel.Beginner,
    description: 'Learning by trial and error.',
    content: `
### The Dog Training Analogy
How do we teach a robot to walk or play a game? **Reinforcement Learning (RL)**.

![Dog Training](https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80)

Think of training a dog:
*   **Good behavior (Sitting):** You give a treat (**Reward**).
*   **Bad behavior (Chewing shoes):** You say "No" (**Penalty**).
*   **The Result:** The dog learns to maximize treats and minimize "No"s.

An AI agent tries random things. If it gets closer to the goal (like winning a chess game or walking without falling), it gets a digital "point." If it fails, it loses points. Over millions of fast-forwarded tries, it learns the perfect strategy.

[Watch: Robot Learning to Walk](video:https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4)

### Real World Use
*   **ChatGPT (RLHF):** Humans gave "treats" (thumbs up) to better answers, teaching the AI to be helpful and polite.
*   **Robotics:** Robots learning to grasp objects without crushing them.
    `,
    outcomes: ['Understand Reinforcement Learning', 'Rewards and Penalties', 'Trial and error'],
    quiz: [
      {
        id: 1,
        question: 'How does an AI learn in Reinforcement Learning?',
        options: ['By reading books', 'Through rewards (treats) and penalties', 'By watching movies'],
        correctAnswer: 1,
        explanation: 'It optimizes its behavior to maximize the "rewards" it receives from the environment.'
      }
    ]
  },
  {
    id: 'l4',
    title: '5. Multimodal AI',
    track: TrackLevel.Beginner,
    description: 'Seeing, hearing, and speaking with AI.',
    content: `
### Beyond Text
Early AI only understood text. Modern AI is **Multimodal**. This means it has eyes and ears, just like a human.

![Multimodal Concept](https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&w=800&q=80)

### The Modes
*   **Vision:** You can upload a photo of your fridge, and the AI writes a recipe based on ingredients it "sees." It can identify a specific part of a complex machine diagram.
*   **Audio:** You can speak to it, and it speaks back with emotion, intonation, and laughter. It can listen to a meeting and write minutes.
*   **Video:** Some advanced models can watch a YouTube video and summarize the key points or answer questions about what happened at the 5-minute mark.

### Listen to AI
Modern AI voices are almost indistinguishable from humans. They breathe, pause, and intonate.

[Play Audio Sample](audio:https://actions.google.com/sounds/v1/science_fiction/robot_radio_chatter.ogg)

### Why it matters
You don't always have to type! If you can't describe a strange noise your car is making, record it. If you can't describe a bug on your screen, screenshot it.
    `,
    outcomes: ['Understand "Multimodal"', 'Learn about Image input', 'Recognize Audio capabilities'],
    quiz: [
      {
        id: 1,
        question: 'What does "Multimodal" mean?',
        options: ['It takes a long time to load', 'It can understand text, images, audio, and video', 'It requires multiple computers'],
        correctAnswer: 1,
        explanation: 'Multimodal means the model can process multiple "modes" of data: text, visuals, and sound.'
      }
    ]
  },
  {
    id: 'l6',
    title: '6. Hallucinations',
    track: TrackLevel.Beginner,
    description: 'When the AI lies to you (confidently).',
    content: `
### The People Pleaser
AI models are trained to complete patterns. Sometimes, they prioritize *sounding* correct over *being* correct. This is the **Hallucination**.

![Mirage illusion](https://images.unsplash.com/photo-1518640027989-a30d5d7e498e?auto=format&fit=crop&w=800&q=80)

Think of a "Yes Man" employee who is terrified of saying "I don't know," so they just make up an answer that sounds plausible.

> **Pro Tip:** Never trust AI blindly with facts, legal cases, or medical advice. Always verify.

### Common Examples
*   **Fake Quotes:** If you ask for a quote about apples by Einstein, it might invent one that *sounds* like Einstein, even if he never said it.
*   **Fake Citations:** It might invent a legal case or a medical study to support an argument.
*   **Math Errors:** Language models are bad at math (unless they use a calculator tool) because they try to predict the next word, not calculate the sum.

### The Golden Rule
AI is a creative engine, not a fact database. Always verify facts, dates, and quotes.
    `,
    outcomes: ['Define Hallucination', 'Understand why AI lies', 'Learn to verify'],
    quiz: [
      {
        id: 1,
        question: 'Why does AI hallucinate?',
        options: ['It is evil', 'It prioritizes completing the pattern over factual accuracy', 'It has a virus'],
        correctAnswer: 1,
        explanation: 'AI predicts the next likely word. Sometimes it predicts a lie because it fits the sentence structure perfectly.'
      }
    ]
  },

  // ==================================================================================
  // INTERMEDIATE TRACK: MECHANICS (How does it work?)
  // ==================================================================================
  {
    id: 'l_nn',
    title: '7. Neural Networks',
    track: TrackLevel.Intermediate,
    description: 'Simulating the human brain.',
    content: `
### The Bucket Brigade Analogy
A **Neural Network** is the software architecture behind deep learning. It is loosely inspired by the human brain.

![Neural Network Graph](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)

Imagine a massive bucket brigade passing water to put out a fire:
1.  **Input Layer:** The first group scoops the water (this is the raw data, like the pixels of an image).
2.  **Hidden Layers:** The people in the middle pass the bucket. But they don't just pass it; they *judge* it. "Is this bucket heavy? Is the water hot?" If yes, they add a tag to it. They pass this information to the next person.
3.  **Output Layer:** The last person receives the final bucket and decides "This is a fire" (or in AI terms, "This is a cat").

In a computer, these "people" are mathematical nodes (neurons). They pass numbers to each other. If the number is high enough ("The neuron fires"), the next node pays attention.
    `,
    outcomes: ['Understand Neural Networks', 'Input/Output layers', 'Brain mimicry'],
    quiz: [
      {
        id: 1,
        question: 'What are Neural Networks inspired by?',
        options: ['The human brain', 'Ant colonies', 'Solar systems'],
        correctAnswer: 0,
        explanation: 'They are designed to mimic the web of neurons and synapses in a biological brain.'
      }
    ]
  },
  {
    id: 'l_dl',
    title: '8. Deep Learning',
    track: TrackLevel.Intermediate,
    description: 'Layers of understanding.',
    content: `
### Why is it "Deep"?
**Deep Learning** is just a Neural Network with *many, many* layers. 

![Abstract Layers](https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80)

Think of how you recognize a face. You don't do it all at once. Your brain does it in layers:
*   **Layer 1:** Sees straight lines, curves, and edges.
*   **Layer 2:** Puts lines together to see shapes (circles, squares).
*   **Layer 3:** Puts shapes together to see features (eyes, nose, mouth).
*   **Layer 4:** Puts features together to recognize "Uncle Bob."

Deep learning models have dozens or hundreds of these layers. The "Deeper" the network, the more complex concepts it can understand. This is why modern AI can write poetry (a complex concept) whereas old AI could only play Chess (a rigid logic concept).
    `,
    outcomes: ['Define Deep Learning', 'Concept of Layers', 'Complexity handling'],
    quiz: [
      {
        id: 1,
        question: 'What refers to the "Deep" in Deep Learning?',
        options: ['It understands deep emotions', 'It has many layers of processing', 'It is buried underground'],
        correctAnswer: 1,
        explanation: 'The "depth" refers to the number of layers in the neural network architecture.'
      }
    ]
  },
  {
    id: 'l_trans',
    title: '9. Transformers',
    track: TrackLevel.Intermediate,
    description: 'The engine that changed everything.',
    content: `
### The "Attention" Revolution
Before 2017, AI read sentences one word at a time, from left to right. By the time it got to the end of a long sentence, it often forgot the beginning.

Enter the **Transformer** (the "T" in GPT).

### The Sentence Party Analogy
Imagine a party where every word in a sentence is a person.
*   **Old AI:** Went around the room shaking hands one by one.
*   **Transformers:** Everyone stands in a circle and shouts at the same time. But they only listen to the words that matter *to them*.

> **Context is King.** The Transformer allows the AI to understand the relationship between words instantly, no matter how far apart they are in the sentence.

Example: "The **bank** of the river was muddy."
The word "Bank" pays attention to "River". It knows "River" creates the context, so "Bank" means *dirt*, not *money*.

Transformers allow AI to understand **Context** across massive amounts of text instantly. This is the breakthrough that made ChatGPT and Gemini possible.
    `,
    outcomes: ['Understand Transformers', 'The Attention Mechanism', 'Context understanding'],
    quiz: [
      {
        id: 1,
        question: 'What is the key feature of a Transformer model?',
        options: ['It transforms into a robot', 'It uses "Attention" to look at all words at once', 'It reads very slowly'],
        correctAnswer: 1,
        explanation: 'The "Attention Mechanism" allows the model to weigh the importance of different words in relation to each other simultaneously.'
      }
    ]
  },
  {
    id: 'l_nlp',
    title: '10. NLP (Language)',
    track: TrackLevel.Intermediate,
    description: 'Natural Language Processing.',
    content: `
### The Universal Translator
**NLP (Natural Language Processing)** is the field of teaching computers to understand human language, not just computer code.

![Language Map](https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80)

*   **Old Way (Keywords):** You search "Good Italian food". The computer looks for pages containing the words "Good", "Italian", and "Food".
*   **NLP Way (Meaning):** You search "Where can I get some pasta nearby?" The computer understands that "pasta" implies "Italian food" and "nearby" implies "Location".

### Capabilities
1.  **Sentiment Analysis:** Reading a tweet and knowing if the person is angry, happy, or sarcastic.
2.  **Translation:** Turning English into French while keeping the *tone*, not just swapping words.
3.  **Summarization:** Reading a 50-page PDF and writing a 1-page summary.
    `,
    outcomes: ['Define NLP', 'Sentiment Analysis', 'Meaning vs Keywords'],
    quiz: [
      {
        id: 1,
        question: 'What is the main goal of NLP?',
        options: ['To correct spelling', 'To understand the meaning and intent of human language', 'To type faster'],
        correctAnswer: 1,
        explanation: 'NLP bridges the gap between human communication (messy, complex) and computer understanding (rigid, logical).'
      }
    ]
  },
  {
    id: 'l_cv',
    title: '11. Computer Vision',
    track: TrackLevel.Intermediate,
    description: 'Teaching computers to see.',
    content: `
### The Digital Eye
**Computer Vision** allows machines to "see" and interpret images.

![Computer Vision Analysis](https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80)

### How it works
To a computer, a photo is just a massive grid of numbers (pixels).
*   White pixel = 255
*   Black pixel = 0

Computer Vision algorithms look for patterns in these numbers. "Hey, there is a sudden shift from 0 to 255 here... that must be an edge. These edges form a circle... that must be a wheel. Two wheels... that must be a bike."

### Real World Examples
*   **Self-Driving Cars:** Distinguishing a stop sign from a red balloon.
*   **Medical Imaging:** Spotting a tumor in an X-ray earlier than a human eye can.
*   **Retail:** Amazon Go stores watching what you pick off the shelf so you don't have to checkout.
    `,
    outcomes: ['Define Computer Vision', 'Pixels to Objects', 'Real-world uses'],
    quiz: [
      {
        id: 1,
        question: 'What does a computer "see" when it looks at an image?',
        options: ['A grid of numbers (pixels)', 'A story', 'Colors'],
        correctAnswer: 0,
        explanation: 'Computers process images as matrices of numerical values representing pixel color and intensity.'
      }
    ]
  },
  {
    id: 'l_diff',
    title: '12. Diffusion Models',
    track: TrackLevel.Intermediate,
    description: 'How AI creates images.',
    content: `
### The Fog Clearing Analogy
How do AI tools like Midjourney or Imagen create art? They use **Diffusion Models**.

![Abstract Art](https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80)

Imagine taking a clear photo of a dog.
1.  Add a little static (noise).
2.  Add more static.
3.  Add more until it's just a grey square of fuzz.

The AI is trained to play this movie **backwards**.
1.  You give it a square of grey fuzz (random noise).
2.  You give it a prompt: "A dog playing poker."
3.  The AI looks at the fuzz and hallucinates. "If there was a dog here, this pixel would probably be brown."
4.  It removes a tiny bit of noise. It repeats this 50 times.
5.  Suddenly, a clear image emerges from the fog.

It's not pasting a photo; it's sculpting the image out of digital static.
    `,
    outcomes: ['Understand Diffusion', 'Noise to Image', 'How image generation works'],
    quiz: [
      {
        id: 1,
        question: 'How do Diffusion models create images?',
        options: ['They copy images from Google', 'They remove noise from static to reveal an image', 'They paint with a robot arm'],
        correctAnswer: 1,
        explanation: 'Diffusion models start with random noise and iteratively refine it into a clear image matching the prompt.'
      }
    ]
  },

  // ==================================================================================
  // ADVANCED TRACK: APPLICATION & FUTURE (What's next?)
  // ==================================================================================
  {
    id: 'l2',
    title: '13. Writing Good Prompts',
    track: TrackLevel.Advanced,
    description: 'The "Role, Task, Context" framework.',
    content: `
### The RTC Formula
To get the best results, treat the AI like a brilliant but literal intern.

**1. Role:** Who should the AI be?
*   *Bad:* "Write a post."
*   *Good:* "Act as a **Senior Marketing Manager**..."

**2. Task:** What exactly do you want?
*   *Bad:* "About coffee."
*   *Good:* "...write a **LinkedIn post** about the health benefits of coffee..."

**3. Context:** Specific constraints and details.
*   *Bad:* "Make it good."
*   *Good:* "...target it at **office workers**. Use a **humorous tone**. Keep it under **200 words**."

### Advanced Technique: "Few-Shot Prompting"
Don't just tell; show. Give the AI examples.
"Here are 3 examples of emails I like. Write a 4th one in the same style." This drastically improves quality.
    `,
    outcomes: ['Master the RTC formula', 'Few-Shot Prompting', 'Reduce generic answers'],
    quiz: [
      {
        id: 1,
        question: 'What is "Few-Shot Prompting"?',
        options: ['Prompting while drinking', 'Giving the AI a few examples of what you want', 'Asking 3 questions at once'],
        correctAnswer: 1,
        explanation: 'Providing examples (shots) helps the AI understand the pattern and style you are looking for.'
      }
    ]
  },
  {
    id: 'l5_ctx',
    title: '14. Context Window',
    track: TrackLevel.Advanced,
    description: 'Understanding the AI\'s memory span.',
    content: `
### Goldfish vs. Elephant
Every AI conversation has a limit on how much it can remember. This is the **Context Window**.

![Elephant Memory](https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80)

*   **Tokens:** AI counts in "tokens" (roughly 0.75 of a word).
*   **Small Context (The Goldfish):** Early models could only remember about 3,000 words. If you talked longer, they would forget your name.
*   **Large Context (The Elephant):** Modern models (like Gemini 1.5) can remember *millions* of words. You can upload entire books, codebases, or hour-long videos, and it remembers details from the first minute while answering about the last minute.

> **Tip:** If AI starts forgetting your instructions during a very long chat, it might be full. Start a fresh chat with a summary of the project.
    `,
    outcomes: ['Define Context Window', 'Understand Tokens', 'Know when to restart'],
    quiz: [
      {
        id: 1,
        question: 'What happens when the Context Window is full?',
        options: ['The AI explodes', 'The AI charges money', 'The AI "forgets" the oldest info'],
        correctAnswer: 2,
        explanation: 'The AI drops the oldest parts of the conversation to make room for new words. It operates on a "rolling" window.'
      }
    ]
  },
  {
    id: 'l10',
    title: '15. Vibe Coding',
    track: TrackLevel.Advanced,
    description: 'Programming with plain English.',
    content: `
### The Director Analogy
**Vibe Coding** is the practice of building software without writing code yourself. You describe the "vibe" and function, and the AI writes the syntax.

![Coding Screen](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80)

*   **Old Way (The Bricklayer):** You place every brick (line of code) yourself. You need to know syntax, semicolons, and brackets.
*   **Vibe Coding (The Director):** You say, "I want a landing page that feels like a 1980s arcade game. It should have a neon green button that says START." The AI crew builds it.

### How to do it
1.  **Describe:** Tell the AI what the app does.
2.  **Iterate:** "Make the button bigger." "Change the background to blue."
3.  **Deploy:** You focus on the *logic* and *experience*; the AI handles the *syntax*.
    `,
    outcomes: ['Define Vibe Coding', 'Natural Language Programming', 'From Coder to Manager'],
    quiz: [
      {
        id: 1,
        question: 'Do you need to know Python to "Vibe Code"?',
        options: ['Yes, expert level', 'No, you use natural language to direct the AI', 'Only for mobile apps'],
        correctAnswer: 1,
        explanation: 'Vibe coding relies on describing the desired outcome in plain English, allowing non-coders to build software.'
      }
    ]
  },
  {
    id: 'l7',
    title: '16. RAG (Your Data)',
    track: TrackLevel.Advanced,
    description: 'Retrieval-Augmented Generation.',
    content: `
### The Open Book Exam
Standard AI only knows what it learned during training (the public internet up to a certain date). It doesn't know your company's private sales data from yesterday.

**RAG (Retrieval-Augmented Generation)** fixes this.

![Library Archives](https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80)

1.  **The Library:** You give the AI access to your private library (PDFs, Emails, Databases).
2.  **The Question:** You ask, "What is our vacation policy?"
3.  **The Retrieval:** The AI searches your library, finds the "Employee Handbook PDF," and reads page 12.
4.  **The Answer:** It answers you *using that specific page*.

It prevents hallucinations because it's reading your facts, not guessing. It's taking an open-book exam with your book.
    `,
    outcomes: ['Understand RAG', 'Training vs Retrieval', 'Use cases for documents'],
    quiz: [
      {
        id: 1,
        question: 'What is the main benefit of RAG?',
        options: ['It creates images', 'It lets AI use your private data accurately', 'It makes AI faster'],
        correctAnswer: 1,
        explanation: 'RAG allows the AI to "retrieve" answers from your specific documents rather than relying on general training data.'
      }
    ]
  },
  {
    id: 'l8',
    title: '17. AI Agents',
    track: TrackLevel.Advanced,
    description: 'From "Chatting" to "Doing".',
    content: `
### Hands vs. Mouth
*   **Chatbot:** Can talk. "Here is a recipe for a cake."
*   **Agent:** Can do. "I have ordered the ingredients on Instacart and scheduled a reminder for you to bake it."

![Robot Handshaking](https://images.unsplash.com/photo-1535378437803-f7259330171d?auto=format&fit=crop&w=800&q=80)

Agents are AI models connected to **Tools** (Calculator, Calendar, Email, Web Search). They can plan a sequence of actions to complete a goal without you holding their hand.

### Example
You say: "Plan a meeting with John."
Agent:
1.  Checks your calendar.
2.  Checks John's calendar.
3.  Finds a free slot.
4.  Sends an invite.
5.  Emails you the confirmation.
    `,
    outcomes: ['Define AI Agent', 'Tool Use', 'Autonomous action'],
    quiz: [
      {
        id: 1,
        question: 'What distinguishes an Agent from a Chatbot?',
        options: ['Agents are nicer', 'Agents can use tools to perform actions', 'Agents speak Spanish'],
        correctAnswer: 1,
        explanation: 'Agents have "hands"—they can use external tools (APIs) to actually perform tasks in the real world.'
      }
    ]
  },
  {
    id: 'l_robotics',
    title: '18. Robotics & AI',
    track: TrackLevel.Advanced,
    description: 'The Brain and the Body.',
    content: `
### Brain vs. Body
People often confuse AI and Robots.
*   **Robot:** The Hardware (Body). Motors, sensors, metal arms, battery.
*   **AI:** The Software (Brain). The logic telling the arms where to move.

![Robot Face](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80)

### The Evolution
*   **Old Robots:** Blind and dumb. They just repeated one motion (welding a car door) millions of times. If you moved the car door one inch, the robot would weld the air.
*   **AI Robots:** Smart and adaptive. They use Computer Vision to *see* the car door. If the door is moved, the robot adjusts its arm. It can pick up a delicate egg or a heavy box by "feeling" the weight.
    `,
    outcomes: ['Separate AI from Hardware', 'Adaptive Robotics', 'Automation'],
    quiz: [
      {
        id: 1,
        question: 'Is a robot the same thing as AI?',
        options: ['Yes', 'No, the robot is the body, AI is the brain', 'Only in movies'],
        correctAnswer: 1,
        explanation: 'Robotics is mechanical engineering; AI is the intelligence controlling the mechanics.'
      }
    ]
  },
  {
    id: 'l_industry',
    title: '19. Industry: Health & Finance',
    track: TrackLevel.Advanced,
    description: 'AI at work in critical fields.',
    content: `
### Healthcare: The Super-Assistant
AI doesn't replace doctors; it gives them supervision.
*   **Radiology:** AI scans X-rays for cancer patterns invisible to the human eye. It flags "suspicious" ones for the doctor to review first.
*   **Drug Discovery:** Developing a new drug takes 10 years. AI simulates chemical reactions to predict which molecules will cure a disease, shortening the process to months.

![Medical AI](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80)

### Finance: The Detective
*   **Fraud Detection:** Every time you swipe your credit card, an AI checks "Does this look like something [User] would buy? Is it in their usual location?" If not, it blocks it in milliseconds.
*   **Algorithmic Trading:** AI analyzes news headlines and stock prices to make trading decisions faster than any human trader could blink.
    `,
    outcomes: ['AI in Medicine', 'AI in Finance', 'Augmentation not Replacement'],
    quiz: [
      {
        id: 1,
        question: 'How does AI help in finance?',
        options: ['It prints money', 'It detects fraud patterns instantly', 'It replaces all bankers'],
        correctAnswer: 1,
        explanation: 'AI excels at pattern recognition, making it perfect for spotting unusual transactions among millions of normal ones.'
      }
    ]
  },
  {
    id: 'l_ethics',
    title: '20. Ethics & Bias',
    track: TrackLevel.Advanced,
    description: 'The Mirror Effect.',
    content: `
### Garbage In, Garbage Out
AI learns from human data (the entire internet). The internet contains bias, racism, sexism, and toxicity. Therefore, AI naturally "inherits" these flaws.

![Mirror Reflection](https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80)

### The Mirror
AI is a mirror of humanity.
*   **Hiring Algorithms:** If a company historically hired mostly men, the AI might learn that "Men = Good Hire" and start rejecting women's resumes.
*   **Deepfakes:** AI can clone voices and faces. This creates ethical nightmares—scammers using a CEO's voice to authorize money transfers, or fake videos damaging reputations.

### The Fix
This is why **AI Ethics** is a huge field. Humans must "align" the AI, teaching it: "Even though you saw this bad language on the internet, do not repeat it."
    `,
    outcomes: ['Understand Algorithmic Bias', 'Training Data risks', 'Deepfakes'],
    quiz: [
      {
        id: 1,
        question: 'Why can AI be biased?',
        options: ['It hates people', 'It learns from biased human data', 'It is programmed to be mean'],
        correctAnswer: 1,
        explanation: 'AI models reflect the biases present in the training data (human history/internet) they were fed.'
      }
    ]
  },
  {
    id: 'l_future',
    title: '21. Future: ANI vs AGI',
    track: TrackLevel.Advanced,
    description: 'What comes next?',
    content: `
### The Calculator vs. The Human
*   **ANI (Artificial Narrow Intelligence):** This is what we have now. It is incredible at *specific* tasks (Chess, Writing, Coding, Detecting Cancer). But a chess AI cannot write a poem. A writing AI cannot drive a car.
*   **AGI (Artificial General Intelligence):** The Holy Grail. An AI that can learn *any* intellectual task a human can. It can reason, plan, adapt to totally new situations, and teach itself new skills.

![Futuristic City](https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=800&q=80)

### The Singularity
Some experts predict "The Singularity"—a point where AI becomes smarter than humans and starts inventing its own better AI. Whether this is 10 years away or 100 years away (or impossible) is the biggest debate in tech.
    `,
    outcomes: ['Define ANI vs AGI', 'Current capabilities', 'Future potential'],
    quiz: [
      {
        id: 1,
        question: 'What is AGI?',
        options: ['A Generated Image', 'Artificial General Intelligence (Human-level)', 'A Game Interface'],
        correctAnswer: 1,
        explanation: 'AGI refers to a hypothetical AI that possesses the ability to understand, learn, and apply knowledge to any task, just like a human.'
      }
    ]
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 's1',
    category: 'Work',
    industry: 'Sales',
    title: 'Drafting a Cold Email',
    description: 'Create a friendly, non-spammy outreach email to a potential client.',
    templates: [
      'Act as a friendly sales assistant. Write an email to [Name] at [Company] regarding [Product]. Keep it under 100 words. Mention their recent news about [News Item].',
      'Rewrite this draft to sound more professional but less stiff: [Paste Draft]',
      'Give me 3 subject lines for an email about [Topic] that create curiosity but are not clickbait.'
    ],
    badExample: 'Write a sales email to John.',
    goodExample: 'Act as a senior sales rep. Write a 100-word email to John, a marketing director. Connect our SEO software to his recent LinkedIn post about falling traffic. Tone: Helpful, not pushy.',
    explanation: 'The good example gives a Role (Senior Rep), Constraints (100 words), Context (LinkedIn post), and Tone (Helpful).'
  },
  {
    id: 's2',
    category: 'Industry Playbooks',
    industry: 'Education',
    title: 'Generating Student Feedback',
    description: 'Create constructive feedback for student assignments quickly.',
    templates: [
      'I am a [Grade Level] teacher. Here is a student essay: [Paste Text]. Highlight 2 things they did well and 1 specific area for improvement regarding [Grammar/Structure].',
      'Create a rubric for a project about [Topic] for [Age Group].',
      'Simplify this explanation of [Complex Topic] for a 10-year-old.'
    ],
    badExample: 'Check this homework.',
    goodExample: 'Act as a kind 5th-grade teacher. Review this paragraph for clarity. Start with positive reinforcement, then suggest one way to improve sentence variety.',
    explanation: 'Teachers need specific feedback. Giving the AI a "kind" persona helps ensure the tone is appropriate for students.'
  },
  {
    id: 's3',
    category: 'Personal',
    title: 'Simplifying Complex Topics',
    description: 'Understand new concepts quickly without technical jargon.',
    templates: [
      'Explain [Topic] to me like I am 10 years old. Use an analogy involving [Hobby/Interest].',
      'Summarize this article into 3 bullet points: [Paste Article].',
      'What are the pros and cons of [Decision]?'
    ],
    badExample: 'Tell me about quantum physics.',
    goodExample: 'Explain quantum entanglement using an analogy about socks. Keep it simple for a non-scientist.',
    explanation: 'Asking for an analogy is the best way to bridge the gap between complex topics and daily understanding.'
  },
  {
    id: 's4',
    category: 'Industry Playbooks',
    industry: 'Business',
    title: 'Meeting Summaries',
    description: 'Turn messy notes into clear action items.',
    templates: [
      'Here are my raw notes from a meeting: [Paste Notes]. Organize them into: 1. Key Decisions, 2. Action Items (with names), 3. Next Steps.',
      'Draft a follow-up email to the team based on these action items: [Paste Items].'
    ],
    badExample: 'Fix these notes.',
    goodExample: 'Format these raw notes into a professional meeting minute document. Identify who is responsible for which task.',
    explanation: 'Structuring output into specific categories (Decisions, Actions) makes the AI result immediately usable.'
  },
  {
    id: 's5',
    category: 'Industry Playbooks',
    industry: 'Marketing',
    title: 'Content Repurposing',
    description: 'Turn one blog post into 10 pieces of content.',
    templates: [
      'Read this blog post [Paste Link/Text]. Create 3 tweets, 1 LinkedIn post, and a script for a 30-second TikTok video based on it.',
      'Rewrite this paragraph to be punchier and more engaging for Instagram captions.',
      'Extract 5 key quotes from this transcript.'
    ],
    badExample: 'Make tweets from this.',
    goodExample: 'Act as a social media manager. Create a thread of 5 tweets summarizing this article. Use emojis, keep it under 280 chars per tweet, and end with a question.',
    explanation: 'Platform-specific constraints (280 chars) and engagement tactics (end with a question) are key.'
  },
  {
    id: 's6',
    category: 'Work',
    industry: 'Tech',
    title: 'Vibe Coding / Excel Help',
    description: 'Write formulas or code without knowing the syntax.',
    templates: [
      'I have a spreadsheet. Column A is Dates, Column B is Sales. Write an Excel formula to sum Sales if the Date is in January.',
      'Write a Python script to rename all PDF files in a folder to include today\'s date.',
      'Explain what this error message means in simple terms: [Paste Error].'
    ],
    badExample: 'Excel help.',
    goodExample: 'I need an Excel formula for cell C1. Check if A1 is greater than 100. If yes, write "Bonus", if no, write "Standard".',
    explanation: 'Describing the logic step-by-step allows the AI to generate the exact syntax you need.'
  },
  {
    id: 's7',
    category: 'Industry Playbooks',
    industry: 'HR',
    title: 'Job Descriptions & Screening',
    description: 'Draft inclusive job posts and screen resumes faster.',
    templates: [
      'Draft a job description for a [Role] at a [Company Type]. Tone: Fun, inclusive, and professional. Highlight these benefits: [List Benefits].',
      'Here is a resume [Paste Text] and a job description [Paste Text]. Rate the match on a scale of 1-10 and list missing skills.',
      'Write 5 interview questions to test for [Specific Skill].'
    ],
    badExample: 'Write a job post for a manager.',
    goodExample: 'Draft a job description for a Remote Project Manager. Emphasize "Async communication" and "Work-life balance". Avoid corporate jargon.',
    explanation: 'Specifying the culture (Async, Work-life balance) helps attract the right candidates.'
  },
  {
    id: 's8',
    category: 'Industry Playbooks',
    industry: 'Business',
    title: 'Strategy & SWOT Analysis',
    description: 'Brainstorm business strategies and risks.',
    templates: [
      'Act as a business consultant. Perform a SWOT analysis for a local coffee shop competing with Starbucks.',
      'Critique this business idea: [Idea]. Play "Devil\'s Advocate" and list 5 reasons it might fail.',
      'What are 3 potential revenue streams for a [Business Type]?'
    ],
    badExample: 'Is my idea good?',
    goodExample: 'Act as a skeptical investor. Review this pitch for a dog-walking app. Point out 3 holes in the monetization strategy.',
    explanation: 'Asking the AI to be a "Skeptic" or "Devil\'s Advocate" prevents it from just being nice and agreeing with you.'
  }
];