export default function Home() {

  return (

  <main style={{ background: 'green' }} className="max-w-3xl mx-auto px-6 py-16 space-y-12">

      <section>

        <h1 className="text-5xl font-bold tracking-tight" style={{ color: "yellow" }}>
          Kumar Krishnamoorthy
        </h1>

        <p className="mt-4 text-xl text-gray-200">
          Building practical AI systems with LLMs, RAG, and modern web technologies.
        </p>

        <div className="text-xl text-gray-200">
          <br/>
          Architect → AI Engineer
          <br />
          React • TypeScript • Next.js • RAG • OpenAI APIs
          <br/>
        </div>

        <hr style={{ borderColor: 'yellow' }} />
        <br/>

        <div className="text-xl text-gray-200">
          Projects(2)
        </div>

        <div className="space-y-6 mt-4">

          <div className="border p-5 rounded bg-yellow-100" style={{ borderRadius: 15 }}>

            <h3 className="text-xl font-bold">
              PromptBridge AI
            </h3>

            <p className="mt-2">
              AI orchestration platform built with
              Next.js and FastAPI for routing prompts
              to LLM services with validation.
            </p>

            <div className="flex gap-4 mt-3">

              <a
                href="https://next-promptbridge-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/kumark117/next-promptbridge-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>

            </div>

          </div>


          <div className="border p-5 rounded bg-yellow-100" style={{ borderRadius: 15 }}>

            <h3 className="text-xl font-bold">
              AI Code Repository RAG Search
            </h3>

            <p className="mt-2">
              Retrieval Augmented Generation system
              using embeddings and vector search to
              answer questions across a code repository.
            </p>

            <div className="flex gap-4 mt-3">

              <a
                href="https://repo-vecdb-query-rag-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/kumark117/repo-vecdb-query-rag-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>

      <hr style={{ borderColor: 'yellow' }} />

      <section className="flex gap-6">

        <a
          href="https://github.com/kumark117"
          target="_blank"
          rel="noopener noreferrer"
          className="border px-4 py-2 rounded bg-white"
        >
          GitHub
        </a>

        <a
          href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          className="border px-4 py-2 rounded bg-white"
        >
          Resume
        </a>

      </section>

  </main>

  )
}