import * as Yup from "yup";

const options1 = ["All events", "Wedding Ceremony", "Reception Party"]; 
const options2 = ["1", "2", "3", "4", "5"];

export const ContactSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    options1: Yup.string().oneOf(options1, "Invalid choice").required("Required"),
	options2: Yup.string().oneOf(options2, "Invalid choice").required("Required"),
});
