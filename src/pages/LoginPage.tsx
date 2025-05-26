import { LoginForm } from "@/components/login-form";

export const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center  p-6 md:p-10 bg-black/90">
      <div className="w-full max-w-sm md:max-w-4xl  ">
        <LoginForm />
      </div>
    </div>
  );
};
