# DHL – Diaspora Hub for Leaders

**From Connection to Commission**

A free, static website for GitHub Pages: a digital ministry hub that helps foreigners in Korea, especially Filipinos, move from receiving help to becoming disciples, leaders and people who develop other leaders.

**Reach → Connect → Gospel → Disciple → Train → Serve → Multiply**

Built with plain HTML, CSS and JavaScript. No server, database, build step, paid service or paid AI API.

---

## Contents

1. [What DHL is](#1-what-dhl-is)
2. [Project structure](#2-project-structure)
3. [Run it on your computer](#3-run-it-on-your-computer)
4. [Upload to GitHub](#4-upload-to-github)
5. [Turn on GitHub Pages](#5-turn-on-github-pages)
6. [Connect YouTube](#6-connect-youtube)
7. [Connect Facebook](#7-connect-facebook)
8. [Add ministry posts](#8-add-ministry-posts)
9. [Add courses and lessons](#9-add-courses-and-lessons)
10. [Add events](#10-add-events)
11. [How the newest-first feed works](#11-how-the-newest-first-feed-works)
12. [How the AI demo works](#12-how-the-ai-demo-works)
13. [Connecting a real AI/RAG backend later](#13-connecting-a-real-airag-backend-later)
14. [Why API keys must not be exposed](#14-why-api-keys-must-not-be-exposed)
15. [Replace the demo content](#15-replace-the-demo-content)
16. [Customize the DHL branding](#16-customize-the-dhl-branding)
17. [What works today vs. what needs a backend](#17-what-works-today-vs-what-needs-a-backend)
18. [News Admin: publish news from a form](#18-news-admin-publish-news-from-a-form)

---

## 1. What DHL is

DHL is a central digital ministry hub for foreigners and diaspora communities in Korea. Social media attracts people; DHL gathers them; community connects them; discipleship develops them; leadership training equips them; mission sends them; and leaders multiply.

The site is built around one idea: **visitors should never get lost.** Every page shows:

- **Where am I?** A "You are here" strip under the page title shows the current step of the seven-step journey.
- **What can I learn?** The page's topics, lessons or resources.
- **What should I do next?** A "next step" band at the bottom of every page.
- **How can I connect with someone?** Mentor, community and prayer buttons throughout, plus the "Ask DHL AI" button.

The design uses a **Seoul-metro route map** as its visual language. Foreigners in Korea already know how to read one. The ministry journey is one line with seven stations, and the four pathways are four colored lines. The home page hero shows a verse of the day.

## 2. Project structure

```
/
├── index.html              Home: hero, latest content, welcome, categories, pathways, and more
├── contents.html           Contents Hub: the three categories, continue learning, search everything
├── bible-journey.html      Bible Journey landing: pathway, programs, featured courses, all lessons
├── gospel.html             Gospel Class: topics (searchable), Beginner Gospel course, Bible studies
├── discipleship.html       Discipleship Training: seven-step pathway and topics
├── mind-education.html     Mind Education: eight lessons with progress
├── live-in-korea.html      Live in Korea landing: six areas, guides, expressions, Q&A Corner
├── certificates.html       Certificate Course catalog and completed-course history
├── course.html             Course player: lessons, quiz, certificate (course.html?id=...)
├── korea.html              Redirects old links to live-in-korea.html
├── news.html               All news, or one full article (news.html?id=...)
├── admin.html              News Admin: sign in and publish news (not linked, not indexed)
├── pathways.html           Four pathways with stations you can mark as done
├── leadership.html         Leadership courses with practical assignments
├── digital-ministry.html   Digital ministry topics and downloadable templates
├── academy.html            Leadership Academy: 5 levels, courses, certificates
├── media.html              Video library, social media hub, Facebook embed
├── community.html          Group chats, groups, the online-to-offline bridge
├── events.html             Upcoming and past events with filters
├── ai-assistant.html       Full-page AI assistant and how it works
├── about.html              What DHL is, the model, multiplication, architecture
├── contact.html            Help, prayer, Bible study, leadership and community
├── 404.html                "Page not found" page
│
├── css/
│   ├── style.css           Colors, fonts, layout, header, footer, heroes
│   ├── components.css      Metro lines, cards, pathways, academy, chat and more
│   └── responsive.css      Tablet and desktop layouts, reduced motion
│
├── js/
│   ├── content.js          ← SETTINGS + section content (edit this first)
│   ├── main.js             Shared code: header, menu, feed, pages, progress
│   ├── youtube.js          Loads your newest YouTube videos
│   ├── pathways.js         Journey map, pathways, discipleship path
│   ├── academy.js          Academy levels, courses, certificates
│   ├── learning.js         Contents Hub, landing pages, course player, quizzes, certificates
│   ├── ai-chat.js          AI assistant (demo mode and live mode)
│   └── admin.js            News Admin form, preview and publishing (admin.html only)
│
├── data/
│   ├── courses.js          Academy levels, courses, certificates
│   ├── certificate-courses.js  Certificate courses: modules, lessons, quizzes
│   ├── lessons.js          Beginner Gospel course and Bible studies
│   ├── events.js           Events
│   └── ministry-posts.js   Feed posts and fallback videos
│
├── ai/
│   └── dhl-ai-system-prompt.md   Instructions for the live DHL AI (Bible + Pastor Park sources)
├── backend-example/
│   ├── cloudflare-worker/  Ready-to-deploy AI backend that uses the prompt above
│   └── news-admin-worker/  Secure publishing service for the News Admin
├── knowledge/              Folders for future AI source documents (not used yet)
├── assets/
│   ├── logo/               DHL logo
│   ├── icons/              Favicon and phone home-screen icon
│   ├── images/             Sharing image and placeholder thumbnails
│   └── downloads/          Templates offered on the Digital Ministry page
├── sitemap.xml, robots.txt, .nojekyll
└── README.md
```

**Where to edit what**

| To change… | Edit |
|---|---|
| Links, forms, YouTube, Facebook, AI settings | `js/content.js`, section 1 |
| The three Contents categories, Bible Journey programs, Mind Education lessons | `js/content.js`, section 3 |
| Live in Korea areas, guides and Q&A Corner | `js/content.js`, section 7 (`koreaGuides`, `qaItems`) |
| Certificate courses, lessons and quizzes | `data/certificate-courses.js` |
| Gospel, discipleship, leadership, digital topics, pathways, groups | `js/content.js`, sections 4–11 |
| Feed posts and fallback videos | `data/ministry-posts.js` |
| Events | `data/events.js` |
| Academy courses and certificates | `data/courses.js` |
| Gospel course lessons and Bible studies | `data/lessons.js` |
| Verse of the day list | `js/content.js`, section 12 |
| Page wording and SEO text | the `.html` files |

## 3. Run it on your computer

You can double-click `index.html` to open it, and most things work. For a more realistic test, especially for YouTube, run a small local web server in the project folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. (On Windows, use `python` instead of `python3`. With VS Code, the "Live Server" extension works too.)

## 4. Upload to GitHub

1. Sign in at github.com and click **New repository**. Name it (for example `dhl`), choose **Public**, and click **Create repository**.
2. Click **uploading an existing file**.
3. Unzip the project, open the folder, select **everything inside it** and drag it into the browser. Folders upload with their contents.
4. Click **Commit changes**.

`index.html` must be at the top level of the repository, not inside another folder. The `.nojekyll` file may be hidden on your computer; the site works without it.

## 5. Turn on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute or two, your address appears, for example `https://your-username.github.io/dhl/`.

All links are relative, so they work at that address. Then find and replace `https://your-username.github.io/your-repository` with your real address in every `.html` file, `sitemap.xml` and `robots.txt`.

## 6. Connect YouTube

Without a key, the Media page shows `fallbackVideos` from `data/ministry-posts.js`. With a key, your newest uploads load automatically.

1. **Channel ID:** YouTube Studio → Settings → Channel → Advanced settings → copy the Channel ID (starts with `UC`).
2. **API key:** at console.cloud.google.com, create a project, enable **YouTube Data API v3**, then go to **Credentials → Create credentials → API key**.
3. **Restrict the key.** This step is essential:
   - Application restrictions → **Websites** → add `https://your-username.github.io/*` (and `http://localhost:8000/*` while testing).
   - API restrictions → **Restrict key** → only **YouTube Data API v3**.
4. In `js/content.js`, paste the key (the DHL channel ID `UCy-688NReUqpEgWUziM2n8A` is already set):
   ```js
   const YOUTUBE_API_KEY = "AIzaSy...";
   const YOUTUBE_CHANNEL_ID = "UCy-688NReUqpEgWUziM2n8A";
   ```

The site reads your channel's uploads playlist, which costs **1 quota unit** per request (search would cost 100). It caches results in the visitor's browser for an hour. If anything fails, it quietly shows the fallback videos.

Videos are sorted into Media page categories (Message, Bible study, Testimony, Life in Korea, Leadership) by words in their titles. Edit the words in `VIDEO_CATEGORY_KEYWORDS` in `data/ministry-posts.js`.

## 7. Connect Facebook

In `js/content.js`:

```js
const FACEBOOK_PAGE_URL = "https://www.facebook.com/your-page";
```

The site currently uses the share link `https://www.facebook.com/share/1CPwX6C7Hv/`. That works for buttons and links. For the embedded post feed, Facebook needs the Page's real address: open the share link, copy the address that appears in the browser (like `https://www.facebook.com/YourPageName`), and paste it into `FACEBOOK_PAGE_URL`.

**What works automatically:** the Media page uses Facebook's official **Page Plugin** to show your latest public posts. It loads only when a visitor clicks "Show Facebook posts", which keeps the site fast and doesn't share visitors' data with Facebook until they choose. Your Page must be public. Some browsers and privacy extensions block the embed, so a link to your Page is always shown.

**What doesn't, and why:** automatically pulling Facebook posts into the DHL feed would need a Page access token. That is a secret, and it can't be placed in a public website. Until there's a backend, add important Facebook posts to the feed by hand (next section). It takes about a minute each.

Also set `social.facebookGroup`, `social.messenger`, `social.kakaoOpenChat` and the other links in `CONFIG.social`. Empty links are hidden automatically.

## 8. Add ministry posts

Open `data/ministry-posts.js`, copy an entry, paste it anywhere in `ministryPosts`, and edit it:

```js
{
  type: "facebook",            // youtube | facebook | study | event | announcement | testimony | resource
  title: "Prayer for new workers",
  date: "2026-10-02",          // YYYY-MM-DD
  description: "Join us in praying for friends starting new jobs.",
  url: "https://www.facebook.com/your-page/posts/123",
  image: "assets/images/thumb-facebook.svg",
  category: "Prayer"
},
```

- Add `pinned: true` to keep a post at the top of the feed above newer posts. The "Welcome to DHL" post is pinned; remove `pinned: true` from it if you want it to move down as new posts arrive.
- For **YouTube** posts, add `videoId` (the part after `watch?v=`). The video then plays in a pop-up on your site.
- Put your own images in `assets/images/` (landscape, about 1280 × 720) and set `image: "assets/images/your-photo.jpg"`.
- Every entry is wrapped in `{ }` and followed by a comma. If the page goes blank after an edit, a comma or quotation mark is usually missing.

## 9. Add courses and lessons

- **Academy courses:** in `data/courses.js`, add to a level's `courses` list:
  ```js
  { id: "a3-worship", title: "Leading worship", lessons: 4, format: "Workshop" }
  ```
  Each `id` must be unique. Add `href: "page.html"` to link the course title.
- **Gospel course lessons and Bible studies:** `data/lessons.js`.
- **Topic cards** (Gospel, Discipleship, Leadership, Digital, Life in Korea): `js/content.js`, sections 4–8.
- **Pathways and their stations:** `js/content.js`, section 9. A station can link to a page (`href`) or open a form (`form: "mentor"`).

**Theological content.** Every Gospel and discipleship summary is marked `status: "draft"` and shows a "Draft for review" badge. Replace the wording with DHL-approved teaching, then change it to `status: "approved"`. The drafts only summarize what the listed Bible passages say; they're starting points, not DHL doctrine.

### The learning hub

The site's content is organized into three categories, reached from the **Contents Hub** (`contents.html`):

- **Bible Journey:** Gospel Class, Discipleship Training and Mind Education, then Leadership and Ministry.
- **Live in Korea:** Korean Language Class, Visa, Job, Campus Life, Living in Korea and the Q&A Corner.
- **Certificate Course:** structured courses with a certificate of completion.

**Add a Live in Korea guide** in `koreaGuides` (`js/content.js`, section 7):

```js
{ id: "g-phone", area: "living", level: "Beginner", minutes: 10, title: "Getting a phone plan",
  text: "What you need to open a mobile phone plan.", tips: ["Bring your residence card.", "..."] },
```

`area` is `korean`, `visa`, `job`, `campus` or `living`. `level` is `Beginner`, `Intermediate` or `Advanced`. Add `url` for an official site, `course` for a certificate course id, or `href` for a page on this site. Each `id` must be unique.

**Add a Q&A** in `qaItems`: `{ category: "Work", q: "Question?", a: "Answer." }`. Questions from visitors go to the form in `CONFIG.forms.question`.

**Add a certificate course** in `data/certificate-courses.js`: copy an existing course and change it. Each course has `modules` → `lessons` (each with a unique `id`, `title`, `minutes` and `body` paragraphs, plus optional `refs` and `questions`), a `quiz` (each question has `options` and the index of the correct `answer`, counting from 0) and a `passMark` in percent. Set `status: "planned"` to show a course as "Coming later". A certificate unlocks when every lesson is marked complete and the quiz score reaches the pass mark. Visitors enter their name, and can print the certificate or save it as a PDF.

Progress, quiz scores and certificates are saved in the visitor's browser. Certificates show a reference code but can't be verified online until DHL has a backend with accounts. Every certificate states that it is not an accredited academic qualification.

**Mind Education lessons** (`mindTopics`) are general study notes based on the Bible passages they list, marked "Draft for review". Replace them with DHL's official Mind Education materials.

**Visa and job guides** are general information, not legal advice, and the site says so. Review them regularly against Hi Korea and other official sources.

## 10. Add events

In `data/events.js`, copy an entry and edit it. Times use 24-hour format:

```js
{ title: "Bible camp", date: "2026-12-26", startTime: "09:00", endTime: "17:00",
  location: "Gapyeong", category: "Bible Camp",
  description: "Two days of teaching and fellowship.",
  registrationUrl: "https://forms.gle/...", contact: "camp@your-dhl-ministry.org" },
```

Upcoming events are sorted soonest first. Events whose date has passed move to "Past events" automatically. Categories become filter buttons, and each event gets an "Add to Google Calendar" link.

## 11. How the newest-first feed works

When the home page loads, it takes every entry in `ministryPosts` and adds your newest YouTube uploads (if the API is configured), skipping videos already in your list. It then sorts everything by `date`, newest first. The newest post is shown large, the rest in a grid. Visitors can filter by type and load more. You never rearrange anything by hand.

## 12. How the AI demo works

The "Ask DHL AI" button appears on every page, and `ai-assistant.html` has a full-page version.

In **demo mode** (`AI_CONFIG.enabled: false`, the default), **no AI is used**. The assistant:

1. breaks the question into keywords,
2. searches the DHL content already on the site (topics, lessons, studies, Life in Korea resources and the `assistantFaq` list in `content.js`),
3. shows the best-matching passage **word for word**, with its sources and Bible references,
4. recommends a DHL mentor for theological questions, and whenever nothing matches.

Every demo answer is labelled as a DHL study note, not an AI answer. This honestly demonstrates the retrieval half of RAG.

Questions about Rev. Ock Soo Park's teaching get an honest reply: his books aren't in the knowledge base yet, so the assistant says so, shows related Bible passages, and suggests a mentor. It never guesses what he teaches.

**Safety.** Messages mentioning suicide, self-harm, abuse, violence or an emergency skip the search. They get a caring reply with Korean emergency numbers (112, 119, 109 suicide prevention, 1345 multilingual immigration help) and the mentor button. Check these numbers periodically in `koreaHelpNumbers` in `content.js`.

Conversations are not stored anywhere.

## 13. Connecting a real AI/RAG backend later

### The AI assistant

**DHL AI's instructions** are in `ai/dhl-ai-system-prompt.md`: the two sources (the Bible, and Rev. Ock Soo Park's books), answering from Scripture first, keeping the sources clearly separate, never inventing verses or quotations, respecting copyright, answering in the user's language, study mode and safety. Edit that file to change how the live assistant behaves.

**A ready-made backend** is in `backend-example/cloudflare-worker/`, with step-by-step instructions in its README. It loads the prompt from your published site, calls the Claude API with a key stored secretly on Cloudflare, and returns answers in the format below. The Claude API is paid per use, so set a spending limit.

A secure backend (a "proxy") sits between the website and the AI provider:

```
Browser  ──question──▶  Your backend  ──▶  Search approved DHL knowledge base
                              │                    │
                              │◀── relevant passages
                              │
                              ├──▶  AI provider (secret key stored here only)
                              │◀── answer
Browser  ◀── answer + sources ┘
```

1. Build an endpoint, for example `https://api.your-dhl.org/ai/ask`. Serverless platforms such as Cloudflare Workers, Vercel Functions or Supabase Edge Functions work well and have free tiers (check their current terms).
2. The site sends:
   ```json
   { "question": "What is repentance?", "history": [{ "role": "user", "content": "..." }], "page": "/gospel.html" }
   ```
3. Your endpoint returns:
   ```json
   {
     "answer": "Repentance means...",
     "sources": [{ "title": "DHL Gospel Course, lesson 5", "url": "https://.../gospel.html#course" }],
     "refs": ["Acts 3:19"],
     "needsMentor": false
   }
   ```
4. In `js/content.js`:
   ```js
   const AI_CONFIG = { enabled: true, endpoint: "https://api.your-dhl.org/ai/ask", ... };
   ```

If the endpoint fails, the site falls back to demo search automatically. The safety handling (section 12) stays in the browser either way; add the same checks on the server.

**Building the knowledge base (RAG):**

1. Put **approved** documents in `knowledge/gospel/`, `knowledge/discipleship/` and the other folders. Only use material DHL owns or has written permission to use. Don't upload copyrighted books without permission.
2. On the backend, split documents into short passages and create embeddings (a searchable index).
3. For each question, retrieve the top passages and instruct the model to answer **only** from them, cite them, and set `needsMentor: true` when the passages don't answer the question or the question is personal or sensitive.
4. Return short quotations and summaries, never whole chapters or books.
5. Have DHL leaders review a sample of answers regularly.

The `knowledge/` folder is excluded from search engines in `robots.txt`. Anything in a public GitHub repository is public, though, so keep unpublished or licensed material in a private repository or on the backend instead.

### Accounts, progress and data

Today, pathway and course progress is saved in the visitor's browser only (`DHL.Progress` in `main.js`), and the site says so. To move to accounts:

- Set `CONFIG.backend = { enabled: true, baseUrl: "https://api.your-dhl.org" }`. The site will then request `GET /posts` and `GET /events` (returning the same JSON shapes as the data files), and fall back to local files if the backend is unavailable.
- Replace the four methods of `Progress` (`read`, `write`, `isDone`, `toggle`) with API calls. The pages already use only these methods.
- Planned entities: Users, Profiles, Courses, Lessons, Enrollments, Progress, Groups, Mentors, Disciples, Leaders, Assignments, Certificates, Events, Prayer Requests, Ministry Posts and AI Conversations.

Real sign-in must use a proper authentication service on the backend. The site contains no login and does not pretend to.

## 14. Why API keys must not be exposed

Everything in a GitHub Pages site, including every JavaScript file, can be read by anyone.

- **YouTube browser key: acceptable when restricted.** It reads only public data, and with website and API restrictions it can't be used elsewhere. The worst case is someone using up your free daily quota.
- **AI provider keys (OpenAI, Anthropic, Google and others): never.** Anyone could copy the key and run up charges on your account, or misuse it in your name. That is why `AI_CONFIG` has only an `endpoint`, and the key lives on the backend.
- **Facebook Page tokens, database passwords, service accounts: never.**

If a secret key is ever committed by mistake, **revoke it immediately** in the provider's dashboard. Deleting the file isn't enough, because Git keeps history.

## 15. Replace the demo content

Demo items are marked `sample: true` (posts, events, groups, videos) or `status: "draft"` (topics and lessons), and they show a badge.

1. Replace or delete the sample posts, videos, events and groups.
2. Replace the draft teaching with DHL-approved wording and set `status: "approved"`.
3. Rewrite "Our story" in `about.html`. Don't list partnerships, people or credentials that aren't confirmed.
4. Set every form URL in `CONFIG.forms` to your real Google Forms.
5. When everything is real, set `showDemoLabels: false` in `CONFIG`.

**Forms to create** (Google Forms is free): prayer request, contact, Bible study sign-up, mentor request, community sign-up, Academy application and event registration. Paste each form's share link into `CONFIG.forms`. An empty link hides its button.

## 16. Customize the DHL branding

- **Name, tagline, description, email:** `CONFIG` in `js/content.js`. Page titles and descriptions are written in each `.html` `<head>` so search engines can read them; update those with find-and-replace.
- **Logo:** the site uses `assets/logo/dhl-logo.png` (256 × 256, transparent background). Browser icons are `assets/icons/favicon-32.png` and `favicon-192.png`, and the phone home-screen icon is `apple-touch-icon.png` (180 × 180, white background). Your original logo file is kept as `assets/logo/dhl-logo-original.svg`; it isn't loaded by the site because it's 1 MB. To change the logo, replace these PNG files with the same names and sizes, or set `CONFIG.logo`.
- **Sharing image:** replace `assets/images/og-image.png` (1200 × 630).
- **Colors:** edit the variables at the top of `css/style.css`. `--navy` is the main color, `--mango` the action color, and `--teal`, `--red`, `--blue` the pathway line colors.
- **Fonts:** Sora (headings) and Noto Sans / Noto Sans KR (body, including Korean text), from Google Fonts.
- **Verse of the day:** edit `dailyVerses` in `js/content.js`, section 12. One verse shows per day, in order, based on the visitor's date. The text is King James Version (public domain). If you switch to a modern translation such as the NIV, check its copyright permissions for websites first and change `dailyVerseVersion`.
- **Section photos:** each learning page has a photo beside its title, and the same photos appear on the category and program cards. Save your photos in `assets/images/` with these exact names:

  | File name | Where it appears |
  |---|---|
  | `contents.jpg` | Contents Hub |
  | `bible-journey.jpg` | Bible Journey page and its category card |
  | `gospel-class.jpg` | Gospel Class page and its program card |
  | `discipleship.jpg` | Discipleship Training page and its program card |
  | `mind-education.jpg` | Mind Education page and its program card |
  | `live-in-korea.jpg` | Live in Korea page and its category card |
  | `certificates.jpg` | Certificate Courses page and its category card |

  Use landscape photos, about 1200 × 800 pixels and under 400 KB each. Until a photo is added, a designed placeholder in the section's color is shown, so nothing looks broken. After adding a photo, update its `alt` description in `CONFIG.photos` (`js/content.js`) so screen-reader users know what it shows. To use a different file name, change `src` there.
- **Community photo (top of the home page):** save a photo of your community as `assets/images/community.jpg` (landscape, about 1600 × 900 pixels, under 500 KB so it loads quickly on phones). It appears behind the top of the home page with a navy tint so the text stays readable, and it's also the picture on the pinned "Welcome to DHL" post. Until the file exists, the plain navy background and a placeholder picture are shown. To use a different file name, change `heroImage` in `CONFIG`. If faces get cut off, set `heroImagePosition` to `"top"` or, for example, `"center 30%"`. Only use photos you have permission to publish, and ask people before posting pictures where they can be recognized.
- **Bible links:** `CONFIG.bibleVersion` sets which version BibleGateway opens (for example `"NIV"`, `"ESV"` or `"KJV"`).

## 17. What works today vs. what needs a backend

| Works today on GitHub Pages | Needs a backend later |
|---|---|
| All pages, navigation and mobile menu | Member accounts and sign-in |
| Newest-first ministry feed and filters | Progress saved across devices |
| YouTube newest videos (with a restricted key) | Automatic Facebook posts in the feed |
| Facebook Page Plugin embed | Group, mentor and disciple management |
| Pathways, discipleship and Academy progress (this browser only) | Practicum tracking and evaluations |
| Gospel topic search, lessons and study guides | Issuing certificates |
| Events with filters and calendar links | Prayer request database (use Google Forms for now) |
| AI assistant in demo mode (search, sources, safety) | AI answers with RAG over approved documents |
| Forms through Google Forms | |
| News articles on `news.html` | Publishing from `admin.html` (the free News Admin Worker, section 18) |

**Accessibility:** semantic landmarks, a skip link, keyboard-operable menu, chat and dialogs (Escape closes them), visible focus, labelled controls, live announcements for progress changes, readable sizes and contrast, and reduced-motion support.

**Tested layouts:** 360, 390, 768, 1024 and 1440 pixels wide.


## 18. News Admin: publish news from a form

`admin.html` lets DHL administrators write a post, preview it, and publish it to the website without editing `data/ministry-posts.js` by hand.

```
admin.html ──"Sign in with GitHub"──▶ News Admin Worker ──▶ GitHub sign-in (identity only)
           ◀── signed 8-hour session ──   (only usernames in ADMIN_USERS)

admin.html ──new post + session──▶ Worker ──GitHub token (server-side secret)──▶ GitHub API
                                          adds the post to data/ministry-posts.js ──▶ GitHub Pages rebuilds
```

### Why a Worker is needed

GitHub Pages only serves files. Anything in them, including JavaScript, can be read by anyone. Writing to your repository needs a GitHub token, and a token in the website would let anyone change your site. So the token is kept in a small free Cloudflare Worker, and the admin page only ever talks to the Worker.

### Files

**Added**
- `admin.html`: the News Admin page. It isn't in the menu and is hidden from search engines (`noindex` and `robots.txt`). Hiding it isn't the protection, though: the page is harmless without a signed-in session.
- `js/admin.js`: sign-in, the form, validation, live preview, draft saving and publishing.
- `news.html`: all news, or one full article with `news.html?id=...`.
- `backend-example/news-admin-worker/worker.js` and `wrangler.toml`: the secure publishing service.

**Modified**
- `data/ministry-posts.js`: comments only. The post format is unchanged. Two optional fields were added: `id` and `content`. Existing posts work exactly as before.
- `js/main.js`: posts with `id` and `content` now link to their article page, which has new article rendering. The News page is added to the menu.
- `js/content.js`: new setting `CONFIG.admin.endpoint`.
- `js/ai-chat.js`: no "Ask DHL AI" button on the admin page.
- CSS files, `robots.txt` and `sitemap.xml`.

### How sign-in works

1. The admin clicks **Sign in with GitHub**. The Worker sends them to GitHub, which asks them to approve "DHL News Admin". The app only asks to read their public profile.
2. GitHub sends them back to the Worker with a one-time code. The Worker checks a random `state` value to block forged logins, and swaps the code for the admin's GitHub username.
3. If the username is in `ADMIN_USERS`, the Worker creates a **session**, signed with `SESSION_SECRET`, that expires after 8 hours. Anyone else gets "This account isn't on the News Admin list."
4. The session is kept in the browser tab (`sessionStorage`) and cleared when the tab closes or the admin clicks **Sign out**. It can't be forged or changed, because the Worker checks the signature on every request.

The admin's own GitHub token is used only to learn their username, then thrown away. It never reaches the browser.

### How publishing works

1. `admin.js` checks the form and sends the post to the Worker, along with the session.
2. The Worker checks the session and validates every field again. Dates must be real `YYYY-MM-DD` dates, links must be `https://` or a page on the site, and `javascript:` links are refused.
3. It reads `data/ministry-posts.js` from GitHub and adds the new post at the top of the `ministryPosts` list, in the same layout as the existing posts. It gives the post a unique `id` based on the date and title. Every other line of the file is left exactly as it was.
4. It commits the change as "News: *post title*", with the admin as author. If the file changed in the meantime, it re-reads the file and tries again, so nothing is overwritten.
5. GitHub Pages rebuilds automatically after the commit, usually within 1–2 minutes.

### Setup (about 30 minutes, once)

You need a GitHub account, a free Cloudflare account and Node.js (LTS, from nodejs.org).

**Step 1. Create the GitHub token** (lets the Worker update the posts file)
1. On GitHub: your photo → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. Name: `DHL News Admin`. Expiration: the longest allowed. Put a reminder in your calendar to renew it.
3. **Repository access:** *Only select repositories*, then choose your DHL website repository.
4. **Permissions → Repository permissions → Contents:** *Read and write*. Leave everything else as it is.
5. Click **Generate token** and copy it. You'll only see it once.

**Step 2. Set up and deploy the Worker**
1. Open a terminal in `backend-example/news-admin-worker`.
2. Edit `wrangler.toml`:
   - `GITHUB_OWNER` and `GITHUB_REPO`: from your repository address `github.com/OWNER/REPO`
   - `GITHUB_BRANCH`: usually `main`
   - `ADMIN_PAGE_URL`: e.g. `https://your-username.github.io/your-repository/admin.html`
   - `ADMIN_USERS`: GitHub usernames allowed to publish, comma-separated
3. Run:
   ```
   npx wrangler login
   npx wrangler deploy
   ```
   Note the address it prints, e.g. `https://dhl-news-admin.your-account.workers.dev`.

**Step 3. Create the GitHub sign-in app**
1. On GitHub: **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**.
2. Application name: `DHL News Admin`. Homepage URL: your website address.
3. **Authorization callback URL:** your Worker address + `/auth/callback`, e.g. `https://dhl-news-admin.your-account.workers.dev/auth/callback`.
4. Click **Register application**. Copy the **Client ID** into `GITHUB_CLIENT_ID` in `wrangler.toml`.
5. Click **Generate a new client secret** and copy it.

**Step 4. Store the secrets in Cloudflare** (never in any file)
```
npx wrangler secret put GITHUB_TOKEN
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler secret put SESSION_SECRET
npx wrangler deploy
```
Paste the token from step 1, the client secret from step 3, and for `SESSION_SECRET` a long random text of at least 32 characters (a password manager can generate one).

**Step 5. Connect the website**
In `js/content.js`, set:
```js
admin: { endpoint: "https://dhl-news-admin.your-account.workers.dev" },
```
Commit the change. The Worker address isn't secret.

### Creating your first post

1. Open `https://your-username.github.io/your-repository/admin.html` (bookmark it).
2. Click **Sign in with GitHub**, then **Authorize** (the first time only).
3. Fill in the title, date, post type, category and short description. Then write the full content, or add an external link.
4. Check the preview on the right, then click **Publish post**.
5. You'll see "Post published successfully!" Wait 1–2 minutes, then click **View the post**.

Your unfinished text is saved on your device as you type. If your session expires, sign in again and your draft is still there.

To **edit or delete** a published post, open `data/ministry-posts.js` on GitHub and change it by hand (section 8). Editing from the admin page could be added later.

### Managing access
- **Add or remove an admin:** edit `ADMIN_USERS` in `wrangler.toml` and run `npx wrangler deploy`. Removed admins are signed out immediately.
- **Sign everyone out:** set a new `SESSION_SECRET`.
- **If the GitHub token leaks or expires:** delete it on GitHub, create a new one (step 1), and run `npx wrangler secret put GITHUB_TOKEN` again.
- **Cost:** Cloudflare Workers' free plan and GitHub are enough for this. Check Cloudflare's current free-plan limits.

### Troubleshooting

| Message | What to do |
|---|---|
| "The News Admin isn't connected yet" | Set `CONFIG.admin.endpoint` (step 5). |
| "Couldn't reach the News Admin service" | Check the address in `CONFIG.admin.endpoint`, and that `ADMIN_PAGE_URL` in `wrangler.toml` matches your site exactly. |
| "…isn't on the News Admin list" | Add that GitHub username to `ADMIN_USERS` and redeploy. |
| "GitHub token was refused" | The token expired or lacks *Contents: Read and write* on this repository. Create a new one. |
| "GitHub couldn't find data/ministry-posts.js" | Check `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BRANCH` and `POSTS_PATH`. |
| GitHub sign-in shows "redirect_uri mismatch" | The OAuth App's callback URL must be the Worker address + `/auth/callback`. |
| Published, but not on the site yet | Wait a few minutes. GitHub Pages is rebuilding. |

### Adding image uploads later

This first version takes an image link. To upload photos directly:
1. In `admin.js`, let the admin pick a photo. Shrink it in the browser (for example to 1600 px wide as a JPEG) using a canvas, and send it to the Worker as base64 together with the post.
2. In the Worker, add a route such as `POST /api/images`. It checks the session, checks the file really is a JPEG, PNG or WebP under about 1 MB, gives it a safe name like `assets/images/news/2026-10-05-bible-camp.jpg`, and uploads it with the same GitHub contents API (`PUT /contents/<path>`).
3. Return the new path to the form and fill in **Featured image URL** automatically.

The same token and session protect uploads, so no new secrets are needed.
