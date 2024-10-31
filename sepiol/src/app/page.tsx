export default function Home() {
  return (
    <div className="container mx-auto grid min-h-80 grid-cols-5 grid-rows-4 gap-4 bg-slate-700">
      <div className="row-span-full border">Sidebar</div>
      <div className="col-span-full col-start-2 border">Navigation</div>
      <div className="col-span-2 col-start-2 border">Data 1</div>
      <div className="col-span-2 col-start-4 border">Data 2</div>
      <div className="col-span-2 col-start-2 border">Data 3</div>
      <div className="col-span-2 col-start-4 border">Data 4</div>
      <div className="col-span-2 col-start-2 border">Data 5</div>
      <div className="border">Data 6</div>
      <div className="border">Data 7</div>
    </div>
  );
}
