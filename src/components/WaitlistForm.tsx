import axios from "axios";
import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "./Button";
import { Input } from "./Input";

// Built with Vivid (https://vivid.lol) ⚡️

export const WaitlistForm = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    id: string;
  }
) => {
  const { id, ...divProps } = props;

  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email });
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };

  const EmailMessage = () => (
    <p className="mt-3 text-sm text-light">
      {emailSubmitted
        ? "We'll keep you posted!"
        : "Be the first to experience Vivid."}
    </p>
  );

  return (
    <div {...divProps} className={twMerge("col", divProps.className)}>
      <form className="relative gap-2 md:gap-4 row" onSubmit={handleSubmit}>
        <Input
          type="email"
          className="w-full"
          placeholder="hkhankor@gmail.coms"
          aria-label="Your email"
          name="email"
          id={id}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
        />

        {/* Line beneath label to hide outline */}
        <div className="absolute top-0 w-[21rem] h-[2px] bg-neon-pink left-3" />
        <Button type="submit" className="bg-neon-pink">Contact</Button>

      </form>
      <EmailMessage />
    </div>
  );
};
