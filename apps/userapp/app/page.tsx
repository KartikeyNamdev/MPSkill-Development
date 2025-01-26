"use client";
// import { useRouter } from "next/navigation";
// export default function Home() {
//   const Router = useRouter();
//   return (
//     <div>
//       <h1>
//         This is the user app where user can view courses on /courses, view jobs
//         on /jobs
//       </h1>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={() => {
//           Router.push("/authpage");
//         }}
//       >
//         {" "}
//         Login / Signup
//       </button>
//     </div>
//   );
// }
import Image from "next/image";
import { Button } from "@/repo/ui/button";
import { BadgeCheck, Book, MessageSquare, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="w-full bg-purple-100 py-2 text-center text-sm text-purple-700">
        <span className="flex items-center justify-center gap-2">
          <BadgeCheck className="h-4 w-4" /> Our certificates are now "Powered
          by Wipro DICE.iD"
        </span>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-purple-600" />
            <span className="text-xl font-bold text-gray-900">SkillForge</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Courses
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Certifications
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Placements
            </a>
            <Button variant="outline" className="ml-4">
              <MessageSquare className="mr-2 h-4 w-4" />
              Talk to us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-xl">
              <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
                <span className="text-gray-900">Empowering Minds,</span>
                <br />
                <span className="text-purple-600">
                  Unlocking Career Opportunities.
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Changing How India Learns!
                </span>
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                Keep Learning, Keep Growing with India's Leading Mentors &
                Experts.
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Book className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    <strong>10k+</strong> Active Learners
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600">Recognised by</p>
                <div className="flex flex-wrap gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 w-24 rounded-lg bg-gray-100" />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute right-0 top-1/2 h-96 w-80 -translate-y-1/2 rounded-2xl bg-green-100" />
              <div className="absolute right-32 top-1/2 h-96 w-80 -translate-y-1/2 rounded-2xl bg-purple-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Finder Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Find me a course
              </h2>
              <p className="mb-8 text-gray-600">
                Select the ideal upskilling bootcamp based on your career
                objectives, current skill set and preferred learning approach.
              </p>
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  If you are a student, looking for courses & internships
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  If you are working professional, looking to upskill
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  If you are a business, looking to train your workforce
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-50" />
              <div className="absolute left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-green-50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
