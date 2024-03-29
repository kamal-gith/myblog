import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none transform motion-safe:hover:scale-110">
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height="100px"
              width="100px"
              unoptimized
              className="align-middle rounded-full cursor-pointer"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            {/* <p className="text-gray-500 tex-sm">{post.author}</p> */}
            <p className="text-gray-500 tex-sm">{moment(post.createdAt).startOf('day').fromNow()}</p>

            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
