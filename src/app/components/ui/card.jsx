import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-3 tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const Tabs = ({handlenav}) => {
  const [activeTab, setActiveTab] = React.useState(null)
  return (
    <div className="mb-12 w-1/4 self-start md:self-center md:w-1/3">
      <div className="block cursor-pointer">
        <nav className="flex gap-1 md:gap-6 " aria-label="Tabs">
          <button onClick={(e) => {
            handlenav(e.target.textContent)
            setActiveTab(e.target.textContent)
          }
        } className={`shrink-0 font-lato font-bold md:text-xl rounded-lg p-1  hover:bg-[#C89E6D] ${activeTab == "Leads" ? "bg-[#C89E6D] text-gray-800" : "text-white"}  transition duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200`}>
            Leads
          </button>

          <button onClick={(e) => {
            handlenav(e.target.textContent)
            setActiveTab(e.target.textContent)
          }
        } className={`shrink-0 font-lato font-bold md:text-xl rounded-lg p-1  hover:bg-[#C89E6D] ${activeTab == "Web" ? "bg-[#C89E6D] text-gray-800" : "text-white"} transition duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200`}>
            Web
          </button>

          <button onClick={(e) => {
            handlenav(e.target.textContent)
            setActiveTab(e.target.textContent)
          }
        } className={`shrink-0 font-lato font-bold md:text-xl rounded-lg p-1  hover:bg-[#C89E6D] ${activeTab == "Sponsorship" ? "bg-[#C89E6D] text-gray-800" : "text-white"}  transition duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200`}>
            Sponsorship
          </button>

          <button onClick={(e) => {
            handlenav(e.target.textContent)
            setActiveTab(e.target.textContent)
          }
        } className={`shrink-0 font-lato font-bold md:text-xl rounded-lg p-1  hover:bg-[#C89E6D] ${activeTab == "Design" ? "bg-[#C89E6D] text-gray-800" : "text-white"}  transition duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200`}>
            Design
          </button>

          <button onClick={(e) => {
            handlenav(e.target.textContent)
            setActiveTab(e.target.textContent)
          }
        } className={`shrink-0 font-lato font-bold md:text-xl rounded-lg p-1  hover:bg-[#C89E6D] ${activeTab == "Management" ? "bg-[#C89E6D] text-gray-800" : "text-white"}  transition duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200`}>
            Management
          </button>
        </nav>
      </div>
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Tabs,
};
