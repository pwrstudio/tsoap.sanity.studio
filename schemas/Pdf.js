// pdf.js
import PdfIcon from "react-icons/lib/md/picture-as-pdf"

export default {
  name: "pdfBlock",
  type: "object",
  title: "Pdf file",
  icon: PdfIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "pdfFile",
      type: "file",
      title: "Pdf file",
      description: "File format: pdf",
    },
  ],
}
