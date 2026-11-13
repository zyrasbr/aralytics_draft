export const stats = [
  { label: 'Students monitored', value: 236, hint: 'Across your classes', color: '#1a1851' },
  { label: 'Active risk flags', value: 18, hint: 'Need your review', color: '#fcb316' },
  { label: 'Awaiting follow-up', value: 7, hint: 'Interventions logged', color: '#8e8fc0' },
  { label: 'Improved', value: 11, hint: 'After intervention', color: '#2e9e6b' },
]

// group: used by the filter chips on the dashboard
export const flaggedStudents = [
  { n: '01', section: '8-Rizal', flag: 'Declining performance', flagTone: 'amber', data: 'Grades 90, 84, 78', status: 'Needs intervention', statusTone: 'red', group: 'needs' },
  { n: '02', section: '8-Rizal', flag: 'Attendance risk', flagTone: 'indigo', data: '3 consecutive absences', status: 'Intervention logged', statusTone: 'amber', group: 'followup' },
  { n: '03', section: '8-Bonifacio', flag: 'Reading risk', flagTone: 'indigo', data: 'Below grade-level proficiency', status: 'Improving', statusTone: 'green', group: 'other' },
  { n: '04', section: '8-Bonifacio', flag: 'Engagement risk', flagTone: 'indigo', data: 'Average below 70% over last 3 tasks', status: 'Needs intervention', statusTone: 'red', group: 'needs' },
]

export const indicatorCounts = [
  { label: 'Declining grades', count: 7, pct: 100 },
  { label: 'Attendance', count: 4, pct: 57 },
  { label: 'Engagement', count: 4, pct: 57 },
  { label: 'Reading', count: 3, pct: 42 },
]

export const quickActions = ['Record scores', 'Record attendance', 'Log reading level', 'Print forms']

export const features = [
  ['Continuous trend analysis', 'Grades, attendance and assessments are analyzed over time, so decline shows up even while every score is still passing.'],
  ['Transparent risk flags', 'Each flag shows the data that triggered it, and the same thresholds apply to every student of the same grade level.'],
  ['Early-warning notifications', 'Sudden drops in grades or attendance notify the subject teacher and class adviser right away.'],
  ['Intervention tracking', 'Get targeted suggestions, log each intervention with its date and type, and see whether performance improved.'],
  ['Offline entry, later sync', 'Record data on a phone without internet. It syncs when the connection returns.'],
  ['Reports and printable forms', 'Import from and export to the DepEd E-Class Record, print the forms teachers already use, and generate progress reports.'],
]

export const steps = [
  ['Record', 'Teachers enter scores, attendance, reading levels, formative assessments and performance tasks.'],
  ['Analyze', 'AraLytics compares each learner against the configured thresholds over the grading period.'],
  ['Flag', 'A risk flag appears with its triggering data. The teacher reviews and decides.'],
  ['Intervene and track', 'Log the support given, then see how scores changed afterward.'],
]

export const thresholds = [
  { indicator: 'Declining grades', threshold: 'Drop of 5+ points between grading periods', flag: 'Declining performance', action: 'Remedial/tutorial session' },
  { indicator: 'Low grade', threshold: 'Below 75', flag: 'At risk of failing', action: 'Remediation plan, parent conference' },
  { indicator: 'Absences', threshold: '3 consecutive, or 20% in a month', flag: 'Attendance risk', action: 'Home contact, adviser follow-up' },
  { indicator: 'Tardiness', threshold: '5+ late arrivals in a month', flag: 'Tardiness risk', action: 'Adviser counseling' },
  { indicator: 'Low reading level', threshold: 'Below grade-level proficiency', flag: 'Reading risk', action: 'Reading intervention' },
  { indicator: 'Low formative scores', threshold: 'Average below 70% over last 3 tasks', flag: 'Engagement risk', action: 'Re-teaching, peer tutoring' },
  { indicator: 'Sudden drop', threshold: 'Drop of 10+ points between assessments', flag: 'Early warning', action: 'Immediate teacher review' },
]

export const interventions = [
  { id: 'remedial', title: 'Remedial or tutorial session', hint: 'Short reteaching sessions on the topics where scores dropped.' },
  { id: 'parent', title: 'Parent conference', hint: 'Share the trend and agree on support at home.' },
  { id: 'refer', title: 'Refer to counselor or staff', hint: 'For needs beyond academics. AraLytics does not provide counseling.' },
]

export const indicatorsChecked = [
  { title: 'Declining grades', hint: '−6 pts in each period, threshold 5+', triggered: true },
  { title: 'Low grade', hint: 'Latest grade 78, threshold below 75', triggered: false },
  { title: 'Sudden drop', hint: 'Largest drop 6 pts, threshold 10+', triggered: false },
]

export const followUp = [
  { title: 'Flag generated', hint: 'From Period 3 grades', done: true },
  { title: 'Teacher and adviser notified', hint: 'Early-warning sent', done: true },
  { title: 'Intervention logged', hint: 'Waiting for the teacher', done: false },
  { title: 'Compare new scores', hint: 'Checks if the learner improved', done: false },
]

export const deadlines = [
  ['Science performance task', 'Due in 2 days'],
  ['Math quiz', 'Due in 4 days'],
  ['English reading check', 'Due next week'],
]
