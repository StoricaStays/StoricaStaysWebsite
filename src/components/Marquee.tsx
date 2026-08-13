interface MarqueeItem {
  text: string;
}

interface MarqueeProps {
  items: string[];
}

const tickerItems: MarqueeItem[] = [
  { text: "Rooftop dining under the stars" },
  { text: "Heritage stays in Jodhpur & Udaipur" },
  { text: "Free breakfast on direct bookings" },
  { text: "Fort & lake views from every rooftop" },
  { text: "Atithi Devo Bhava — the guest is god" },
];

export default function Marquee({ items = tickerItems.map((i) => i.text) }: MarqueeProps) {
  const renderGroup = (ariaHidden: boolean) => (
    <div className="ss-ticker-group" aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <span className="ss-ticker-item" key={item}>
          <i>✦</i>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="ss-ticker" role="marquee" aria-label="Storica Stays highlights">
      <div className="ss-ticker-track">
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
    </div>
  );
}
