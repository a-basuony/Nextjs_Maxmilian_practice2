import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPs = [
  {
    id: "1",
    title: "PYRAMIDS 1",
    description:
      "The Pyramids of Giza, along with the Sphinx and a handful of smaller tombs, form one of the most iconic sights in the world. If you have plans to visit Egypt, then most likely these pyramids are at the top of your list.",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2020/05/Pyramids-of-Giza-Guide.jpg.optimal.jpg",
    address: " address Egypt Cairo Giza - 2020-01-01",
  },
  {
    id: "2",
    title: "PYRAMIDS 2",
    description:
      "The Pyramids of Giza, along with the Sphinx and a handful of smaller tombs, form one of the most iconic sights in the world. If you have plans to visit Egypt, then most likely these pyramids are at the top of your list.",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2020/05/Pyramids-of-Giza-Guide.jpg.optimal.jpg",
    address: " address Egypt Cairo Giza - 2020-01-01",
  },
  {
    id: "3",
    title: "PYRAMIDS 3",
    description:
      "The Pyramids of Giza, along with the Sphinx and a handful of smaller tombs, form one of the most iconic sights in the world. If you have plans to visit Egypt, then most likely these pyramids are at the top of your list.",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2020/05/Pyramids-of-Giza-Guide.jpg.optimal.jpg",
    address: " address Egypt Cairo Giza - 2020-01-01",
  },
  {
    id: "4",
    title: "PYRAMIDS 4",
    description:
      "The Pyramids of Giza, along with the Sphinx and a handful of smaller tombs, form one of the most iconic sights in the world. If you have plans to visit Egypt, then most likely these pyramids are at the top of your list.",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2020/05/Pyramids-of-Giza-Guide.jpg.optimal.jpg",
    address: " address Egypt Cairo Giza - 2020-01-01",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPs} />;
}

export default HomePage;
