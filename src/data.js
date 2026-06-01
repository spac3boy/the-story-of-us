/* ============================================================
   13 YEARS OF US — Content model
   Edit this object to update the site. Each chapter and memory
   maps 1:1 to what you'd store in a JSON / CMS later.
   To add real photos: set `src` on a photo object and the
   placeholder is replaced automatically.
   ============================================================ */
const siteData = {
  couple: {
    names: ["Michael", "Karla"],
    magicWordHint: "a certain Beatles truth",
  },
  anniversary: {
    label: "13th wedding anniversary",
    start: "February 14, 2009",
    end: "June 1, 2026",
    years: 13,
  },
  hero: {
    title: ["The story", "of", "us."],
    subtitle:
      "A living timeline of the years we've shared, the places we've been, the family we've built, and the love that kept showing up.",
    photo: {
      src: "/assets/photos/hero/hora-loca-at-the-reception.jpg",
      label: "Michael and Karla at the hora loca reception",
      ar: "16 / 8",
      thumbFit: "cover",
      thumbPosition: "50% 42%",
    },
    caption: "June 1, 2013 — the day the story we had already begun became the marriage we are still writing.",
    stats: [
      { num: "13", lbl: "years married" },
      { num: "8", lbl: "chapters so far" },
      { num: "2", lbl: "countries called home" },
      { num: "∞", lbl: "still being written" },
    ],
  },

  /* accent keys map to palette: rose · burgundy · lavender · amber · blush · sage */
  chapters: [
    {
      id: "start",
      photoFolder: "/assets/photos/01-start/",
      num: "01",
      title: "Where It All Started",
      years: "2009",
      accent: "rose",
      summary:
        "Every story has a beginning. Ours started with two people, one moment, and a future neither of us could fully imagine yet.",
      photoCount: "6 photos",
      tags: ["early photos together", "first-date era", "old selfies", "the beginning"],
      memories: [
        {
          kicker: "Memory",
          title: "The first version of us",
          caption:
            "Before the wedding, the kids, the moves — just two people figuring out they’d rather keep figuring it out together.",
          location: "where we met",
          date: "2013",
        photos: [
          { src: "/assets/photos/01-start/early-photo-together.jpg", label: "one of the earliest photos of us" },
          { src: "/assets/photos/01-start/started-dating-at-mardi-gras.jpg", label: "when we started dating at Mardi Gras" },
        ],
      },
        {
          kicker: "Memory",
          title: "Before we knew",
          caption:
            "The early days nobody photographs on purpose — and the ones we’re so glad somebody did.",
          location: "the early days",
          date: "2013",
          photos: [
        { src: "/assets/photos/01-start/at-city-bar.jpg", label: "at City Bar" },
        { src: "/assets/photos/01-start/dinner-at-jolies-louisiana-bistro.jpg", label: "dinner at Jolie's Louisiana Bistro" },
        { src: "/assets/photos/01-start/at-someones-wedding.jpg", label: "at someone's wedding" },
        {
          src: "/assets/photos/01-start/first-karate-tournament.jpg",
              label: "our first karate tournament",
              thumbFit: "cover",
              thumbPosition: "50% 32%",
            },
          ],
        },
      ],
    },
    {
      id: "falling",
      photoFolder: "/assets/photos/02-falling/",
      num: "02",
      title: "Falling Into Us",
      years: "2010–2012",
      accent: "lavender",
      summary:
        "The dating years. The nights out, the trips, the inside jokes, and the little moments where life started arranging itself around us.",
      photoCount: "10 photos",
      tags: ["dating-era trips", "nights out", "silly photos", "favorite places", "friends"],
      memories: [
        {
          kicker: "Memory",
          title: "The part where we became us",
          caption:
            "Somewhere between the trips and the Tuesday nights, two schedules quietly turned into one life.",
          location: "everywhere & nowhere",
          date: "2013–2015",
          photos: [
            { src: "/assets/photos/02-falling/dating-2.jpg", label: "dating-era night out" },
            { src: "/assets/photos/02-falling/dating.jpg", label: "dating-era photo together" },
            { src: "/assets/photos/02-falling/trip-to-natchitoches-la.jpg", label: "trip to Natchitoches, Louisiana" },
            { src: "/assets/photos/02-falling/eating-at-bullritos-lafayette.jpg", label: "eating at Bullritos in Lafayette" },
          ],
        },
        {
          kicker: "Memory",
          title: "Our kind of fun",
          caption:
            "The silly photos, the inside jokes, the friends who were there for all of it.",
          location: "good company",
          date: "2014",
          photos: [
            { src: "/assets/photos/02-falling/halloween-costumes.jpg", label: "Halloween costumes" },
            { src: "/assets/photos/02-falling/dating-dancing.jpg", label: "dating-era dancing" },
            { src: "/assets/photos/02-falling/dating-hollywood-party.jpg", label: "Hollywood party" },
          ],
        },
        {
          kicker: "Little first",
          title: 'Our first "fur baby"',
          caption:
            'Before the bigger chapters, there was tiny Luna: adopted from a friend while we were living in the "baby apartment" on Taft St.',
          location: "Taft St",
          date: "our first apartment",
          photos: [
            { src: "/assets/photos/02-falling/adopting-luna.jpg", label: "adopting Luna" },
            { src: "/assets/photos/02-falling/baby-luna.jpg", label: "baby Luna" },
            { src: "/assets/photos/02-falling/luna-as-a-puppy.jpg", label: "Luna as a puppy" },
          ],
        },
      ],
    },
    {
      id: "wedding",
      photoFolder: "/assets/photos/03-wedding/",
      num: "03",
      title: "The Wedding Chapter",
      years: "2013",
      accent: "burgundy",
      summary:
        "The promise. The people. The photos where everything looks official, even though our real life together had already begun.",
      photoCount: "11 photos",
      tags: ["engagement", "ceremony", "reception", "couple portrait", "family & friends", "a candid"],
      memories: [
        {
          kicker: "The day",
          title: "We said yes to all of it",
          caption:
            "Not just to a wedding day — to the ordinary mornings and the hard seasons and the whole unwritten rest of it.",
          location: "our wedding",
          date: "June 1",
          photos: [
            { src: "/assets/photos/03-wedding/engagement-picture.jpg", label: "engagement picture" },
            { src: "/assets/photos/03-wedding/engagement-party.jpg", label: "engagement party" },
            { src: "/assets/photos/03-wedding/at-the-church.jpg", label: "at the church" },
            { src: "/assets/photos/03-wedding/at-the-altar.jpg", label: "at the altar" },
            { src: "/assets/photos/03-wedding/walking-down-the-aisle.jpg", label: "walking down the aisle" },
            { src: "/assets/photos/03-wedding/wedding-cake.jpg", label: "wedding cake" },
            { src: "/assets/photos/03-wedding/first-dance-bride-groom.jpg", label: "our first dance as bride and groom" },
            { src: "/assets/photos/03-wedding/wedding-party.jpg", label: "the wedding party" },
            { src: "/assets/photos/03-wedding/wedding-hora-loca.jpg", label: "hora loca at the wedding" },
          ],
        },
        {
          kicker: "Honeymoon",
          title: "Just married in Mexico",
          caption:
            "The first trip after the promise — sun, tequila, and the very beginning of married life.",
          location: "Mexico",
          date: "Honeymoon",
          photos: [
            { src: "/assets/photos/03-wedding/honeymoon-in-mexico.jpg", label: "honeymoon in Mexico" },
            { src: "/assets/photos/03-wedding/honeymoon-tequila-shots.jpg", label: "honeymoon tequila shots" },
          ],
        },
      ],
    },
    {
      id: "building",
      photoFolder: "/assets/photos/04-building/",
      num: "04",
      title: "Building a Life",
      years: "2014–2019",
      accent: "amber",
      summary:
        "Homes, routines, moves, work, groceries, holidays, tiny rituals — all the ordinary things that slowly became our life.",
      photoCount: "22 photos",
      tags: ["homes & apartments", "moving day", "holidays", "daily life", "pre-kids travel", "the neighborhood"],
      memories: [
        {
          kicker: "Memory",
          title: "Home became a verb",
          caption:
            "Boxes, paint, a new set of keys, and the slow work of turning an address into a home.",
          location: "our places",
          date: "the married years",
          photos: [
            { src: "/assets/photos/04-building/driving.jpg", label: "driving together" },
            { src: "/assets/photos/04-building/living-in-savannah-ga.jpg", label: "living in Savannah, Georgia" },
            { src: "/assets/photos/04-building/ginas-wedding.jpg", label: "Gina's wedding" },
          ],
        },
        {
          kicker: "Memory",
          title: "The ordinary magic",
          caption:
            "Holidays, weeknight dinners, the small rituals nobody else would notice — the ones that were entirely ours.",
          location: "everyday life",
          date: "the married years",
          photos: [
            { src: "/assets/photos/04-building/christmas-party-in-houston.jpg", label: "Christmas party in Houston" },
          ],
        },
        {
          kicker: "Memory",
          title: "The summers we carried with us",
          caption:
            "Chicago, Savannah, work, camp, and all the little seasons that became part of the life we were building.",
          location: "Chicago & Savannah",
          date: "2015",
          photos: [
            { src: "/assets/photos/04-building/chicago-bean.jpg", label: "the summer Michael worked in Chicago" },
            { src: "/assets/photos/04-building/shift-2015-mike-and-karla.jpg", label: "summer camp while we lived in Savannah" },
            { src: "/assets/photos/04-building/shenandoah-valley.jpg", label: "Shenandoah Valley" },
          ],
        },
        {
          kicker: "Before kids",
          title: "Greece, Berlin, and one more big just-us adventure",
          caption:
            "In 2017, before the parenting chapter began, we wandered through Athens and Mykonos, then carried that same wide-open feeling into Berlin.",
          location: "Greece & Berlin",
          date: "2017",
          photos: [
            { src: "/assets/photos/04-building/market-in-athens.jpg", label: "market in Athens" },
            { src: "/assets/photos/04-building/parthenon.jpg", label: "the Parthenon" },
            { src: "/assets/photos/04-building/mykonos-beach.jpg", label: "Mykonos beach" },
            { src: "/assets/photos/04-building/overlooking-athens.jpg", label: "overlooking Athens" },
            { src: "/assets/photos/04-building/ruins-in-greece.jpg", label: "ruins in Greece" },
            { src: "/assets/photos/04-building/berlin-wall-art-building.jpg", label: "Berlin wall art on a building" },
            { src: "/assets/photos/04-building/berlin-love-locks.jpg", label: "love locks in Berlin" },
            { src: "/assets/photos/04-building/berlin-wall-graffiti.jpg", label: "Berlin wall graffiti" },
            { src: "/assets/photos/04-building/karla-berlin-wall-remains.jpg", label: "Karla in front of the Berlin Wall remains" },
          ],
        },
        {
          kicker: "First house",
          title: "The Virginia house",
          caption:
            "Buying our first house meant snow days, renovation dust, a kitchen that finally felt like ours, and the beautiful work of turning a project into a home.",
          location: "Virginia",
          date: "2022–2023",
          photos: [
            { src: "/assets/photos/04-building/virginia-house-covered-in-snow.jpg", label: "Virginia house covered in snow" },
            { src: "/assets/photos/04-building/virginia-house-remodeling-before.jpg", label: "Virginia house renovation before" },
            { src: "/assets/photos/04-building/virginia-house-kitchen.jpg", label: "the renovated Virginia house kitchen" },
            { src: "/assets/photos/04-building/swing-in-front-of-our-virginia-house.jpg", label: "swing in front of our Virginia house" },
          ],
        },
        {
          kicker: "Memory",
          title: "Luna, Stella, and the life between rooms",
          caption:
            "Before the house was polished, it was already full: puppy rides, couch naps, and Luna and Stella curled into the middle of everything.",
          location: "home",
          date: "2018–2019",
          photos: [
            { src: "/assets/photos/04-building/adopting-stella.jpg", label: "adopting Stella" },
            { src: "/assets/photos/04-building/stella-and-luna-sleeping.jpg", label: "Stella and Luna sleeping" },
          ],
        },
      ],
    },
    {
      id: "parents",
      photoFolder: "/assets/photos/05-parents/",
      num: "05",
      title: "Becoming Parents",
      years: "2019–2022",
      accent: "rose",
      summary:
        "Love expanded. Life got louder, sweeter, messier, more exhausting, and more beautiful than either of us could explain.",
      photoCount: "12 photos",
      tags: ["baby milestones", "family of three / four", "beautiful chaos", "Karla as a mom", "candid parenting"],
      memories: [
        {
          kicker: "Memory",
          title: "Our love grew names",
          caption:
            "The day the family got bigger and the whole definition of ‘us’ quietly rewrote itself.",
          location: "home",
          date: "family begins",
          photos: [
            { src: "/assets/photos/05-parents/pregnant-with-chloe.jpg", label: "pregnant with Chloe" },
            { src: "/assets/photos/05-parents/holding-chloe-in-downtown-dc.jpg", label: "holding Chloe in downtown D.C." },
            { src: "/assets/photos/05-parents/family-picture-2022.jpg", label: "family picture in 2022" },
          ],
        },
        {
          kicker: "Memory",
          title: "The beautiful chaos era",
          caption:
            "Louder, messier, sweeter. The candid parenting moments we’ll want to remember exactly as they were.",
          location: "everyday parenthood",
          date: "ongoing",
          photos: [
            { src: "/assets/photos/05-parents/chloes-playhouse.jpg", label: "Chloe's playhouse" },
            { src: "/assets/photos/05-parents/virginia-beach-trip.jpg", label: "Virginia Beach trip" },
            { src: "/assets/photos/05-parents/autumn-in-virginia.jpg", label: "autumn in Virginia" },
            { src: "/assets/photos/05-parents/daddy-being-silly-with-chloe-in-virginia-house.jpg", label: "Daddy being silly with Chloe in the Virginia house" },
          ],
        },
        {
          kicker: "Memory",
          title: "Raising babies",
          caption:
            "The half-asleep, fully-in-love stretch of carrying babies, making room for one more, and finding the sweetness inside the blur.",
          location: "Virginia",
          date: "2019–2023",
          photos: [
            { src: "/assets/photos/05-parents/holding-baby.jpg", label: "holding the baby" },
            { src: "/assets/photos/05-parents/raising-babies.jpg", label: "raising babies" },
            { src: "/assets/photos/05-parents/raising-babies-1.jpg", label: "raising babies at bedtime" },
            { src: "/assets/photos/05-parents/family-hug-becoming-parents.jpg", label: "family hug in the becoming parents years" },
          ],
        },
        {
          kicker: "Memory",
          title: "Showing up as a family",
          caption:
            "Weddings, trips, tiny dress-up shoes, and the everyday proof that family life was becoming its own beautiful rhythm.",
          location: "Virginia",
          date: "2022",
          photos: [
            { src: "/assets/photos/05-parents/at-spencers-wedding.jpg", label: "at Spencer's wedding" },
          ],
        },
      ],
    },
    {
      id: "japan",
      photoFolder: "/assets/photos/06-japan/",
      num: "06",
      title: "The Japan Chapter",
      years: "2023–2025",
      accent: "lavender",
      summary:
        "A whole life packed into a remarkable chapter: Tokyo streets, tiny routines, big adjustments, family adventures, and the courage to try something new together.",
      photoCount: "16 photos",
      tags: ["Tokyo family", "parks", "trains", "shrines", "food", "Japan trips", "school milestones"],
      memories: [
        {
          kicker: "Memory",
          title: "Tokyo became part of us",
          caption:
            "Train maps, convenience-store dinners, shrine visits, and a city that slowly started to feel like ours.",
          location: "Tokyo, Japan",
          date: "2023–2025",
          photos: [
            { src: "/assets/photos/06-japan/moving-from-virginia-to-japan.jpg", label: "moving from Virginia to Japan" },
            { src: "/assets/photos/06-japan/japan-family-picture-2024.jpg", label: "Japan family picture" },
            { src: "/assets/photos/06-japan/spring-2025-family-pictures-tokyo.jpg", label: "spring family pictures in Tokyo" },
          ],
        },
        {
          kicker: "Memory",
          title: "Adventures that felt impossible once",
          caption:
            "Samurai costumes, yukatas, giant statues, immersive lights — a whole new map of family stories.",
          location: "Japan",
          date: "2023–2025",
          photos: [
            { src: "/assets/photos/06-japan/dressed-as-samurai-edo-wonderland.jpg", label: "dressed as samurai at Edo Wonderland" },
            { src: "/assets/photos/06-japan/wearing-yukatas-hakone.jpg", label: "wearing yukatas in Hakone" },
            { src: "/assets/photos/06-japan/at-teamlab-tokyo.jpg", label: "at teamLab in Tokyo" },
          ],
        },
        {
          kicker: "Memory",
          title: "Tiny landmarks, giant memories",
          caption:
            "The kind of places that become family shorthand: Doraemon, Gundam, festivals, and a hand-drawn little portrait of us.",
          location: "Tokyo & Yokohama",
          date: "2023–2024",
          photos: [
            { src: "/assets/photos/06-japan/doraemon-statue.jpg", label: "Doraemon statue" },
            { src: "/assets/photos/06-japan/gundam-statue-yokohama.jpg", label: "Gundam statue in Yokohama" },
            { src: "/assets/photos/06-japan/family-drawing-artist-tokyo.jpg", label: "family drawing from an artist in Tokyo" },
          ],
        },
        {
          kicker: "Memory",
          title: "A life there, not just a trip",
          caption:
            "Birthdays, holidays, color on our faces, and the ordinary rituals that made Japan feel like part of the family story.",
          location: "Tokyo, Japan",
          date: "2023–2024",
          photos: [
            { src: "/assets/photos/06-japan/chloes-birthday.jpg", label: "Chloe's birthday" },
            { src: "/assets/photos/06-japan/japan-christmas.jpg", label: "Christmas in Japan" },
            { src: "/assets/photos/06-japan/holi-festival-tokyo.jpg", label: "Holi festival in Tokyo" },
          ],
        },
        {
          kicker: "Memory",
          title: "Favorite corners of Japan",
          caption:
            "Disney days, cherry blossoms in Minato, torii gates in Hakone, and two tiny ninjas collecting stories everywhere they went.",
          location: "Tokyo & Hakone",
          date: "2024–2025",
          photos: [
            { src: "/assets/photos/06-japan/tokyo-disneyland.jpg", label: "Tokyo Disneyland" },
            { src: "/assets/photos/06-japan/cherry-blossoms-in-minato.jpg", label: "cherry blossoms in Minato" },
            { src: "/assets/photos/06-japan/torii-gate-in-hakone.jpg", label: "torii gate in Hakone" },
            { src: "/assets/photos/06-japan/chloe-and-jolie-dressed-as-ninjas-edowonderland.jpg", label: "Chloe and Jolie dressed as ninjas at Edo Wonderland" },
          ],
        },
      ],
    },
    {
      id: "next",
      photoFolder: "/assets/photos/07-next/",
      num: "07",
      title: "The Next Chapter",
      years: "2026",
      accent: "sage",
      summary:
        "Back in the U.S., beginning again in a new rhythm. A new home, new routines, same us — still building, still becoming.",
      photoCount: "5 photos",
      tags: ["Jersey City / NYC", "NYC days", "family visits", "new routines", "date lunches"],
      memories: [
        {
          kicker: "Memory",
          title: "Starting again, together",
          caption:
            "New skyline, new routines, familiar hands — proof that beginning again still feels like home when we do it together.",
          location: "Jersey City / NYC",
          date: "2026",
          photos: [
            { src: "/assets/photos/07-next/nyc-central-park-winter.jpg", label: "Central Park in winter" },
            { src: "/assets/photos/07-next/chloe-and-jolie-lawn-chairs.jpg", label: "Chloe and Jolie sitting on lawn chairs" },
            { src: "/assets/photos/07-next/watching-movies-brookfield-place-nyc.jpg", label: "watching movies at Brookfield Place in NYC" },
          ],
        },
        {
          kicker: "Memory",
          title: "Little anchors in a new place",
          caption:
            "Lunch dates, family visits, and the small moments that helped this next chapter start to feel like ours.",
          location: "Jersey City",
          date: "2026",
          photos: [
            { src: "/assets/photos/07-next/lunch-dates-jersey-city.jpg", label: "lunch date in Jersey City" },
            { src: "/assets/photos/07-next/abu-hugging-the-girls.jpg", label: "Abu hugging the girls" },
          ],
        },
      ],
    },
    {
      id: "now",
      photoFolder: "/assets/photos/08-now/",
      num: "08",
      title: "13 Years Later",
      years: "June 1, 2026",
      accent: "burgundy",
      summary:
        "Thirteen years later, this chapter is waiting for the anniversary photos we make together after Karla sees the site.",
      photoCount: "surprise prompt",
      tags: ["13th anniversary", "photos to take together", "first time seeing the site", "June 1, 2026"],
      memories: [
        {
          kicker: "Surprise",
          title: "Karla, this chapter is for today",
          caption:
            "After you see this, let’s take the photos that belong here — one for us at thirteen years, one with the girls, and one that feels like the start of whatever comes next.",
          location: "June 1, 2026",
          date: "13th anniversary",
          photos: [
            { src: null, label: "photo to take together after Karla sees the site" },
            { src: null, label: "13th anniversary family photo" },
            { src: null, label: "one more favorite from today" },
          ],
        },
      ],
    },
  ],

  closing: {
    kicker: "And then —",
    title: ["To be", "continued."],
    copy:
      "This is the first draft of a living anniversary site. Each year, a new chapter can be added — one more layer to the story we’re still writing together.",
    signoff: { from: "Happy 13th anniversary", names: "Michael + Karla" },
  },
};

export default siteData;
