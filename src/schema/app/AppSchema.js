import * as Yup from "yup";

export const NotificationSchema = Yup.object({
  Title: Yup.string().required("Please enter your title"),
  Detail: Yup.string().required("Please enter your details"),
});
export const CategorySchema = Yup.object({
  Image: Yup.mixed()
    .required("Category Image is required")
    .test("fileType", "Only image files are allowed", (value) => {
      const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
      return value && supportedFormats.includes(value.type);
    })
    .test("fileSize", "File size is too large", (value) => {
      const maxSize = 5 * 1024 * 1024;
      return value && value.size <= maxSize;
    }),
  Category: Yup.string().required("Please enter your category name"),
});

export const ServicesSchema = Yup.object({
  serviceID: Yup.string().required("Please enter your service"),
  categoryID: Yup.string().required("Please enter your category"),
  name: Yup.string().required("Please enter your name"),
});
