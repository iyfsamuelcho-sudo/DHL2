/* ==========================================================================
   data/ministry-posts.js — the Latest Ministry Content feed.
   Add a post anywhere in the list; the site sorts by date, newest first.

   type:     "youtube" | "facebook" | "study" | "event" | "announcement"
             | "testimony" | "resource"
   date:     "YYYY-MM-DD"
   videoId:  (YouTube only) the part after "watch?v=" in the video link
   image:    thumbnail path or URL (optional)
   category: short label shown on the card (optional)
   sample:   true shows a "Sample" badge; delete it for real posts
   pinned:   true keeps the post at the top of the feed, above newer posts
   id:       (optional) unique name for a full article, used in news.html?id=...
   content:  (optional) full article text; blank lines start new paragraphs.
             Posts with id + content open as an article on news.html.

   Posts can be added here by hand, or with the News Admin (admin.html),
   which adds new posts at the top of this list automatically.
   ========================================================================== */
const ministryPosts = [
  { pinned: true, type: "announcement", title: "Welcome to DHL", date: "2026-09-27",
    description: "DHL is a community for foreigners in Korea, especially Filipinos. Find practical help and real friends, explore the Gospel, and grow into a leader who helps others grow.",
    url: "about.html", image: "assets/images/community.jpg", category: "From connection to commission" },
  { sample: true, type: "facebook", title: "Prayer for workers starting new jobs this week", date: "2026-09-26",
    description: "Many of our friends start new contracts this month. Join us in praying for them.",
    url: "", image: "assets/images/thumb-facebook.svg", category: "Prayer" },
  { sample: true, type: "study", title: "New: Beginner Gospel course, six lessons", date: "2026-09-24",
    description: "Short lessons you can do on your phone during a break.",
    url: "gospel.html#course", image: "assets/images/thumb-study.svg", category: "Gospel" },
  { sample: true, type: "event", title: "Filipino fellowship afternoon on October 4", date: "2026-09-22",
    description: "Worship, a shared meal and new friends. Register to receive the location.",
    url: "events.html", image: "assets/images/thumb-event.svg", category: "Fellowship" },
  { sample: true, type: "testimony", title: "From a lonely first winter to leading a group", date: "2026-09-19",
    description: "A sample testimony showing the DHL journey from connection to leadership.",
    url: "", image: "assets/images/thumb-testimony.svg", category: "Testimony" },
  { sample: true, type: "resource", title: "Download: online Bible study host checklist", date: "2026-09-16",
    description: "Everything to prepare before, during and after your Zoom study.",
    url: "assets/downloads/online-bible-study-checklist.txt", image: "assets/images/thumb-resource.svg", category: "Digital Ministry" },
  { sample: true, type: "announcement", title: "Leadership Academy Level 3 opens in October", date: "2026-09-12",
    description: "Ministry skills workshops for those who have completed Levels 1 and 2.",
    url: "academy.html", image: "assets/images/thumb-announcement.svg", category: "Academy" },
  { sample: true, type: "youtube", title: "Korean at the hospital: 10 useful phrases", date: "2026-09-08",
    description: "Practical Korean for your next clinic visit.",
    videoId: "", url: "", image: "assets/images/thumb-korea.svg", category: "Life in Korea" }
];

/* Shown on the Media page when the YouTube API isn't configured or fails.
   category: "message" | "study" | "testimony" | "korea" | "leadership" */
const fallbackVideos = [
  { sample: true, videoId: "", title: "Welcome to DHL", date: "2026-09-27", category: "message",
    description: "From connection to commission.", thumbnail: "assets/images/thumb-youtube.svg" },
  { sample: true, videoId: "", title: "Gospel course, lesson 1: God who made you", date: "2026-09-20", category: "study",
    description: "Genesis 1 and Acts 17.", thumbnail: "assets/images/thumb-study.svg" },
  { sample: true, videoId: "", title: "A sample testimony", date: "2026-09-15", category: "testimony",
    description: "How community led to faith.", thumbnail: "assets/images/thumb-testimony.svg" },
  { sample: true, videoId: "", title: "Korean at the hospital", date: "2026-09-08", category: "korea",
    description: "Ten useful phrases.", thumbnail: "assets/images/thumb-korea.svg" },
  { sample: true, videoId: "", title: "Servant leadership in Mark 10", date: "2026-09-01", category: "leadership",
    description: "What makes a leader great?", thumbnail: "assets/images/thumb-announcement.svg" }
];

/* Words used to sort YouTube videos into Media page categories. */
const VIDEO_CATEGORY_KEYWORDS = {
  korea: ["korean", "korea", "topik", "life in korea"],
  testimony: ["testimony", "my story"],
  leadership: ["leader", "leadership", "academy", "mentor"],
  study: ["bible study", "study", "lesson", "course"],
  message: ["message", "sermon", "preaching"]
};
