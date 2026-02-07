"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <head>
        <title>Something went wrong!</title>
      </head>
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 font-sans p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-red-600 sm:text-5xl">
            Oops! Error
          </h1>
          <p className="text-lg text-gray-600">
            An unexpected error occurred in the application. We've been notified
            and are looking into it.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-left">
            <p className="text-sm font-mono text-gray-500 overflow-auto break-words">
              {error.message || "Unknown error"}
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
