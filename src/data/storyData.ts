export interface StoryStage {
  id: number;
  roman: string;
  year: string;
  title: string;
  paragraphs: string[];
  image: string;
  isFinal?: boolean;
  finalTagline?: string;
}

export const storyStages: StoryStage[] = [
  {
    id: 1,
    roman: "I",
    year: "1862",
    title: "The Ordinary World",
    paragraphs: [
      "Rotterdam dockyards. The smell of oil, hemp rope, and salt water. Into the family of a dock mechanic, a boy is born. Hendrik Cornelis Arber.",
      "He grows up between workbenches — handing wrenches to his father by age six, repairing his first crank shaft at twelve. The Werf Gusto shipyard down the canal becomes his second home."
    ],
    image: "https://arbertools.com/assets/images/01-ordinary-world.jpg"
  },
  {
    id: 2,
    roman: "II",
    year: "1888",
    title: "The Call to Adventure",
    paragraphs: [
      "Twenty-six years old. A letter of recommendation from Werf Gusto. The Stoomvaart Maatschappij Nederland line. The Dutch East Indies — the colonial Java that needs ship engineers.",
      "The call comes — and Hendrik answers. The S.S. Rotterdam sails from Hoek van Holland on a grey October morning, carrying a young mechanic with a leather toolbag and a pocket of letters of introduction."
    ],
    image: "https://arbertools.com/assets/images/02-call.jpg"
  },
  {
    id: 3,
    roman: "III",
    year: "1890",
    title: "Crossing the Threshold",
    paragraphs: [
      "Surabaya. The pier. Tropical heat strikes his face. Vendors call out in Malay; coolies haul sugar sacks; a Javanese gamelan plays somewhere in the distance.",
      "Two years later, repairing a hydraulic press at a sugar plantation outside Surabaya, Hendrik makes his first piston modification. Resource life rises by 40%. The plantation owner orders twelve more units. Word spreads through the planter network. The first orders arrive."
    ],
    image: "https://arbertools.com/assets/images/03-threshold.jpg"
  },
  {
    id: 4,
    roman: "IV",
    year: "1898",
    title: "The Founding",
    paragraphs: [
      "Hendrik officially registers *Arber Hydraulische Werktuigen* in Rotterdam. Headquarters back in Holland; production rooted in Java.",
      "Four workshops: Surabaya, Batavia (now Jakarta), Medan, Makassar. One hundred and eighty workers. The brand we know today is born — under a tile roof on the outskirts of Surabaya, where the press parts still smelled of ocean salt."
    ],
    image: "https://arbertools.com/assets/images/04-founding.jpg"
  },
  {
    id: 5,
    roman: "V",
    year: "1912",
    title: "The Apex of the Old World",
    paragraphs: [
      "Hydraulics for the port cranes of Tanjung Priok — Batavia's deep-water gateway. Exports to Singapore, Malaya, Borneo. The first Arber product catalog is printed in Dutch and English; copies travel as far as Bombay.",
      "The peak of the colonial era — and of Arber's first chapter."
    ],
    image: "https://arbertools.com/assets/images/05-apex.jpg"
  },
  {
    id: 6,
    roman: "VI",
    year: "1942",
    title: "The Ordeal",
    paragraphs: [
      "The Imperial Japanese Army occupies Java. The darkest moment for everything Dutch on the islands.",
      "The Arber family flees back to Holland with what they can carry — drawing notebooks, a few patents, and the family bible. Everything else is left in Surabaya."
    ],
    image: "https://arbertools.com/assets/images/06-ordeal.jpg"
  },
  {
    id: 7,
    roman: "VII",
    year: "1942–1949",
    title: "The Loss",
    paragraphs: [
      "Workshops looted. Archives burned in three nights. Patent drawings disappear. The brand vanishes from the maps of trade. Many believed Arber was dead. Some believed it had never existed at all — that the Dutch were simply too good at fabricating heritage."
    ],
    image: "https://arbertools.com/assets/images/07-loss.jpg"
  },
  {
    id: 8,
    roman: "VIII",
    year: "1953",
    title: "The Atonement",
    paragraphs: [
      "Hendrik's son, Pieter Arber, returns to Rotterdam. Quietly, without fanfare, he rebuilds the headquarters in a small office on Nieuwe Maas. He hires three former workers. He places a single advertisement in *De Telegraaf*.",
      "No press release. No grand reopening. Atonement through work — the Dutch way."
    ],
    image: "https://arbertools.com/assets/images/08-atonement.jpg"
  },
  {
    id: 9,
    roman: "IX",
    year: "1985",
    title: "The Mentor and Apprentice",
    paragraphs: [
      "The third generation arrives. Hendrik's grandson, Klaas Arber, takes over from his ageing father. He inherits drawer files, three workshops, and a name that engineers across the Lowlands still respected.",
      "He prepares the brand for a new era — global, English-language, hand-pump-tested."
    ],
    image: "https://arbertools.com/assets/images/09-mentor.jpg"
  },
  {
    id: 10,
    roman: "X",
    year: "1990",
    title: "The Reward · Rebrand",
    paragraphs: [
      "Official rebrand: **ARBER Tools**. New typography — bold black blocks. New tagline: *Powerful Equipment*. Design — Rotterdam. Production — partner workshops in Japan, South Korea, Malaysia, and Indonesia.",
      "The first English-language catalog ships in 1991. By 1995, ARBER tools are stocked in industrial supply houses from Hamburg to Hong Kong."
    ],
    image: "https://arbertools.com/assets/images/10-reward.jpg"
  },
  {
    id: 11,
    roman: "XI",
    year: "2000s",
    title: "The Silent Test",
    paragraphs: [
      "Then silence comes. The brand rests. New global names rise. Industrial buyers move to Chinese OEM. ARBER's catalog is reprinted only twice between 2003 and 2018. Archives gather dust in a warehouse outside Schiphol.",
      "Some thought the third generation would be the last."
    ],
    image: "https://arbertools.com/assets/images/11-silence.jpg"
  },
  {
    id: 12,
    roman: "XII",
    year: "2019",
    title: "The Resurrection",
    paragraphs: [
      "An afternoon in Bandung, in an antique shop on a narrow street. A young Indonesian engineer — second-generation hydraulic specialist — pulls out a yellowed 1928 catalog from a stack of forgotten papers.",
      "He recognizes the typography. He recognizes the press designs — they're *still in service* at his uncle's workshop in Surabaya. He writes to Rotterdam that night.",
      "Three weeks later, the resurrection begins."
    ],
    image: "https://arbertools.com/assets/images/12-resurrection.jpg"
  },
  {
    id: 13,
    roman: "·",
    year: "Today",
    title: "Return with the Elixir",
    paragraphs: [
      "Today design and engineering — Rotterdam. Dutch precision school. Production workshops — Japan, South Korea, Malaysia, and even Indonesia. Global distribution network.",
      "The market — where the brand was born. **One hundred twenty-eight years. Four generations. One name.**"
    ],
    image: "https://arbertools.com/assets/images/13-today.jpg",
    isFinal: true,
    finalTagline: "ARBER Tools is back where it began."
  }
];
