type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <div
      className="
      feature-card
        rounded-3xl
        border
        border-white/5
        bg-[#141414]
        p-8
      "
    >
      <h3 className="mb-4 font-syne text-2xl font-bold">{title}</h3>

      <p className="leading-7 text-neutral-400">{description}</p>
    </div>
  );
}
