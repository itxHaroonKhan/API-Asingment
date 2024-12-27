
interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const ApiData = async () => {
  const pasdata = await fetch('https://simple-books-api.glitch.me/books/');
  const parsedData: Book[] = await pasdata.json();
  console.log(parsedData);

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-600 mt-12 mb-8">Server side fetching</h1>
      
      <div className="flex flex-wrap justify-center items-center gap-10 p-10 bg-gray-100 lg:mt-36">
        {parsedData.map((itam, index) => (
          <div
            key={index}
            className="group p-5 border rounded-lg shadow-lg bg-white w-80 text-center hover:scale-105 hover:shadow-2xl hover:bg-gray-200 transition-transform duration-300"
          >
            <p className="font-bold text-lg group-hover:text-blue-600">Book ID: {itam.id}</p>
            <p className="text-gray-700 group-hover:text-blue-600">
              <span className="font-semibold">Name:</span> {itam.name}
            </p>
            <p className="text-gray-700 group-hover:text-blue-600">
              <span className="font-semibold">Type:</span> {itam.type}
            </p>
            <p className="text-gray-700 group-hover:text-blue-600">
            <span className={`font-semibold ${itam.available ? 'text-green-600' : 'text-red-600'}`}>
  Available: {itam.available ? 'Yes' : 'No'}
</span>

            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApiData;
