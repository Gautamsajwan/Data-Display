type Profile = {
    name: string;
    description: string;
    jobsApplied: number;
    likes: number;
};

const dummyData: Profile[] = [
    {
        name: 'Gautam Sajwan',
        description: 'Full stack developer 🧑‍💻 | Graphic Era Hill University 🏫 | U-Hackathon finalist 🏆 | TechSurf 2023 finalist (4th runner up) 🏆 | ui/ux enthusiast 🖌️ | 800+ problems solved on @leetcode & @geeksForgeeks 🎖️',
        jobsApplied: 24,
        likes: 32
    },
    {
        name: 'John Doe',
        description: 'Backend engineer 💻 | Stanford University 🏫 | Google Code Jam finalist 🏆 | ACM ICPC World Finalist 🏆 | Passionate about algorithms and data structures 📈 | Open-source contributor 🌐| Winner of Apple WWDC Scholarship 🏆 | Experienced in iOS and Android development 📱 | Passionate about creating intuitive user experiences 🌟',
        jobsApplied: 15,
        likes: 20
    },
    {
        name: 'Alice Smith',
        description: 'Product designer 🎨 | Rhode Island School of Design 🏫 | Winner of Adobe Design Challenge 🏆 | 10+ years of experience in UI/UX design 💼 | Creative thinker and problem solver 🧠 | Independent game developer 🕹️ | Experienced in Unity and Unreal Engine 🎮 | Passionate about creating immersive gaming experiences 🚀',
        jobsApplied: 30,
        likes: 40
    },
    {
        name: 'Emily Brown',
        description: 'Frontend developer 🖥️ | Carnegie Mellon University 🏫 | HackMIT finalist 🏆 | JavaScript and React.js enthusiast ⚛️ | Advocate for clean and maintainable code 🧼',
        jobsApplied: 18,
        likes: 25
    },
    {
        name: 'Michael Johnson',
        description: 'Data scientist 📊 | Massachusetts Institute of Technology 🏫 | Kaggle competitions winner 🏆 | Python and TensorFlow expert 🐍 | Passionate about machine learning and artificial intelligence 🤖',
        jobsApplied: 22,
        likes: 28
    },
    {
        name: 'Sophia Rodriguez',
        description: 'Mobile app developer 📱 | University of California, Berkeley 🏫 | Winner of Apple WWDC Scholarship 🏆 | Experienced in iOS and Android development 📱 | Passionate about creating intuitive user experiences 🌟',
        jobsApplied: 20,
        likes: 35
    },
    {
        name: 'Daniel Martinez',
        description: 'Software engineer 👨‍💻 | University of Texas at Austin 🏫 | Interned at Google 🌐 | Full-stack web development enthusiast 🌐 | Open-source contributor and tech blogger 🖋️',
        jobsApplied: 28,
        likes: 38
    },
    {
        name: 'Olivia Wilson',
        description: 'UI/UX designer 🎨 | Parsons School of Design 🏫 | Winner of Awwwards 🏆 | Specialized in user-centered design and prototyping ✨ | Passionate about creating delightful user experiences 🌈',
        jobsApplied: 16,
        likes: 22
    },
    {
        name: 'Ethan Taylor',
        description: 'Game developer 🎮 | DigiPen Institute of Technology 🏫 | Independent game developer 🕹️ | Experienced in Unity and Unreal Engine 🎮 | Passionate about creating immersive gaming experiences 🚀',
        jobsApplied: 32,
        likes: 42
    },
    {
        name: 'Emma Anderson',
        description: 'Software engineer 👩‍💻 | University of Washington 🏫 | Interned at Amazon 🌐 | Backend development specialist 🛠️ | Passionate about scalable and efficient systems ⚙️',
        jobsApplied: 26,
        likes: 30
    },
];

export default dummyData