function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-azure-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}

export default SectionHeader
