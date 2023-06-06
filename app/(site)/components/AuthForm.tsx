"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "./inputs/Input";

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
      <div className="bg-red-600 h-screen w-full flex justify-items-center items-center">
        <form
          onSubmit={onSubmit}
          className="w-full h-full text-center flex justify-center items-center"
        >
          <Input label="Email" id="email" register={register}/>
        </form>
      </div>
    </>
  );
}
