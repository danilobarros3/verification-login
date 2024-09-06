import * as yup from "yup";

export const forgotPasswordFormSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
});

export const initialForgotPasswordFormValues = {
  email: "",
}
