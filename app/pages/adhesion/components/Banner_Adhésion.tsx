import Link from "next/link";

export default function AdhesionBanner() {
    return (
      <div className="relative h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("../contact-banner.jpg")',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
  
        {/* Content */}
        <div className="relative h-full w-full flex items-center">
          <div className="container mx-auto px-4">
            {/* Heading and Navigation */}
            <div className="">
              <h1 className="text-white text-center text-5xl font-bold mb-4">Adhésion</h1>
              <nav className="text-white/80 flex justify-center">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>Adhésion</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  