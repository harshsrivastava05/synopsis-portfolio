import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Our Mission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.",
      icon: <IconHeart />,
    },
    {
      title: "Our Vision",
      description:
        "Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.",
      icon: <IconCloud />,
    },
    {
      title: "Our Values", 
      description:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Our Goals",
      description:
        "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.",
      icon: <IconTerminal2 />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r border-b py-10 relative group/feature dark:border-neutral-800 border-neutral-200",
        index === 0 && "border-l dark:border-neutral-800 border-neutral-200",
        index === 1 && "md:border-r-0",
        index === 2 && "border-l dark:border-neutral-800 border-neutral-200 md:border-b-0",
        index === 3 && "md:border-r-0 md:border-b-0"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-500 dark:text-blue-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm max-w-xs relative z-10 px-10 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-colors duration-700">
        {description}
      </p>
    </div>
  );
};
