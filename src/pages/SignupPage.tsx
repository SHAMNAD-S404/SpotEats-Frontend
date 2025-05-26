import { SignupForm } from "@/components/SignupForm";

export const SignupPage: React.FC = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center  p-6 md:p-10 bg-black/90">
      <div className="w-full max-w-sm md:max-w-5xl  ">
        <SignupForm />
      </div>
    </div>
  );
};
