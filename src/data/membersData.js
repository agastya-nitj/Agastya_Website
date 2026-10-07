const members = [
  // BATCH 2022
  { id: 7, name: "Harshit Mishra", team: "public relation", image: "/members/Harshit Mishra.png", socials: { linkedin: "https://www.linkedin.com/in/harshit-mishra-246a57257/", instagram: "" }, year: 2022 },
  { id: 11, name: "Prabhsimran Singh", team: "technical", image: "/members/Prabhsimran Singh.png", socials: { linkedin: "", instagram: "" }, year: 2022 },
  { id: 5, name: "Gursaranjot Singh", team: "marketing", image: "/members/Gursaranjot Singh.png", socials: { linkedin: "https://www.linkedin.com/in/gursaranjot-singh-28bb3320b/", instagram: "" }, year: 2022 },
  { id: 17, name: "Rhythm Jain", team: "technical", image: "/members/Rhythm Jain.png", socials: { linkedin: "https://www.linkedin.com/in/rhythm-jain-duggarhh/", instagram: "" }, year: 2022 },
  { id: 24, name: "Tarush Gupta", team: "technical", image: "/members/Tarush Gupta.png", socials: { linkedin: "https://www.linkedin.com/in/tarush23-gupta/", instagram: "https://www.instagram.com/tarush._.gupta/" }, year: 2022 },
  { id: 30, name: "Pratham Namdev", team: "social", image: "/members/Pratham Namdev.png", socials: { linkedin: "https://www.linkedin.com/in/pratham-namdev-3505a1286/", instagram: "https://www.instagram.com/prathamnamdev_17/" }, year: 2022 },
  { id: 40, name: "Akash Silapara Setty", team: "technical", image: "/members/Akash Silapara Setty.png", socials: { linkedin: "https://www.linkedin.com/in/akash-silapara-setty-82a7b7279/", instagram: "https://www.instagram.com/akash_.setty/" }, year: 2022 },
  { id: 44, name: "Umed Bhati", team: "social", image: "/members/Medu.png", socials: { linkedin: "", instagram: "" }, year: 2022 },

  // BATCH 2023
  { id: 10, name: "Nitin Kumar", team: "public relation", image: "/members/Nitin Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/nitinkumarsvg/", instagram: "" }, year: 2023 },
  { id: 14, name: "Purli Saikishore", team: "marketing", image: "/members/Purli Saikishore.png", socials: { linkedin: "https://www.linkedin.com/in/purlisaikishore/", instagram: "" }, year: 2023 },
  { id: 15, name: "Ramavath Babu", team: "technical", image: "/members/Ramavath Babu.png", socials: { linkedin: "https://www.linkedin.com/in/baburamavath/", instagram: "" }, year: 2023 },
  { id: 16, name: "Ravi", team: "social", image: "/members/Ravi.png", socials: { linkedin: "https://www.linkedin.com/in/ravi-khatawaliya-39a536318/", instagram: "" }, year: 2023 },
  { id: 21, name: "Yaswanth Kumar", team: "technical", image: "/members/Yaswanth Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/vuppala-yaswanth-kumar-b987642a1/", instagram: "https://www.instagram.com/_yash_vu_/" }, year: 2023 },
  { id: 22, name: "Unnati PSK", team: "social", image: "/members/Unnati PSK.png", socials: { linkedin: "https://www.linkedin.com/in/unnati-khadatkar-563a3628b/", instagram: "" }, year: 2023 },
  { id: 26, name: "Sachin Singh Rawat", team: "public relation", image: "/members/Sachin Singh Rawat.png", socials: { linkedin: "https://www.linkedin.com/in/7SachinRawat/", instagram: "https://www.instagram.com/cali_f3v3r/" }, year: 2023 },

  // BATCH 2024
  { id: 4, name: "Ayan khan", team: "marketing", image: "/members/Ayan khan.png", socials: { linkedin: "https://www.linkedin.com/in/ayan-khan-6b231b32b/", instagram: "" }, year: 2024 },
  { id: 6, name: "Harish Kumar", team: "public relation", image: "/members/Harish Kumar.png", socials: { linkedin: "https://www.linkedin.com/in/harish-kumar-31bab2311/", instagram: "https://www.instagram.com/_harish_429" }, year: 2024 },

  // BATCH 2025 (13 Members)
  { id: 27, name: "Yashika Singth", team: "technical", image: "/members/Yashika.png", socials: { linkedin: "", instagram: "https://www.instagram.com/yashika92007/" }, year: 2025 },
  { id: 19, name: "Sujal Gupta", team: "social", image: "/members/Sujal Gupta.png", socials: { linkedin: "https://www.linkedin.com/in/sujal-gupta-4198b9368/", instagram: "" }, year: 2025 },
  { id: 28, name: "Simran Rawat", team: "social", image: "/members/Simran Rawat.jpeg", socials: { linkedin: "https://www.linkedin.com/in/simran-rawat-2a1173369/", instagram: "https://www.instagram.com/simran_rawat312/" }, year: 2025 },
  { id: 20, name: "Tarun Chaudhary", team: "marketing", image: "/members/Tarun Chaudhary.png", socials: { linkedin: "https://www.linkedin.com/in/tarun-chaudhary-486208382/", instagram: "https://www.instagram.com/itz._not_tarun/" }, year: 2025 },
  { id: 12, name: "Prateek Kumar", team: "technical", image: "/members/Prateek kumar.png", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 43, name: "Abhishek Kumar", team: "technical", image: "/members/Abhishek kumar.png", socials: { linkedin: "https://www.linkedin.com/in/abhishek-kumar-853737332/", instagram: "https://www.instagram.com/abhishek_nitian_29/" }, year: 2025 },
  { id: 29, name: "Bhavya Issarani", team: "social", image: "/members/Bhavya Issarani.jpeg", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 33, name: "Aman Kumar", team: "technical", image: "/members/Aman Kumar.jpeg", socials: { linkedin: "https://www.linkedin.com/in/aman-kumar-9914a3399/", instagram: "https://www.instagram.com/__amman.007_/" }, year: 2025 },
  { id: 42, name: "Ankit", team: "marketing", image: "/members/Ankit.png", socials: { linkedin: "https://www.linkedin.com/in/ankit-sheoran-2487a8306/", instagram: "https://www.instagram.com/ankit540514/" }, year: 2025 },
  { id: 48, name: "Akansh Sinha", team: "technical", image: "", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 46, name: "Atharv Agrawal", team: "marketing", image: "", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 49, name: "Hemanshu Shah", team: "technical", image: "", socials: { linkedin: "", instagram: "" }, year: 2025 },
  { id: 50, name: "Komal", team: "social", image: "", socials: { linkedin: "", instagram: "" }, year: 2025 },
];

export const order = [
  "core",
  "technical",
  "marketing",
  "social",
  "public relation",
];

const currYr = new Date().getFullYear();

// Flatten members for multi-team categorization (Core for senior members)
const processedMembers = members.flatMap(m => {
  if (m.year <= 2023) {
    return [
      m,
      { ...m, id: `${m.id}_core`, team: "core" }
    ];
  }
  return [m];
});

// Primary Sort: Year ASCENDING (2022 -> 2023 -> 2024 -> 2025). Secondary Sort: Name Alphabetically.
processedMembers.sort((a, b) => {
  if (a.year !== b.year) {
    return a.year - b.year;
  }
  return a.name.localeCompare(b.name);
});

// 5th yr and above -> Alumni
export const alumniData = members.filter((m) => currYr - m.year >= 4);
export default processedMembers;

