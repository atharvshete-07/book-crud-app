import React, { useEffect, useState } from "react";
import { bookBaseUrl } from "../../axiosInstance";
import { MdDelete } from "react-icons/md";
import { FaPen, FaBookOpen, FaPlus, FaLayerGroup } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();

  const getAllBooksList = async () => {
    try {
      const { data } = await bookBaseUrl.get("/booklist");
      setBookList(data?.BookList || []);
      console.log("Book List:", data);
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  useEffect(() => {
    getAllBooksList();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await bookBaseUrl.delete("/deletebook", {
        data: {
          Id: id,
        },
      });

      if (data?.status) {
        getAllBooksList();
      }
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  const handleEdit = (book) => {
    navigate("/add-book", {
      state: {
        book: book,
      },
    });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-100">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-700 to-violet-600">
        <div className="relative mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <FaLayerGroup />
                Book Management System
              </div>

              <h1 className="pl-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Book
                <span className="block text-indigo-200">Collection</span>
              </h1>

              <p className="mt-5 max-w-xl pl-7 text-base leading-7 text-indigo-100 sm:text-lg">
                Manage, organize and maintain your complete book collection
                from one beautiful workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[100px]" />

        <div className="relative overflow-hidden rounded-lg border border-blue-200 bg-white/95 shadow-md backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

          <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/50 px-6 py-7 sm:px-8 lg:px-10">
            <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-indigo-200/20 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-violet-200/20 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-lg" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-200/60">
                    <FaBookOpen className="text-2xl" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h2 className="text-2xl font-black tracking-tight text-slate-900">
                      Book Collection
                    </h2>

                    <span className="hidden rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-indigo-600 sm:inline-flex">
                      Library
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-500">
                    Browse, manage and organize your entire collection
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-indigo-400 opacity-60" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Collection
                    </p>

                    <p className="text-sm font-black text-slate-800">
                      {bookList.length}{" "}
                      {bookList.length === 1 ? "Book" : "Books"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-white to-white" />

            <div className="relative overflow-x-auto">
              <table className="w-full min-w-[1050px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-gradient-to-br from-indigo-900 via-indigo-700 to-violet-600 text-white">
                    <th className="px-7 py-5 text-left">
                      <span className="text-[13px] font-black uppercase tracking-[0.16em] text-slate-300">
                        Book Details
                      </span>
                    </th>

                    <th className="px-7 py-5 text-left">
                      <span className="text-[13px] font-black uppercase tracking-[0.16em] text-slate-300">
                        Title
                      </span>
                    </th>

                    <th className="px-7 py-5 text-left">
                      <span className="text-[13px] font-black uppercase tracking-[0.16em] text-slate-300">
                        Author
                      </span>
                    </th>

                    <th className="px-7 py-5 text-left">
                      <span className="text-[13px] font-black uppercase tracking-[0.16em] text-slate-300">
                        Price
                      </span>
                    </th>

                    <th className="px-7 py-5 text-left">
                      <span className="text-[13px] font-black uppercase tracking-[0.16em] text-slate-300">
                        Published
                      </span>
                    </th>

                    <th className="px-7 py-5 text-center">
                      <span className="text-[13px] font-black uppercase tracking-[0.16em] text-slate-300">
                        Actions
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100/80">
                  {bookList?.map((book) => (
                    <tr
                      key={book?._id}
                      className="group relative transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50/60 hover:via-white hover:to-violet-50/40"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <div className="relative shrink-0">
                            <div className="absolute inset-0 rounded-2xl bg-indigo-400/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200/50">
                              <FaBook />
                            </div>
                          </div>

                          <div className="min-w-0">
                            <p className="max-w-[190px] truncate text-sm font-extrabold text-slate-800 transition-colors duration-300 group-hover:text-indigo-700">
                              {book?.BookName}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-7 py-6">
                        <p className="max-w-[210px] truncate text-sm font-semibold text-slate-600">
                          {book?.BookTitle}
                        </p>
                      </td>

                      <td className="px-7 py-6">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-slate-700">
                            {book?.Author}
                          </span>
                        </div>
                      </td>

                      <td className="px-7 py-6">
                        <div className="inline-flex items-center rounded-xl px-3.5 py-2 shadow-sm">
                          <span className="mr-1 text-xs font-black">₹</span>

                          <span className="text-sm font-medium text-slate-700">
                            {book?.SellingPrice}
                          </span>
                        </div>
                      </td>

                      <td className="px-7 py-6">
                        <div className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />

                          <span className="text-xs font-bold text-slate-800">
                            {book?.PublishDate || "Not available"}
                          </span>
                        </div>
                      </td>

                      <td className="px-7 py-6">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEdit(book)}
                            className="group/edit relative flex items-center gap-2 overflow-hidden rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-2.5 text-xs font-extrabold text-indigo-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-200"
                          >
                            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover/edit:translate-x-0" />

                            <FaPen className="relative text-[11px] transition-transform duration-300 group-hover/edit:rotate-12" />

                            <span className="relative">Edit</span>
                          </button>

                          <button
                            onClick={() => handleDelete(book?._id)}
                            className="group/delete relative flex items-center gap-2 overflow-hidden rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-xs font-extrabold text-red-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-200"
                          >
                            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover/delete:translate-x-0" />

                            <MdDelete className="relative text-base transition-transform duration-300 group-hover/delete:scale-125" />

                            <span className="relative">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {bookList.length === 0 && (
                <div className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
                  <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

                  <div className="relative mb-7">
                    <div className="absolute inset-0 rounded-[2rem] bg-indigo-300/30 blur-xl" />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-500 shadow-xl shadow-indigo-100">
                      <FaBookOpen className="text-4xl" />
                    </div>
                  </div>

                  <div className="mb-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-indigo-500">
                    No Books Yet
                  </div>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                    Your library is waiting
                  </h3>

                  <p className="mt-3 max-w-md text-sm font-medium leading-6 text-slate-500">
                    Your collection is currently empty. Add your first book and
                    start building your personal library.
                  </p>

                  <button
                    onClick={() => navigate("/add-book")}
                    className="group relative mt-7 flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-300"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />

                    <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
                      <FaPlus className="text-xs transition-transform duration-300 group-hover:rotate-90" />
                    </span>

                    <span className="relative">Add Your First Book</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
