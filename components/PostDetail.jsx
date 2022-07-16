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
      <div className="bg-white shadow-sm rounded-lg lg:p-8 pb-12 border-t z-10">
        <div className="flex flex-col justify-center relative overflow-hidden shadow-md mb-6 mt-3 ">
        <h1 className="text-center text-capitalize text-3xl capitalize font-semibold">{post.title}</h1>
          <h2 className=" m-4 text-2xl text-center"> {post.excerpt}</h2>
          
          <div className='flex justify-center border-t border-gray-200 space-between'>
          <div className="flex items-center mt-4">
            <div className="flex items-center justify-center lg:mb-0 lg:w-auto mr-5 items-center">
              {/* <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              /> */}
              <p className="inline align-middle text-gray-500 ml-2 text-md">{post.author.name} </p>
            </div> <div className='h-2 w-2 mr-2 bg-gray-300 rounded-full' />
            <div className="font-medium text-gray-700">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg> */}
              {/* <span className="align-middle text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</span> */}
              <span className="text-gray-500 mt-2 text-md ml-3">{moment(post.createdAt).startOf('hour').fromNow()}</span>
            </div>
          </div>
          </div>
          
          <img src={post.featuredImage.url} alt="" className="mt-10 object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          {/* <div className="flex items-center mb-8 w-full">
            <div className="flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
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
          </div> */}
          {/* <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1> */}
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
        <div className=" flex border-t border-gray-100 item-center p-3 pt-10 text-center "> 
        <span className=" rounded-md text-sm text-gray-600 font-bold mr-2">Kindly Share this Story</span>
        <div className='flex gap-2 item-center'>
          <FacebookShareButton url={'https://astermira.vercel.app/post/'+post.slug}><FacebookIcon size={25} round className='transform motion-safe:hover:scale-110'/></FacebookShareButton>
          <TelegramShareButton url={'https://astermira.vercel.app/post/'+post.slug}><TelegramIcon size={25} round className='transform motion-safe:hover:scale-110'/></TelegramShareButton>
          <LinkedinShareButton url={'https://astermira.vercel.app/post/'+post.slug}><LinkedinIcon size={25} round className='transform motion-safe:hover:scale-110'/></LinkedinShareButton>
          <WhatsappShareButton url={'https://astermira.vercel.app/post/'+post.slug}><WhatsappIcon size={25} round className='transform motion-safe:hover:scale-110'/></WhatsappShareButton>
          <TwitterShareButton url={'https://astermira.vercel.app/post/'+post.slug}><TwitterIcon size={25} round className='transform motion-safe:hover:scale-110'/></TwitterShareButton>
          <EmailShareButton url={'https://astermira.vercel.app/post/'+post.slug}><EmailIcon size={25} round className='transform motion-safe:hover:scale-110'/></EmailShareButton>
        </div>


        </div>
        
      </div>

    </>
  );
};

export default PostDetail;
