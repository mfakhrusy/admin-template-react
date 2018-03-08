// this file contains all url apis

const urlApis = [
  {
    id: "1",
    url: "http://5a94a5cb5d50d80012d016c7.mockapi.io/api/v1/users",
    label: "User Data",
    forState: "users"
  },
  {
    id: "2",
    url: "http://5a94a5cb5d50d80012d016c7.mockapi.io/api/v1/notification",
    label: "Notification Data",
    forState: "notifications"
  },
  {
    id: "3",
    url: "http://5a94a5cb5d50d80012d016c7.mockapi.io/api/v1/newsfeed",
    label: "News Feed",
    forState: "news"
  },
  {
    id: "4",
    url: "http://5a94a5cb5d50d80012d016c7.mockapi.io/api/v1/galleryURL",
    label: "Gallery URL",
    forState: "galleryImages"
  },
  {
    forState: "finished" // little hack so the page loading will
  }
];

export default urlApis;