const services = [
  {
    title: 'Oil Change',
    desc: 'Keep your engine running smoothly with premium synthetic and conventional oil changes, including filter replacement and fluid top-off.',
    price: 'From $39.99',
    img: 'https://images.pexels.com/photos/13065697/pexels-photo-13065697.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&q=80',
    featured: false,
  },
  {
    title: 'Brake Repair',
    desc: 'Complete brake inspections, pad and rotor replacement, and brake fluid service for confident stopping power in any condition.',
    price: 'From $149.99',
    img: 'https://images.pexels.com/photos/7568415/pexels-photo-7568415.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&q=80',
    featured: true,
  },
  {
    title: 'Engine Diagnostics',
    desc: 'Advanced computer diagnostics to identify check engine lights, performance issues, and electrical problems with precision accuracy.',
    price: 'From $89.99',
    img: 'https://images.pexels.com/photos/5121547/pexels-photo-5121547.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&q=80',
    featured: false,
  },
  {
    title: 'Tire Rotation',
    desc: 'Extend tire life with professional rotation, balancing, and pressure checks. Includes tread depth inspection and alignment recommendations.',
    price: 'From $29.99',
    img: 'https://images.pexels.com/photos/30816058/pexels-photo-30816058.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&q=80',
    featured: false,
  },
  {
    title: 'Transmission Service',
    desc: 'Fluid flushes, filter replacements, and full transmission diagnostics to keep your gears shifting smoothly for years to come.',
    price: 'From $199.99',
    img: 'https://images.pexels.com/photos/11139490/pexels-photo-11139490.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&q=80',
    featured: false,
  },
  {
    title: 'A/C Repair',
    desc: 'Full air conditioning diagnostics, refrigerant recharge, compressor repair, and vent cleaning for cool comfort all summer long.',
    price: 'From $129.99',
    img: 'https://media.istockphoto.com/id/1318616314/photo/car-air-conditioner-check-service-leak-detection-fill-refrigerant-device-and-meter-liquid.jpg?s=2048x2048&w=is&k=20&c=MaHwKvseBxFRzEkeaif3-NkYw9e5W-2ibOufAxNq02U=',
    featured: false,
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <h2>Our Services</h2>
          <div className="underline"></div>
          <p>From routine maintenance to major repairs, our certified technicians have you covered</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card${s.featured ? ' featured' : ''}`}>
              <img src={s.img} alt={s.title} loading="lazy" />
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#form" className="service-link" onClick={(e) => { e.preventDefault(); document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  {s.price} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
