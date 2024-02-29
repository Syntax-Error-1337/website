export default function Home(): JSX.Element {
  return (
    <div className="relative px-6 pt-14 lg:px-8 dark:bg-gray-800 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Content */}
      <div className="mx-auto max-w-xl py-16 sm:py-32 lg:py-40">
        {/* Image section */}
        <div className="mb-8 flex justify-center mt-0">
          <img
            src="/img/kserve_layer.png"
            alt="Image"
            className="max-w-full h-auto"
          />
        </div>

        {/* Main text */}
        <div className="text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Highly scalable and standards-based Model Inference Platform on
            Kubernetes for Trusted AI
          </h3>

          {/* Call to action */}
          <div className="mt-10 flex items-center justify-center space-x-6">
            <a href="/docs/Getting_Started" className="btn-primary">
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <section className="dark:bg-gray-900 bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Why KServe?
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              KServe is a standard Model Inference Platform on Kubernetes, built
              for highly scalable use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="dark:bg-blue-700 bg-blue-500 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">
                Standard Model Inference
              </p>
              <p className="text-sm">
                KServe is a standard Model Inference Platform on Kubernetes,
                built for highly scalable use cases.
              </p>
            </div>

            {/* Card 2 */}
            <div className="dark:bg-green-700 bg-green-500 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">
                Performant Inference Protocol
              </p>
              <p className="text-sm">
                Provides performant, standardized inference protocol across ML
                frameworks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="dark:bg-yellow-700 bg-yellow-500 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">
                Serverless Inference Workload
              </p>
              <p className="text-sm">
                Support modern serverless inference workload with Autoscaling,
                including Scale to Zero on GPU.
              </p>
            </div>

            {/* Card 4 */}
            <div className="dark:bg-indigo-700 bg-indigo-500 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">
                High Scalability with ModelMesh
              </p>
              <p className="text-sm">
                Provides high scalability, density packing, and intelligent
                routing using ModelMesh.
              </p>
            </div>

            {/* Card 5 */}
            <div className="dark:bg-red-700 bg-red-500 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">
                Simple and Pluggable Serving
              </p>
              <p className="text-sm">
                Simple and Pluggable production serving for production ML
                serving, including prediction, pre/post processing, monitoring,
                and explainability.
              </p>
            </div>

            {/* Card 6 */}
            <div className="dark:bg-purple-700 bg-purple-500 text-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg font-semibold mb-2">Advanced Deployments</p>
              <p className="text-sm">
                Advanced deployments with canary rollout, experiments, ensembles,
                and transformers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
