const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
  },
];

const div = document.querySelector(".container");
const userList = document.createElement("ol");
userList.style.listStyleType = "none";
users.forEach((user) => {
  const el = document.createElement("li");
  el.textContent = `${user.firstName} ${user.lastName}`;
  userList.appendChild(el);
  el.setAttribute("data-id", user);
  userList.appendChild(el);
});
div.appendChild(userList);