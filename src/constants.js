export const actions = [
  {
    icon: "👁",
    text: "view",
    title: "view",
    classes: "view",
  },
  {
    icon: "🖌",
    text: "edit",
    title: "edit",
    classes: "edit",
  },
  {
    icon: "🗑",
    text: "delete",
    title: "delete",
    classes: "delete",
  },
];

export const status = [
  { value: 1, label: "Pending", color: "orange" },
  { value: 2, label: "Todo", color: "green" },
  { value: 3, label: "Delete", color: "red" },
  { value: 4, label: "Working", color: "brown" },
];

export const record = [
  {
    id: 1,
    task: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: 1,
  },
  {
    id: 2,
    task: "second",
    status: 3,
  },
  {
    id: 3,
    task: "third",
    status: 4,
  },
];

export const priorities = [
  { label: "Select Priority", value: "" },
  { label: "low", value: 1 },
  { label: "medium", value: 2 },
  { label: "high", value: 3 },
];
