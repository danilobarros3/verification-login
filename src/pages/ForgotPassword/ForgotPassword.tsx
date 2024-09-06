import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import password from "../../assets/password.png";
import { Label } from "@/components/ui/label";
import {
  forgotPasswordFormSchema,
  initialForgotPasswordFormValues,
} from "@/schema/forgotPasswordForm.schema";
import { useFormik } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface IResetPassword {
  email: string;
}

export function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const forgotPasswordFormik = useFormik({
    initialValues: initialForgotPasswordFormValues,
    validationSchema: forgotPasswordFormSchema,
    onSubmit: (forgotPasswordFormValues) =>
      handleForgetPasswordSubmit(forgotPasswordFormValues),
  });

  const handleForgetPasswordSubmit = async (
    resetPasswordValues: IResetPassword
  ) => {
    setLoading(true);

    if (resetPasswordValues.email === "danilo@dev.com") {
      toast.success("E-mail enviado com sucesso.");
      navigate("/");
    } else {
      toast.error("E-mail não encontrado.");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 shadow-2xl p-5 md:p-0">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-2xl">
        <form
          className="flex flex-col justfy-center p-6 md:p-10"
          onSubmit={forgotPasswordFormik.handleSubmit}
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold mb-5">Esqueceu a senha?</h1>
            <p className="text-sm text-gray-600">
              Não se preocupe, apenas digite seu e-mail abaixo e vamos te enviar
              uma nova senha no e-mail!
            </p>
          </div>
          <div className="flex flex-col">
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={forgotPasswordFormik.values.email}
                placeholder="Insira seu email"
                onChange={forgotPasswordFormik.handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
              {forgotPasswordFormik.errors?.email &&
                forgotPasswordFormik.touched?.email && (
                  <span className="text-red-500 text-sm border-red-500">
                    {forgotPasswordFormik.errors.email}
                  </span>
                )}
            </div>
          </div>
          <Button
            disabled={loading}
            variant="default"
            type="submit"
            className="bg-blue-500 text-white text-lg w-full rounded-md h-14 mt-20 hover:bg-black hover:text-blue-500"
          >
            Redefinir senha
          </Button>
        </form>
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-6">
          <img
            src={password}
            alt="Login"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
