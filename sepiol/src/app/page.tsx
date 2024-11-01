export default function Home() {
  return (
    <div className="container mx-auto grid min-h-80 auto-rows-auto grid-cols-5 gap-4 bg-slate-700">
      <div className="row-span-full border">Sidebar</div>
      <div className="col-span-full col-start-2 border">Navigation</div>
      <div className="col-span-2 col-start-2 border">Data 1</div>
      <div className="col-span-2 col-start-4 border">Data 2</div>
      <div className="col-span-2 col-start-2 border p-3">
        <h3 className="font-bold">Apple Inc.</h3>
        <div>ONE APPLE PARK WAY, CUPERTINO CA 95014</div>
        <div>
          (408) 996-1010{" "}
          <a
            href="https://www.apple.com"
            className="font-semibold text-blue-500"
          >
            https://www.apple.com
          </a>
        </div>
        <div>SECTOR: ELECTRONIC COMPUTERS</div>
        <div>FULL TIME EMPLOYEES: 161000</div>
        <div className="mt-3 border-t">
          <h3 className="font-bold">Description</h3>
          <p>
            Apple is among the largest companies in the world, with a broad
            portfolio of hardware and software products targeted at consumers
            and businesses. Apple's iPhone makes up a majority of the firm
            sales, and Apple's other products like Mac, iPad, and Watch are
            designed around the iPhone as the focal point of an expansive
            software ecosystem. Apple has progressively worked to add new
            applications, like streaming video, subscription bundles, and
            augmented reality. The firm designs its own software and
            semiconductors while working with subcontractors like Foxconn and
            TSMC to build its products and chips. Slightly less than half of
            Apple's sales come directly through its flagship stores, with a
            majority of sales coming indirectly through partnerships and
            distribution.
          </p>
        </div>
      </div>
      <div className="col-span-2 col-start-4 border">Data 4</div>
      <div className="col-span-2 col-start-2 border p-3">
        <div>
          <h3>Company News</h3>
          <div className="space-y-1">
            <div className="p-1">
              <a
                href="https://www.fool.com/investing/2024/11/01/great-news-for-alphabet-stock-investors/?source=iedfolrf0000001"
                target="_blank"
                className="font-bold text-blue-500 underline"
              >
                Great News for Alphabet Stock Investors
              </a>
              <div>
                2024-11-01{" "}
                <span className="font-bold text-lime-500">POSITIVE</span> Apple
                is mentioned as one of the companies...
                <span className="font-thin text-blue-200">read more</span>
              </div>
            </div>
            <div className="p-1">
              <a
                href="https://www.fool.com/investing/2024/11/01/this-probably-best-chip-stock-missed-buy/?source=iedfolrf0000001"
                target="_blank"
                className="font-bold text-blue-500 underline"
              >
                The Best Chip Stock You Missed. Here's Why It's Not Too Late to
                Buy.
              </a>
              <div>
                2024-11-01{" "}
                <span className="font-bold text-gray-400">NEUTRAL</span> The
                article notes that while Broadcom's prod...
                <span className="font-thin text-blue-200">read more</span>
              </div>
            </div>
            <div className="p-1">
              <a
                href="https://www.fool.com/investing/2024/11/01/great-news-for-alphabet-stock-investors/?source=iedfolrf0000001"
                target="_blank"
                className="font-bold text-blue-500 underline"
              >
                S&P 500: Downside Volatility Ahead? Odds of Corrective Move Rise
              </a>
              <div>
                2024-11-01{" "}
                <span className="font-bold text-red-600">NEGATIVE</span> The
                article mentions that the S&P 500 ende...
                <span className="font-thin text-blue-200">read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border">Data 6</div>
      <div className="border">Data 7</div>
    </div>
  );
}
