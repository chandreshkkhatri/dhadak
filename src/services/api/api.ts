import INews from "../../commons/types/INews";

const news: INews[] = [
  {
    id: 1,
    title: "News 1",
    description: "Description 1",
    url: "https://www.google.com",
    content: "Content 1",
    author: "Author 1",
    date: "2021-01-01",
    image: "https://www.google.com",
  },
  {
    id: 2,
    title: "News 2",
    description: "Description 2",
    url: "https://www.google.com",
    content: "Content 2",
    author: "Author 2",
    date: "2021-01-02",
    image: "https://www.google.com",
  },
  {
    id: 3,
    title: "News 3",
    description: "Description 3",
    url: "https://www.google.com",
    content: "Content 3",
    author: "Author 3",
    date: "2021-01-03",
    image: "https://www.google.com",
  },
  {
    id: 4,
    title: "News 4",
    description: "Description 4",
    url: "https://www.google.com",
    content: "Content 4",
    author: "Author 4",
    date: "2021-01-04",
    image: "https://www.google.com",
  },
];

const api = {
  getNews: async () => {
    return news;
  },
};

export default api;
