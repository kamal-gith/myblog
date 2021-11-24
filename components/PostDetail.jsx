import React from 'react';

import moment from 'moment';

import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 border-t">
        <div className="relative overflow-hidden shadow-md mb-6">
          <h1 className="text-red-700 text-2xl font-bold mb-8 mt-4 mr-4">Word Bites:</h1>
          <span className="text-purple-700 text-xl font-semibold">{post.excerpt}</span>
          <img src={post.featuredImage.url} alt="" className="mt-10 object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
              <span className="align-middle text-sm ml-4"> {moment(post.createdAt).startOf('hour').fromNow()}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
        <div> <h3 className="mb-4 text-pink-500">Share this Story</h3>
        <FacebookShareButton url={'https://astermira.vercel.app/post/'+post.slug}><FacebookIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></FacebookShareButton>
        <TelegramShareButton url={'https://astermira.vercel.app/post/'+post.slug}><TelegramIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></TelegramShareButton>
        <LinkedinShareButton url={'https://astermira.vercel.app/post/'+post.slug}><LinkedinIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></LinkedinShareButton>
        <RedditShareButton url={'https://astermira.vercel.app/post/'+post.slug}><RedditIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></RedditShareButton>
        <WhatsappShareButton url={'https://astermira.vercel.app/post/'+post.slug}><WhatsappIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></WhatsappShareButton>
        <TwitterShareButton url={'https://astermira.vercel.app/post/'+post.slug}><TwitterIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></TwitterShareButton>
        <EmailShareButton url={'https://astermira.vercel.app/post/'+post.slug}><EmailIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></EmailShareButton>
        <FacebookMessengerShareButton url={'https://astermira.vercel.app/post/'+post.slug}><FacebookMessengerIcon size={30} round className='mt-2 mr-2 transform motion-safe:hover:scale-110'/></FacebookMessengerShareButton>

        </div>
        
      </div>

    </>
  );
};

export default PostDetail;
