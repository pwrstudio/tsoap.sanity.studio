import FileIcon from "react-icons/lib/md/insert-drive-file"

export default {
  name: "fileBlock",
  type: "object",
  title: "Other file",
  icon: FileIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "File type",
      name: "fileType",
      type: "string",
    },
    {
      name: "file",
      type: "file",
      title: "File",
    },
  ],
}
