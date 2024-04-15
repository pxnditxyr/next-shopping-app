import { titleFont } from '@/config'

export default function Home() {
  return (
    <div className="">
      <h1> Hello Pxndxs 🐼 </h1>
      <h1 className={
        `${ titleFont.className } text-4xl font-bold text-center`
      }> Hello Pxndxs 🐼 </h1>
    </div>
  );
}
