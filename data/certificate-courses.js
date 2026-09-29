/* ==========================================================================
   data/certificate-courses.js — DHL Certificate Courses.

   A course has modules; a module has lessons; the course ends with a quiz.
   A certificate unlocks when every lesson is marked complete AND the quiz
   score reaches passMark (percent).

   Lessons can be written here (body, refs, questions) or reuse a study
   note from another data list with fromList(list, id).
   status: "open" (available) or "planned" (shown as "Coming later").
   ========================================================================== */

const certificateCategories = ["Bible & Gospel", "Discipleship", "Mind Education", "Korean Language", "Living in Korea", "Leadership", "Ministry & Service"];

/* Reuse a topic or lesson from content.js / lessons.js as a course lesson. */
function fromList(list, id, minutes) {
  const t = list.find(x => x.id === id);
  if (!t) return { id, title: id, minutes: minutes || 15, body: [] };
  return { id: t.id, title: t.title, minutes: minutes || t.minutes || 15, body: [t.summary].concat(t.assignment ? [`Practical assignment: ${t.assignment}`] : []).concat(t.tip ? [`Tip: ${t.tip}`] : []), refs: t.refs || [], questions: t.questions || [], draft: t.status === "draft" };
}

const certificateCourses = [
  {
    id: "gospel-foundations", status: "open", category: "Bible & Gospel", level: "Beginner", hours: 2,
    title: "Gospel Foundations",
    description: "Walk through the message of the Bible from creation to new life in Christ, reading the key passages for yourself.",
    objectives: ["Explain why people need salvation, using Scripture", "Describe who Jesus is and what he did on the cross", "Understand repentance and faith", "Read and discuss key Gospel passages"],
    modules: [
      { title: "God and people", lessons: [fromList(gospelCourse, "gc1"), fromList(gospelCourse, "gc2")] },
      { title: "Jesus Christ", lessons: [fromList(gospelCourse, "gc3"), fromList(gospelCourse, "gc4")] },
      { title: "Our response", lessons: [fromList(gospelCourse, "gc5"), fromList(gospelCourse, "gc6")] }
    ],
    passMark: 80,
    quiz: [
      { q: "According to Romans 6:23, what is the gift of God?", options: ["Eternal life through Jesus Christ our Lord", "Wealth and success", "A long life", "The reward for good works"], answer: 0, explain: "Romans 6:23: \"the gift of God is eternal life through Jesus Christ our Lord.\"" },
      { q: "Ephesians 2:8 says we are saved by grace through…", options: ["works", "faith", "the law", "tradition"], answer: 1, explain: "Ephesians 2:8: \"For by grace are ye saved through faith.\"" },
      { q: "In John 3, who came to Jesus at night?", options: ["Peter", "Zacchaeus", "Nicodemus", "Paul"], answer: 2, explain: "John 3:1–2 tells of Nicodemus, a Pharisee, coming to Jesus by night." },
      { q: "Which two responses does Jesus call for in Mark 1:15?", options: ["Pray and fast", "Repent and believe the gospel", "Give and serve", "Obey and work harder"], answer: 1, explain: "Mark 1:15: \"repent ye, and believe the gospel.\"" },
      { q: "2 Corinthians 5:17 says that anyone in Christ is…", options: ["free from all trouble", "a new creature", "a prophet", "perfect in every way"], answer: 1, explain: "2 Corinthians 5:17: \"if any man be in Christ, he is a new creature.\"" }
    ]
  },
  {
    id: "discipleship-first-steps", status: "open", category: "Discipleship", level: "Beginner", hours: 2,
    title: "First Steps of Discipleship",
    description: "Build the foundations of Christian life: assurance, the Word, prayer, fellowship, service and sharing your faith.",
    objectives: ["Understand the basis of assurance of salvation", "Start daily habits of Bible reading and prayer", "Belong to a fellowship", "Take a first step in serving and sharing your faith"],
    modules: [
      { title: "Firm foundations", lessons: [fromList(discipleshipTopics, "assurance"), fromList(discipleshipTopics, "word")] },
      { title: "Daily life with God", lessons: [fromList(discipleshipTopics, "prayer"), fromList(discipleshipTopics, "fellowship")] },
      { title: "Living it out", lessons: [fromList(discipleshipTopics, "serving"), fromList(discipleshipTopics, "evangelism")] }
    ],
    passMark: 80,
    quiz: [
      { q: "Acts 2:42 says the first believers devoted themselves to the apostles' teaching, fellowship, breaking of bread, and…", options: ["fasting", "prayers", "singing", "travel"], answer: 1, explain: "Acts 2:42 lists \"doctrine and fellowship, and in breaking of bread, and in prayers.\"" },
      { q: "Why did John write, according to 1 John 5:13?", options: ["So that you may know that you have eternal life", "To record church rules", "To describe the end of the world", "To list the apostles"], answer: 0, explain: "1 John 5:13: \"that ye may know that ye have eternal life.\"" },
      { q: "James 1:22 says to be doers of the word, and not…", options: ["teachers only", "hearers only", "readers only", "leaders only"], answer: 1, explain: "James 1:22: \"be ye doers of the word, and not hearers only.\"" },
      { q: "According to Mark 10:45, the Son of man came not to be ministered unto, but to…", options: ["rule", "judge", "minister", "teach the law"], answer: 2, explain: "Mark 10:45: \"not to be ministered unto, but to minister.\"" },
      { q: "In Matthew 28:19, what did Jesus send his disciples to do?", options: ["Build a temple", "Teach all nations", "Stay in Jerusalem", "Write the Bible"], answer: 1, explain: "Matthew 28:19: \"Go ye therefore, and teach all nations.\"" }
    ]
  },
  {
    id: "mind-understanding-heart", status: "open", category: "Mind Education", level: "Beginner", hours: 2,
    title: "Understanding the Heart",
    description: "Learn how thoughts and desires shape our choices, and how to build self-control, healthy relationships and a renewed mind.",
    objectives: ["Explain how thoughts influence the heart and actions", "Recognize how temptation grows", "Practice self-control and listening", "Overcome isolation by building healthy relationships"],
    modules: [
      { title: "The world of the heart", lessons: [fromList(mindTopics, "mind-heart"), fromList(mindTopics, "mind-thoughts")] },
      { title: "A disciplined mind", lessons: [fromList(mindTopics, "mind-selfcontrol"), fromList(mindTopics, "mind-renewing")] },
      { title: "Relationships", lessons: [fromList(mindTopics, "mind-isolation"), fromList(mindTopics, "mind-listening")] }
    ],
    passMark: 80,
    quiz: [
      { q: "Proverbs 4:23 says to keep your heart with all diligence, because…", options: ["out of it are the issues of life", "it is always right", "no one else can see it", "feelings never change"], answer: 0, explain: "Proverbs 4:23: \"for out of it are the issues of life.\"" },
      { q: "According to James 1:14, a person is tempted when…", options: ["they are too busy", "they are drawn away of their own lust and enticed", "they read the Bible", "they are alone at night"], answer: 1, explain: "James 1:14: \"every man is tempted, when he is drawn away of his own lust, and enticed.\"" },
      { q: "Proverbs 25:28 compares a person without rule over their own spirit to…", options: ["a tree without roots", "a city broken down, without walls", "a ship without a sail", "a house without a door"], answer: 1, explain: "Proverbs 25:28: \"like a city that is broken down, and without walls.\"" },
      { q: "Ecclesiastes 4:9–10 says two are better than one because…", options: ["if one falls, the other can lift him up", "two people earn more money", "people should never be alone", "it is a law of nature"], answer: 0, explain: "Ecclesiastes 4:10: \"if they fall, the one will lift up his fellow.\"" },
      { q: "Romans 12:2 says to be transformed by…", options: ["hard work", "the renewing of your mind", "a new environment", "good luck"], answer: 1, explain: "Romans 12:2: \"be ye transformed by the renewing of your mind.\"" }
    ]
  },
  {
    id: "korean-survival-1", status: "open", category: "Korean Language", level: "Beginner", hours: 3,
    title: "Survival Korean 1",
    description: "Read Hangul and use the Korean you need for greetings, shopping, numbers and getting around.",
    objectives: ["Read Hangul syllable blocks", "Greet people politely", "Use both Korean number systems correctly", "Ask for prices, items and directions"],
    modules: [
      { title: "Hangul", lessons: [
        { id: "ks-hangul", title: "Meet Hangul", minutes: 30, body: [
          "Hangul is the Korean alphabet, created in the 15th century under King Sejong. It has 14 basic consonants and 10 basic vowels.",
          "Letters are written together in syllable blocks. For example, 한 is made of ㅎ (h) + ㅏ (a) + ㄴ (n).",
          "Practice: 안녕하세요 is five blocks: 안 + 녕 + 하 + 세 + 요. Try reading it slowly, one block at a time."] },
        { id: "ks-blocks", title: "Reading syllable blocks", minutes: 30, body: [
          "A block starts with a consonant, followed by a vowel: 가 (ga), 나 (na), 다 (da). Some blocks add a final consonant underneath: 각 (gak), 산 (san).",
          "When a syllable starts with a vowel sound, the silent consonant ㅇ holds the first place: 아 (a), 오 (o), 우 (u).",
          "Practice: read 가 나 다 라 마 바 사 아 자 차 카 타 파 하."] }
      ] },
      { title: "Everyday speech", lessons: [
        { id: "ks-polite", title: "Greetings and polite speech", minutes: 25, body: [
          "Korean changes its endings to show politeness. The everyday polite ending is -요: 괜찮아요 (it's okay), 좋아요 (it's good).",
          "The formal ending -습니다 / -ㅂ니다 is used at work, in announcements and with people you should show respect to: 감사합니다 (thank you).",
          "Useful greetings: 안녕하세요 (hello), 감사합니다 (thank you), 죄송합니다 (I'm sorry), 수고하셨습니다 (thank you for your hard work, said after work)."] },
        { id: "ks-store", title: "At the store", minutes: 25, body: [
          "이거 얼마예요? How much is this?",
          "이거 주세요. Please give me this one.",
          "카드 돼요? Can I pay by card?",
          "봉투 주세요. A bag, please."] }
      ] },
      { title: "Numbers and directions", lessons: [
        { id: "ks-numbers", title: "Two number systems", minutes: 35, body: [
          "Korean uses two sets of numbers. Sino-Korean numbers are used for money, dates, phone numbers and minutes: 일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 육 (6), 칠 (7), 팔 (8), 구 (9), 십 (10).",
          "Native Korean numbers are used for counting things, age and hours on the clock: 하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5), 여섯 (6), 일곱 (7), 여덟 (8), 아홉 (9), 열 (10).",
          "Example: 오천 원 is 5,000 won (Sino-Korean)."] },
        { id: "ks-directions", title: "Getting around", minutes: 25, body: [
          "지하철역이 어디예요? Where is the subway station?",
          "화장실이 어디예요? Where is the restroom?",
          "(place)까지 가 주세요. Please take me to (place). Useful in a taxi.",
          "여기서 내려요. I'm getting off here."] }
      ] }
    ],
    passMark: 80,
    quiz: [
      { q: "How many basic consonants does Hangul have?", options: ["10", "14", "19", "24"], answer: 1, explain: "Hangul has 14 basic consonants and 10 basic vowels." },
      { q: "Which number system is used for prices, like 5,000 won?", options: ["Native Korean", "Sino-Korean", "Either one", "Neither; English numbers are used"], answer: 1, explain: "Money uses Sino-Korean numbers: 오천 원." },
      { q: "What does 이거 주세요 mean?", options: ["How much is this?", "Please give me this one.", "Where is this?", "I don't want this."], answer: 1, explain: "이거 주세요 means \"Please give me this one.\"" },
      { q: "Which ending makes everyday speech polite?", options: ["-요", "-다", "-야", "-지"], answer: 0, explain: "-요 is the everyday polite ending, as in 괜찮아요." },
      { q: "Which consonant is silent at the start of a syllable?", options: ["ㄱ", "ㄴ", "ㅇ", "ㅎ"], answer: 2, explain: "ㅇ is silent at the start of a syllable, as in 아." }
    ]
  },
  {
    id: "settling-in-korea", status: "open", category: "Living in Korea", level: "Beginner", hours: 1.5,
    title: "Settling in Korea",
    description: "The essentials for your first months in Korea: documents, transport, healthcare, daily routines and where to get help.",
    objectives: ["Know the residence card and visa basics", "Get around with public transport", "Use the healthcare system", "Know who to call for help"],
    modules: [
      { title: "Documents", lessons: [
        { id: "sk-card", title: "Your residence card", minutes: 15, body: [
          "If you will stay in Korea for more than 90 days, you must register as a foreign resident within 90 days of entering Korea. You'll receive a residence card.",
          "Book an appointment at your local immigration office through Hi Korea (hikorea.go.kr). Carry your card with you, and report your new address when you move, within the legal deadline.",
          "Rules change. Always check Hi Korea or call 1345 for your own situation."] },
        { id: "sk-visa", title: "Your visa and your stay", minutes: 15, body: [
          "Your visa type decides what activities you may do in Korea, such as study or a specific kind of work.",
          "Apply for an extension or change before your permitted stay ends. Late applications, or working outside what your visa allows, can lead to fines or other penalties.",
          "For advice on your own case, ask the Immigration Contact Center (1345) or a qualified professional."] }
      ] },
      { title: "Daily life", lessons: [
        { id: "sk-transport", title: "Getting around", minutes: 10, body: [
          "Buy a T-money card at a convenience store or subway station and top it up with cash. It works on buses, subways and many taxis.",
          "Naver Map and KakaoMap give the most reliable directions in Korea.",
          "Tap your card when getting on and off buses to receive transfer discounts."] },
        { id: "sk-health", title: "Staying healthy", minutes: 15, body: [
          "Many foreign residents who stay six months or more are enrolled in National Health Insurance. Check your status at nhis.or.kr.",
          "Visit a local clinic (의원) for everyday illness and bring your residence card. Pharmacies (약국) fill prescriptions.",
          "In an emergency, call 119."] },
        { id: "sk-trash", title: "Trash and recycling", minutes: 10, body: [
          "Household trash goes in volume-based trash bags (종량제 봉투), sold at convenience stores.",
          "Food waste and recyclables are separated. Rules differ by district, so ask your neighbors or building manager."] },
        { id: "sk-help", title: "Getting help", minutes: 10, body: [
          "112: police. 119: fire and ambulance. 109: suicide prevention counseling.",
          "1345: Immigration Contact Center (multilingual). 1577-1366: Danuri helpline for multicultural families.",
          "You're not alone. The DHL community and mentors are here to help."] }
      ] }
    ],
    passMark: 80,
    quiz: [
      { q: "What number do you call for fire and ambulance in Korea?", options: ["112", "119", "911", "1345"], answer: 1, explain: "119 is for fire and ambulance; 112 is for police." },
      { q: "Which number is the multilingual Immigration Contact Center?", options: ["1345", "1350", "109", "112"], answer: 0, explain: "1345 is the Immigration Contact Center." },
      { q: "What is the common transit card in Korea called?", options: ["Octopus", "T-money", "Suica", "Oyster"], answer: 1, explain: "T-money works on buses, subways and many taxis." },
      { q: "Which map apps give the most reliable directions in Korea?", options: ["Naver Map and KakaoMap", "Only paper maps", "Any app works the same", "None; ask a taxi driver"], answer: 0, explain: "Naver Map and KakaoMap are the most reliable in Korea." },
      { q: "Where does household trash go?", options: ["Any plastic bag", "Volume-based trash bags (종량제 봉투)", "Recycling bins", "The street corner"], answer: 1, explain: "Household trash goes in volume-based trash bags sold at convenience stores." }
    ]
  },
  {
    id: "servant-leadership", status: "open", category: "Leadership", level: "Intermediate", hours: 3,
    title: "Servant Leadership Basics",
    description: "Learn to lead the way Jesus did: character first, serving others, mentoring and handling conflict.",
    objectives: ["Describe servant leadership from Scripture", "Understand the character a leader needs", "Begin mentoring one person", "Handle conflict biblically"],
    modules: [
      { title: "The heart of a leader", lessons: [fromList(leadershipTopics, "servant", 20), fromList(leadershipTopics, "biblical", 20)] },
      { title: "Leading others", lessons: [fromList(leadershipTopics, "paul", 20), fromList(leadershipTopics, "mentoring", 20)] },
      { title: "Leading groups", lessons: [fromList(leadershipTopics, "small-group", 20), fromList(leadershipTopics, "conflict", 20)] }
    ],
    passMark: 80,
    quiz: [
      { q: "In Mark 10:43, what must a person be to be great among Jesus' followers?", options: ["The most educated", "Your minister (servant)", "The oldest", "The most gifted"], answer: 1, explain: "Mark 10:43: \"whosoever will be great among you, shall be your minister.\"" },
      { q: "In 2 Timothy 2:2, what should faithful people be able to do?", options: ["Teach others also", "Lead worship", "Raise money", "Travel far"], answer: 0, explain: "2 Timothy 2:2: \"faithful men, who shall be able to teach others also.\"" },
      { q: "According to Matthew 18:15, what is the first step when someone sins against you?", options: ["Tell the church", "Go and tell him his fault between you and him alone", "Ignore it", "Post about it online"], answer: 1, explain: "Matthew 18:15 begins with a private conversation." },
      { q: "What is DHL's core leadership question?", options: ["How many people follow this person?", "Can this person now help another person grow?", "How long has this person been a Christian?", "Can this person speak in public?"], answer: 1, explain: "DHL measures leadership by whether someone can help another person grow." },
      { q: "1 Timothy 3:1–7 focuses mostly on a leader's…", options: ["wealth", "age", "character", "education"], answer: 2, explain: "Most of the qualities listed are about character and conduct." }
    ]
  },
  {
    id: "online-ministry-host", status: "open", category: "Ministry & Service", level: "Intermediate", hours: 2,
    title: "Online Ministry Host",
    description: "Serve by creating content, hosting online Bible studies and building safe online communities that lead to real relationships.",
    objectives: ["Plan content with a clear next step", "Host a welcoming online Bible study", "Moderate a safe group chat", "Move people from online to real-life community"],
    modules: [
      { title: "Content", lessons: [fromList(digitalTopics, "content", 20), fromList(digitalTopics, "social", 20)] },
      { title: "Hosting", lessons: [fromList(digitalTopics, "online-study", 20), fromList(digitalTopics, "zoom", 20)] },
      { title: "Community", lessons: [fromList(digitalTopics, "community-building", 20), fromList(digitalTopics, "online-discipleship", 20)] }
    ],
    passMark: 80,
    quiz: [
      { q: "Every post should answer which question?", options: ["How many likes will this get?", "What do I want someone to do after seeing this?", "Is this trending?", "How long is it?"], answer: 1, explain: "Each post should lead to a clear next step." },
      { q: "When should you send the passage for an online Bible study?", options: ["During the meeting", "The day before", "A month before", "Never"], answer: 1, explain: "Sending it the day before lets people read ahead." },
      { q: "What is the co-host's key job in a Zoom meeting?", options: ["Greet newcomers by name", "Mute everyone", "Record the meeting", "Share their screen"], answer: 0, explain: "A co-host who welcomes newcomers makes people feel they belong." },
      { q: "What helps a group chat stay safe and welcoming?", options: ["No rules at all", "Simple rules and two moderators", "Only leaders can post", "Adding as many people as possible"], answer: 1, explain: "Simple rules and two moderators keep a group healthy." },
      { q: "Complete the DHL principle: \"Online is not the destination. Online is the…\"", options: ["future", "bridge", "church", "classroom"], answer: 1, explain: "Online is the bridge to real relationships." }
    ]
  },

  /* Planned courses: shown as "Coming later" to show the progression. */
  { id: "romans-study", status: "planned", category: "Bible & Gospel", level: "Intermediate", hours: 6, title: "Romans: The Gospel Explained", description: "A chapter-by-chapter study of Paul's letter to the Romans." },
  { id: "mind-relationships", status: "planned", category: "Mind Education", level: "Intermediate", hours: 4, title: "Mind Education 2: Relationships", description: "Communication, empathy and forgiveness in family, work and church." },
  { id: "korean-survival-2", status: "planned", category: "Korean Language", level: "Intermediate", hours: 6, title: "Survival Korean 2", description: "Conversations at work, the hospital and government offices." },
  { id: "topik-prep", status: "planned", category: "Korean Language", level: "Advanced", hours: 10, title: "TOPIK I Preparation", description: "Reading and listening practice for TOPIK levels 1 and 2." },
  { id: "working-in-korea", status: "planned", category: "Living in Korea", level: "Intermediate", hours: 3, title: "Working in Korea", description: "Contracts, workplace culture, rights and career planning." },
  { id: "small-group-leader", status: "planned", category: "Leadership", level: "Advanced", hours: 5, title: "Small Group Leader", description: "Plan and lead a small group, with a supervised practicum." },
  { id: "discipleship-2", status: "planned", category: "Discipleship", level: "Intermediate", hours: 4, title: "Growing Disciple", description: "Grace, the Spirit and spiritual growth." },
  { id: "ministry-practicum", status: "planned", category: "Ministry & Service", level: "Advanced", hours: 8, title: "Ministry Practicum", description: "Apply what you've learned in real ministry with a mentor." }
];
