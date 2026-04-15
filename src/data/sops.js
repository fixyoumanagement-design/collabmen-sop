export const sops = [
  {
    slug: 'onboarding',
    title: 'Employee Onboarding SOP',
    summary: 'Standard flow for new team member onboarding.',
    steps: [
      'Collect signed documents and required identification.',
      'Set up email, collaboration tools, and role permissions.',
      'Run role orientation and assign first-week checklist.',
    ],
  },
  {
    slug: 'payment',
    title: 'Payment Processing SOP',
    summary: 'Consistent process for validating and processing payments.',
    steps: [
      'Verify invoice details, approval state, and due date.',
      'Confirm bank/payment method details with vendor master data.',
      'Execute payment and archive proof with transaction reference.',
    ],
  },
  {
    slug: 'campaign-flow',
    title: 'Campaign Flow SOP',
    summary: 'Lifecycle process for campaign planning and release.',
    steps: [
      'Define objective, target audience, and campaign timeline.',
      'Create assets and complete internal quality review.',
      'Launch, monitor KPI results, and capture retrospective notes.',
    ],
  },
]

export const sopMap = new Map(sops.map((sop) => [sop.slug, sop]))
