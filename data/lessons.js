/* ==========================================================================
   data/lessons.js — Beginner Gospel course and guided Bible studies.
   Wording is marked "draft" until approved by DHL leadership.
   ========================================================================== */
const gospelCourse = [
  { id: "gc1", title: "God who made you", refs: ["Genesis 1:26–27", "Acts 17:24–28"], minutes: 15, status: "draft",
    summary: "The Bible begins with God as Creator. People are made in his image and made to know him.",
    questions: ["What does it mean to be made in God's image?", "According to Acts 17:27, how near is God?"] },
  { id: "gc2", title: "What went wrong", refs: ["Genesis 3", "Romans 3:23", "Romans 6:23"], minutes: 15, status: "draft",
    summary: "Humanity turned away from God. The Bible calls this sin and describes its result as death.",
    questions: ["What changed after Genesis 3?", "What two things are contrasted in Romans 6:23?"] },
  { id: "gc3", title: "Who is Jesus?", refs: ["John 1:1–14", "Mark 1:1", "Mark 8:27–29"], minutes: 20, status: "draft",
    summary: "The Gospels introduce Jesus as the Christ, the Son of God, who came to live among us.",
    questions: ["What did people say about Jesus in Mark 8?", "Who do you say he is?"] },
  { id: "gc4", title: "The cross and forgiveness", refs: ["Isaiah 53:4–6", "1 Peter 2:24", "Colossians 1:13–14"], minutes: 20, status: "draft",
    summary: "The New Testament teaches that Jesus died for sins and rose again, so people can be forgiven.",
    questions: ["How does Isaiah 53 describe the one who suffers?", "What do we have in Christ, according to Colossians 1:14?"] },
  { id: "gc5", title: "Repentance and faith", refs: ["Mark 1:15", "Acts 20:21", "Ephesians 2:8–9"], minutes: 15, status: "draft",
    summary: "Jesus called people to repent and believe the good news. Salvation is received by faith as a gift.",
    questions: ["What two responses does Mark 1:15 call for?", "Why is salvation called a gift?"] },
  { id: "gc6", title: "A new life", refs: ["2 Corinthians 5:17", "John 10:10", "Acts 2:42"], minutes: 15, status: "draft",
    summary: "Those who follow Jesus begin a new life, growing together with other believers.",
    questions: ["What does 'new creation' mean to you?", "What next step will you take?"] }
];

const bibleStudies = [
  { id: "bs-john3", title: "Born again: Jesus and Nicodemus", passage: "John 3:1–21", level: "Beginner",
    summary: "A religious leader comes to Jesus at night with questions.",
    steps: ["Read the passage twice, slowly.", "What does Nicodemus already believe about Jesus?", "What does Jesus say is necessary?", "What does John 3:16 say about God's love?", "What question would you ask Jesus?"] },
  { id: "bs-luke15", title: "The lost son", passage: "Luke 15:11–32", level: "Beginner",
    summary: "A story about a father's welcome, told by Jesus.",
    steps: ["Read the story out loud.", "What did the younger son expect when he returned?", "How did the father respond?", "Which son do you relate to more, and why?"] },
  { id: "bs-rom5", title: "Peace with God", passage: "Romans 5:1–11", level: "Intermediate",
    summary: "Paul explains what believers have through Jesus.",
    steps: ["List everything Paul says we have.", "What does verse 8 show about God's love?", "How can suffering produce hope (verses 3–5)?", "Share one verse with a friend this week."] },
  { id: "bs-eph2", title: "Saved by grace", passage: "Ephesians 2:1–10", level: "Intermediate",
    summary: "Before, but God, and now: a before-and-after picture.",
    steps: ["Describe life 'before' in verses 1–3.", "What changes with 'But God' in verse 4?", "Why can no one boast?", "What 'good works' might God have prepared for you?"] }
];
