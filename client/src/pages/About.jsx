import React from "react";
import {
  FaBookOpen,
  FaDatabase,
  FaEdit,
  FaTrash,
  FaPlus,
  FaLayerGroup,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-700 to-violet-600">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <FaBookOpen />
                Smart Book Management
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Manage Your Books
                <span className="block text-indigo-200">
                  Smarter & Simpler.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
                A modern book management platform designed to make organizing,
                tracking, updating, and managing your book collection simple,
                fast, and efficient.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore Books
                </a>

                <a
                  href="/add-book"
                  className="rounded-xl border border-white bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
                >
                  Add New Book
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-72 rounded-3xl border border-white/50 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:w-80">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                    <FaBookOpen className="text-4xl text-indigo-600" />
                  </div>

                  <h2 className="mt-8 text-2xl font-bold text-white">
                    Your Digital Library
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-indigo-100">
                    Keep your books organized and accessible through one
                    simple management system.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              About the Website
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to
              <span className="text-indigo-600"> manage your books.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              This Book Management System is a web-based application created
              to provide a simple and organized way to manage book information.
              Instead of maintaining book records manually, users can manage
              their collection through a clean and intuitive interface.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The application allows users to add new books, view existing
              records, update book information, and remove books when they are
              no longer required. All operations are connected to a backend
              API and database for persistent data management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-200 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Core Features
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Built for simple book management
            </h2>

            <p className="mt-4 text-slate-600">
              Everything is designed to keep your book records organized and
              easy to manage.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <FaPlus />
              </div>

              <h3 className="mt-5 text-lg font-bold">Add Books</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Quickly create new book records with important details such as
                title, author, price, and date.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <FaLayerGroup />
              </div>

              <h3 className="mt-5 text-lg font-bold">View Collection</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                View all available books in a structured and easy-to-read
                table.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <FaEdit />
              </div>

              <h3 className="mt-5 text-lg font-bold">Update Records</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Edit existing book information whenever changes are required.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <FaTrash />
              </div>

              <h3 className="mt-5 text-lg font-bold">Remove Records</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Remove outdated or unwanted book records from the collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-12 text-center shadow-xl sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <FaRocket />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            Ready to manage your books?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Start organizing your book collection with a simple, modern, and
            efficient management experience.
          </p>

          <div className="mt-8">
            <a
              href="/add-book"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <FaBookOpen />
              Start Adding Books
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm text-slate-500">Book Management System</p>

          <p className="mt-1 text-xs text-slate-400">
            A simple and modern solution for managing book records.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
