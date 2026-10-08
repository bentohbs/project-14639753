import { categories } from '@/mocks/home';
import SectionTitle from './SectionTitle';

export default function Categories() {
  return (
    <section id="categories" className="bg-background-50 py-16 md:py-24 px-4 md:px-10">
      <SectionTitle eyebrow="Industries" title="Service Categories" id="categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {categories.map((c) => (
          <a key={c.name} href="#contact" className="group block rounded-lg overflow-hidden bg-background-100 cursor-pointer">
            <div className="w-full h-56 overflow-hidden">
              <img src={c.img} alt={c.name} title={`${c.name} certification`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-base text-foreground-950">{c.name}</h3>
                <p className="text-xs text-foreground-600 mt-1">{c.count}</p>
              </div>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-accent-100 text-accent-800 group-hover:bg-accent-500 group-hover:text-foreground-950 transition-colors"><i className="ri-arrow-right-up-line" /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}