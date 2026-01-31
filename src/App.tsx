import { CountUp } from './CountUp'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop"
            alt="Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#A8C5DD]/20 via-[#7B9FB8]/40 to-[#2C3E50]/90"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
          <div className="mb-8">
            <div className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6">Est. 2013</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1] max-w-5xl">
              Guoqiang Foundation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-light">
              Contributing our efforts to fulfilling people's aspirations for a better life.
            </p>
          </div>
        </div>
      </section>

      {/* About Us - Mission */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="text-[#7B9FB8] text-xs tracking-[0.4em] uppercase mb-6">About Us</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C3E50] leading-[1.15]">
                  Making the World<br />a Better Place
                </h2>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl md:text-2xl text-[#34495E] leading-relaxed font-light">
                Guoqiang Foundation is a private foundation established in 2013 by Mr. Yang Guoqiang and Ms. Yang Huiyan.
                We are committed to making the world a better place for having us in it.
              </p>
              <p className="text-lg md:text-xl text-[#5D6D7E] leading-relaxed font-light">
                The survival and development of human beings, the prosperity of nations, and the progress of society
                all depend on knowledge, wisdom, and hard work. We are dedicated to promoting prosperity and human
                progress through our efforts in education, cultural development, rural revitalization, and community development.
              </p>
              <p className="text-lg md:text-xl text-[#5D6D7E] leading-relaxed font-light">
                Through comprehensive educational institutions, scholarship programs, cultural preservation initiatives, and community
                development projects, we create sustainable pathways for individuals and communities to thrive and build better futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
          alt="Students learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#7B9FB8]/15"></div>
      </section>

      {/* Impact Statistics */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[#F7F9FC]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[#7B9FB8] text-xs tracking-[0.4em] uppercase mb-16 text-center">Our Impact</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C3E50] mb-4">$</span>
                <CountUp
                  end={1.5}
                  duration={2500}
                  suffix="B+"
                  decimals={1}
                  className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C3E50] mb-4"
                />
              </div>
              <div className="text-sm md:text-base text-[#5D6D7E] tracking-wide uppercase">Total Contributions (USD)</div>
            </div>
            <div className="text-center">
              <CountUp
                end={11.42}
                duration={2500}
                suffix="M+"
                decimals={2}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C3E50] mb-4"
              />
              <div className="text-sm md:text-base text-[#5D6D7E] tracking-wide uppercase">Lives Impacted</div>
            </div>
            <div className="text-center">
              <CountUp
                end={57}
                duration={2000}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C3E50] mb-4"
              />
              <div className="text-sm md:text-base text-[#5D6D7E] tracking-wide uppercase">Counties Supported</div>
            </div>
            <div className="text-center">
              <CountUp
                end={82}
                duration={2000}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2C3E50] mb-4"
              />
              <div className="text-sm md:text-base text-[#5D6D7E] tracking-wide uppercase">Special Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[#7B9FB8] text-xs tracking-[0.4em] uppercase mb-12">Our Work</div>

          <div className="space-y-24 md:space-y-32">
            {/* Education Access */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1400&auto=format&fit=crop"
                  alt="Education programs"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2C3E50] leading-[1.2]">
                  Education
                </h3>
                <p className="text-lg md:text-xl text-[#5D6D7E] leading-relaxed font-light">
                  The Foundation has established over 82 special programs that have helped more than 11.42 million people.
                  We serve students from disadvantaged backgrounds, providing quality education and skills training to help
                  them build better futures. We also support higher education through special scholarship funds and donations
                  to leading universities.
                </p>
                <div className="pt-4 space-y-3 text-[#7B9FB8]">
                  <div className="text-base font-medium mb-2">Schools established by the Foundation:</div>
                  <div className="text-base">Guohua Memorial Middle School</div>
                  <div className="text-base">Guangdong Country Garden Polytechnic</div>
                  <div className="text-base">Linxia Guoqiang Vocational-Technical School</div>
                  <div className="text-base mt-3">20+ Special Scholarship Funds</div>
                  <div className="text-base">University Partnership Programs</div>
                </div>
              </div>
            </div>

            {/* Cultural Heritage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2C3E50] leading-[1.2]">
                  Culture
                </h3>
                <p className="text-lg md:text-xl text-[#5D6D7E] leading-relaxed font-light">
                  Guoqiang Foundation supports the preservation and study of cultural heritage through partnerships with
                  leading research institutions. We contribute to the protection of historical sites, scholarly research,
                  and intangible cultural heritage initiatives that preserve traditions for future generations.
                </p>
                <div className="pt-4 space-y-3 text-[#7B9FB8]">
                  <div className="text-base">International Confucian Association Support</div>
                  <div className="text-base">Dunhuang Research Institute Partnership</div>
                  <div className="text-base">Yulin Grottoes Cultural Relics Protection</div>
                  <div className="text-base">Chaozhou Intangible Cultural Heritage</div>
                </div>
              </div>
              <div>
                <img
                  src="/culture.png"
                  alt="Cultural heritage"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Community Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1400&auto=format&fit=crop"
                  alt="Community development"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2C3E50] leading-[1.2]">
                  Rural Revitalization & Community Development
                </h3>
                <p className="text-lg md:text-xl text-[#5D6D7E] leading-relaxed font-light">
                  The Foundation focuses on comprehensive community revitalization in multiple regions, supporting industrial development,
                  talent cultivation, ecological sustainability, cultural preservation, and organizational capacity building.
                  We implement tailored programs that address local needs and create sustainable pathways for community prosperity.
                </p>
                <div className="pt-4 space-y-3 text-[#7B9FB8]">
                  <div className="text-base">Industry & Economic Development</div>
                  <div className="text-base">Talent Development Programs</div>
                  <div className="text-base">Ecological Sustainability Initiatives</div>
                  <div className="text-base">Community Capacity Building</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[#7B9FB8]">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="text-white/70 text-xs tracking-[0.4em] uppercase mb-8">Partner With Us</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.15]">
            Join us in creating a lasting impact
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
            Whether you're an educational institution, philanthropic organization, or individual donor,
            your partnership can help us expand our reach and deepen our impact.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-20 bg-[#2C3E50]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-5">
              <h3 className="text-2xl font-light text-white mb-4">Guoqiang Foundation</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Making the world a better place through education, cultural development, rural revitalization, and community development since 2013.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-7">
              <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Focus Areas</div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Education</li>
                <li>Culture</li>
                <li>Rural Revitalization</li>
                <li>Community Development</li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Contact</div>
              <div className="space-y-2 text-white/70 text-sm">
                <div>contact@guoqiangfoundation.org</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Guoqiang Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
