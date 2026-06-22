type Props = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({ number, title, description }: Props) {
  return (
    <div className="process-step relative text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#141414]">
        <span className="font-syne text-sm">{number}</span>
      </div>

      <h3 className="mb-3 font-syne text-xl font-bold">{title}</h3>

      <p className="mx-auto max-w-[220px] text-sm leading-6 text-neutral-400">
        {description}
      </p>
    </div>
  );
}
