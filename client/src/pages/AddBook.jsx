import React, { useEffect, useState } from "react";
import { bookBaseUrl } from "../../axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSolidBookBookmark } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { MdOutlineSystemUpdate } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const AddBook = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [bookForm, setBookForm] = useState({
    BookName: "",
    BookTitle: "",
    Author: "",
    SellingPrice: "",
    PublishDate: "",
    Id: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const book = location.state?.book;

    if (book) {
      setBookForm({
        BookName: book?.BookName || "",
        BookTitle: book?.BookTitle || "",
        Author: book?.Author || "",
        SellingPrice: book?.SellingPrice || "",
        PublishDate: book?.PublishDate || "",
        Id: book?._id || "",
      });

      setIsUpdate(true);
    }
  }, [location.state]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setSubmitError("");

    setBookForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    try {
      if (
        !bookForm.BookName ||
        !bookForm.BookTitle ||
        !bookForm.Author ||
        !bookForm.SellingPrice
      ) {
        setSubmitError("Please provide all required fields.");
        return;
      }

      setIsSubmitting(true);
      const response = isUpdate
        ? await bookBaseUrl.put("/updatebook", bookForm)
        : await bookBaseUrl.post("/addbook", bookForm);

      if (!response.data?.status) {
        throw new Error(response.data?.message || "The book could not be saved.");
      }

      resetForm();
      navigate("/");
    } catch (err) {
      console.error("Submit Error:", err);
      setSubmitError(
        err.response?.data?.message || err.message || "Unable to save the book. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setBookForm({
      BookName: "",
      BookTitle: "",
      Author: "",
      SellingPrice: "",
      PublishDate: "",
      Id: "",
    });

    setIsUpdate(false);
  };

  const handleCancel = () => {
    resetForm();
    navigate("/");
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-50 px-5 py-12">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-gray-100 shadow-xl shadow-slate-200/60">
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-700 to-violet-600 px-8 py-10 sm:px-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl text-white shadow-lg backdrop-blur-sm">
                <BiSolidBookBookmark />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
                  Book Management
                </p>

                <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {isUpdate ? "Update Book" : "Add New Book"}
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
              {isUpdate
                ? "Update the book information below and keep your collection accurate and organized."
                : "Add a new book to your collection by entering the required information below."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-5 sm:px-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <label className="w-25 shrink-0 text-sm font-bold text-slate-700">
                  Book Name
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter book name"
                  name="BookName"
                  value={bookForm.BookName}
                  onChange={handleFormChange}
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-25 shrink-0 text-sm font-bold text-slate-700">
                  Book Title
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter book title"
                  name="BookTitle"
                  value={bookForm.BookTitle}
                  onChange={handleFormChange}
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-25 shrink-0 text-sm font-bold text-slate-700">
                  Author
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter author name"
                  name="Author"
                  value={bookForm.Author}
                  onChange={handleFormChange}
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-25 shrink-0 text-sm font-bold text-slate-700">
                  Selling Price
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative flex-1">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                    ₹
                  </span>

                  <input
                    type="text"
                    placeholder="Enter selling price"
                    name="SellingPrice"
                    value={bookForm.SellingPrice}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-4 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-25 shrink-0 text-sm font-bold text-slate-700">
                  Publish Date
                </label>

                <input
                  type="date"
                  name="PublishDate"
                  value={bookForm.PublishDate}
                  onChange={handleFormChange}
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-500 outline-none transition-all duration-300 hover:border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="mt-8 flex flex-col-reverse gap-1 border-t border-slate-100 pt-7 sm:flex-row sm:justify-end">
                {isUpdate && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-600 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
                  >
                    <MdCancel />
                    CANCEL
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl hover:shadow-indigo-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isUpdate ? (
                    <MdOutlineSystemUpdate />
                  ) : (
                    <MdOutlineSystemUpdate />
                  )}

                  {isSubmitting ? "SAVING..." : isUpdate ? "UPDATE" : "SUBMIT"}
                </button>
              </div>
              {submitError && (
                <p role="alert" className="text-right text-sm font-medium text-red-600">
                  {submitError}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <CiLock />
          Your book information is securely managed through the application.
        </div>
      </div>
    </div>
  );
};

export default AddBook;
