import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  )
}
