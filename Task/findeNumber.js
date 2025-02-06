const data = [
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile1",
    designation: "Software Engineer",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile2",
    designation: "UI/UX Designer",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile3",
    designation: "Project Manager",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile4",
    designation: "Backend Developer",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile5",
    designation: "DevOps Engineer",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile6",
    designation: "Data Scientist",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile7",
    designation: "Frontend Developer",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile8",
    designation: "Cloud Architect",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile9",
    designation: "Business Analyst",
  },
  {
    image: "https://via.placeholder.com/150",
    url: "https://example.com/profile10",
    designation: "Cybersecurity Analyst",
  },
];

const newData = [
  ...data.slice(0, 2),
  { ...data[2], selected: true },
  ...data.slice(3),
];

const newData1 = [
  ...newData.slice(0, 4),
  { ...newData[4], selected: true },
  ...newData.slice(5),
];

console.log(newData1);

console.log(newData1.filter((x) => x.selected));
