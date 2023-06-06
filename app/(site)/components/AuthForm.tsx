"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/inputs/Input";
import Button from "../../components/inputs/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {
  const { data: session } = useSession();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") setVariant("REGISTER");
    else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      //axios register
    }
    if (variant === "LOGIN") {
      //next auth signin
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //next auth social sign in
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-300">
        <h2 className="text-lg font-bold pb-4">Sign In to your account</h2>
        <form
          onSubmit={onSubmit}
          className="w-[300px] bg-gray-100 p-4 rounded flex gap-2 flex-col justify-center items-center"
        >
          {variant === "REGISTER" && (
            <Input label="Name" id="name" register={register} errors={errors} />
          )}
          <Input label="Email" id="email" register={register} errors={errors} />
          <Input
            label="Password"
            id="password"
            register={register}
            errors={errors}
          />
          <Button
            onClick={() => {}}
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {variant === "LOGIN" ? "Sign In" : "Register"}
          </Button>
          <div>
            <p>Or continue with</p>
            <div className="flex justify-center items-center mt-6 gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
