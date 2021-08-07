const sidebarMenus = [
  {
    title: "Dashboards",
    icon: "mdi-apps",
    route: "/biz",
  },
  {
    title: "Message Service",
    icon: "mdi-message",
    children: [
      {
        title: "SMS",
        route: "sms",
      },
      {
        title: "Email",
        route: "email",
      },
    ],
  },
  {
    title: "Call Center",
    icon: "mdi-phone-plus",
  },
  {
    title: "Lead Fusion",
    icon: "mdi-air-filter",
    route: "lead-fusion",
  },
  {
    title: "Contacts",
    icon: "mdi-account-group",
    route: "contact",
  },
  {
    title: "Marketing",
    icon: "mdi-account-switch",
    children: [
      {
        title: "Campaign",
        route: "campaign",
      },
      { title: "Email", route: "email" },
    ],
  },
  {
    title: "Reports",
    icon: "mdi-finance",
    children: [
      { title: "Salesforce", route: "salesforce" },
      {
        title: "Google Ads",
        route: "google-ads",
      },
      { title: "Facebook Ads", route: "facebook-ads" },
      { title: "Email Reports", route: "email-reports" },
      { title: "Call Reports", route: "call-reports" },
      { title: "Appointment Reports", route: "appointment-report" },
    ],
  },
  {
    title: "Schedule",
    icon: "mdi-seat",
    children: [
      { title: "Calendar", route: "calendar" },
      { title: "Appointment", route: "appointment" },
    ],
  },
  {
    title: "C.R.M",
    icon: "mdi-arrow-decision-auto",
  },
  {
    title: "Integrations",
    icon: "mdi-animation",
    children: [
      { title: "Google Analytics", route: "ganalytics" },
      { title: "Google Ads", route: "google-ads" },
      { title: "Google My Business", route: "gmb" },
      { title: "Google Contacts", route: "gc" },
      { title: "Google Calendar", route: "gcal" },
      { title: "Gmail", route: "gmail" },
      { title: "Google Drive", route: "gdrive" },
      { title: "Salesforce", route: "salesforce" },
      { title: "Facebook Ads", route: "fads" },
      { title: "Instagram", route: "instagram" },
      { title: "Linkedin", route: "linkedin" },
      { title: "MailChimp", route: "mail-chimp" },
    ],
  },
  {
    title: "Settings",
    icon: "mdi-cog",
  },
];

export default sidebarMenus;
