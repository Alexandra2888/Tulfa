export const LoadingProgress = ({
  progress,
  loadedCount,
  totalCount,
  hasError,
}) => {
  if (hasError) return null;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-white">
        <div className="mb-4 text-xl font-semibold">Loading Content...</div>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2">
          {progress}% ({loadedCount}/{totalCount})
        </div>
      </div>
    </div>
  );
};
