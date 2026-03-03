export type BadgeType = "new" | "alive";

export interface TimelineLink {
  text: string;
  url: string;
}

export interface TimelineEvent {
  year: number;
  description: string;
  badge?: BadgeType;
  links?: TimelineLink[];
}

export const timelineData: TimelineEvent[] = [
  //{ year: 2026, description: "L'abundance", badge: "new" },
  { year: 2025, description: "Moved to West Texas" },
  { year: 2024, description: "General Manager at Tetra", links: [{ text: "Tetra", url: "https://www.tetra.com/" }] },
  { year: 2023, description: "Genetically Modified Cut Flowers" },
  { year: 2021, description: "Cycled across Ohio", badge: "alive" },
  { year: 2019, description: "Vehicles & Product at Wonder", links: [{ text: "Wonder", url: "https://www.wonder.com" }] },
  { year: 2018, description: "Taught Blockchain @ ArtistsSpace", badge: "alive", links: [{ text: "ArtistSpace", url: "https://artistsspace.org/" }] },
  { year: 2016, description: "Built Art in Switzerland & Germany" },
  { year: 2015, description: "Motorcycled from NY -> CA", badge: "alive" },
  { year: 2013, description: "Co-founded the Gallery Storage", links: [{ text: "Storage", url: "https://www.facebook.com/storageoberlin/photos" }] },
  { year: 2013, description: "Founded North Coast Toast", links: [{ text: "North Coast Toast", url: "https://www.kickstarter.com/projects/578347833/north-coast-toast-oberlins-first-grilled-cheese-fo/description" }] },
  { year: 1993, description: "B. New York" },
];
