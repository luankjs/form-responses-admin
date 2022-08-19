const Layout = ({ children }) => {
  return (
    <div className="min-h-full">
      <div className="h-[264px] bg-slate-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header>
            <div className="py-12">
              <h1 className="text-3xl tracking-tight font-bold text-gray-200">Formulários TST</h1>
            </div>
          </header>
        </div>
      </div>
      <div className="container mx-auto -mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <main>
          <div className="bg-white rounded-lg shadow-md p-6 min-h-screen">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Layout
