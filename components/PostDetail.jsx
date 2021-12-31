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
      case 'heading-one':
        return <h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-two':
        return <h2 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-three':
        return <h3 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'heading-five':
        return <h5 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5>;
      case 'heading-six':
        return <h6 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h6>;
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
        <div className="flex flex-col justify-center relative overflow-hidden shadow-md mb-6 bg-gray-400  ">
          <h1 className="text-red-500 text-3xl font-bold m-4 border-t rounded-lg">Headlines</h1>
          <h2 className="text-white m-4 text-2xl underline">{post.excerpt}</h2>
          
          <div className='flex justify-center border-t border-blue-300 space-between'>
            <h1 className='mr-1 text-sm mt-2'>By:</h1> 
            <span className="text-gray-900  text-sm mr-4 mt-2 underline"> {post.author.name}</span>

            <div className="mt-2">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="22px" height="22px">
                <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"/>
                <path fill="none" stroke="#444b54" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"/>
                <path fill="none" stroke="#444b54" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6" d="M81.7 81.7L64 64 88.7 39.3"/>
                <path fill="none" stroke="#ff5576" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6" d="M64 64L29 64"/>
                <path fill="#fff" d="M64 57A7 7 0 1 0 64 71A7 7 0 1 0 64 57Z"/>
                <path fill="none" stroke="#444b54" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6" d="M64 57A7 7 0 1 0 64 71A7 7 0 1 0 64 57Z"/>
              </svg>
            </div>


            <span className="text-gray-900 mt-2 underline">{moment(post.createdAt).startOf('hour').fromNow()}</span>

          </div>
          
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
