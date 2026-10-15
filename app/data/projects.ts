export type Category = 'AI' | 'Cloud' | 'Computer Architecture' | 'Physics' | 'Math' | 'Space'
export type CategoryKey = 'ai' | 'cloud' | 'arch' | 'physics' | 'math' | 'space'

export interface ProjectService {
  title: string
  body: string
}

export interface Project {
  slug: string
  name: string
  category: Category
  summary: string
  lede: string
  services: ProjectService[]
  points: string[]
  tagline: string
  statement: string
  year: string
  funds: string
  growth: string
  roi: string
  partners: string
  featured?: boolean
  isNew?: boolean
}

export function categoryKey(category: Category): CategoryKey {
  if (category === 'AI') return 'ai'
  if (category === 'Cloud') return 'cloud'
  if (category === 'Computer Architecture') return 'arch'
  if (category === 'Physics') return 'physics'
  if (category === 'Math') return 'math'
  return 'space'
}

export const projects: Project[] = [
  {
    slug: 'signal-bench',
    name: 'Signal Bench',
    category: 'AI',
    summary: 'Small models that sit next to the job, not in a distant cluster.',
    lede: 'Signal Bench builds models small enough to run beside the work. The answer comes back in the room, from the notes the team already keeps.',
    services: [
      { title: 'On-site models', body: 'Sized for the machine in the room, not a shared cluster somewhere else.' },
      { title: 'Local notes', body: 'The model reads the files the team already uses, and no others.' },
      { title: 'A clear stop', body: 'Each run has a limit, a log, and a way to turn it off.' }
    ],
    points: ['Runs in the room', 'Reads local notes', 'Stops when asked'],
    tagline: 'Close to the work. Small enough to watch.',
    statement: 'Every model is sized for the machine, the notes, and the person waiting on it.',
    year: '2026',
    funds: '$4.1M',
    growth: '800%',
    roi: '28x',
    partners: '70+',
    featured: true,
    isNew: true
  },
  {
    slug: 'corpus',
    name: 'Corpus',
    category: 'AI',
    summary: 'A reading set for the papers a team already keeps.',
    lede: 'Corpus turns a pile of reports, drawings, and old threads into a set the model can read without losing the page they came from.',
    services: [
      { title: 'Source pages', body: 'Every passage keeps the document and the page it came from.' },
      { title: 'Quiet cuts', body: 'Long files are split where the section already breaks.' },
      { title: 'A reading list', body: 'The team can see what was opened, and what was left out.' }
    ],
    points: ['Page stays attached', 'Cuts follow the section', 'A list of what was read'],
    tagline: 'Read from the file. Cited back to the page.',
    statement: 'Every answer points back to the page, the file, and the line it came from.',
    year: '2026',
    funds: '$3.4M',
    growth: '640%',
    roi: '12x',
    partners: '41'
  },
  {
    slug: 'margin',
    name: 'Margin',
    category: 'AI',
    summary: 'Notes that stay attached to the answer.',
    lede: 'Margin keeps the comment next to the result, so a later reader can see why the model said it and who agreed.',
    services: [
      { title: 'Side notes', body: 'A place for the human note, beside the generated line.' },
      { title: 'Review', body: 'A second pass before the note is treated as fact.' },
      { title: 'History', body: 'The earlier answer stays visible when the note changes.' }
    ],
    points: ['A note beside the line', 'A second pass', 'The earlier answer kept'],
    tagline: 'The comment stays with the line.',
    statement: 'Every line keeps the note, the reviewer, and the answer it replaced.',
    year: '2026',
    funds: '$2.6M',
    growth: '420%',
    roi: '9x',
    partners: '33'
  },
  {
    slug: 'harbor',
    name: 'Harbor',
    category: 'Cloud',
    summary: 'Shared rooms for services that have to stay up.',
    lede: 'Harbor gives a service a room, a name, and a way back in when the room next door goes quiet.',
    services: [
      { title: 'Rooms', body: 'Each service has its own space, with a door the others can find.' },
      { title: 'Quiet hours', body: 'A neighbor can fail without taking the hall with it.' },
      { title: 'A way back', body: 'Restarts are written down, and the last good state is kept.' }
    ],
    points: ['A room per service', 'A failure stays local', 'A way back to the last good state'],
    tagline: 'Up in its own room. Reachable from the hall.',
    statement: 'Every service has a room, a name, and a way back when the next one goes quiet.',
    year: '2026',
    funds: '$6.2M',
    growth: '1000%',
    roi: '9x',
    partners: '92'
  },
  {
    slug: 'northline',
    name: 'Northline',
    category: 'Cloud',
    summary: 'Routes for work that has to cross regions.',
    lede: 'Northline maps how a job moves between regions: what can wait, what has to travel, and what should stay where it started.',
    services: [
      { title: 'Routes', body: 'A written path from the first region to the one that answers.' },
      { title: 'What stays', body: 'Data that should not leave the place it was made.' },
      { title: 'What travels', body: 'The small packet that is allowed to cross.' }
    ],
    points: ['A path between regions', 'Data that stays put', 'A packet small enough to send'],
    tagline: 'Mapped before it crosses. Small when it does.',
    statement: 'Every route says what stays, what travels, and which region answers.',
    year: '2026',
    funds: '$5.7M',
    growth: '700%',
    roi: '14x',
    partners: '57'
  },
  {
    slug: 'low-orbit',
    name: 'Low Orbit',
    category: 'Cloud',
    summary: 'The near edge, close to the people using it.',
    lede: 'Low Orbit is the near edge of the network: caches, small gates, and the last hop before the work.',
    services: [
      { title: 'Near caches', body: 'Copies kept close, so the far room is not asked twice.' },
      { title: 'Small gates', body: 'A short check before a request travels further.' },
      { title: 'The last hop', body: 'A clear handoff from the edge to the person waiting.' }
    ],
    points: ['Copies kept close', 'A short check at the gate', 'A clear last hop'],
    tagline: 'Close to the person. Light on the far room.',
    statement: 'Every hop is placed for the person waiting, the copy nearby, and the room far off.',
    year: '2026',
    funds: '$2.2M',
    growth: '1000%',
    roi: 'TBA',
    partners: '30'
  },
  {
    slug: 'kiln-works',
    name: 'Kiln Works',
    category: 'Computer Architecture',
    summary: 'A shop for the hot path of a small processor.',
    lede: 'Kiln Works lays out the hot path of a small processor: the units that run, the heat they make, and the space between them.',
    services: [
      { title: 'Hot path', body: 'The units that run every cycle, placed where the heat can leave.' },
      { title: 'Spacing', body: 'Room between blocks so a later change does not collide.' },
      { title: 'A measured clock', body: 'Timing written down for the path that cannot slip.' }
    ],
    points: ['Units on the hot path', 'Room between blocks', 'A clock that is written down'],
    tagline: 'Hot where it runs. Cool where it waits.',
    statement: 'Every block is placed for the cycle, the heat, and the block beside it.',
    year: '2026',
    funds: '$4.4M',
    growth: '800%',
    roi: '18x',
    partners: '48'
  },
  {
    slug: 'copper-index',
    name: 'Copper Index',
    category: 'Computer Architecture',
    summary: 'A catalog of buses, registers, and the parts that replace them.',
    lede: 'Copper Index keeps the buses, registers, and the parts that can replace them, so a board can be repaired without redrawing the machine.',
    services: [
      { title: 'Bus catalog', body: 'Widths, directions, and the blocks each bus touches.' },
      { title: 'Registers', body: 'What is stored, and for how many cycles.' },
      { title: 'Replacements', body: 'Parts that can be swapped without a new floorplan.' }
    ],
    points: ['Buses on record', 'Registers and their cycles', 'Swaps without a new floorplan'],
    tagline: 'Written down once. Found again at the bench.',
    statement: 'Every bus is listed with its width, its direction, and the part that replaces it.',
    year: '2026',
    funds: '$5.3M',
    growth: '2000%',
    roi: 'TBA',
    partners: '72'
  },
  {
    slug: 'fieldglass',
    name: 'Fieldglass',
    category: 'Computer Architecture',
    summary: 'A window onto a pipeline, stage by stage.',
    lede: 'Fieldglass opens a window onto a pipeline: what each stage holds, where it stalls, and which stage is waiting on the one before it.',
    services: [
      { title: 'Stages', body: 'A view of what each stage holds at a given cycle.' },
      { title: 'Stalls', body: 'Where the pipe waits, and what it is waiting on.' },
      { title: 'Handoffs', body: 'The line between one stage and the next, drawn where it actually happens.' }
    ],
    points: ['A stage at a time', 'Stalls made visible', 'Handoffs drawn in place'],
    tagline: 'Seen at the stage. Not just at the end.',
    statement: 'Every stage shows what it holds, what it waits on, and what it passes on.',
    year: '2026',
    funds: '$3.8M',
    growth: '540%',
    roi: '11x',
    partners: '36'
  },
  {
    slug: 'pendulum-yard',
    name: 'Pendulum Yard',
    category: 'Physics',
    summary: 'A yard for timing swings, and the forces that stop them.',
    lede: 'Pendulum Yard times a swing from the first push to the last small arc. The record shows what slowed it, and what would start it again.',
    services: [
      { title: 'The swing', body: 'Length, mass, and the arc written down before the first release.' },
      { title: 'What slows it', body: 'Air, the joint, and the floor, each given its own share of the stop.' },
      { title: 'A second start', body: 'How much push brings the same arc back.' }
    ],
    points: ['Arc written first', 'Each drag named', 'The push that repeats it'],
    tagline: 'Timed from the release. Named where it fades.',
    statement: 'Every swing is timed for its length, its drag, and the push that starts it again.',
    year: '2026',
    funds: '$1.8M',
    growth: '320%',
    roi: '7x',
    partners: '22'
  },
  {
    slug: 'still-mass',
    name: 'Still Mass',
    category: 'Physics',
    summary: 'How a weight sits, and how a small change moves it.',
    lede: 'Still Mass studies a weight at rest: the surface under it, the point where it tips, and the small force that is enough.',
    services: [
      { title: 'At rest', body: 'Where the weight sits, and which way it wants to go.' },
      { title: 'The tip', body: 'The edge where a still thing becomes a moving one.' },
      { title: 'A small force', body: 'The least push that changes the rest, written as a number.' }
    ],
    points: ['Rest drawn first', 'The tipping edge', 'The least push'],
    tagline: 'Still until the edge. Measured at the push.',
    statement: 'Every weight is drawn for its rest, its edge, and the push that moves it.',
    year: '2026',
    funds: '$2.4M',
    growth: '410%',
    roi: '8x',
    partners: '19'
  },
  {
    slug: 'common-measure',
    name: 'Common Measure',
    category: 'Math',
    summary: 'A shared unit between two lengths, found by what remains.',
    lede: 'Common Measure keeps dividing two lengths until they share a unit, and writes down the remainder that is left.',
    services: [
      { title: 'The two lengths', body: 'Both written down before the first division.' },
      { title: 'The remainder', body: 'What is left when the shorter is taken from the longer.' },
      { title: 'The shared unit', body: 'The last length that fits them both.' }
    ],
    points: ['Both lengths written', 'The remainder kept', 'A unit they share'],
    tagline: 'Divided until they agree.',
    statement: 'Every pair is kept for its lengths, its remainder, and the unit they share.',
    year: '2026',
    funds: '$1.4M',
    growth: '260%',
    roi: '5x',
    partners: '14'
  },
  {
    slug: 'open-proof',
    name: 'Open Proof',
    category: 'Math',
    summary: 'A proof that leaves every step on the page.',
    lede: 'Open Proof keeps each line visible, from what is assumed to what is shown, so a reader can stop at any step.',
    services: [
      { title: 'What is given', body: 'The lines the proof is allowed to start from.' },
      { title: 'The step', body: 'One change, written where it happens.' },
      { title: 'What is shown', body: 'The last line, still tied to the first.' }
    ],
    points: ['The given stays', 'One step at a time', 'The last line tied to the first'],
    tagline: 'Read from the first line. Closed at the last.',
    statement: 'Every proof is kept for its given, its steps, and the line it reaches.',
    year: '2026',
    funds: '$1.9M',
    growth: '340%',
    roi: '6x',
    partners: '18'
  },
  {
    slug: 'apogee',
    name: 'Apogee',
    category: 'Space',
    summary: 'The far point of a path, drawn before the launch.',
    lede: 'Apogee draws the far point of a path before anything leaves the ground: how high, how long, and what has to be true at the turn.',
    services: [
      { title: 'The far point', body: 'Height and time, set before the first burn.' },
      { title: 'The turn', body: 'Where the path stops climbing and starts to return.' },
      { title: 'The return', body: 'A marked place to come back to, not a guess.' }
    ],
    points: ['Height set early', 'The turn marked', 'A place to return'],
    tagline: 'Drawn before launch. Closed at the far point.',
    statement: 'Every path is drawn for its height, its turn, and the place it comes back to.',
    year: '2026',
    funds: '$6.8M',
    growth: '900%',
    roi: '15x',
    partners: '28'
  },
  {
    slug: 'quiet-sky',
    name: 'Quiet Sky',
    category: 'Space',
    summary: 'A map of what passes overhead, and when it returns.',
    lede: 'Quiet Sky keeps a map of what passes overhead: the hour it appears, the track it follows, and the night it comes back.',
    services: [
      { title: 'The pass', body: 'The hour a body crosses, and how long it stays in view.' },
      { title: 'The track', body: 'A line across the sky, from rise to set.' },
      { title: 'The return', body: 'The next night it follows the same line.' }
    ],
    points: ['Hour of the pass', 'A line across the sky', 'The night it returns'],
    tagline: 'Watched overhead. Expected when it returns.',
    statement: 'Every pass is logged for its hour, its track, and the night it comes again.',
    year: '2026',
    funds: '$3.1M',
    growth: '480%',
    roi: '6x',
    partners: '17'
  }
]

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const categories = ['All', 'AI', 'Cloud', 'Computer Architecture', 'Physics', 'Math', 'Space'] as const
export type CategoryFilter = (typeof categories)[number]

export function filterKey(category: CategoryFilter): 'all' | CategoryKey {
  return category === 'All' ? 'all' : categoryKey(category)
}

export interface CategoryLanding {
  slug: string
  key: CategoryKey
  name: Category
  kicker: string
  intro: string
}

export const categoryLandings: CategoryLanding[] = [
  {
    slug: 'ai',
    key: 'ai',
    name: 'AI',
    kicker: 'Close to the work',
    intro: 'The AI projects keep a model next to the job. Signal Bench runs in the room, on the notes a team already keeps. Corpus reads those pages and holds onto where a line came from. Margin leaves a human note beside the answer, and keeps the earlier one when it changes.'
  },
  {
    slug: 'cloud',
    key: 'cloud',
    name: 'Cloud',
    kicker: 'Rooms and routes',
    intro: 'The cloud projects are rooms, routes, and the near edge. Harbor gives each service a room, and a way back when the next one goes quiet. Northline writes what can cross a region, and what has to stay. Low Orbit keeps the last hop close to the person waiting.'
  },
  {
    slug: 'computer-architecture',
    key: 'arch',
    name: 'Computer Architecture',
    kicker: 'At the machine',
    intro: 'The architecture projects stay with the machine itself. Kiln Works places the hot path of a small processor, and the space the heat needs to leave. Copper Index lists the buses, the registers, and the parts that can replace them. Fieldglass opens a pipeline one stage at a time.'
  },
  {
    slug: 'physics',
    key: 'physics',
    name: 'Physics',
    kicker: 'Measured things',
    intro: 'The physics projects start from a thing you can time. Pendulum Yard follows a swing from the first push until it fades, and names what slowed it. Still Mass draws a weight at rest, the edge where it tips, and the small force that is enough.'
  },
  {
    slug: 'math',
    key: 'math',
    name: 'Math',
    kicker: 'On the page',
    intro: 'The math projects stay with the page a proof is written on. Common Measure divides two lengths until they share a unit. Open Proof leaves each step visible, from what is assumed to what is shown.'
  },
  {
    slug: 'space',
    key: 'space',
    name: 'Space',
    kicker: 'Drawn before it flies',
    intro: 'The space projects draw a path before anything leaves. Apogee sets the far point, the turn, and the place a path comes back to. Quiet Sky keeps the hour a body passes overhead, the track it follows, and the night it returns.'
  }
]

export function findCategory(slug: string) {
  return categoryLandings.find((item) => item.slug === slug)
}

export function categorySlug(category: Category | 'All') {
  if (category === 'All') return ''
  return categoryLandings.find((item) => item.name === category)?.slug ?? ''
}
