/* ==========================================================================
   DHL – Diaspora Hub for Leaders
   content.js — SITE CONFIGURATION + section content.
   Everything you normally change is in this file or in /data.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CONFIGURATION — edit these values
   -------------------------------------------------------------------------- */

/* YouTube Data API v3. Use a BROWSER key restricted to your website
   (see README section 6). Leave empty to use the manual list in
   data/ministry-posts.js. */
const YOUTUBE_API_KEY = "";
const YOUTUBE_CHANNEL_ID = "UCy-688NReUqpEgWUziM2n8A";   // DHL channel

/* Your public Facebook Page address. */
/* Share links (facebook.com/share/...) work for buttons, but the embedded
   post feed on the Media page needs the Page's real address, e.g.
   "https://www.facebook.com/YourPageName". See README section 7. */
const FACEBOOK_PAGE_URL = "https://www.facebook.com/share/1CPwX6C7Hv/";

/* AI Ministry Assistant.
   enabled:false  -> demo mode (answers come from DHL content on this site)
   enabled:true   -> questions are sent to YOUR backend at `endpoint`.
   Never put an AI provider's secret key here. See README section 13. */
const AI_CONFIG = {
  enabled: false,
  endpoint: "",                         // e.g. "https://api.your-dhl-backend.org/ai/ask"
  assistantName: "DHL AI Assistant",
  maxQuestionLength: 600
};

const CONFIG = {
  name: "DHL – Diaspora Hub for Leaders",
  shortName: "DHL",
  tagline: "From Connection to Commission",
  description: "Helping foreigners in Korea move from connection to discipleship, leadership, and mission.",
  logo: "assets/logo/dhl-logo.png",

  /* Community photo behind the top of the home page.
     Put your photo in assets/images/ with this exact name (landscape,
     about 1600 x 900 px). If the file is missing, the plain navy
     background is used. heroImagePosition keeps faces in view when the
     photo is cropped: "center", "top", "bottom", or e.g. "center 30%". */
  heroImage: "assets/images/community.jpg",
  heroImageAlt: "The DHL community together, making finger-heart signs",
  heroImagePosition: "center 40%",

  /* Section photos. Save your photos in assets/images/ with these names
     (landscape, about 1200 x 800 px, under 400 KB). Until a photo is
     added, a designed placeholder is shown. "alt" describes the photo for
     people using screen readers; update it to match your real photo. */
  photos: {
    contents:      { src: "assets/images/contents.jpg",      alt: "DHL members learning together", placeholder: "contents" },
    bibleJourney:  { src: "assets/images/bible-journey.jpg", alt: "A small group studying the Bible together", placeholder: "bible" },
    gospel:        { src: "assets/images/gospel-class.jpg",  alt: "A Gospel class in session", placeholder: "gospel" },
    discipleship:  { src: "assets/images/discipleship.jpg",  alt: "A mentor and a younger believer reading the Bible", placeholder: "discipleship" },
    mindEducation: { src: "assets/images/mind-education.jpg", alt: "A large audience listening to speakers at a Mind Education seminar", placeholder: "mind" },
    liveInKorea:   { src: "assets/images/live-in-korea.jpg", alt: "Traditional hanok rooftops in Seoul, with N Seoul Tower in the distance", placeholder: "korea" },
    certificates:  { src: "assets/images/certificates.jpg",  alt: "Course graduates holding their DHL certificates", placeholder: "cert" }
  },
  location: "Seoul, South Korea",
  /* Bible links open on BibleGateway in this version (e.g. "NIV", "ESV" or "KJV"; Tagalog versions are available there too). */
  bibleVersion: "NIV",
  email: "hello@your-dhl-ministry.org",

  /* Show "Sample" badges on demo posts, events and groups.
     Set to false once all demo content is replaced. */
  showDemoLabels: true,

  youtube: { apiKey: YOUTUBE_API_KEY, channelId: YOUTUBE_CHANNEL_ID, maxResults: 12, cacheMinutes: 60 },
  facebookPageUrl: FACEBOOK_PAGE_URL,

  /* External forms (Google Forms or similar). Empty = button hidden. */
  forms: {
    prayer: "https://forms.gle/your-prayer-form",
    contact: "https://forms.gle/your-contact-form",
    bibleStudy: "https://forms.gle/your-bible-study-form",
    mentor: "https://www.facebook.com/gichun.cho",      // DHL mentor (Facebook profile)
    community: "https://forms.gle/your-community-form",
    leadership: "https://forms.gle/your-academy-form",
    events: "https://forms.gle/your-event-form",
    question: "https://forms.gle/your-question-form"      // Q&A Corner
  },

  /* Social and community links. Empty = hidden. */
  social: {
    facebook: FACEBOOK_PAGE_URL,
    youtube: "https://www.youtube.com/channel/UCy-688NReUqpEgWUziM2n8A",
    instagram: "https://www.instagram.com/your-dhl",
    tiktok: "https://www.tiktok.com/@your-dhl",
    messenger: "https://m.me/j/SowpG-9qQ0G1Zu3C/",   // DHL community group chat on Messenger
    facebookGroup: "https://www.facebook.com/share/g/1DNAuhweRH/",
    whatsapp: "",
    kakaoOpenChat: "https://open.kakao.com/o/pJjZEWPi"
  },

  /* News Admin (admin.html). Set endpoint to your News Admin Worker's
     address after deploying it (README section 18). No secrets here. */
  admin: { endpoint: "" },

  /* Future backend. While enabled is false, the site uses the local
     files in /data. See README section 13. */
  backend: { enabled: false, baseUrl: "" }
};

/* --------------------------------------------------------------------------
   2. THE MINISTRY JOURNEY (home page route map)
   -------------------------------------------------------------------------- */
const journeySteps = [
  { id: "reach", title: "Contact", text: "Meet people through social media and practical help.", href: "live-in-korea.html", icon: "signal" },
  { id: "connect", title: "Relationship", text: "Build real friendships and community.", href: "community.html", icon: "people" },
  { id: "gospel", title: "Gospel", text: "Understand the good news of Jesus Christ.", href: "gospel.html", icon: "cross" },
  { id: "disciple", title: "Discipleship", text: "Grow through Bible study, mentoring and fellowship.", href: "discipleship.html", icon: "book" },
  { id: "train", title: "Leadership", text: "Develop character and skills to lead others.", href: "leadership.html", icon: "cap" },
  { id: "serve", title: "Ministry", text: "Serve others in real ministry.", href: "academy.html#practicum", icon: "hands" },
  { id: "multiply", title: "Multiplication", text: "Help develop new disciples and leaders.", href: "about.html#multiplication", icon: "branch" }
];

/* --------------------------------------------------------------------------
   3. CONTENTS HUB: three main categories
   -------------------------------------------------------------------------- */
const contentCategories = [
  { id: "bible", title: "Bible Journey", href: "bible-journey.html", color: "red", icon: "cross", photo: "bibleJourney",
    tagline: "Grow in faith and become a disciple.",
    text: "Gospel Class, Discipleship Training and Mind Education: a step-by-step path from discovering the Gospel to growing as a leader." },
  { id: "korea", title: "Live in Korea", href: "live-in-korea.html", color: "teal", icon: "map", photo: "liveInKorea",
    tagline: "Learn, work, study, and live confidently in Korea.",
    text: "Korean language, visas, jobs, campus life, daily life and a Q&A corner for foreigners in Korea." },
  { id: "cert", title: "Certificate Course", href: "certificates.html", color: "mango", icon: "cap", photo: "certificates",
    tagline: "Learn structured skills and complete recognized DHL courses.",
    text: "Self-paced courses with lessons, quizzes and a DHL certificate of completion." }
];

/* Bible Journey pathway (bible-journey.html) */
const bibleJourneyPath = [
  { id: "bj-gospel", title: "Gospel", text: "Understand the message of salvation.", href: "gospel.html" },
  { id: "bj-disciple", title: "Discipleship", text: "Grow in faith, the Bible and Christian life.", href: "discipleship.html" },
  { id: "bj-mind", title: "Mind Education", text: "Develop a healthy, disciplined mind.", href: "mind-education.html" },
  { id: "bj-leader", title: "Leadership", text: "Learn to help others grow.", href: "leadership.html" },
  { id: "bj-ministry", title: "Ministry", text: "Serve in real ministry.", href: "academy.html#practicum" }
];

/* Bible Journey programs (the three big cards) */
const bibleJourneyPrograms = [
  { id: "gospel", title: "Gospel Class", href: "gospel.html", level: "Beginner", color: "red", photo: "gospel",
    text: "Learn the Gospel and understand the message of salvation." },
  { id: "discipleship", title: "Discipleship Training", href: "discipleship.html", level: "Beginner to Intermediate", color: "blue", photo: "discipleship",
    text: "Develop a deeper understanding of faith, the Bible, and Christian life." },
  { id: "mind", title: "Mind Education", href: "mind-education.html", level: "Beginner to Intermediate", color: "violet", photo: "mindEducation",
    text: "Learn principles for a healthy and disciplined mind, good relationships, and a wise perspective on life." }
];

/* --------------------------------------------------------------------------
   3b. MIND EDUCATION lessons (mind-education.html)
   General study notes based on the listed passages, marked "draft".
   Replace them with DHL's official Mind Education materials.
   -------------------------------------------------------------------------- */
const mindTopics = [
  { id: "mind-heart", title: "The heart and its thoughts", level: "Beginner", minutes: 15, status: "draft",
    refs: ["Proverbs 4:23", "Mark 7:21–23"],
    summary: "The Bible treats the heart as the center of a person's thoughts, desires and choices. What happens in the heart shapes what we say and do.",
    questions: ["Why does Proverbs 4:23 say to guard the heart?", "According to Mark 7:21–23, where do evil actions begin?"] },
  { id: "mind-thoughts", title: "Where thoughts lead", level: "Beginner", minutes: 15, status: "draft",
    refs: ["James 1:14–15", "Genesis 3:1–6"],
    summary: "James describes a chain: desire, then temptation, then sin. Genesis 3 shows how a single thought, accepted, changed Eve's view of what God had said.",
    questions: ["What are the steps in James 1:14–15?", "What thought did Eve accept in Genesis 3?"] },
  { id: "mind-selfcontrol", title: "Self-control", level: "Beginner", minutes: 15, status: "draft",
    refs: ["Proverbs 25:28", "Galatians 5:22–23"],
    summary: "A person without self-control is compared to a city without walls. Self-control is listed as part of the fruit of the Spirit.",
    questions: ["What does a city without walls lack?", "In which area of life do you most need self-control?"] },
  { id: "mind-isolation", title: "Overcoming isolation", level: "Beginner", minutes: 15, status: "draft",
    refs: ["Ecclesiastes 4:9–10", "Hebrews 10:24–25"],
    summary: "Living far from home can be lonely. Scripture says two are better than one, because when one falls, the other can help them up.",
    questions: ["Who lifts you up when you fall?", "Who could you encourage this week?"] },
  { id: "mind-listening", title: "Listening and receiving advice", level: "Intermediate", minutes: 20, status: "draft",
    refs: ["Proverbs 12:15", "James 1:19"],
    summary: "The wise listen to advice. James teaches us to be quick to hear, slow to speak and slow to anger.",
    questions: ["Why is it hard to accept advice?", "Whose advice do you trust, and why?"] },
  { id: "mind-communication", title: "Communication and empathy", level: "Intermediate", minutes: 20, status: "draft",
    refs: ["Romans 12:15", "Colossians 4:6"],
    summary: "Good relationships grow when we share others' joys and sorrows, and speak with grace.",
    questions: ["What does it mean to 'weep with them that weep'?", "How can your words be 'seasoned with salt'?"] },
  { id: "mind-renewing", title: "Renewing the mind", level: "Intermediate", minutes: 20, status: "draft",
    refs: ["Romans 12:2", "Philippians 4:8"],
    summary: "Paul calls believers to be transformed by the renewing of their minds, and to think about what is true, honest, just and pure.",
    questions: ["What does Romans 12:2 say not to be conformed to?", "Which item in Philippians 4:8 do you want to think about more?"] },
  { id: "mind-forgiveness", title: "Relationships and forgiveness", level: "Advanced", minutes: 25, status: "draft",
    refs: ["Ephesians 4:31–32", "Colossians 3:13"],
    summary: "Bitterness damages relationships. Believers are called to forgive one another, as God in Christ forgave them.",
    questions: ["What does Ephesians 4:31 say to put away?", "What is the reason for forgiving in Ephesians 4:32?"] }
];

/* --------------------------------------------------------------------------
   4. GOSPEL & BIBLE TOPICS
   status "draft" shows a "Draft for review" badge. Change to "approved"
   once DHL leadership has approved the wording.
   -------------------------------------------------------------------------- */
const gospelTopics = [
  { id: "sin", title: "Sin", status: "draft", refs: ["Romans 3:23", "1 John 3:4", "Isaiah 59:2"],
    summary: "The Bible describes sin as breaking God's law and falling short of his standard, which separates people from God.",
    questions: ["How does Isaiah 59:2 describe the effect of sin?", "Why does Romans 3:23 say 'all'?"] },
  { id: "law", title: "The Law", status: "draft", refs: ["Romans 3:20", "Romans 7:7", "Galatians 3:24"],
    summary: "God's law shows his holy standard. According to Paul, it makes us aware of sin and points us to Christ.",
    questions: ["What does Romans 3:20 say the law cannot do?", "What does Galatians 3:24 compare the law to?"] },
  { id: "repentance", title: "Repentance", status: "draft", refs: ["Acts 3:19", "Luke 15:7", "2 Corinthians 7:10"],
    summary: "Repentance means a change of mind and direction: turning away from sin and toward God.",
    questions: ["What promise comes with repentance in Acts 3:19?", "How does heaven respond in Luke 15:7?"] },
  { id: "jesus", title: "Jesus Christ", status: "draft", refs: ["John 1:1–14", "Matthew 16:15–16", "Colossians 1:15–20"],
    summary: "The Bible presents Jesus as the eternal Word who became a man, the Christ and the Son of the living God.",
    questions: ["What does John 1:14 say happened?", "How did Peter answer Jesus' question in Matthew 16?"] },
  { id: "cross", title: "The Cross", status: "draft", refs: ["1 Corinthians 1:18", "1 Peter 2:24", "Philippians 2:8"],
    summary: "Jesus died on the cross. The New Testament teaches that he bore our sins there.",
    questions: ["According to 1 Peter 2:24, whose sins did Jesus bear?", "Why might the cross seem foolish to some people?"] },
  { id: "blood", title: "The Blood of Christ", status: "draft", refs: ["Hebrews 9:22", "Ephesians 1:7", "1 Peter 1:18–19"],
    summary: "Scripture connects forgiveness with the blood of Christ, his life given in death for sinners.",
    questions: ["What does Ephesians 1:7 say we have through his blood?", "What is compared with Christ's blood in 1 Peter 1:18–19?"] },
  { id: "atonement", title: "Atonement", status: "draft", refs: ["Leviticus 17:11", "Romans 3:25", "1 John 2:2"],
    summary: "Atonement is how sinners are reconciled to God. The Bible points to Jesus' sacrifice as the means.",
    questions: ["How does Leviticus 17:11 prepare us to understand the cross?", "Who does 1 John 2:2 say Jesus is?"] },
  { id: "forgiveness", title: "Forgiveness of Sins", status: "draft", refs: ["Acts 10:43", "Colossians 1:14", "1 John 1:9"],
    summary: "The Bible promises forgiveness of sins through Jesus to everyone who believes in him.",
    questions: ["Who receives forgiveness according to Acts 10:43?", "What does 1 John 1:9 say God is?"] },
  { id: "righteousness", title: "Righteousness", status: "draft", refs: ["Romans 3:21–22", "2 Corinthians 5:21", "Philippians 3:9"],
    summary: "Paul teaches that God gives righteousness through faith in Jesus Christ, not through our own works.",
    questions: ["How does 2 Corinthians 5:21 describe an exchange?", "Where does Paul say his righteousness comes from in Philippians 3:9?"] },
  { id: "faith", title: "Faith", status: "draft", refs: ["Hebrews 11:1", "Ephesians 2:8", "Romans 10:17"],
    summary: "Faith is trusting God and his promises. Scripture says it comes by hearing the word of God.",
    questions: ["How does Hebrews 11:1 define faith?", "Where does faith come from in Romans 10:17?"] },
  { id: "salvation", title: "Salvation", status: "draft", refs: ["Ephesians 2:8–9", "Titus 3:5", "Romans 10:9"],
    summary: "The Bible describes salvation as a gift of God's grace received through faith, not earned by works.",
    questions: ["Why can no one boast, according to Ephesians 2:9?", "What does Romans 10:9 ask a person to believe?"] },
  { id: "new-life", title: "New Life", status: "draft", refs: ["2 Corinthians 5:17", "Romans 6:4", "John 3:3"],
    summary: "Those who are in Christ are described as a new creation, called to walk in newness of life.",
    questions: ["What passes away in 2 Corinthians 5:17?", "What did Jesus tell Nicodemus in John 3:3?"] },
  { id: "bible-study", title: "Bible Study", status: "draft", refs: ["2 Timothy 3:16–17", "Psalm 119:105", "Acts 17:11"],
    summary: "Scripture is God-breathed and useful for teaching. The Bereans examined it daily for themselves.",
    questions: ["What four uses of Scripture are listed in 2 Timothy 3:16?", "What did the Bereans do in Acts 17:11?"] }
];

/* --------------------------------------------------------------------------
   5. DISCIPLESHIP
   -------------------------------------------------------------------------- */
const discipleshipPath = [
  { id: "d-foundation", title: "Gospel Foundation", text: "Be clear on the good news.", href: "gospel.html#course" },
  { id: "d-assurance", title: "Assurance", text: "Know you belong to God.", topic: "assurance" },
  { id: "d-bible", title: "Bible", text: "Read and study daily.", topic: "word" },
  { id: "d-prayer", title: "Prayer", text: "Talk with God honestly.", topic: "prayer" },
  { id: "d-fellowship", title: "Fellowship", text: "Belong to a group.", topic: "fellowship" },
  { id: "d-evangelism", title: "Evangelism", text: "Share what you know.", topic: "evangelism" },
  { id: "d-service", title: "Service", text: "Serve others with your gifts.", topic: "serving" }
];

const discipleshipTopics = [
  { id: "assurance", title: "Assurance of Salvation", status: "draft", refs: ["1 John 5:13", "John 10:28", "Romans 8:38–39"],
    summary: "John wrote so that believers may know they have eternal life. Assurance rests on God's promise.",
    questions: ["Why did John write, according to 1 John 5:13?", "What can separate us from God's love?"] },
  { id: "word", title: "The Word of God", status: "draft", refs: ["Psalm 119:105", "Matthew 4:4", "James 1:22"],
    summary: "Disciples read, understand and obey God's word, which guides their lives.",
    questions: ["What does James 1:22 warn against?", "What reading habit could you start this week?"] },
  { id: "prayer", title: "Prayer", status: "draft", refs: ["Matthew 6:9–13", "Philippians 4:6–7", "1 Thessalonians 5:17"],
    summary: "Prayer is talking with God. Jesus gave his disciples a pattern to follow.",
    questions: ["What does Philippians 4:6 say to do with worry?", "Which line of the Lord's Prayer do you need most?"] },
  { id: "fellowship", title: "Fellowship", status: "draft", refs: ["Acts 2:42", "Hebrews 10:24–25", "1 John 1:7"],
    summary: "The first Christians devoted themselves to teaching, fellowship, breaking bread and prayer.",
    questions: ["What four things are listed in Acts 2:42?", "Who could you encourage this week?"] },
  { id: "church", title: "The Church", status: "draft", refs: ["Ephesians 4:11–16", "1 Corinthians 12:12–27", "Matthew 16:18"],
    summary: "The church is described as the body of Christ, with each member needed.",
    questions: ["What picture does 1 Corinthians 12 use?", "What part do you play?"] },
  { id: "grace", title: "Grace", status: "draft", refs: ["Ephesians 2:8", "2 Corinthians 12:9", "Titus 2:11–12"],
    summary: "Grace is God's undeserved favor. It saves us, and it also teaches us how to live.",
    questions: ["What does grace teach us in Titus 2:12?", "Where do you need God's grace today?"] },
  { id: "flesh-spirit", title: "Flesh and Spirit", status: "draft", refs: ["Galatians 5:16–25", "Romans 8:5–6"],
    summary: "Paul contrasts the works of the flesh with the fruit of the Spirit and calls believers to walk by the Spirit.",
    questions: ["List the fruit of the Spirit.", "What does it mean to 'walk by the Spirit'?"] },
  { id: "christian-life", title: "Christian Life", status: "draft", refs: ["Romans 12:1–2", "Colossians 3:12–17"],
    summary: "Disciples offer their whole lives to God and are changed by the renewing of their minds.",
    questions: ["What does Romans 12:2 say to avoid?", "Which quality in Colossians 3:12 do you want to grow in?"] },
  { id: "serving", title: "Serving Others", status: "draft", refs: ["Mark 10:45", "Galatians 5:13", "1 Peter 4:10"],
    summary: "Jesus came to serve. His followers use their gifts to serve one another.",
    questions: ["What did Jesus come to do, according to Mark 10:45?", "What gift could you use to serve?"] },
  { id: "evangelism", title: "Evangelism", status: "draft", refs: ["Matthew 28:19–20", "1 Peter 3:15", "Acts 1:8"],
    summary: "Jesus sent his followers to make disciples of all nations, sharing the hope they have with gentleness.",
    questions: ["How should we answer according to 1 Peter 3:15?", "Who in your life could you share with?"] },
  { id: "growth", title: "Spiritual Growth", status: "draft", refs: ["2 Peter 3:18", "Philippians 1:6", "Hebrews 5:12–14"],
    summary: "Believers are called to grow in grace and knowledge. God finishes the work he starts.",
    questions: ["What does Philippians 1:6 promise?", "What is one sign of growth you've seen?"] }
];

/* --------------------------------------------------------------------------
   6. LEADERSHIP (course cards with a practical assignment)
   -------------------------------------------------------------------------- */
const leadershipTopics = [
  { id: "servant", title: "Servant Leadership", refs: ["Mark 10:42–45", "John 13:1–17"],
    summary: "Jesus defined greatness as serving. Leaders go first in humility.",
    assignment: "Serve someone in your group this week without being asked, then reflect on what you learned." },
  { id: "biblical", title: "Biblical Leadership", refs: ["1 Timothy 3:1–7", "Titus 1:5–9"],
    summary: "Character before skill: what Scripture asks of those who lead God's people.",
    assignment: "Read 1 Timothy 3 with a mentor and choose one area of character to work on." },
  { id: "paul", title: "Paul's Leadership", refs: ["Acts 20:17–35", "2 Timothy 2:2"],
    summary: "How Paul trained others, entrusted responsibility and kept going through hardship.",
    assignment: "Map Paul's 2 Timothy 2:2 chain onto your own life: who taught you, and whom will you teach?" },
  { id: "communication", title: "Communication", refs: ["Colossians 4:6", "James 1:19"],
    summary: "Listening well, speaking clearly and communicating across languages.",
    assignment: "Give a 5-minute talk to your small group and ask for two pieces of feedback." },
  { id: "counseling", title: "Counseling Basics", refs: ["Galatians 6:1–2", "Romans 12:15"],
    summary: "Caring listening, and knowing when to refer someone to a pastor or professional.",
    assignment: "Practice active listening in one conversation. Write down what you heard, not what you said." },
  { id: "mentoring", title: "Mentoring", refs: ["2 Timothy 2:2", "Titus 2:3–5"],
    summary: "Walking with one person over time, the heart of multiplication.",
    assignment: "Meet with one younger believer three times this month." },
  { id: "small-group", title: "Small Group Leadership", refs: ["Acts 2:42–47", "Hebrews 10:24–25"],
    summary: "Planning a meeting, asking good questions and caring for members.",
    assignment: "Co-lead one small group session with an experienced leader." },
  { id: "teaching", title: "Teaching the Bible", refs: ["Nehemiah 8:8", "2 Timothy 4:2"],
    summary: "Reading a passage carefully, explaining it simply and applying it.",
    assignment: "Prepare and teach a 15-minute Bible study on a short passage." },
  { id: "evangelism-l", title: "Leading in Evangelism", refs: ["Acts 8:26–40", "Colossians 4:5–6"],
    summary: "Sharing the gospel personally and training others to do the same.",
    assignment: "Share your story of faith with one person and then train a friend to share theirs." },
  { id: "conflict", title: "Conflict Management", refs: ["Matthew 18:15–17", "Ephesians 4:26–32"],
    summary: "Handling disagreement biblically, quickly and with grace.",
    assignment: "Study Matthew 18:15–17 and role-play a difficult conversation with your mentor." },
  { id: "cross-cultural", title: "Cross-cultural Ministry", refs: ["Acts 17:16–34", "1 Corinthians 9:19–23"],
    summary: "Ministering among Filipinos, Koreans and other nationalities with understanding.",
    assignment: "Interview someone from another culture about how they see faith and community." },
  { id: "digital-l", title: "Digital Ministry Leadership", refs: ["Colossians 4:3", "Philippians 1:18"],
    summary: "Leading online groups and content teams responsibly.",
    assignment: "Plan and host one online Bible study using Zoom or Messenger." }
];

/* --------------------------------------------------------------------------
   7. LIVE IN KOREA
   Links go to official sites. Rules change, so the site always tells
   visitors to check the official source. This is general information,
   not legal advice.
   -------------------------------------------------------------------------- */
const koreaPath = [
  { id: "k-learn", title: "Learn Korean", text: "Everyday Korean for real life.", href: "live-in-korea.html#korean" },
  { id: "k-understand", title: "Understand Korea", text: "Visas, culture and how things work.", href: "live-in-korea.html#visa" },
  { id: "k-studywork", title: "Study / Work", text: "Jobs, workplaces and campus life.", href: "live-in-korea.html#job" },
  { id: "k-relationships", title: "Build Relationships", text: "Find friends and community.", href: "community.html" },
  { id: "k-livewell", title: "Live Well in Korea", text: "Housing, health and daily life.", href: "live-in-korea.html#living" }
];

const koreaAreas = [
  { id: "korean", title: "Korean Language Class", icon: "chat", text: "Korean lessons for everyday communication and life in Korea." },
  { id: "visa", title: "Visa", icon: "book", text: "General information about visa types, procedures and requirements." },
  { id: "job", title: "Job", icon: "compass", text: "Employment resources, workplace culture and job preparation." },
  { id: "campus", title: "Campus Life", icon: "cap", text: "Resources for international students and Korean campus culture." },
  { id: "living", title: "Living in Korea", icon: "map", text: "Transportation, housing, banking, healthcare, culture and daily life." },
  { id: "qa", title: "Q&A Corner", icon: "spark", text: "Ask questions and find answers about Korea, faith, work and daily life." }
];

/* area: korean | visa | job | campus | living
   Each guide can have: url (official site), tips (list), course (certificate
   course id), href (page on this site), form (CONFIG.forms key). */
const koreaGuides = [
  { id: "g-hangul", area: "korean", level: "Beginner", minutes: 60, title: "Learn Hangul, the Korean alphabet", course: "korean-survival-1",
    text: "Hangul has 14 basic consonants and 10 basic vowels that combine into syllable blocks. Most people can learn to read it in a few days." },
  { id: "g-expressions", area: "korean", level: "Beginner", minutes: 15, title: "Useful Korean expressions", href: "#expressions",
    text: "Twelve phrases for greetings, shopping, getting help and work." },
  { id: "g-kiip", area: "korean", level: "Beginner", minutes: 10, title: "Korea Immigration & Integration Program (KIIP)", url: "https://www.socinet.go.kr",
    text: "Government Korean language and society classes for foreign residents. Registration is through Socinet." },
  { id: "g-sejong", area: "korean", level: "Beginner", minutes: 10, title: "King Sejong Institute", url: "https://www.iksi.or.kr",
    text: "Korean courses online and in person, from beginner level." },
  { id: "g-cafe", area: "korean", level: "Beginner", minutes: 5, title: "Korean conversation café", href: "community.html",
    text: "Practice everyday Korean with friendly volunteers in the DHL community." },
  { id: "g-topik", area: "korean", level: "Intermediate", minutes: 10, title: "TOPIK: the Test of Proficiency in Korean", url: "https://www.topik.go.kr",
    text: "Test dates, registration and past papers. Many universities, employers and some visa types ask for a TOPIK level." },

  { id: "g-visatypes", area: "visa", level: "Beginner", minutes: 15, title: "Understanding visa types",
    text: "Your visa type (체류자격) decides what you may do in Korea: study, work, or live with family.", tips: [
      "D-2 is for university students and D-4 for language trainees.",
      "E-9 is for workers through the Employment Permit System (EPS).",
      "E-7 is for specific professional jobs.",
      "F-6 is for marriage migrants.",
      "Each visa allows certain activities only. Check what yours allows on Hi Korea or by calling 1345."] },
  { id: "g-arc", area: "visa", level: "Beginner", minutes: 10, title: "Registering for your residence card",
    text: "If you will stay in Korea for more than 90 days, you must register as a foreign resident within 90 days of entering Korea and receive a residence card.", tips: [
      "Book an appointment at your local immigration office through Hi Korea.",
      "Bring your passport, a photo, the application form and documents for your visa type.",
      "Carry your residence card with you.",
      "Report a change of address within the legal deadline. Check Hi Korea for the current rule."] },
  { id: "g-extend", area: "visa", level: "Intermediate", minutes: 10, title: "Extending or changing your stay",
    text: "Apply before your permitted stay ends. Late applications and working outside your visa's permitted activities can lead to fines or other penalties.", tips: [
      "Check your expiry date on your residence card now and set a reminder.",
      "Many applications can be made online or by appointment on Hi Korea.",
      "For your own situation, ask the Immigration Contact Center (1345) or a qualified professional. DHL can't give legal advice."] },
  { id: "g-hikorea", area: "visa", level: "Beginner", minutes: 5, title: "Hi Korea (official immigration portal)", url: "https://www.hikorea.go.kr",
    text: "Visas, residence cards, appointments and e-applications. Immigration Contact Center: 1345 (multilingual)." },

  { id: "g-eps", area: "job", level: "Beginner", minutes: 10, title: "Employment Permit System (EPS)", url: "https://www.eps.go.kr",
    text: "Official information for workers on E-9 and H-2 employment permits." },
  { id: "g-work24", area: "job", level: "Beginner", minutes: 10, title: "Work24 job portal", url: "https://www.work24.go.kr",
    text: "Korea's public employment and job-search service." },
  { id: "g-rights", area: "job", level: "Beginner", minutes: 10, title: "Know your rights at work",
    text: "Korean labor law protects foreign workers too.", tips: [
      "Ask for a written employment contract, in a language you understand, and keep a copy.",
      "The minimum wage applies to foreign workers.",
      "Keep your own record of working hours and pay.",
      "For labor questions, call the Ministry of Employment and Labor counseling center at 1350.",
      "A DHL mentor can listen and help you find the right office."] },
  { id: "g-workplace", area: "job", level: "Beginner", minutes: 10, title: "Korean workplace basics",
    text: "Simple habits that help you build trust at work.", tips: [
      "Arrive a little early; punctuality matters.",
      "Greet colleagues when you arrive and leave.",
      "Use polite speech (존댓말) with supervisors and older coworkers.",
      "Ask when you don't understand: 다시 한 번 말씀해 주세요 (please say it again)."] },
  { id: "g-resume", area: "job", level: "Intermediate", minutes: 20, title: "Preparing a Korean résumé",
    text: "Korean applications usually have two parts: a résumé (이력서) and a self-introduction letter (자기소개서).", tips: [
      "Many Korean résumés include a professional photo.",
      "List your visa type and Korean level (such as your TOPIK level) clearly.",
      "In the self-introduction letter, explain why you want this job and how you will contribute.",
      "Ask a Korean friend or DHL mentor to check your Korean before you apply."] },
  { id: "g-career", area: "job", level: "Intermediate", minutes: 30, title: "Talk to a mentor about your career", form: "mentor",
    text: "Planning your next step in Korea or back home? A mentor can listen and help you think it through." },

  { id: "g-studyinkorea", area: "campus", level: "Beginner", minutes: 10, title: "Study in Korea", url: "https://www.studyinkorea.go.kr",
    text: "Official information for international students, including admissions and scholarships." },
  { id: "g-campus", area: "campus", level: "Beginner", minutes: 10, title: "Campus life basics",
    text: "What to expect at a Korean university.", tips: [
      "Visit your university's international student office early. They help with visas, housing and registration.",
      "Seniors (선배) and juniors (후배) matter in Korean student culture. Seniors often help newcomers.",
      "Group projects (팀플) are common. Communicate often and share work fairly.",
      "Student visa holders usually need permission before working part-time. Ask your international office first."] },
  { id: "g-students", area: "campus", level: "Beginner", minutes: 5, title: "Student communities at DHL", href: "community.html",
    text: "Meet other international students for Bible study, fellowship and friendship." },

  { id: "g-transport", area: "living", level: "Beginner", minutes: 10, title: "Getting around",
    text: "Korea's public transport is fast, cheap and easy once you know the basics.", tips: [
      "Buy a T-money card at a convenience store or subway station, and top it up with cash.",
      "Naver Map and KakaoMap give better directions in Korea than most international map apps.",
      "Tap your card when you get on and off buses so transfers are discounted."] },
  { id: "g-housing", area: "living", level: "Beginner", minutes: 15, title: "Understanding Korean housing",
    text: "What to check before you sign a contract or pay a deposit.", tips: [
      "Know the difference between 월세 (monthly rent with a deposit) and 전세 (a large lump-sum deposit).",
      "Check that the landlord owns the property before paying a deposit.",
      "Get a written contract and ask a Korean-speaking friend or a DHL mentor to read it with you.",
      "Report your new address when you move."] },
  { id: "g-bank", area: "living", level: "Beginner", minutes: 10, title: "Opening a bank account",
    text: "Bring your passport and residence card. Banks may also ask for a document from your employer or school, and some limit new accounts at first. Ask at the branch what you need." },
  { id: "g-health", area: "living", level: "Beginner", minutes: 15, title: "Healthcare in Korea", url: "https://www.nhis.or.kr",
    text: "Many foreign residents who stay six months or more are enrolled in National Health Insurance. Check your status on the NHIS site.", tips: [
      "For everyday illness, visit a local clinic (의원). For serious conditions, go to a hospital (병원).",
      "Bring your residence card to every visit.",
      "Pharmacies (약국) fill prescriptions and sell basic medicine.",
      "In an emergency, call 119."] },
  { id: "g-trash", area: "living", level: "Beginner", minutes: 5, title: "Trash and recycling",
    text: "Household trash goes in volume-based trash bags (종량제 봉투) sold at convenience stores. Food waste and recyclables are separated. Rules differ by district, so ask your neighbors or building manager." },
  { id: "g-danuri", area: "living", level: "Beginner", minutes: 5, title: "Danuri helpline for multicultural families", url: "https://www.liveinkorea.kr",
    text: "Multilingual help with daily life. Phone: 1577-1366." },
  { id: "g-seoulglobal", area: "living", level: "Beginner", minutes: 5, title: "Seoul Global Center", url: "https://global.seoul.go.kr",
    text: "Counseling, classes and support for foreign residents of Seoul." },
  { id: "g-culture", area: "living", level: "Beginner", minutes: 10, title: "Korean culture and holidays", url: "https://english.visitkorea.or.kr",
    text: "Festivals, holidays, food and places to explore, from the official tourism site." },
  { id: "g-driving", area: "living", level: "Intermediate", minutes: 10, title: "Driver's license information", url: "https://www.safedriving.or.kr",
    text: "Road Traffic Authority information on tests and exchanging a foreign license." },
  { id: "g-embassy", area: "living", level: "Beginner", minutes: 5, title: "Philippine Embassy in Seoul", url: "https://seoulpe.dfa.gov.ph",
    text: "Consular services for Filipinos, including passports and document authentication." }
];

/* Q&A Corner. category: Korea | Faith | Education | Work | Daily life */
const qaItems = [
  { category: "Korea", q: "Where can I get help in my own language?",
    a: "Call the Immigration Contact Center at 1345 or the Danuri helpline at 1577-1366; both offer multiple languages. In Seoul, the Seoul Global Center also offers counseling." },
  { category: "Korea", q: "What number do I call in an emergency?",
    a: "Call 119 for fire and ambulance and 112 for police. For suicide prevention counseling, call 109." },
  { category: "Korea", q: "Do I need a residence card?",
    a: "If you will stay more than 90 days, you must register within 90 days of entering Korea. See the Visa guides on this page and check Hi Korea for your situation." },
  { category: "Work", q: "My employer hasn't paid my wages. What can I do?",
    a: "Keep a record of your hours and payments, and call the Ministry of Employment and Labor counseling center at 1350. A DHL mentor can listen and help you find the right office. DHL can't give legal advice." },
  { category: "Work", q: "Do I need a written contract?",
    a: "Yes, ask for one before you start work, keep a copy, and make sure you understand it. Ask a Korean-speaking friend or mentor to read it with you." },
  { category: "Education", q: "How can I start learning Korean for free?",
    a: "Try the KIIP program through Socinet, King Sejong Institute's online courses, and DHL's Survival Korean certificate course." },
  { category: "Education", q: "What is TOPIK, and do I need it?",
    a: "TOPIK is the official Korean proficiency test. Universities, employers and some visa types may ask for a TOPIK level, so check the requirements that apply to you." },
  { category: "Faith", q: "I'm not a Christian. Can I still join DHL?",
    a: "Yes. Everyone is welcome, whatever your background. You can join the community, get practical help, and explore the Bible whenever you're ready." },
  { category: "Faith", q: "Where should I start reading the Bible?",
    a: "Many people start with the Gospel of John or Mark. DHL's Gospel Class also walks you through the main message step by step." },
  { category: "Faith", q: "Can I study the Bible in Tagalog or Korean?",
    a: "Yes. Some DHL groups meet in English and Tagalog, and Bible links on this site can open in other translations. Ask to join a Bible study and tell us your language." },
  { category: "Daily life", q: "Which map app works best in Korea?",
    a: "Naver Map and KakaoMap give the most reliable directions for walking, buses and the subway." },
  { category: "Daily life", q: "Where do I see a doctor?",
    a: "For everyday illness, visit a local clinic (의원) and bring your residence card. For emergencies, call 119." },
  { category: "Daily life", q: "How do I throw away trash?",
    a: "Use volume-based trash bags (종량제 봉투) from a convenience store, and separate food waste and recyclables. Rules differ by district." }
];

const koreanExpressions = [
  { ko: "안녕하세요", rom: "annyeonghaseyo", en: "Hello" },
  { ko: "감사합니다", rom: "gamsahamnida", en: "Thank you" },
  { ko: "죄송합니다", rom: "joesonghamnida", en: "I'm sorry" },
  { ko: "괜찮아요", rom: "gwaenchanayo", en: "It's okay / I'm fine" },
  { ko: "얼마예요?", rom: "eolmayeyo?", en: "How much is it?" },
  { ko: "도와주세요", rom: "dowajuseyo", en: "Please help me" },
  { ko: "화장실이 어디예요?", rom: "hwajangsiri eodiyeyo?", en: "Where is the restroom?" },
  { ko: "천천히 말씀해 주세요", rom: "cheoncheonhi malsseumhae juseyo", en: "Please speak slowly" },
  { ko: "한국어를 조금 해요", rom: "hangugeoreul jogeum haeyo", en: "I speak a little Korean" },
  { ko: "수고하셨습니다", rom: "sugohasyeotseumnida", en: "Thank you for your hard work (after work)" },
  { ko: "잘 부탁드립니다", rom: "jal butakdeurimnida", en: "I look forward to working with you" },
  { ko: "병원에 가야 해요", rom: "byeongwone gaya haeyo", en: "I need to go to the hospital" }
];

/* Emergency numbers shown by the AI assistant and the Live in Korea page. */
const koreaHelpNumbers = [
  { label: "Police", number: "112" },
  { label: "Fire and ambulance", number: "119" },
  { label: "Suicide prevention counseling", number: "109" },
  { label: "Immigration Contact Center (multilingual)", number: "1345" },
  { label: "Danuri multicultural helpline", number: "1577-1366" }
];

/* --------------------------------------------------------------------------
   8. DIGITAL MINISTRY
   -------------------------------------------------------------------------- */
const digitalTopics = [
  { id: "content", title: "Creating Christian content", summary: "Plan posts that serve a real need, point to Jesus and invite a next step.",
    tip: "Every post should answer: what do I want someone to do after seeing this?" },
  { id: "ai-bible", title: "AI for Bible study", summary: "Use AI tools to find cross-references and questions, and always check them against Scripture and a mentor.",
    tip: "Treat AI answers as a starting point for study, never the final word." },
  { id: "short-video", title: "Short-form video", summary: "Reels, Shorts and TikToks of 30–60 seconds with one clear message.",
    tip: "Hook in the first 3 seconds, one idea, one call to action." },
  { id: "online-study", title: "Online Bible study", summary: "Run a simple, repeatable online study that people can join from anywhere in Korea.",
    tip: "Send the passage the day before so people can read ahead." },
  { id: "zoom", title: "Zoom ministry", summary: "Host warm online meetings: welcome people, use breakout rooms and follow up.",
    tip: "Have a co-host who greets newcomers by name in the chat." },
  { id: "social", title: "Social media evangelism", summary: "Move from comments to conversations to invitations, respectfully.",
    tip: "Reply to every sincere comment, and invite people to the community, not just to 'like'." },
  { id: "translation", title: "Translation", summary: "Make content available in English, Tagalog and Korean.",
    tip: "Have a native speaker review translations before publishing." },
  { id: "community-building", title: "Digital community building", summary: "Build group chats that feel safe, friendly and purposeful.",
    tip: "Write simple group rules and appoint two moderators." },
  { id: "website", title: "Website ministry", summary: "Keep a simple website like this one up to date as your ministry's home base.",
    tip: "Add one new post each week; the feed sorts itself." },
  { id: "online-discipleship", title: "Online discipleship", summary: "Walk with someone one-to-one using messages, calls and shared reading plans.",
    tip: "Online is the bridge: plan an in-person meeting as soon as you can." }
];

const digitalDownloads = [
  { title: "Content planning worksheet", file: "assets/downloads/content-planning-worksheet.txt", text: "Plan a month of posts around one theme." },
  { title: "Online Bible study host checklist", file: "assets/downloads/online-bible-study-checklist.txt", text: "Before, during and after your Zoom study." },
  { title: "Group chat guidelines template", file: "assets/downloads/group-chat-guidelines.txt", text: "Simple rules for a safe, welcoming group chat." }
];

/* --------------------------------------------------------------------------
   9. PATHWAYS (drawn as metro lines on pathways.html)
   -------------------------------------------------------------------------- */
const pathways = [
  { id: "visitor", name: "New Visitor", line: "teal", who: "New to Korea or new to DHL",
    stations: [
      { id: "v1", title: "Welcome", text: "Learn what DHL is and who we serve.", href: "about.html" },
      { id: "v2", title: "Live in Korea", text: "Find practical help for language, work and daily life.", href: "live-in-korea.html" },
      { id: "v3", title: "Join Community", text: "Join our group chat or a fellowship meeting.", href: "community.html" },
      { id: "v4", title: "Meet a Mentor", text: "Get to know someone who can walk with you.", form: "mentor" }
    ] },
  { id: "seeker", name: "Gospel Seeker", line: "red", who: "Curious about Jesus and the Bible",
    stations: [
      { id: "s1", title: "Gospel Introduction", text: "Read the good news in simple words.", href: "gospel.html#intro" },
      { id: "s2", title: "Gospel Course", text: "Six short lessons you can do at your own pace.", href: "gospel.html#course" },
      { id: "s3", title: "Personal Bible Study", text: "Study a passage with a guide.", href: "gospel.html#studies" },
      { id: "s4", title: "Faith & Salvation", text: "Understand what it means to trust Christ.", href: "gospel.html#topics" }
    ] },
  { id: "disciple", name: "Growing Disciple", line: "blue", who: "A believer who wants to grow",
    stations: [
      { id: "g1", title: "Discipleship Course", text: "Walk through the seven discipleship steps.", href: "discipleship.html#path" },
      { id: "g2", title: "Small Group", text: "Join a Bible study group.", form: "bibleStudy" },
      { id: "g3", title: "Mentoring", text: "Meet regularly with a mentor.", form: "mentor" },
      { id: "g4", title: "Service", text: "Find a place to serve.", href: "leadership.html" }
    ] },
  { id: "leader", name: "Future Leader", line: "mango", who: "Ready to lead and train others",
    stations: [
      { id: "l1", title: "Leadership Training", text: "Enroll in the DHL Leadership Academy.", href: "academy.html" },
      { id: "l2", title: "Practical Ministry", text: "Lead a study, care for people, create content.", href: "academy.html#practicum" },
      { id: "l3", title: "Mentoring", text: "Be mentored and begin mentoring others.", form: "mentor" },
      { id: "l4", title: "Evaluation", text: "Review your growth with your mentor.", href: "academy.html#recognition" },
      { id: "l5", title: "Commissioning", text: "Be recognized and sent to lead.", href: "academy.html#certificates" }
    ] }
];

/* --------------------------------------------------------------------------
   10. COMMUNITY GROUPS (sample: replace with your real groups)
   -------------------------------------------------------------------------- */
const communityGroups = [
  { sample: true, name: "Tuesday Zoom Bible study", when: "Tuesdays, 8:00 PM", where: "Online (Zoom)", lang: "English and Tagalog",
    text: "A relaxed study for workers who can't meet in person on weekdays.", form: "bibleStudy" },
  { sample: true, name: "Filipino fellowship", when: "Sundays, 3:00 PM", where: "Seoul (location shared after sign-up)", lang: "Tagalog and English",
    text: "Worship, a shared meal and time to talk.", form: "community" },
  { sample: true, name: "Korean conversation café", when: "Saturdays, 2:00 PM", where: "Online and in person", lang: "Korean practice",
    text: "Practice everyday Korean with friendly volunteers.", form: "community" },
  { sample: true, name: "Leaders' circle", when: "First Monday of the month, 8:00 PM", where: "Online (Zoom)", lang: "English",
    text: "Encouragement and training for small group leaders.", form: "leadership" }
];

/* --------------------------------------------------------------------------
   11. AI ASSISTANT FAQ (used by demo mode together with the topics above)
   -------------------------------------------------------------------------- */
const assistantFaq = [
  { keywords: ["join", "community", "group chat", "friends", "fellowship"], source: "DHL Community page", href: "community.html",
    answer: "You can join the DHL community through our group chats or a fellowship meeting. The Community page lists every option, and you can ask to be connected with a mentor." },
  { keywords: ["topik", "exam", "test"], source: "Live in Korea: TOPIK", href: "live-in-korea.html",
    answer: "TOPIK dates, registration and past papers are on the official TOPIK site (topik.go.kr). Our Live in Korea page links to it, and our Korean conversation café can help you practice." },
  { keywords: ["visa", "arc", "residence", "immigration"], source: "Live in Korea: Korean Society", href: "live-in-korea.html",
    answer: "For visas and residence cards, use the official Hi Korea portal or call the Immigration Contact Center at 1345 (multilingual). DHL can't give legal advice, but a mentor can help you find the right office." },
  { keywords: ["korean", "language", "learn korean", "kiip"], source: "Live in Korea: Korean Language", href: "live-in-korea.html",
    answer: "Good places to start are the KIIP program (through Socinet) and the King Sejong Institute. Our Live in Korea page also has useful everyday expressions." },
  { keywords: ["job", "work", "employer", "salary"], source: "Live in Korea: Jobs", href: "live-in-korea.html",
    answer: "Official job information is on the EPS and Work24 sites. If you're having trouble at work, the Live in Korea page lists helplines, and a DHL mentor can listen and help you find support." },
  { keywords: ["leader", "leadership", "academy", "certificate"], source: "DHL Leadership Academy", href: "academy.html",
    answer: "The DHL Leadership Academy has five levels, from Gospel Foundation to a practicum where you lead in real ministry. Certificates recognize completion of DHL training; they are not government-accredited degrees." },
  { keywords: ["start", "begin", "new", "where"], source: "DHL Pathways", href: "pathways.html",
    answer: "A good first step is to choose a pathway: New Visitor, Gospel Seeker, Growing Disciple or Future Leader. Each one shows you the next station to visit." }
];

/* --------------------------------------------------------------------------
   12. DAILY BIBLE VERSE (home page hero)
   One verse is shown per day, cycling through this list by date.
   Text is from the King James Version (public domain). If you switch to a
   modern translation, check its copyright terms for website use first.
   Add, remove or reorder verses freely.
   -------------------------------------------------------------------------- */
const dailyVerseVersion = "KJV";
const dailyVerses = [
  { ref: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
  { ref: "Leviticus 19:34", text: "But the stranger that dwelleth with you shall be unto you as one born among you, and thou shalt love him as thyself; for ye were strangers in the land of Egypt: I am the LORD your God." },
  { ref: "Psalm 23:1", text: "The LORD is my shepherd; I shall not want." },
  { ref: "Proverbs 3:5–6", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths." },
  { ref: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness." },
  { ref: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." },
  { ref: "Joshua 1:9", text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest." },
  { ref: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble." },
  { ref: "Romans 8:28", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." },
  { ref: "Hebrews 13:2", text: "Be not forgetful to entertain strangers: for thereby some have entertained angels unawares." },
  { ref: "2 Corinthians 5:17", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." },
  { ref: "Romans 5:8", text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us." },
  { ref: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path." },
  { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness." },
  { ref: "Psalm 121:1–2", text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth." },
  { ref: "Philippians 4:6", text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." },
  { ref: "John 14:27", text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid." },
  { ref: "Mark 10:45", text: "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many." },
  { ref: "Lamentations 3:22–23", text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness." },
  { ref: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me." },
  { ref: "Isaiah 40:31", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." },
  { ref: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end." },
  { ref: "Galatians 6:9", text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not." },
  { ref: "Psalm 37:5", text: "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass." },
  { ref: "Matthew 6:33", text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you." },
  { ref: "Romans 10:17", text: "So then faith cometh by hearing, and hearing by the word of God." },
  { ref: "Deuteronomy 31:6", text: "Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee." },
  { ref: "Matthew 28:19", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:" },
  { ref: "2 Timothy 2:2", text: "And the things that thou hast heard of me among many witnesses, the same commit thou to faithful men, who shall be able to teach others also." },
  { ref: "Acts 1:8", text: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth." },
  { ref: "Ephesians 2:8", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:" }
];
