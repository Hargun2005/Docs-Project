export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "<div><p>Start writing here...</p></div>",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <div>
        <h1>Software Development Proposal</h1>
        <h2>Project Overview</h2>
        <p>Describe the project, its goals, and the problem it aims to solve.</p>
        <h2>Scope of Work</h2>
        <p>Provide a detailed breakdown of the tasks to be completed.</p>
        <h2>Timeline</h2>
        <p>Include a timeline or milestones for the project.</p>
        <h2>Budget</h2>
        <p>Outline the estimated budget for the project.</p>
        <h2>Conclusion</h2>
        <p>Summarize the proposal and call to action.</p>
      </div>`,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <div>
        <h1>Project Proposal</h1>
        <h2>Title</h2>
        <p>Provide the title of your project.</p>
        <h2>Objective</h2>
        <p>Explain the objectives and purpose of the project.</p>
        <h2>Methodology</h2>
        <p>Describe the methods and approaches to be used.</p>
        <h2>Expected Outcome</h2>
        <p>Detail the expected results or benefits.</p>
      </div>`,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <div>
        <p>Your Name</p>
        <p>Your Address</p>
        <p>Your City, State, ZIP</p>
        <p>Date</p>

        <p>Recipient Name</p>
        <p>Recipient Address</p>
        <p>Recipient City, State, ZIP</p>

        <p>Dear [Recipient Name],</p>

        <p>Write the body of the letter here, outlining your purpose clearly.</p>

        <p>Sincerely,</p>
        <p>[Your Name]</p>
      </div>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <div>
        <h1>Your Name</h1>
        <p>Contact Information</p>
        <h2>Professional Summary</h2>
        <p>Provide a brief summary of your skills and experience.</p>
        <h2>Experience</h2>
        <p>List your work experience with roles and achievements.</p>
        <h2>Education</h2>
        <p>Provide details of your educational background.</p>
        <h2>Skills</h2>
        <p>Highlight key skills relevant to the job.</p>
      </div>`,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <div>
        <p>Your Name</p>
        <p>Your Address</p>
        <p>Your City, State, ZIP</p>
        <p>Date</p>

        <p>Hiring Manager Name</p>
        <p>Company Name</p>
        <p>Company Address</p>

        <p>Dear [Hiring Manager's Name],</p>

        <p>Introduce yourself and explain why you are applying for the position.</p>
        <p>Discuss your relevant experience and achievements.</p>
        <p>Express enthusiasm for the role and company.</p>

        <p>Sincerely,</p>
        <p>[Your Name]</p>
      </div>`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <div>
        <p>Your Name</p>
        <p>Your Address</p>
        <p>Date</p>

        <p>Recipient Name</p>
        <p>Recipient Address</p>

        <p>Dear [Recipient's Name],</p>

        <p>Write your message here.</p>

        <p>Sincerely,</p>
        <p>[Your Name]</p>
      </div>`,
  },
];
