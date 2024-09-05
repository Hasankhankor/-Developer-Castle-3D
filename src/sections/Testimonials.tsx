import Image from "next/image";
import { ReactNode } from "react";

import { Quote } from "../svg/Quote";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

// Built with Vivid (https://vivid.lol) ⚡️

const TestimonialImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="absolute mx-auto -top-10">
      <Quote />
      <Image
        className="rounded-full"
        src={src}
        width="96"
        height="96"
        alt={alt}
      />
    </div>
  );
};

const TestimonialText = ({
  quote,
  name,
  title,
  handle,
  link,
}: {
  quote: string;
  name: string;
  title: string;
  handle: string;
  link: string;
}) => {
  return (
    <>
      <blockquote className="font-medium">&quot;{quote}&quot;</blockquote>
      <div className="">
        <cite className="not-italic font-bold">— {name}</cite>
        <div className="text-base text-light">
          <span>{title}</span>{" "}
          <a
            className="text-primary-600 dark:text-primary-400 hover:underline"
            href={link}
          >
            @{handle}
          </a>
        </div>
      </div>
    </>
  );
};

const Testimonial = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="items-center gap-6 p-12 pt-20 body-lg col text-medium">
      {children}
    </Card>
  );
};

export const Testimonials = () => {
  return (
    <Section grayer className="gap-24 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          <GradientText className="amber-red">Loved</GradientText> by Clients
        </Title>
        <Details>Styling Our Clients Future</Details>
      </div>
      {/* Testimonials */}
      <div className="gap-20 md:gap-6 col md:row">
        {/* Testimonial 1 */}
        <Testimonial>
          <TestimonialImage src="/images/will.jpg" alt="Will Gao" />
          <TestimonialText
            quote="The team at Developer Castle delivered a top-notch mobile app that exceeded our expectations"
            name="Adam "
            title="Technical PM"
            handle="Wxl"
            link=""
          />
        </Testimonial>
        {/* Testimonial 2 */}
        <Testimonial>
          <TestimonialImage src="/images/veljko.jpg" alt="Veljko Muratovic" />
          <TestimonialText
            quote="Developer Castle transformed our outdated website into a modern, user-friendly platform."
            name="Tom"
            title="Front End Dev"
            handle="Freelance"
            link=""
          />
        </Testimonial>
        {/* Testimonial 3 */}
        <Testimonial>
          <TestimonialImage src="/images/tejal.png" alt="Tejal Patwardhan" />
          <TestimonialText
            quote="Our online presence has skyrocketed. Their SEO and PPC campaigns have significantly boosted our traffic"
            name="Tayeeba"
            title="Founder"
            handle="Martingale"
            link=""
          />
        </Testimonial>
      </div>
    </Section>
  );
};
