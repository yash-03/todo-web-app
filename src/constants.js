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
  { label: "Select Status", value: "" },
  { value: "1", label: "Create", color: "#515155" },
  { value: "2", label: "Processing", color: "#007fff" },
  { value: "3", label: "Pending", color: "#e91e63" },
  { value: "4", label: "Done", color: "#00ff00" },
  { value: "5", label: "Delete", color: "#ff0000" },
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
  { label: "low", value: "1" },
  { label: "medium", value: "2" },
  { label: "high", value: "3" },
];
