export type QuestionNode = {
    id: string;
    question: string;
    answer?: string;
    children?: QuestionNode[];
  };
  
  export const questions: QuestionNode[] = [
    {
      id: "admission",
      question: "🎓 Admission",
      children: [
        {
          id: "cutoff",
          question: "What is the JAMB cut-off mark?",
          children: [
            {
              id: "cs",
              question: "Computer Science Cut-off",
              answer: "The cut-off mark for Computer Science is 240.",
            },
            {
              id: "medicine",
              question: "Medicine Cut-off",
              answer: "The cut-off mark for Medicine is 270.",
            },
            {
              id: "law",
              question: "Law Cut-off",
              answer: "The cut-off mark for Law is 260.",
            },
          ],
        },
        {
          id: "requirements",
          question: "Admission Requirements",
          answer:
            "You need at least 5 credits including English and Math, and a valid JAMB score.",
        },
        {
          id: "postutme",
          question: "Is there a Post-UTME exam?",
          answer: "Yes, we conduct a Post-UTME screening after JAMB.",
        },
        {
          id: "process",
          question: "Admission Process",
          answer:
            "Register online, upload documents, and wait for screening notification via email.",
        },
      ],
    },
    {
      id: "fees",
      question: "💰 School Fees",
      children: [
        {
          id: "undergrad",
          question: "Undergraduate Fees",
          answer: "₦50,000 per semester. Includes tuition, library, and ICT fees.",
        },
        {
          id: "postgrad",
          question: "Postgraduate Fees",
          answer: "₦80,000 per semester depending on department.",
        },
        {
          id: "latepayment",
          question: "Penalty for Late Payment?",
          answer: "Yes, ₦5,000 penalty fee applies after deadline. Ensure timely payment.",
        },
        {
          id: "paymentmethod",
          question: "How to Pay School Fees",
          answer: "Visit portal.university.edu/pay and follow instructions. Payments via Remita or Bank.",
        },
      ],
    },
    {
      id: "accommodation",
      question: "🏠 Accommodation",
      children: [
        {
          id: "hostel",
          question: "Is hostel accommodation available?",
          answer: "Yes, hostels are available on-campus for both male and female students.",
        },
        {
          id: "cost",
          question: "What is the cost of accommodation?",
          answer: "Hostel fees range from ₦20,000 to ₦40,000 per semester.",
        },
        {
          id: "offcampus",
          question: "Can students live off-campus?",
          answer: "Yes, students may live off-campus but must register their address with the school.",
        },
      ],
    },
    {
      id: "courses",
      question: "📚 Courses Offered",
      children: [
        {
          id: "science",
          question: "Science Courses",
          answer: "Includes Computer Science, Biology, Physics, Chemistry, and more.",
        },
        {
          id: "arts",
          question: "Arts & Humanities",
          answer: "Includes History, English, Philosophy, and Mass Communication.",
        },
        {
          id: "professional",
          question: "Professional Courses",
          answer: "Law, Medicine, Nursing, Accounting, and Engineering are offered.",
        },
      ],
    },
    {
      id: "exams",
      question: "📝 Exams & Screening",
      children: [
        {
          id: "postutme-date",
          question: "When is the Post-UTME held?",
          answer: "Usually held in August. Date is announced on the official website.",
        },
        {
          id: "format",
          question: "What is the format of the Post-UTME?",
          answer: "It includes 40 multiple-choice questions in English, Math, and your chosen subject.",
        },
        {
          id: "result",
          question: "When will Post-UTME results be released?",
          answer: "Within 1-2 weeks after the exam.",
        },
      ],
    },
    {
      id: "documents",
      question: "📄 Document Requirements",
      children: [
        {
          id: "admission-docs",
          question: "Documents for Admission",
          answer: "JAMB result, O-level results, birth certificate, and state of origin certificate.",
        },
        {
          id: "screening-docs",
          question: "Documents for Screening",
          answer: "Original copies of all submitted documents and payment receipts.",
        },
      ],
    },
    {
      id: "calendar",
      question: "📅 Academic Calendar",
      children: [
        {
          id: "resumption",
          question: "When does the session start?",
          answer: "The academic session usually starts in October.",
        },
        {
          id: "holidays",
          question: "Are there semester breaks?",
          answer: "Yes, there are breaks in December and mid-year after exams.",
        },
      ],
    },
    {
      id: "scholarships",
      question: "💼 Scholarships & Grants",
      children: [
        {
          id: "merit",
          question: "Are there merit-based scholarships?",
          answer: "Yes. Students with CGPA above 4.5 qualify automatically each year.",
        },
        {
          id: "apply",
          question: "How to apply for a scholarship?",
          answer: "Visit the school's scholarship portal and submit your documents online.",
        },
        {
          id: "private",
          question: "Are there external scholarships?",
          answer: "Yes. You can apply for NGO and government scholarships listed on the site.",
        },
      ],
    },
    {
      id: "campuslife",
      question: "📍 Campus Life",
      children: [
        {
          id: "clubs",
          question: "Are there clubs or student unions?",
          answer: "Yes. There are various academic, cultural, and recreational clubs available.",
        },
        {
          id: "security",
          question: "Is the campus secure?",
          answer: "Yes. The campus is guarded 24/7 by trained security personnel and CCTV.",
        },
        {
          id: "facilities",
          question: "What facilities are available?",
          answer: "We have libraries, ICT labs, clinics, cafeterias, and sports complexes.",
        },
      ],
    },
    {
      id: "contact",
      question: "🤝 Contact & Support",
      children: [
        {
          id: "support-email",
          question: "How do I contact support?",
          answer: "Send an email to support@university.edu or call 080-123-4567.",
        },
        {
          id: "location",
          question: "Where is the school located?",
          answer: "The university is located at Km 12, Main Express Road, Lagos.",
        },
        {
          id: "socials",
          question: "Is the school on social media?",
          answer: "Yes. Follow us on Facebook, Instagram, and Twitter @UniversityHandle.",
        },
      ],
    },
  ];
  
  

// export type QuestionNode = {
//     id: string;
//     question: string;
//     answer?: string;
//     children?: QuestionNode[];
//   };
  
//   export const questions: QuestionNode[] = [
//     {
//       id: "admission",
//       question: "🎓 Admission",
//       children: [
//         {
//           id: "cutoff",
//           question: "What is the JAMB cut-off mark?",
//           children: [
//             {
//               id: "cs",
//               question: "Computer Science Cut-off",
//               answer: "The cut-off mark for Computer Science is 240.",
//             },
//             {
//               id: "medicine",
//               question: "Medicine Cut-off",
//               answer: "The cut-off mark for Medicine is 270.",
//             },
//             {
//               id: "law",
//               question: "Law Cut-off",
//               answer: "The cut-off mark for Law is 260.",
//             },
//           ],
//         },
//         {
//           id: "requirements",
//           question: "Admission Requirements",
//           answer:
//             "You need at least 5 credits including English and Math, and a valid JAMB score.",
//         },
//         {
//           id: "postutme",
//           question: "Is there a Post-UTME exam?",
//           answer: "Yes, we conduct a Post-UTME screening after JAMB.",
//         },
//         {
//           id: "process",
//           question: "Admission Process",
//           answer:
//             "Register online, upload documents, and wait for screening notification via email.",
//         },
//       ],
//     },
//     {
//       id: "fees",
//       question: "💰 School Fees",
//       children: [
//         {
//           id: "undergrad",
//           question: "Undergraduate Fees",
//           answer: "₦50,000 per semester. Includes tuition, library, and ICT fees.",
//         },
//         {
//           id: "postgrad",
//           question: "Postgraduate Fees",
//           answer: "₦80,000 per semester depending on department.",
//         },
//         {
//           id: "latepayment",
//           question: "Penalty for Late Payment?",
//           answer:
//             "Yes, ₦5,000 penalty fee applies after deadline. Ensure timely payment.",
//         },
//         {
//           id: "paymentmethod",
//           question: "How to Pay School Fees",
//           answer:
//             "Visit portal.university.edu/pay and follow instructions. Payments via Remita or Bank.",
//         },
//       ],
//     },
//   ];
  