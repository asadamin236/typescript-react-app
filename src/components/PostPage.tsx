import React, { useEffect, useState } from 'react'

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    setPosts(data);
    console.log(data);
  }

  useEffect(()=> {
    getPosts()
  }, [])

  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className='text-xl text-black font-bold'>Public Posts</div>
      {/* <button onClick={getPosts}>Get Posts</button> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
        {currentPosts.map((postItems) => (
          <div className='bg-white rounded shadow p-4 flex flex-col justify-between' key={postItems.id}>
            <h2 className='text-black font-bold text-lg mb-2'>({postItems.id}) {postItems.title}</h2>
            <p className='text-gray-700'>{postItems.body}</p>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className='flex gap-2 mt-6 justify-center'>
        <button
          className='px-3 py-1 bg-gray-300 rounded disabled:opacity-50'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
          <button
            key={pageNum}
            className={`px-3 py-1 rounded ${pageNum === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
        <button
          className='px-3 py-1 bg-gray-300 rounded'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default PostPage