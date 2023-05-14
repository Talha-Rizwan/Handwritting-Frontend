import React, { useState } from 'react';

const AddComment = () => {
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform comment submission logic here
    if (comment.trim() !== '') {
      console.log('Submitted comment:', comment);
      // Reset comment input
      setComment('');
    }
  };

  return (
    <div className="mt-24">
      <h2 className="text-lg font-semibold mb-2">Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="Type your feedback here..."
          rows={4}
          cols={50}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          disabled={!comment.trim()}
          className={`mt-2 px-4 py-2 rounded-lg ${
            comment.trim() ? 'bg-blue-500 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComment;
