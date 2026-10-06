"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "lucide-react";

// "HH:mm" in IST — a string snapshot, so React only re-renders when the minute changes
const istFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

// [hour this lasts until (exclusive), what I'm probably up to]
const activities: [number, string][] = [
  [6, "probably debugging something that worked yesterday"],
  [9, "brewing coffee before stand-up"],
  [13, "deep in Spring Boot land"],
  [14, "on a lunch break while the tests run"],
  [18, "shipping features & reviewing PRs"],
  [21, "tinkering with AI agents"],
  [24, "reading docs I should have read earlier"],
];

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 10_000);
  return () => clearInterval(id);
}

export default function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => istFormat.format(Date.now()),
    () => null
  );
  // Static export has no request time — reserve the line until the client knows the clock
  if (!time) return <p className="h-4" />;

  const [hour, minute] = time.split(":").map(Number);
  const display = `${hour % 12 || 12}:${String(minute).padStart(2, "0")} ${hour < 12 ? "AM" : "PM"}`;
  const activity = activities.find(([until]) => hour < until)![1];

  return (
    <p className="flex items-center gap-2 font-mono text-xs text-muted">
      <Clock size={12} className="shrink-0 text-accent" />
      <span>
        <span className="text-foreground">{display}</span> in Bengaluru · {activity}
      </span>
    </p>
  );
}
