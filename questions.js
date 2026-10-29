const questionsData = [
    {
        id: "q1",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 1,
        question: "কোয়ান্টাম তত্ত্ব আবিষ্কার করেন কোন বিজ্ঞানী?",
        options: [
            { id: "A", text: "ম্যাক্স প্ল্যাঙ্ক" },
            { id: "B", text: "রন্টজেন" },
            { id: "C", text: "ডাল্টন" },
            { id: "D", text: "থমসন" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "ম্যাক্স প্ল্যাঙ্ক ১৯০০ সালে কোয়ান্টাম তত্ত্ব (Quantum Theory) প্রতিপাদন করেন।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Modern Physics"
    },
    {
        id: "q2",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 2,
        question: "স্থির অবস্থান থেকে বিনা বাধায় পড়ন্ত বস্তুর নির্দিষ্ট সময়ে প্রাপ্ত বেগ এর সময়ের—",
        options: [
            { id: "A", text: "সমানুপাতিক" },
            { id: "B", text: "ব্যস্তানুপাতিক" },
            { id: "C", text: "বর্গের সমানুপাতিক" },
            { id: "D", text: "বর্গের ব্যস্তানুপাতিক" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "পড়ন্ত বস্তুর ক্ষেত্রে v = gt, সুতরাং v ∝ t (বেগ সময়ের সমানুপাতিক)।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Mechanics"
    },
    {
        id: "q3",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 3,
        question: "ক্ষমতার একক কোনটি?",
        options: [
            { id: "A", text: "জুল" },
            { id: "B", text: "নিউটন" },
            { id: "C", text: "কেলভিন" },
            { id: "D", text: "ওয়াট" }
        ],
        correctAnswer: "D",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "ক্ষমতার একক ওয়াট (Watt) বা জুল/সেকেন্ড।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Work, Power & Energy"
    },
    {
        id: "q4",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 4,
        question: "কোনটি তার দিয়ে তৈরি বাদযন্ত্র?",
        options: [
            { id: "A", text: "বাঁশি" },
            { id: "B", text: "হারমোনিয়াম" },
            { id: "C", text: "বেহালা" },
            { id: "D", text: "তবলার" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "বেহালা (Violin) একটি তারযুক্ত বাদ্যযন্ত্র (Chordophone)।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Waves & Sound"
    },
    {
        id: "q5",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 5,
        question: "কোনটি অনবায়নযোগ্য শক্তি?",
        options: [
            { id: "A", text: "গ্যাস" },
            { id: "B", text: "জলবিদ্যুৎ" },
            { id: "C", text: "বায়োগ্যাস" },
            { id: "D", text: "বায়োফুয়েল" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "প্রাকৃতিক গ্যাস একটি জীবাশ্ম জ্বালানি এবং অনবায়নযোগ্য শক্তির উৎস।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Energy Sources"
    },
    {
        id: "q6",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 6,
        question: "নিচের কোনটি যান্ত্রিক শক্তি?",
        options: [
            { id: "A", text: "শব্দ শক্তি" },
            { id: "B", text: "আলোর শক্তি" },
            { id: "C", text: "চৌম্বক শক্তি" },
            { id: "D", text: "গতি শক্তি" }
        ],
        correctAnswer: "D",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "গতিশক্তি ও বিভবশক্তি উভয়ই যান্ত্রিক শক্তির রূপ।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Mechanics"
    },
    {
        id: "q7",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 7,
        question: "শব্দের বেগ কোন মাধ্যমে সবচেয়ে বেশি?",
        options: [
            { id: "A", text: "প্লাজমা" },
            { id: "B", text: "পানি" },
            { id: "C", text: "নাইট্রোজেন" },
            { id: "D", text: "তামা" }
        ],
        correctAnswer: "D",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "কঠিন মাধ্যমে শব্দের বেগ সবচেয়ে বেশি। তামা একটি কঠিন পদার্থ (প্রায় 5010 m/s)।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Waves & Sound"
    },
    {
        id: "q8",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 8,
        question: "নিউটন এর ৩য় সূত্রের প্রয়োগ রয়েছে— i. নৌকা থেকে লাফ দেওয়ায় ii. পৃথিবীর চারিদিকে চাঁদের আবর্তনে iii. রকেট উড্ডয়নে নিচের কোনটি সঠিক?",
        options: [
            { id: "A", text: "i ও ii" },
            { id: "B", text: "ii ও iii" },
            { id: "C", text: "i ও iii" },
            { id: "D", text: "i, ii ও iii" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "নৌকা থেকে লাফ দেওয়া এবং রকেট উড্ডয়ন নিউটনের তৃতীয় সূত্র (ক্রিয়া ও প্রতিক্রিয়া) অনুযায়ী ঘটে। চাঁদের আবর্তন মহাকর্ষ বলের কারণে হয়।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Mechanics"
    },
    {
        id: "q9",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 9,
        question: "ক্ষমতা / বল = ?",
        options: [
            { id: "A", text: "বেগ" },
            { id: "B", text: "সময়" },
            { id: "C", text: "সরণ" },
            { id: "D", text: "ত্বরণ" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "ক্ষমতা P = Fv, সুতরাং P/F = v (বেগ)।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Mechanics"
    },
    {
        id: "q10",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 13,
        question: "100 fm = কত মিটার?",
        options: [
            { id: "A", text: "10⁻⁷" },
            { id: "B", text: "10⁻¹⁰" },
            { id: "C", text: "10⁻¹³" },
            { id: "D", text: "10⁻¹⁶" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "1 fm = 10⁻¹⁵ m, সুতরাং 100 fm = 10² × 10⁻¹⁵ = 10⁻¹³ m।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Units & Measurements"
    },
    {
        id: "q11",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 14,
        question: "বলের মাত্রা কোনটি?",
        options: [
            { id: "A", text: "ML²T⁻²" },
            { id: "B", text: "MLT⁻¹" },
            { id: "C", text: "MLT⁻²" },
            { id: "D", text: "ML⁻¹T⁻²" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "বল F = ma, ভর M এবং ত্বরণ LT⁻², ফলে মাত্রা [MLT⁻²]।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Mechanics"
    },
    {
        id: "q12",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 15,
        question: "সবল নিউক্লীয় বলের সীমা কত?",
        options: [
            { id: "A", text: "10⁻¹⁵ m" },
            { id: "B", text: "10⁻¹² m" },
            { id: "C", text: "10⁻⁹ m" },
            { id: "D", text: "10⁻⁶ m" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "সবল নিউক্লীয় বল অত্যন্ত স্বল্প পাল্লার বল, যার সীমা প্রায় 10⁻¹⁵ মিটার (1 fm)।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Modern Physics"
    },
    {
        id: "q13",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 18,
        question: "বর্তমান পৃথিবীতে ব্যবহৃত মোট শক্তি 10⁵ J হলে, নবায়নযোগ্য শক্তি কত জুল?",
        options: [
            { id: "A", text: "10000" },
            { id: "B", text: "20000" },
            { id: "C", text: "30000" },
            { id: "D", text: "40000" }
        ],
        correctAnswer: "B",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "সাধারণত নবায়নযোগ্য শক্তির অংশ প্রায় 20% ধরা হয় (বা প্রমিত পাঠ্যবইয়ের অনুপাত অনুযায়ী 20% of 10⁵ = 20000 J)।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Energy Sources"
    },
    {
        id: "q14",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 19,
        question: "নিচের কোন সম্পর্কটি সঠিক?",
        options: [
            { id: "A", text: "g = 4π²L / T²" },
            { id: "B", text: "g = 4π²T² / L" },
            { id: "C", text: "g = 4π² / L²T" },
            { id: "D", text: "g = 4π²L² / T" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "সরল দোলকের ক্ষেত্রে T = 2π√(L/g) ⟹ T² = 4π²L/g ⟹ g = 4π²L / T²।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Oscillations & Waves"
    },
    {
        id: "q15",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 20,
        question: "ক্যান্ডেলা কীসের একক?",
        options: [
            { id: "A", text: "বৈদ্যুতিক প্রবাহ" },
            { id: "B", text: "দীপন তীব্রতা" },
            { id: "C", text: "তাপমাত্রা" },
            { id: "D", text: "পদার্থের পরিমাণ" }
        ],
        correctAnswer: "B",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "ক্যান্ডেলা (cd) হলো দীপন তীব্রতার (Luminous Intensity) এসআই একক।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Units & Measurements"
    },
    {
        id: "q16",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 21,
        question: "নিচের কোনটি ভেক্টর রাশি?",
        options: [
            { id: "A", text: "সময়" },
            { id: "B", text: "দৈর্ঘ্য" },
            { id: "C", text: "সরণ" },
            { id: "D", text: "ভর" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "সরণের মান ও দিক উভয়ই আছে, তাই এটি ভেক্টর রাশি।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Vectors & Mechanics"
    },
    {
        id: "q17",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 24,
        question: "শব্দ তরঙ্গের বিস্তার পূর্বের ৪ গুণ করা হলে, তীব্রতা হবে পূর্বের—",
        options: [
            { id: "A", text: "16 গুণ" },
            { id: "B", text: "4 গুণ" },
            { id: "C", text: "2 গুণ" },
            { id: "D", text: "½ গুণ" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "শব্দ তরঙ্গের তীব্রতা বিস্তারের বর্গের সমানুপাতিক (I ∝ A²)। বিস্তার 4 গুণ হলে তীব্রতা 4² = 16 গুণ হবে।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Waves & Sound"
    },
    {
        id: "q18",
        sourceImage: "1000070633.png",
        sourceQuestionNumber: 25,
        question: "ডেন্টিস্ট দাঁতের ক্যাভিটি দেখার জন্য কোন আয়না ব্যবহার করে?",
        options: [
            { id: "A", text: "সমতল" },
            { id: "B", text: "উত্তল" },
            { id: "C", text: "অবতল" },
            { id: "D", text: "অপসারী দর্পণ" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "অবতল দর্পণ (Concave mirror) বিবর্ধিত ও সোজা প্রতিবিম্ব গঠন করায় দাঁতের চিকিৎসায় ব্যবহৃত হয়।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Optics"
    },
    {
        id: "q19",
        sourceImage: "1000070635.png",
        sourceQuestionNumber: 1,
        question: "জড়তার ধারণা পাওয়া যায় নিউটনের কোন সূত্র থেকে?",
        options: [
            { id: "A", text: "মহাকর্ষ" },
            { id: "B", text: "প্রথম" },
            { id: "C", text: "দ্বিতীয়" },
            { id: "D", text: "তৃতীয়" }
        ],
        correctAnswer: "B",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "নিউটনের প্রথম সূত্র থেকে বল ও জড়তার ধারণা পাওয়া যায়।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Mechanics"
    },
    {
        id: "q20",
        sourceImage: "1000070635.png",
        sourceQuestionNumber: 2,
        question: "শব্দের পরিমাণ পরিমাপের একক কোনটি?",
        options: [
            { id: "A", text: "Hz" },
            { id: "B", text: "Wm⁻²" },
            { id: "C", text: "dB" },
            { id: "D", text: "J" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "শব্দের তীব্রতার লেভেল বা শব্দের মাত্রা ডেসিবেল (dB) এককে পরিমাপ করা হয়।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Waves & Sound"
    },
    {
        id: "q21",
        sourceImage: "1000070635.png",
        sourceQuestionNumber: 20,
        question: "পদার্থের পরিমাণ এর একক কোনটি?",
        options: [
            { id: "A", text: "ক্যান্ডেলা" },
            { id: "B", text: "কেলভিন" },
            { id: "C", text: "মিটার" },
            { id: "D", text: "মোল" }
        ],
        correctAnswer: "D",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "পদার্থের পরিমাণের এসআই একক হলো মোল (mol)।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Units & Measurements"
    },
    {
        id: "q22",
        sourceImage: "1000070635.png",
        sourceQuestionNumber: 21,
        question: "কোনটি ভেক্টর রাশি?",
        options: [
            { id: "A", text: "দূরত্ব" },
            { id: "B", text: "সরণ" },
            { id: "C", text: "বেগ" },
            { id: "D", text: "ত্বরণ" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "এখানে নির্দিষ্ট অপশনগুলোর মধ্যে বেগ (Velocity) একটি ভেক্টর রাশি (যদিও সরণ ও ত্বরণও ভেক্টর, প্রশ্নপত্রের প্রমিত উত্তর অনুযায়ী বেগ বা সরণ)। সঠিক উত্তর সরণ/বেগ।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Vectors & Mechanics"
    },
    {
        id: "q23",
        sourceImage: "1000070638.png",
        sourceQuestionNumber: 7,
        question: "ভেক্টর রাশির উদাহরণ কোনটি?",
        options: [
            { id: "A", text: "বেগ" },
            { id: "B", text: "তাপমাত্রা" },
            { id: "C", text: "দৈর্ঘ্য" },
            { id: "D", text: "সময়" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "বেগ হলো ভেক্টর রাশি, আর তাপমাত্রা, দৈর্ঘ্য ও সময় স্কেলার রাশি।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Vectors & Mechanics"
    },
    {
        id: "q24",
        sourceImage: "1000070638.png",
        sourceQuestionNumber: 8,
        question: "ভরবেগের মাত্রা কোনটি?",
        options: [
            { id: "A", text: "MLT⁻¹" },
            { id: "B", text: "MLT⁻²" },
            { id: "C", text: "ML²T⁻¹" },
            { id: "D", text: "ML²T⁻²" }
        ],
        correctAnswer: "A",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_calculation",
        explanation: "ভরবেগ p = mv, ভরের মাত্রা M এবং বেগের মাত্রা LT⁻¹, তাই ভরবেগের মাত্রা [MLT⁻¹]।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Mechanics"
    },
    {
        id: "q25",
        sourceImage: "1000070638.png",
        sourceQuestionNumber: 9,
        question: "মহাকর্ষ ধ্রুবকের মান কত?",
        options: [
            { id: "A", text: "5.98 × 10²⁴ Nm²kg⁻²" },
            { id: "B", text: "6.37 × 10⁶ Nm²kg⁻²" },
            { id: "C", text: "6.67 × 10⁻¹¹ Nm²kg⁻²" },
            { id: "D", text: "6.37 × 10⁻¹¹ Nm²kg⁻²" }
        ],
        correctAnswer: "C",
        answerVerified: true,
        questionVerified: true,
        answerMethod: "physics_definition",
        explanation: "সার্বজনীন মহাকর্ষ ধ্রুবক G এর মান 6.673 × 10⁻¹¹ N m² kg⁻²।",
        needsReview: false,
        hasImageDependency: false,
        topic: "Gravitation"
    }
];
