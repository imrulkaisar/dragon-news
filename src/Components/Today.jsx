const Today = () => {
  // Get the current date
  const currentDate = new Date();

  // Define options for date formatting
  const options = {
    weekday: "long", // Full day of the week (e.g., "Sunday")
    month: "long", // Full month name (e.g., "November")
    day: "numeric", // Day of the month (e.g., "27")
    year: "numeric", // Four-digit year (e.g., "2022")
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );

  return (
    <div>
      <p className="font-bold">{formattedDate}</p>
    </div>
  );
};

export default Today;
