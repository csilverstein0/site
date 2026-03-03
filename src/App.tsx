import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { timelineData, type TimelineLink } from "@/data/timeline";

function renderLinkedText(description: string, links: TimelineLink[]) {
  const parts: React.ReactNode[] = [];
  let remaining = description;

  while (remaining.length > 0) {
    let earliestIndex = Infinity;
    let earliestLink: TimelineLink | null = null;

    for (const link of links) {
      const idx = remaining.indexOf(link.text);
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        earliestLink = link;
      }
    }

    if (!earliestLink || earliestIndex === Infinity) {
      parts.push(remaining);
      break;
    }

    if (earliestIndex > 0) {
      parts.push(remaining.slice(0, earliestIndex));
    }

    parts.push(
      <a
        key={earliestLink.url}
        href={earliestLink.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 transition-colors"
      >
        {earliestLink.text}
      </a>
    );

    remaining = remaining.slice(earliestIndex + earliestLink.text.length);
  }

  return parts;
}

function App() {
  const emailHref = useMemo(() => {
    const parts = ["case", "yj", "silver", "stein", "@", "gm", "ail", ".", "com"];
    return "mailto:" + parts.join("");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-5">
          <h1 className="font-sans text-[14px] font-normal">Casey Silverstein 🌍</h1>

          <section>
            {timelineData.map((event, index) => (
              <div key={`${event.year}-${index}`} className="flex items-baseline gap-8 py-2">
                <span className="text-sm text-gray-400 tabular-nums shrink-0 font-sans font-light">
                  {event.year}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-900">
                    {event.links
                      ? renderLinkedText(event.description, event.links)
                      : event.description}
                  </span>
                  {event.badge === "new" && (
                    <Badge className="bg-green-100 hover:bg-green-100 text-green-700 text-[11px] font-normal px-1.5 py-0 h-5 rounded border-green-200">
                      new
                    </Badge>
                  )}
                  {event.badge === "alive" && (
                    <Badge variant="outline" className="text-[11px] font-normal px-1.5 py-0 h-5 text-gray-400 rounded">
                      alive
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </section>

          <hr className="mt-[0.91rem] mb-[0.91rem] w-[50px] border-t border-gray-200" />

          <footer className="text-gray-500 text-xs leading-relaxed space-y-1.5">
            <div>
              <a href={emailHref} className="hover:text-gray-900 transition-colors">email</a>
              {" | "}
              <a
                href="https://x.com/I_make_mistakes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                @I_make_mistakes
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
