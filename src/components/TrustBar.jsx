const ITEMS = [
  { value: 'Quality', label: 'Solutions' },
  { value: 'Fast', label: 'Delivery' },
  { value: '24/7', label: 'Support' },
  { value: 'Guaranteed', label: 'Satisfaction' },
]

export default function TrustBar() {
  return (
    <section className="trustbar" aria-label="Why work with us">
      <div className="container trustbar-inner">
        {ITEMS.map((item, i) => (
          <div className="trustbar-item" key={item.value}>
            <span className="eyebrow trustbar-index">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <p className="trustbar-value">{item.value}</p>
              <p className="trustbar-label eyebrow">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
