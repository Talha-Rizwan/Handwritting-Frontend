import FileUploader from "./FileUploader"
import AddComment from "./AddComment";

function App() {
  return (
    <section className="p-6 bg-blue-500 text-gray-100 flex flwx-row justify-around">
	<div className="flex flex-col-reverse md:flex-row md:justify-center">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			<span className="block mb-2 dark:text-violet-400">The Answer is :</span>
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Write Answer here!</h1>
		{/* <textarea className="m-8 textarea textarea-warning" placeholder="Give your feedback!"></textarea> */}
		<AddComment />

		</div>

    <FileUploader />
	</div>
</section>
  );
}

export default App;
