export default function AboutPageSection() {
    return (
      <main className="min-h-screen bg-background text-foreground py-20">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground mb-6">
            This is a dummy About page. You can replace this text with the actual content about Nelson Chimes.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-lg shadow-sm bg-card">
              <h2 className="font-semibold text-xl mb-2">Education</h2>
              <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm bg-card">
              <h2 className="font-semibold text-xl mb-2">Experience</h2>
              <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  